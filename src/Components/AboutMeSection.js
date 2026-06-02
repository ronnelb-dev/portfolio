import { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaJira,
  FaAndroid, FaReact, FaBootstrap, FaGitAlt, FaJava,
  FaLaravel, FaDatabase, FaNodeJs, FaNpm,
} from 'react-icons/fa';
import {
  SiAxios,
  SiCloudinary,
  SiDart,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReactrouter,
  SiRedux,
  SiSocketdotio,
  SiSqlite,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import portfolioProfile from '../data/portfolioProfile';

const skillIconMap = {
  android: FaAndroid,
  bootstrap: FaBootstrap,
  css: FaCss3Alt,
  cloudinary: SiCloudinary,
  database: FaDatabase,
  dart: SiDart,
  expo: SiExpo,
  express: SiExpress,
  firebase: SiFirebase,
  flutter: SiFlutter,
  git: FaGitAlt,
  html: FaHtml5,
  java: FaJava,
  javascript: FaJsSquare,
  jira: FaJira,
  laravel: FaLaravel,
  next: SiNextdotjs,
  node: FaNodeJs,
  npm: FaNpm,
  php: FaPhp,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  react: FaReact,
  reactrouter: SiReactrouter,
  rest: SiAxios,
  redux: SiRedux,
  socketio: SiSocketdotio,
  sqlite: SiSqlite,
  stripe: SiStripe,
  supabase: SiSupabase,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  vercel: SiVercel,
};

const skills = portfolioProfile.skills.map((skill) => ({
  ...skill,
  icon: skillIconMap[skill.iconKey] || FaReact,
}));
const categories = portfolioProfile.skillCategories;
const INITIAL_ALL_SKILLS_LIMIT = 12;

/* ---------- SkillBadge ---------- */
const SkillBadge = ({ skill, index }) => {
  const [showTip, setShowTip] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      role="listitem"
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
          hover:shadow-md hover:border-cyan-300 dark:hover:border-cyan-500/50 animate-fadeInUp
        `}
      >
        <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 z-0" />

        <Icon className={`relative z-10 text-lg sm:text-xl ${skill.iconColor} transition-colors duration-300 flex-shrink-0`} />
        <span className="relative z-10 text-gray-700 dark:text-gray-200 whitespace-nowrap">{skill.name}</span>
      </div>

      {/* Proficiency tooltip — desktop only via hover */}
      {showTip && (
        <div className="hidden sm:block absolute -bottom-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 border border-cyan-400/40 rounded-xl px-4 py-2.5 shadow-lg min-w-[150px]">
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
  const [showAllSkills, setShowAllSkills] = useState(false);
  const filteredSkills = activeCategory === 'all' ? skills : skills.filter(s => s.category === activeCategory);
  const shouldLimitAllSkills = activeCategory === 'all' && !showAllSkills;
  const visibleSkills = shouldLimitAllSkills ? filteredSkills.slice(0, INITIAL_ALL_SKILLS_LIMIT) : filteredSkills;
  const showSkillsToggle = activeCategory === 'all' && filteredSkills.length > INITIAL_ALL_SKILLS_LIMIT;

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setShowAllSkills(false);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-16 py-14 sm:py-24 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center mb-10 sm:mb-20 text-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About Me
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            How I turn messy workflows into shipped web and mobile products
          </p>
        </div>

        {/* ── Bio + Skills grid ── */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-20">

          {/* Bio card */}
          <Slide direction="left" triggerOnce>
            <div className="group relative bg-white/90 dark:bg-gray-800/70 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-lg hover:border-cyan-400/30 transition-colors duration-300 overflow-hidden h-full">
              <div className="relative space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-blue-400" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400">Hello!</h5>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  I'm a <span className="text-cyan-600 dark:text-cyan-400 font-semibold">full-stack developer</span> who builds practical web and mobile apps for real workflows: dashboards, portals, APIs, internal systems, and mobile tools people use day to day.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  My work usually spans the full product loop: mapping the flow, designing the interface, building the backend, connecting data, debugging edge cases, and polishing after launch.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  I work across <span className="text-cyan-600 dark:text-cyan-400 font-medium">React</span>,{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Next.js</span>,{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">TypeScript</span>,{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Laravel</span>,{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Node.js</span>,{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">MySQL</span>,{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">PostgreSQL</span>,{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">React Native</span>, and{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Flutter</span>, with a focus on clear screens, reliable systems, and maintainable code.
                </p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700/50">
                  <p className="text-gray-500 dark:text-gray-400 italic text-sm leading-relaxed">
                    I like useful software: clear screens, dependable data, and fewer manual workarounds.
                  </p>
                </div>
              </div>
            </div>
          </Slide>

          {/* Technical skills */}
          <Slide direction="right" triggerOnce>
            <div
              id="skills"
              className="scroll-mt-24 group relative h-full rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-lg transition-colors duration-300 hover:border-cyan-400/30 dark:border-gray-700/50 dark:bg-gray-800/70 sm:rounded-3xl sm:p-8"
            >
              <div className="relative">
                <div className="mb-6 text-center">
                  <h5 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Technical Skills
                  </h5>
                  <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                    Tools I use across shipped web, mobile, backend, and platform work
                  </p>
                </div>

                {/* Category filter — wraps on mobile, centers on desktop */}
                <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`relative min-h-11 flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-cyan-500/30 ${
                        activeCategory === cat.id
                          ? 'text-white shadow-md'
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

                <div className="relative rounded-2xl border border-gray-200 bg-white/70 p-3 shadow-inner dark:border-gray-700/50 dark:bg-gray-900/30 sm:p-5">
                  <div className="relative flex flex-wrap justify-center" role="list" aria-label="Technical skills">
                    {visibleSkills.map((skill, i) => (
                      <SkillBadge key={skill.name} skill={skill} index={i} />
                    ))}
                  </div>

                  {showSkillsToggle && (
                    <div className="mt-5 flex justify-center">
                      <button
                        type="button"
                        onClick={() => setShowAllSkills((isExpanded) => !isExpanded)}
                        className="min-h-11 rounded-xl border border-cyan-200 bg-white/80 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-500/25 dark:border-cyan-500/30 dark:bg-gray-800/70 dark:text-cyan-300 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10"
                      >
                        {showAllSkills ? 'Show less' : 'See more'}
                      </button>
                    </div>
                  )}

                  {filteredSkills.length === 0 && (
                    <div className="text-center py-12">
                      <div className="text-5xl mb-3 opacity-20">🔍</div>
                      <p className="text-gray-500 dark:text-gray-400">No skills in this category</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; opacity: 0; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .animate-fadeInUp {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AboutMeSection;
