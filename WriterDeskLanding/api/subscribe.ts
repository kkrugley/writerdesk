/*
 *  WriterDesk – Open Source Hardware & Software Project
 *  Copyright (C) 2025  Pavel Kruhlei
 *
 *  This file is part of the WriterDesk project.
 *
 *  WriterDesk is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  WriterDesk is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 *  Author: Pavel Kruhlei
 *  Project: WriterDesk
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const SENDPULSE_CLIENT_ID = process.env.SENDPULSE_CLIENT_ID;
  const SENDPULSE_CLIENT_SECRET = process.env.SENDPULSE_CLIENT_SECRET;
  const SENDPULSE_ADDRESS_BOOK_ID = process.env.SENDPULSE_ADDRESS_BOOK_ID;

  if (!SENDPULSE_CLIENT_ID || !SENDPULSE_CLIENT_SECRET || !SENDPULSE_ADDRESS_BOOK_ID) {
    console.error('SendPulse environment variables are not set');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    // 1. Get Access Token
    const tokenResponse = await fetch('https://api.sendpulse.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: SENDPULSE_CLIENT_ID,
        client_secret: SENDPULSE_CLIENT_SECRET,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Failed to authenticate with SendPulse', tokenData);
      return res.status(500).json({ message: 'Failed to authenticate with SendPulse' });
    }

    const accessToken = tokenData.access_token;

    // 2. Add Email to Address Book
    const addEmailResponse = await fetch(`https://api.sendpulse.com/addressbooks/${SENDPULSE_ADDRESS_BOOK_ID}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        emails: [{ email: email }],
      }),
    });

    if (addEmailResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorData = await addEmailResponse.json();
      console.error('Failed to add email to SendPulse', errorData);
      return res.status(500).json({ message: errorData.message || 'Failed to add email to SendPulse' });
    }
  } catch (error) {
    console.error('Internal Server Error', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}