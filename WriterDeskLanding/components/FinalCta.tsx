import React, { useState, useEffect, useRef } from 'react';
import Section from './Section.tsx';

interface FinalCtaProps {
    email: string;
    setEmail: (email: string) => void;
    formStatus: 'idle' | 'submitting' | 'success' | 'error';
    errorMessage: string;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    waitlistCount: number;
}

const WaitlistCounter: React.FC<{ targetCount: number }> = ({ targetCount }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = counterRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) {
            return;
        }

        const startValue = count;
        const endValue = targetCount;
        
        if (startValue === endValue) {
            return;
        }

        const duration = startValue === 0 ? 1500 : 500; // Faster animation for increments
        let startTime: number | null = null;
        let animationFrameId: number;

        const step = (timestamp: number) => {
            if (!startTime) {
                startTime = timestamp;
            }
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            const nextValue = startValue + (endValue - startValue) * percentage;
            
            setCount(Math.ceil(nextValue));

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(step);
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isVisible, targetCount, count]);

    return (
        <div ref={counterRef} className={`inline-block bg-white/50 rounded-full px-4 py-2 text-sm text-gray-700 min-h-[36px] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="font-bold text-gray-900">{count.toLocaleString()}</span> people are already on the waitlist.
        </div>
    );
}

const FinalCta: React.FC<FinalCtaProps> = ({ email, setEmail, formStatus, errorMessage, handleSubmit, waitlistCount }) => (
    <Section id="final_cta" className="bg-gray-200">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-[#2A2A2A] sm:text-4xl">
               Begin your next chapter.
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
                Get early access and exclusive updates.
            </p>
            <div className="mt-8">
                <WaitlistCounter targetCount={waitlistCount} />
            </div>
            { formStatus === 'success' ? (
                 <div className="mt-8">
                    <p className="text-lg font-medium text-gray-800 bg-white/50 rounded-full py-4 px-8 inline-block">Thank you! We'll be in touch soon.</p>
                </div>
            ) : (
                <form className="mt-6 max-w-md mx-auto" onSubmit={handleSubmit} noValidate>
                    <div className="sm:flex sm:items-start">
                        <div className="min-w-0 flex-1">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-3 placeholder-gray-500 border-gray-300 rounded-full bg-white transition-colors duration-500 delay-100 focus:outline-none focus:bg-[#2A2A2A] focus:text-[#F8F5F2] focus:placeholder-gray-400 focus:caret-[#F8F5F2]"
                                placeholder="Enter your email"
                                aria-invalid={formStatus === 'error'}
                                aria-describedby="email-error"
                            />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2A2A2A] hover:bg-[#4a4a4a] transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'submitting' ? 'Joining...' : 'Notify Me'}
                            </button>
                        </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                        No spam. Major updates only.
                    </p>
                    {formStatus === 'error' && (
                        <p id="email-error" className="mt-2 text-sm text-red-600">{errorMessage}</p>
                    )}
                </form>
            )}
        </div>
    </Section>
);

export default FinalCta;
