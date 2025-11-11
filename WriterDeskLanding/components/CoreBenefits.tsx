
import React from 'react';
import Section from './Section.tsx';
import { IconFocus, IconKeyboard, IconSync, IconBattery } from './Icons.tsx';

const Benefit: React.FC<{icon: React.ReactNode, title: string, children: string}> = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-800 mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 max-w-xs">{children}</p>
    </div>
);

const CoreBenefits: React.FC = () => (
    <Section id="core_benefits">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-6xl mx-auto">
            <Benefit icon={<ion-icon name="notifications-off-outline"></ion-icon>} title="Focus Uninterrupted">
                WriterDesk App runs locally on the ESP32-S3 stack, so drafts stay offline and distractions never reach you.
            </Benefit>
            <Benefit icon={<ion-icon name="hand-right-outline"></ion-icon>} title="Tactile Connection">
                63 low-profile ortholinear mechanical switches driven by RP2040-Zero deliver consistent travel and feedback.
            </Benefit>
            <Benefit icon={<ion-icon name="battery-charging-outline"></ion-icon>} title="Fully Portable">
                A 10 000 mАч 1P2S pack powers the 5″ IPS display and autosave editor for up to 20 hours of writing.
            </Benefit>
            <Benefit icon={<ion-icon name="repeat-outline"></ion-icon>} title="2-in-1">
                Use it standalone or plug in via USB to turn it into a smart mechanical keyboard for your main computer.
            </Benefit>
        </div>
    </Section>
);

export default CoreBenefits;
