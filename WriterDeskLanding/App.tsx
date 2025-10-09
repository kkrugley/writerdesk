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

import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import CoreBenefits from './components/CoreBenefits.tsx';
import Demo from './components/Demo.tsx';
import Personas from './components/Personas.tsx';
import SocialProof from './components/SocialProof.tsx';
import TechnicalOverview from './components/TechnicalOverview.tsx';
import Faq from './components/Faq.tsx';
import FinalCta from './components/FinalCta.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
    const [email, setEmail] = useState('');
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [waitlistCount, setWaitlistCount] = useState(124);

    const handleScrollToCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const ctaSection = document.getElementById('final_cta');
        const emailInput = document.getElementById('email-address');

        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

             if (emailInput) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting) {
                            emailInput.focus();
                            observer.unobserve(ctaSection);
                        }
                    },
                    { threshold: 0.8 } 
                );
                observer.observe(ctaSection);
             }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');
        setFormStatus('submitting');

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setFormStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setFormStatus('success');
                setEmail('');
                setWaitlistCount(prevCount => prevCount + 1);
            } else {
                const errorData = await response.json();
                setFormStatus('error');
                setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setFormStatus('error');
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-[#F8F5F2]">
            <Header onCtaClick={handleScrollToCta} />
            <main className="pt-24">
                <Hero onCtaClick={handleScrollToCta} />
                <CoreBenefits />
                <Demo />
                <Personas />
                <SocialProof />
                <TechnicalOverview />
                <Faq />
                <FinalCta
                    email={email}
                    setEmail={setEmail}
                    formStatus={formStatus}
                    errorMessage={errorMessage}
                    handleSubmit={handleSubmit}
                    waitlistCount={waitlistCount}
                />
            </main>
            <Footer />
        </div>
    );
};

export default App;