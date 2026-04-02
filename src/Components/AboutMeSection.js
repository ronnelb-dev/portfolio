import { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaJira,
  FaAndroid, FaReact, FaBootstrap, FaGitAlt,
  FaLaravel, FaDatabase, FaNodeJs, FaNpm,
} from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiTypescript, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'HTML',         icon: FaHtml5,       color: 'from-orange-500 to-orange-600', iconColor: 'text-orange-500', category: 'web',    level: 95 },
  { name: 'CSS',          icon: FaCss3Alt,      color: 'from-blue-500 to-blue-600',     iconColor: 'text-blue-500',   category: 'web',    level: 90 },
  { name: 'JavaScript',   icon: FaJsSquare,     color: 'from-yellow-400 to-yellow-500', iconColor: 'text-yellow-500', category: 'web',    level: 92 },
  { name: 'TypeScript',   icon: SiTypescript,   color: 'from-blue-500 to-blue-700',     iconColor: 'text-blue-500',   category: 'web',    level: 85 },
  { name: 'React',        icon: FaReact,        color: 'from-cyan-400 to-cyan-600',     iconColor: 'text-cyan-500',   category: 'web',    level: 93 },
  { name: 'Redux',        icon: SiRedux,        color: 'from-purple-500 to-purple-700', iconColor: 'text-purple-500', category: 'web',    level: 80 },
  { name: 'Tailwind CSS', icon: SiTailwindcss,  color: 'from-cyan-300 to-cyan-500',     iconColor: 'text-cyan-400',   category: 'web',    level: 95 },
  { name: 'Bootstrap',    icon: FaBootstrap,    color: 'from-purple-500 to-purple-700', iconColor: 'text-purple-500', category: 'web',    level: 88 },
  { name: 'Node.js',      icon: FaNodeJs,       color: 'from-green-500 to-green-700',   iconColor: 'text-green-500',  category: 'web',    level: 87 },
  { name: 'PHP',          icon: FaPhp,          color: 'from-indigo-500 to-indigo-700', iconColor: 'text-indigo-500', category: 'web',    level: 85 },
  { name: 'Laravel',      icon: FaLaravel,      color: 'from-red-400 to-red-600',       iconColor: 'text-red-500',    category: 'web',    level: 83 },
  { name: 'MySQL',        icon: FaDatabase,     color: 'from-blue-400 to-blue-600',     iconColor: 'text-blue-400',   category: 'web',    level: 86 },
  { name: 'React Native', icon: FaReact,        color: 'from-cyan-400 to-cyan-600',     iconColor: 'text-cyan-500',   category: 'mobile', level: 88 },
  { name: 'Flutter',      icon: SiFlutter,      color: 'from-blue-300 to-blue-500',     iconColor: 'text-blue-400',   category: 'mobile', level: 82 },
  { name: 'Android',      icon: FaAndroid,      color: 'from-green-400 to-green-600',   iconColor: 'text-green-500',  category: 'mobile', level: 80 },
  { name: 'Git',          icon: FaGitAlt,       color: 'from-orange-400 to-orange-600', iconColor: 'text-orange-500', category: 'tools',  level: 90 },
  { name: 'npm',          icon: FaNpm,          color: 'from-red-500 to-red-700',       iconColor: 'text-red-500',    category: 'tools',  level: 88 },
  { name: 'Jira',         icon: FaJira,         color: 'from-blue-300 to-blue-500',     iconColor: 'text-blue-400',   category: 'tools',  level: 85 },
];

const categories = [
  { id: 'all',    label: 'All Skills' },
  { id: 'web',    label: 'Web Dev' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'tools',  label: 'Tools' },
];

const stats = [
  { value: `${skills.length}+`, label: 'Technologies', gradient: 'from-cyan-500 to-blue-500',    icon: '🚀' },
  { value: 'Full-Stack',        label: 'Developer',    gradient: 'from-purple-500 to-pink-500',   icon: '💻' },
  { value: 'Web & Mobile',      label: 'Platforms',    gradient: 'from-green-500 to-emerald-500', icon: '📱' },
  { value: 'Modern',            label: 'Tech Stack',   gradient: 'from-orange-500 to-red-500',    icon: '⚡' },
];

