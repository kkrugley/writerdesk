
import React, { useState } from 'react';
import Section from './Section.tsx';

const faqData = [
    {
        q: "What stage is WriterDesk at right now?",
        a: "We are currently at the hardware MVP stage: the case and electronics based on ESP32-S3 and RP2040-Zero are assembled, WriterDesk App is installed, and daily testing is underway. The next steps in the roadmap lead toward the final hardware and Companion App 1.0."
    },
    {
        q: "What is included in the current hardware configuration?",
        a: "The device features a low-profile ortholinear mechanical keyboard, a 5″ IPS 800×480 screen, dual controllers (ESP32-S3 and RP2040-Zero), and a replaceable 10,000 mAh battery for long, uninterrupted writing sessions."
    },
    {
        q: "How long does WriterDesk run on battery power?",
        a: "Under typical use with autosave and Markdown rendering, WriterDesk runs for up to 20 hours on a single full charge. The 7.4 V (1P2S) battery is easy to service and replace."
    },
    {
        q: "How can I transfer my texts to the main computer?",
        a: "There are two ways to transfer your work: use an encrypted QR sequence for single files, or connect the Companion App via Wi-Fi to manage folders and sync documents both ways."
    },
    {
        q: "Can I use WriterDesk as an external keyboard?",
        a: "Yes. When connected via USB, WriterDesk switches to keyboard mode for Windows, macOS, or Linux and displays time, date, and typing speed on its screen."
    },
    {
        q: "Which languages and autocorrection features are supported?",
        a: "The interface, keyboard layouts and autocorrection support English, Spanish, German, Polish, and Russian."
    },
    {
        q: "What can the Companion App do?",
        a: "The Companion App is a cross-platform file manager and editor. It lets you create, rename, and move documents, perform search and replace, view Markdown, and sync seamlessly with WriterDesk without third-party services."
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
