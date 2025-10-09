
import React, { useState } from 'react';
import Section from './Section.tsx';

const faqData = [
    {
        "q": "How do I sync my files?",
        "a": "Through our Companion app (Mac/Windows) or via a QR-sequence for quick transfers. Your data stays local and secure."
    },
    {
        "q": "Can I use it as an external keyboard?",
        "a": "Yes, it connects to your PC or Mac via wired or wireless connection, serving as a premium mechanical keyboard."
    },
    {
        "q": "What languages are supported?",
        "a": "For our initial release, we're focusing on Russian and English, with more languages planned for future updates."
    },
    {
        "q": "How long does the battery last?",
        "a": "You can expect up to 10 hours of typical use, perfect for long writing sessions. It also supports Qi wireless charging."
    },
    {
        "q": "Is the device repairable?",
        "a": "Absolutely. It's designed with repairability in mind, using standard components that can be easily sourced and replaced."
    }
];

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-300">
        <h3>
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-gray-900"
                aria-expanded={isOpen}
            >
                <span>{item.q}</span>
                <span className="ml-6 flex h-7 items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </button>
        </h3>
        <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                 <p className="pb-6 pr-12 text-base text-gray-600">{item.a}</p>
            </div>
        </div>
    </div>
);

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <Section id="faq">
            <div className="max-w-3xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#2A2A2A] sm:text-4xl">Frequently Asked Questions</h2>
                </div>
                <div className="mt-12">
                    {faqData.map((item, index) => (
                        <FaqItem 
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Faq;