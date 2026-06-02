import React from 'react';
import {
  FaCalendarCheck,
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaQuestionCircle,
  FaRocket,
  FaServer,
  FaTools,
} from 'react-icons/fa';
import portfolioProfile from '../data/portfolioProfile';

const serviceIconMap = {
  calendar: FaCalendarCheck,
  code: FaCode,
  mobile: FaMobileAlt,
  server: FaServer,
  tools: FaTools,
};

const services = portfolioProfile.services.map((service) => ({
  ...service,
  icon: serviceIconMap[service.iconKey] || FaCode,
}));
const processSteps = portfolioProfile.processSteps;
const faqs = portfolioProfile.serviceFaqs;

const ServiceDetail = ({ service }) => {
  const Icon = service.icon;

  return (
    <article
      id={service.id}
      className="scroll-mt-24 rounded-xl sm:rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 shadow-lg overflow-hidden"
    >
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="p-4 sm:p-8 bg-white dark:bg-gray-900 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="flex h-11 w-11 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-cyan-500 text-white shadow-md">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">Build Focus</p>
              <h3 className="text-lg sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-5 sm:mb-6">
            {service.summary}
          </p>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Who It Helps</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.audience}</p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">What This Improves</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.outcomes}</p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-md shadow-cyan-500/20 transition-all active:scale-[0.98] hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/40 sm:w-auto"
              >
                Talk Through an Idea
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <h4 className="mb-3 flex items-center gap-2 text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              <FaQuestionCircle className="h-4 w-4 text-cyan-500" aria-hidden="true" />
              Challenges It Solves
            </h4>
            <ul className="space-y-2.5">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              <FaChartLine className="h-4 w-4 text-cyan-500" aria-hidden="true" />
              Includes
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/70 px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              <FaDatabase className="h-4 w-4 text-cyan-500" aria-hidden="true" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border-2 border-cyan-200 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border-2 border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/70 dark:bg-cyan-500/10 p-3 sm:p-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-300 mb-2">Related Builds</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{service.caseStudy}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const ServicesSection = () => (
  <section id="services" className="relative scroll-mt-16 py-14 sm:py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-12">
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-6 mx-auto"></div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400 mb-3">How I Build</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-5">
          What I Can Help Build
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          I work best where product thinking meets practical engineering: shaping the workflow,
          building the screens, connecting the backend, and polishing the details until the tool feels usable.
          This section shows the kinds of builds I keep coming back to.
        </p>
      </div>

      <div className="mb-8 sm:mb-10 grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group flex min-h-20 items-center gap-2.5 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 p-3 sm:min-h-24 sm:gap-3 sm:p-4 text-left shadow-md transition-all active:scale-[0.98] hover:border-cyan-300 dark:hover:border-cyan-500/60 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
            >
              <Icon className="h-5 w-5 flex-shrink-0 text-cyan-500 sm:h-6 sm:w-6" aria-hidden="true" />
              <span className="block min-w-0 text-xs sm:text-sm font-bold leading-snug text-gray-900 dark:text-white">{service.title}</span>
            </a>
          );
        })}
      </div>

      <div className="space-y-8">
        {services.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
        <div className="rounded-2xl sm:rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 p-5 sm:p-8 shadow-lg">
          <h3 className="mb-5 flex items-center gap-3 text-2xl font-extrabold text-gray-900 dark:text-white">
            <FaRocket className="h-6 w-6 text-cyan-500" aria-hidden="true" />
            Development Process
          </h3>
          <ol className="space-y-4">
            {processSteps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-gray-700 dark:text-gray-300 font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 p-5 sm:p-8 shadow-lg">
          <h3 className="mb-5 text-2xl font-extrabold text-gray-900 dark:text-white">Service FAQs</h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 p-5 sm:p-8 text-center shadow-lg shadow-cyan-500/20">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Have a system idea or an existing app that needs improvement?</h3>
        <p className="text-cyan-50 max-w-2xl mx-auto mb-6">
          Bring the workflow, product idea, or rough existing app. I’ll help think through the users, screens,
          data, and technical path.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href="#contact" className="min-h-12 rounded-full bg-white px-7 py-3 font-bold text-cyan-700 shadow-md transition-all active:scale-[0.98] hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-white/50">
            Start a Conversation
          </a>
          <a href="#portfolio" className="min-h-12 rounded-full border-2 border-white/70 px-7 py-3 font-bold text-white transition-all hover:bg-white/10 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/40">
            View Relevant Projects
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
