
import React from 'react';
import { IconGithub, IconInstagram, IconYoutube, IconMastodon } from './Icons.tsx';

const Footer: React.FC = () => (
    <footer id="footer" className="bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
            <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                    <span className="sr-only">YouTube</span>
                    <ion-icon name="logo-youtube"></ion-icon>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                    <span className="sr-only">Mastodon</span>
                    <ion-icon name="logo-mastodon"></ion-icon>
                </a>
            </div>
            <div className="text-center">
                 <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} WriterDesk. A sanctuary for the modern writer.</p>
            </div>
        </div>
    </footer>
);

export default Footer;