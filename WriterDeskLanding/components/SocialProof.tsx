
import React from 'react';
import Section from './Section.tsx';

const Testimonial: React.FC<{ quote: string; author: string; }> = ({ quote, author }) => (
    <figure className="max-w-md mx-auto">
        <blockquote className="text-center text-lg leading-7 text-gray-800">
            <p>“{quote}”</p>
        </blockquote>
        <figcaption className="mt-4 text-center">
            <div className="text-base text-gray-900 font-semibold">{author}</div>
        </figcaption>
    </figure>
);

const SocialProof: React.FC = () => (
    <Section id="social_proof" className="bg-gray-200/70">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#2A2A2A] sm:text-4xl">A Tool That Inspires</h2>
        </div>
        <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            <Testimonial 
                quote="WriterDesk brought back my focus time."
                author="Beta-tester A"
            />
            <Testimonial 
                quote="The best tool for working on a manuscript."
                author="Beta-tester B"
            />
             <Testimonial 
                quote="Pleasant tactile typing and zero notifications."
                author="Beta-tester C"
            />
        </div>
        <div className="mt-24 text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">As seen in (soon)</p>
            <div className="mt-6 flex justify-center items-center space-x-8 text-gray-400 font-mono">
                <span>TechScribe</span>
                <span>The Verge</span>
                <span>Writers Weekly</span>
            </div>
        </div>
    </Section>
);

export default SocialProof;