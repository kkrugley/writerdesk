
import React, { useState, useEffect, useRef } from 'react';

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string;}> = ({ children, className = '', id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`py-20 sm:py-32 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
