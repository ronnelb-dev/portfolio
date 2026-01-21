import { useState } from 'react';
import { Slide } from "react-awesome-reveal";

import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaPhp,
    FaJira,
    FaAndroid,
    FaReact,
    FaBootstrap,
    FaGitAlt,
    FaLaravel,
    FaDatabase,
    FaNodeJs,
    FaNpm
} from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiTypescript, SiRedux } from 'react-icons/si';

const skills = [
    // Core Web Technologies
    { name: 'HTML', icon: FaHtml5, color: 'from-orange-500 to-orange-600', iconColor: 'text-orange-600', category: 'web', level: 95 },
    { name: 'CSS', icon: FaCss3Alt, color: 'from-blue-500 to-blue-600', iconColor: 'text-blue-600', category: 'web', level: 90 },
    { name: 'JavaScript', icon: FaJsSquare, color: 'from-yellow-400 to-yellow-500', iconColor: 'text-yellow-500', category: 'web', level: 92 },
    { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-blue-700', iconColor: 'text-blue-600', category: 'web', level: 85 },

    // Frontend Frameworks & Libraries
    { name: 'React', icon: FaReact, color: 'from-cyan-400 to-cyan-600', iconColor: 'text-cyan-500', category: 'web', level: 93 },
    { name: 'Redux', icon: SiRedux, color: 'from-purple-500 to-purple-700', iconColor: 'text-purple-600', category: 'web', level: 80 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-300 to-cyan-500', iconColor: 'text-cyan-400', category: 'web', level: 95 },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'from-purple-500 to-purple-700', iconColor: 'text-purple-600', category: 'web', level: 88 },

    // Backend & Database
    { name: 'Node.js', icon: FaNodeJs, color: 'from-green-500 to-green-700', iconColor: 'text-green-600', category: 'web', level: 87 },
    { name: 'PHP', icon: FaPhp, color: 'from-indigo-500 to-indigo-700', iconColor: 'text-indigo-600', category: 'web', level: 85 },
    { name: 'Laravel', icon: FaLaravel, color: 'from-red-400 to-red-600', iconColor: 'text-red-500', category: 'web', level: 83 },
    { name: 'MySQL', icon: FaDatabase, color: 'from-blue-400 to-blue-600', iconColor: 'text-blue-500', category: 'web', level: 86 },

    // Mobile Development
    { name: 'React Native', icon: FaReact, color: 'from-cyan-400 to-cyan-600', iconColor: 'text-cyan-500', category: 'mobile', level: 88 },
    { name: 'Flutter', icon: SiFlutter, color: 'from-blue-300 to-blue-500', iconColor: 'text-blue-400', category: 'mobile', level: 82 },
    { name: 'Android Studio', icon: FaAndroid, color: 'from-green-400 to-green-600', iconColor: 'text-green-500', category: 'mobile', level: 80 },

    // Tools & Version Control
    { name: 'Git', icon: FaGitAlt, color: 'from-orange-400 to-orange-600', iconColor: 'text-orange-500', category: 'tools', level: 90 },
    { name: 'npm', icon: FaNpm, color: 'from-red-500 to-red-700', iconColor: 'text-red-600', category: 'tools', level: 88 },
    { name: 'Jira', icon: FaJira, color: 'from-blue-300 to-blue-500', iconColor: 'text-blue-400', category: 'tools', level: 85 }
];

const SkillBadge = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = skill.icon;

    return (
        <div 
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            {/* Main skill badge with enhanced styling */}
            <div className={`
                relative m-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/80 dark:to-gray-900/80 
                backdrop-blur-sm
                text-sm font-semibold inline-flex items-center 
                px-5 py-3.5 rounded-2xl
                border border-gray-200 dark:border-gray-700/50
                transition-all duration-300 
                hover:scale-110 hover:shadow-2xl hover:-translate-y-1
                cursor-pointer animate-fadeInUp overflow-hidden
                ${isHovered ? `border-transparent shadow-lg` : ''}
            `}>
                {/* Animated gradient border on hover */}
                <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300
                `} style={{ padding: '1px' }}>
                    <div className="h-full w-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl"></div>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 `}></div>
                
                <Icon className={`mr-3 text-2xl ${skill.iconColor} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                <span className="text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white font-medium transition-colors relative">
                    {skill.name}
                </span>
            </div>
            
            {/* Enhanced skill level tooltip */}
            {isHovered && (
                <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 z-10 animate-fadeIn pointer-events-none">
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black border-2 border-cyan-400/50 rounded-xl px-5 py-3 shadow-2xl shadow-cyan-500/30 min-w-[160px] backdrop-blur-sm">
                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-semibold uppercase tracking-wider">Proficiency</div>
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
                                <div 
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 shadow-lg`}
                                    style={{ 
                                        width: `${skill.level}%`,
                                        boxShadow: `0 0 10px currentColor`
                                    }}
                                ></div>
                            </div>
                            <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400 min-w-[45px]">{skill.level}%</span>
                        </div>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="w-4 h-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black border-t-2 border-l-2 border-cyan-400/50 transform rotate-45 absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
            )}
        </div>
    );
};

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                        relative px-6 py-3 rounded-2xl font-semibold text-sm
                        transition-all duration-300 overflow-hidden
                        ${activeCategory === category.id
                            ? 'text-white shadow-xl scale-105'
                            : 'bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700/50 border border-gray-300 dark:border-gray-700/50 hover:border-gray-400 dark:hover:border-gray-600'
                        }
                        hover:scale-105 backdrop-blur-sm
                    `}
                >
                    {activeCategory === category.id && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-gradient-shift"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-50 blur-xl"></div>
                        </>
                    )}
                    <span className="relative ">{category.label}</span>
                </button>
            ))}
        </div>
    );
};

const AboutMeSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Skills' },
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'tools', label: 'Tools' }
    ];

    const filteredSkills = activeCategory === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="about" className="relative min-h-screen py-24 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header with enhanced styling */}
                <div className="flex flex-col items-center mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 rounded-full animate-shimmer"></div>
                        <div className="h-2 w-2 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-400 to-transparent rounded-full animate-shimmer-delayed"></div>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 relative">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-shift bg-[length:200%_auto]">
                            About Me
                        </span>
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-30 animate-gradient-shift bg-[length:200%_auto]">
                            About Me
                        </div>
                    </h1>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl text-center max-w-2xl leading-relaxed">
                        Get to know more about my journey, expertise, and passion for creating exceptional digital experiences
                    </p>
                </div>

                {/* Main Content Grid with enhanced cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {/* Bio Section with premium styling */}
                    <Slide direction="left" triggerOnce>
                        <div className="group relative bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:border-cyan-500/30 overflow-hidden">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                                    <h5 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                        Hello!
                                    </h5>
                                </div>
                                
                                <div className="space-y-5">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                                        I'm a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">full-stack web developer</span> with a strong focus on building responsive, user-friendly web applications. My core expertise lies in modern web technologies including <span className="text-cyan-600 dark:text-cyan-400 font-semibold">React</span>, <span className="text-cyan-600 dark:text-cyan-400 font-semibold">JavaScript/TypeScript</span>, and back-end frameworks like <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Laravel</span> and <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Node.js</span>.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                                        I specialize in creating pixel-perfect, accessible interfaces using HTML5, CSS3, and utility-first frameworks like <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Tailwind CSS</span>, ensuring every project delivers an exceptional user experience.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                                        Beyond web development, I also have experience with cross-platform mobile development using <span className="text-cyan-600 dark:text-cyan-400 font-semibold">React Native</span> and <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Flutter</span>, which gives me a comprehensive understanding of building solutions across different platforms.
                                    </p>
                                    
                                    <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700/50">
                                        <div className="flex items-start gap-3">
                                            <div className="w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
                                            <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                                                I'm committed to writing clean, maintainable code and staying current with industry best practices. Let's connect and build something amazing together!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    {/* Quick Stats with enhanced design */}
                    <Slide direction="right" triggerOnce>
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {[
                                { value: `${skills.length}+`, label: 'Technologies', gradient: 'from-cyan-500 to-blue-500', icon: '🚀' },
                                { value: 'Full-Stack', label: 'Developer', gradient: 'from-purple-500 to-pink-500', icon: '💻' },
                                { value: 'Web & Mobile', label: 'Platforms', gradient: 'from-green-500 to-emerald-500', icon: '📱' },
                                { value: 'Modern', label: 'Tech Stack', gradient: 'from-orange-500 to-red-500', icon: '⚡' }
                            ].map((stat, index) => (
                                <div 
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 p-6 md:p-8 rounded-3xl text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Animated gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}></div>
                                    
                                    <div className="relative">
                                        <div className="text-4xl mb-3 animate-bounce-slow">{stat.icon}</div>
                                        <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-3`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Slide>
                </div>

                {/* Skills Section with premium design */}
                <Slide direction="up" triggerOnce>
                    <div>
                        <div className="flex flex-col items-center mb-10">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                                <h5 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                    Technical Skills
                                </h5>
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-base md:text-lg">
                                Hover over any skill to see proficiency level
                            </p>
                        </div>

                        <CategoryFilter 
                            categories={categories}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />

                        <div className="relative bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm p-10 md:p-14 rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                            {/* Decorative gradient orbs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
                            
                            <div className="relative flex flex-wrap justify-center" role="list" aria-label="Technical skills">
                                {filteredSkills.map((skill, index) => (
                                    <SkillBadge key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                            
                            {filteredSkills.length === 0 && (
                                <div className="text-center py-16">
                                    <div className="text-6xl mb-4 opacity-20">🔍</div>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg">No skills found in this category</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Slide>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
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
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
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
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.15; }
                }
            `}</style>
        </section>
    );
};

export default AboutMeSection;