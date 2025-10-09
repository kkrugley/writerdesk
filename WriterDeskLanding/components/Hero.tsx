import React from 'react';

type CtaClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

const Hero: React.FC<{ onCtaClick: CtaClickHandler }> = ({ onCtaClick }) => (
    <section id="hero" className="pt-16 pb-20 text-center">
         <div className="max-w-3xl mx-auto px-6">
             <h1 className="text-4xl font-bold tracking-tight text-[#2A2A2A] sm:text-6xl">
                 A sanctuary for the modern writer<span className="blinking-cursor"></span>
             </h1>
             <p className="mt-6 text-lg leading-8 text-gray-600">
                Write without distractions. A place where your thoughts take shape.
             </p>
             <div className="mt-10">
                <a href="#final_cta" onClick={onCtaClick} className="bg-[#2A2A2A] text-[#F8F5F2] hover:bg-[#4a4a4a] px-8 py-3 rounded-full text-base font-semibold transition-colors shadow-lg">
                    Request Early Access
                </a>
             </div>
         </div>
         <div className="mt-24 max-w-5xl mx-auto px-6">
            <div className="rounded-xl shadow-2xl overflow-hidden aspect-video">
                <video 
                    className="w-full h-full object-cover" 
                    src="https://media.istockphoto.com/id/485019458/de/video/ld-tippen-indem-du-den-schl%C3%BCssel-von-schreibmaschine-in-eile.mp4?s=mp4-640x640-is&k=20&c=HYigUctOLaAVHZ9OXMFFDIDH79MpvuYKlnGyuD7Xx9A=" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
            </div>
         </div>
    </section>
);

export default Hero;