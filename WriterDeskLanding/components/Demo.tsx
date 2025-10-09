
import React from 'react';
import Section from './Section.tsx';

const Demo: React.FC = () => (
    <Section id="demo">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#2A2A2A] sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
               Enter 'writing only' mode, connect to the Companion app, and export your text. It's that simple.
            </p>
        </div>
        <div className="mt-20 max-w-5xl mx-auto">
             <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1605978539462-6d2a9623af19?q=80&w=1170&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%33" alt="Detailed shot of hands typing on the WriterDesk's tactile mechanical keyboard." className="w-full h-full object-cover"/>
             </div>
        </div>
    </Section>
);

export default Demo;