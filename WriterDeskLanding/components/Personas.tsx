
import React from 'react';
import Section from './Section.tsx';
import { IconBook, IconRss, IconMicrophone } from './Icons.tsx';

const PersonaCard: React.FC<{icon: React.ReactNode, title: string, children: string}> = ({ icon, title, children }) => (
    <div className="text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 text-gray-800 mb-6 mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 max-w-sm mx-auto">{children}</p>
    </div>
);

const Personas: React.FC = () => (
    <Section id="personas">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#2A2A2A] sm:text-4xl">For Every Kind of Writer</h2>
            <p className="mt-4 text-lg text-gray-600">
               Whether you're crafting a novel, a news report, or your next blog post, WriterDesk is your dedicated partner in creation.
            </p>
        </div>
        <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
            <PersonaCard icon={<IconBook className="w-8 h-8"/>} title="The Novelist">
               Find the deep focus needed to build worlds and characters without the constant pull of the digital world. Your magnum opus deserves a dedicated space.
            </PersonaCard>
            <PersonaCard icon={<IconRss className="w-8 h-8"/>} title="The Blogger">
                Draft, refine, and polish your posts anywhere inspiration strikes. The tactile keyboard and simple sync make going from idea to published a breeze.
            </PersonaCard>
            <PersonaCard icon={<IconMicrophone className="w-8 h-8"/>} title="The Journalist">
               With a long-lasting battery and a screen readable in daylight, it's the perfect field tool for notes, interviews, and on-the-ground reporting.
            </PersonaCard>
        </div>
    </Section>
);

export default Personas;