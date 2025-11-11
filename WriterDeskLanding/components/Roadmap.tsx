import React, { useState } from 'react';
import Section from './Section.tsx';

type Phase = {
    stage: string;
    title: string;
    goal: string;
    milestones: string[];
};

const currentStatus = [
    'The first prototype is already assembled: enclosure, electronics, keyboard, and firmware.',
    'WriterDesk App — the unified “brain” that runs on every platform — is in active development.'
];

const phases: Phase[] = [
    {
        stage: 'Phase 1',
        title: 'MVP: a device you can write on every day',
        goal: 'Bring the current prototype to the point where it can be your primary writing tool.',
        milestones: [
            'Run WriterDesk App on-device as a distraction-free text editor.',
            'Add a file manager to create, rename, delete, and organize drafts.',
            'Export texts via QR codes so work moves quickly to a laptop or phone.'
        ]
    },
    {
        stage: 'Phase 2',
        title: 'Companion App: a bridge between the desk and the phone',
        goal: 'Make sharing text between WriterDesk and your phone feel effortless.',
        milestones: [
            'Ship a web/mobile companion that receives files from WriterDesk.',
            'Enable importing drafts by scanning a QR code or syncing over Wi-Fi.',
            'Introduce the first remote file-management actions right from the phone.'
        ]
    },
    {
        stage: 'Phase 3',
        title: 'Release hardware: the production-ready device',
        goal: 'Graduate from a field prototype to the hardware we can ship.',
        milestones: [
            'Move onto the final platform with an efficient SoC and a dedicated keyboard controller.',
            'Optimize power management for all-day writing without a socket.',
            'Deliver a “2-in-1” mode so WriterDesk works standalone or as a smart keyboard.'
        ]
    },
    {
        stage: 'Phase 4',
        title: 'WriterDesk App 1.0: a thoughtful editor for deep focus',
        goal: 'Evolve the editor from “just text” into a tool that helps you write better.',
        milestones: [
            'Support multiple interface languages and keyboard layouts.',
            'Add autosave, word count, and core writing stats.',
            'Surface key text metrics such as volume, reading time, and readability.',
            'Show Markdown and shortcut hints directly on the device, offline.'
        ]
    },
    {
        stage: 'Phase 5',
        title: 'Ecosystem & public release',
        goal: 'Turn WriterDesk into a complete, shippable ecosystem.',
        milestones: [
            'Launch Companion App 1.0 with full file management and mobile editing.',
            'Harden Wi-Fi file sync across mobile and desktop platforms.',
            'Polish the enclosure, UX, and documentation in preparation for production.',
            'Announce WriterDesk 1.0 publicly and open pre-orders.'
        ]
    }
];

const Roadmap: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
    <Section id="roadmap" className="bg-[#ECE7E1]">
        <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold tracking-widest text-gray-600 uppercase">Roadmap</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#2A2A2A]">How WriterDesk evolves from prototype to ecosystem</h2>
            <p className="mt-4 text-lg text-gray-700">
                A transparent look at the milestones that turn today’s working prototype into a polished device and companion apps.
            </p>

            <div className="mt-10 bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Current status</div>
                <h3 className="mt-2 text-2xl font-semibold text-[#2A2A2A]">Working prototype in daily testing</h3>
                <ul className="mt-4 space-y-3 text-gray-700">
                    {currentStatus.map(point => (
                        <li key={point} className="flex items-start text-base">
                            <span className="mt-1 mr-3 h-2 w-2 rounded-full bg-[#2A2A2A]" aria-hidden="true"></span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative mt-16">
                <div className={`relative transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[4000px]' : 'max-h-[140px]'} overflow-hidden`}>
                    <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-gray-300" aria-hidden="true"></div>
                    <div className="space-y-10">
                        {phases.map((phase, index) => (
                            <div key={phase.stage} className="relative md:pl-16">
                                <div className="md:absolute md:left-0 md:top-6 flex items-center md:justify-center">
                                    <div className="hidden md:flex h-12 w-12 rounded-full bg-[#2A2A2A] text-[#F8F5F2] text-lg font-semibold items-center justify-center shadow-md">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                                    <div className="text-xs uppercase tracking-widest text-gray-500">{phase.stage}</div>
                                    <h3 className="mt-2 text-2xl font-semibold text-[#2A2A2A]">{phase.title}</h3>
                                    <p className="mt-3 text-base text-gray-700">{phase.goal}</p>
                                    <ul className="mt-4 space-y-3 text-gray-700">
                                        {phase.milestones.map(milestone => (
                                            <li key={milestone} className="flex items-start">
                                                <span className="mt-1 mr-3 h-2.5 w-2.5 rounded-full bg-[#C9A36A]" aria-hidden="true"></span>
                                                <span>{milestone}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div 
                    className={`pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ECE7E1] to-transparent transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`} 
                    aria-hidden="true"
                ></div>
            </div>
            <div className="mt-10 flex justify-center">
                <button
                    onClick={() => setIsExpanded(prev => !prev)}
                    className="text-sm font-semibold text-[#2A2A2A] hover:text-gray-600 transition-colors flex items-center"
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? 'Hide Roadmap' : 'Show Full Roadmap'}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </Section>
    );
};

export default Roadmap;
