import React, { useState } from 'react';
import Section from './Section.tsx';

const SpecItem: React.FC<{ term: string, description: string }> = ({ term, description }) => (
     <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900 text-left">{term}</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-left">{description}</dd>
    </div>
);

const TechnicalOverview: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const specs = [
        { term: "Platform", description: "OrangePi Zero 2W, 2GB RAM" },
        { term: "OS", description: "Armbian / DietPi + WriterDesk OS" },
        { term: "Display", description: "5\" IPS 800x480" },
        { term: "Battery", description: "10000mAh, up to 10h" },
        { term: "Charging", description: "Qi wireless charging" },
        { term: "Autocorrect", description: "Hunspell/SymSpell (RU/EN)" },
        { term: "File transfer", description: "QR sequence, Companion app, Wi-Fi" }
    ];

    return (
        <Section id="technical_overview">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#2A2A2A] sm:text-4xl">Technical Overview</h2>
                <div className="mt-12 border-t border-gray-300">
                    <div className="relative">
                        <dl className={`divide-y divide-gray-300 transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-48'} overflow-hidden`}>
                            {specs.map(spec => <SpecItem key={spec.term} term={spec.term} description={spec.description} />)}
                        </dl>
                        <div 
                            className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F8F5F2] to-transparent pointer-events-none transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
                            aria-hidden="true"
                        ></div>
                    </div>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className="mt-6 text-sm font-semibold text-[#2A2A2A] hover:text-gray-600 transition-colors flex items-center mx-auto"
                        aria-expanded={isExpanded}
                    >
                        {isExpanded ? 'Hide Specs' : 'Show Full Specs'}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default TechnicalOverview;