/* ---------- SkillBadge ---------- */
const SkillBadge = ({ skill, index }) => {
  const [showTip, setShowTip] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      className="relative m-1.5"
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div
        className={`
          group relative inline-flex items-center gap-2
          px-3.5 py-2.5 sm:px-4 sm:py-3
          bg-white dark:bg-gray-800/70
          border border-gray-200 dark:border-gray-700/60
          rounded-xl sm:rounded-2xl text-sm font-medium
          transition-all duration-300 cursor-default
          hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg
          hover:border-transparent animate-fadeInUp
        `}
      >
        {/* Hover gradient border */}
        <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
        <div className={`absolute inset-[1px] rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-800 z-0`} />

        <Icon className={`relative z-10 text-lg sm:text-xl ${skill.iconColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`} />
        <span className="relative z-10 text-gray-700 dark:text-gray-200 whitespace-nowrap">{skill.name}</span>
      </div>

      {/* Proficiency tooltip — desktop only via hover */}
      {showTip && (
        <div className="hidden sm:block absolute -bottom-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 border-2 border-cyan-400/40 rounded-xl px-4 py-2.5 shadow-2xl shadow-cyan-500/20 min-w-[150px] backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 min-w-[36px]">{skill.level}%</span>
            </div>
          </div>
          <div className="w-3 h-3 bg-white dark:bg-gray-900 border-t-2 border-l-2 border-cyan-400/40 rotate-45 absolute -top-1.5 left-1/2 -translate-x-1/2" />
        </div>
      )}
    </div>
  );
};

/* ---------- AboutMeSection ---------- */
const AboutMeSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredSkills = activeCategory === 'all' ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 sm:py-24 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center mb-14 sm:mb-20 text-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-shift bg-[length:200%_auto] mb-4">
            About Me
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Get to know my journey, expertise, and passion for building digital experiences
          </p>
        </div>

        {/* ── Bio + Stats grid ── */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">

          {/* Bio card */}
          <Slide direction="left" triggerOnce>
            <div className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />

              <div className="relative space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-blue-400" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Hello!</h5>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  I'm a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">full-stack web developer</span> focused on building responsive, user-friendly applications. My core expertise spans{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">React</span>,{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">JavaScript/TypeScript</span>, and back-end frameworks like{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Laravel</span> and{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Node.js</span>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  I specialize in pixel-perfect, accessible interfaces using HTML5, CSS3, and utility-first frameworks like{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Tailwind CSS</span>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Beyond the web, I also build cross-platform mobile apps with{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">React Native</span> and{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Flutter</span>.
                </p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700/50">
                  <p className="text-gray-500 dark:text-gray-400 italic text-sm leading-relaxed">
                    Committed to clean, maintainable code and staying current with best practices. Let's build something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </Slide>

          {/* Stats grid */}
          <Slide direction="right" triggerOnce>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 p-5 sm:p-7 rounded-2xl sm:rounded-3xl text-center hover:scale-105 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-default"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`} />
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                    <div className={`text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Slide>
        </div>

        {/* ── Skills section ── */}
        <Slide direction="up" triggerOnce>
          <div>
            <div className="flex flex-col items-center mb-8 text-center">
              <h5 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-2">
                Technical Skills
              </h5>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                Hover over any skill to see proficiency level
              </p>
            </div>

            {/* Category filter — scrollable row on mobile */}
            <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-1 px-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {activeCategory === cat.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
                  )}
                  <span className="relative">{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Skills container */}
            <div className="relative bg-white/70 dark:bg-gray-800/40 backdrop-blur-sm p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />

              <div className="relative flex flex-wrap justify-center" role="list" aria-label="Technical skills">
                {filteredSkills.map((skill, i) => (
                  <SkillBadge key={skill.name} skill={skill} index={i} />
                ))}
              </div>

              {filteredSkills.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-5xl mb-3 opacity-20">🔍</div>
                  <p className="text-gray-500 dark:text-gray-400">No skills in this category</p>
                </div>
              )}
            </div>
          </div>
        </Slide>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes float {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-30px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; opacity: 0; }
        .animate-gradient-shift { animation: gradient-shift 8s ease infinite; }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float 20s ease-in-out infinite 10s; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AboutMeSection;