import React from 'react';
import { Slide } from "react-awesome-reveal";
import myResume from '../Files/ronnel_resume.pdf';

class ContactSection extends React.Component {
    render() {
        return (
            <section id="contact" className="relative min-h-screen py-24 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
                </div>

                <div className="max-w-5xl mx-auto relative">

                    {/* Section Header */}
                    <div className="flex flex-col items-center mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-400 to-emerald-400 rounded-full animate-shimmer"></div>
                            <div className="h-2 w-2 bg-cyan-400 rounded-full animate-ping"></div>
                            <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 via-cyan-400 to-transparent rounded-full animate-shimmer-delayed"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 animate-gradient-shift bg-[length:200%_auto]">
                                Get In Touch
                            </span>
                            <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 blur-2xl opacity-30 animate-gradient-shift bg-[length:200%_auto]">
                                Get In Touch
                            </div>
                        </h1>

                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full"></div>
                    </div>

                    <Slide direction="up" triggerOnce>
                        <div className="space-y-12">

                            {/* Main Content Card */}
                            <div className="relative bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm p-10 md:p-12 rounded-3xl border-2 border-gray-200 dark:border-gray-700/50 shadow-2xl overflow-hidden">

                                {/* Decorative gradient orbs */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>

                                <div className="relative">
                                    {/* Introduction Text */}
                                    <div className="text-center mb-12">
                                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                                            Feel free to reach out to me if you have any inquiries or if you'd like to discuss potential projects. I am always excited to take on new challenges and contribute my expertise to help your business thrive online.
                                        </p>
                                    </div>

                                    {/* Contact Methods Grid */}
                                    <div className="grid md:grid-cols-2 gap-6 mb-12">

                                        {/* Email Card */}
                                        <div className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/30 dark:to-gray-900/30 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700/50 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Email</h3>
                                                    <a href="mailto:barasharironnel29@gmail.com" className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline break-all">
                                                        barasharironnel29@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Resume Card */}
                                        <div className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/30 dark:to-gray-900/30 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700/50 hover:border-emerald-300 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Resume</h3>
                                                    <a href={myResume} className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                                                        Download my resume
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                                        {/* Say Hello Button */}
                                        <a
                                            href="mailto:barasharironnel29@gmail.com"
                                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-[length:200%_100%] animate-gradient-shift"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 opacity-50 blur-xl group-hover:opacity-75 transition-opacity"></div>
                                            <span className="relative flex items-center gap-2">
                                                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                                Say Hello
                                            </span>
                                        </a>

                                        {/* Resume Button */}
                                        <a
                                            href={myResume}
                                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-cyan-500 dark:border-cyan-400 w-full sm:w-auto"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all"></div>
                                            <span className="relative flex items-center gap-2 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors">
                                                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                View Resume
                                            </span>
                                        </a>
                                    </div>

                                    {/* Social Links (Optional - you can add your social media) */}
                                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                                        <p className="text-center text-gray-600 dark:text-gray-400 mb-4 font-medium">
                                            Connect with me
                                        </p>
                                        <div className="flex justify-center gap-4">
                                            {/* LinkedIn */}
                                            <a
                                                href="https://www.linkedin.com/in/ronnel-barashari/"
                                                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 text-gray-700 dark:text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                                                aria-label="LinkedIn"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>

                                            {/* GitHub */}
                                            <a
                                                href="https://github.com/ronnelb-dev"
                                                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 text-gray-700 dark:text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                                                aria-label="GitHub"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Message */}
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-50 to-emerald-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-cyan-200 dark:border-gray-700 rounded-full">
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">💼 Let's build something amazing together!</span>
                                </div>
                            </div>

                        </div>
                    </Slide>
                </div>

                <style>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes shimmer {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-gradient-shift {
                    animation: gradient-shift 8s ease infinite;
                }
                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }
                .animate-shimmer-delayed {
                    animation: shimmer 2s ease-in-out infinite 1s;
                }
                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 20s ease-in-out infinite 10s;
                }
                .animate-pulse-slow {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.15; }
                }
            `}</style>
            </section>
        );
    }
}

export default ContactSection;