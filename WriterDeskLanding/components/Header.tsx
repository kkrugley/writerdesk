
import React from 'react';

type CtaClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

const Header: React.FC<{ onCtaClick: CtaClickHandler }> = ({ onCtaClick }) => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F2]/90 backdrop-blur-sm shadow-sm">
        <nav className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-bold text-[#2A2A2A]">WriterDesk</a>
                <a href="#final_cta" onClick={onCtaClick} className="bg-[#2A2A2A] text-[#F8F5F2] hover:bg-[#4a4a4a] px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                    Join Waitlist
                </a>
            </div>
        </nav>
    </header>
);

export default Header;
