
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
                Write without notifications and distractions.
            </Benefit>
            <Benefit icon={<ion-icon name="hand-right-outline"></ion-icon>} title="Tactile Connection">
                Ortholinear mechanical keyboard with excellent feedback.
            </Benefit>
            <Benefit icon={<ion-icon name="battery-charging-outline"></ion-icon>} title="Fully Portable">
                Up to 10 hours of battery life and Qi charging.
            </Benefit>
            <Benefit icon={<ion-icon name="repeat-outline"></ion-icon>} title="2-in-1">
                Works as a standalone device and as a keyboard for your PC.
            </Benefit>
        </div>
    </Section>
);

export default CoreBenefits;