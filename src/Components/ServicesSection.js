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

const services = [
  {
    id: 'services-web-application-development',
    title: 'Web Application Development',
    icon: FaCode,
    summary: 'Build custom web applications tailored to business operations and workflow automation.',
    problems: [
      'Manual business processes spread across spreadsheets, paper forms, and disconnected tools',
      'Limited visibility into reports, inventory, bookings, and staff workflows',
      'Customer or admin experiences that are slow, outdated, or difficult to manage',
    ],
    audience: 'Healthcare providers, SMEs, service-based businesses, operations teams, and organizations that need custom internal or customer-facing systems.',
    features: [
      'Admin dashboards',
      'Customer portals',
      'Reporting and analytics systems',
      'Internal business tools',
      'Inventory and management systems',
      'Booking and reservation platforms',
    ],
    technologies: ['React', 'Next.js', 'PHP', 'Node.js', 'MySQL', 'REST APIs'],
    outcomes: 'Streamline operations, reduce manual work, improve reporting, and centralize day-to-day workflows.',
    caseStudy: 'Queue Management System, Meal Monitoring System, Better Swing Trader Website',
  },
  {
    id: 'services-mobile-app-development',
    title: 'Mobile App Development',
    icon: FaMobileAlt,
    summary: 'Develop cross-platform mobile applications for Android and iOS using modern frameworks.',
    problems: [
      'Customers and staff need access to services outside the desktop browser',
      'Existing workflows are not convenient for mobile users in the field or on the go',
      'Businesses need notifications, account access, or service actions directly on a phone',
    ],
    audience: 'Healthcare teams, service businesses, customer-facing brands, internal staff teams, and product owners who need Android and iOS apps.',
    features: [
      'Appointment booking apps',
      'Service-based business apps',
      'Healthcare apps',
      'Customer portals',
      'Internal staff applications',
      'Push notification systems',
    ],
    technologies: ['React Native', 'Expo', 'Flutter', 'Firebase', 'REST APIs'],
    outcomes: 'Reach customers on mobile devices and improve accessibility, engagement, and convenience.',
    caseStudy: 'The Medical City South Luzon SOL App, Better Swing Trader Mobile App, Caregiver Assistant',
  },
  {
    id: 'services-api-backend-development',
    title: 'API & Backend Development',
    icon: FaServer,
    summary: 'Design and develop secure, scalable backend systems and APIs for web and mobile applications.',
    problems: [
      'Applications need reliable data storage, authentication, and permission handling',
      'Mobile and web platforms need a shared backend for consistent business logic',
      'Systems need integrations for payments, SMS, email, or third-party services',
    ],
    audience: 'Startups, growing businesses, app owners, and teams that need a stable backend behind web, mobile, or dashboard products.',
    features: [
      'REST API development',
      'Authentication systems',
      'Role-based access control',
      'Database architecture',
      'Third-party integrations',
      'Payment and SMS integrations',
    ],
    technologies: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'JWT Authentication', 'REST APIs'],
    outcomes: 'Provide reliable system architecture that supports scalability, security, and seamless application integration.',
    caseStudy: 'Kaizen Daily, Better Swing Trader Website, Meal Monitoring System',
  },
  {
    id: 'services-queue-appointment-systems',
    title: 'Queue & Appointment Systems',
    icon: FaCalendarCheck,
    summary: 'Create digital queueing and appointment platforms that improve service efficiency and customer flow.',
    problems: [
      'Long waiting times and unclear service flow frustrate patients, customers, and staff',
      'Manual queue handling makes it hard to monitor windows, counters, and service status',
      'Managers need real-time visibility and historical reports for service performance',
    ],
    audience: 'Hospitals, clinics, government offices, service centers, and customer-facing businesses.',
    features: [
      'Queue displays and ticketing systems',
      'Appointment scheduling',
      'SMS/email notifications',
      'Real-time queue monitoring',
      'Multi-window processing',
      'Reporting dashboards',
    ],
    technologies: ['React', 'PHP', 'Node.js', 'MySQL', 'Socket.io', 'SMS APIs'],
    outcomes: 'Reduce waiting times, improve customer experience, and provide management with operational visibility.',
    caseStudy: 'Queue Management System, The Medical City South Luzon SOL App',
  },
  {
    id: 'services-system-maintenance-improvements',
    title: 'System Maintenance & Improvements',
    icon: FaTools,
    summary: 'Support and enhance existing systems through ongoing maintenance, optimization, and feature development.',
    problems: [
      'Existing systems have bugs, slow workflows, or outdated interfaces',
      'Legacy code needs modernization without disrupting current operations',
      'Businesses need new features, better performance, and more reliable data handling',
    ],
    audience: 'Businesses with existing web apps, mobile apps, admin systems, databases, or legacy tools that need ongoing support.',
    features: [
      'Bug fixing and troubleshooting',
      'Performance optimization',
      'Database cleanup and optimization',
      'UI/UX improvements',
      'Feature upgrades and enhancements',
      'Legacy system modernization',
    ],
    technologies: ['React', 'React Native', 'PHP', 'Node.js', 'MySQL', 'Firebase'],
    outcomes: 'Maintain system reliability, improve performance, and extend the lifespan of existing applications.',
    caseStudy: 'Tipsee, Web Coast Apps, Performance Evaluation Manager',
  },
];

const processSteps = [
  'Discovery and workflow mapping',
  'UX structure and technical planning',
  'Iterative development and testing',
  'Deployment, handoff, and ongoing support',
];

const faqs = [
  {
    question: 'Can you improve an existing system instead of building from scratch?',
    answer: 'Yes. I can audit existing apps, fix bugs, improve performance, modernize interfaces, and add new features while preserving current business workflows.',
  },
  {
    question: 'Do you build both the frontend and backend?',
    answer: 'Yes. I can handle end-to-end development, including UI, APIs, databases, authentication, integrations, deployment, and maintenance.',
  },
  {
    question: 'Can you build systems for healthcare or service-based operations?',
    answer: 'Yes. My portfolio includes healthcare apps, queue systems, reporting dashboards, service workflows, and operational tools for business teams.',
  },
];

const ServiceDetail = ({ service }) => {
  const Icon = service.icon;

  return (
    <article
      id={service.id}
      className="scroll-mt-24 rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 shadow-xl overflow-hidden"
    >
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="p-6 sm:p-8 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-5">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">Service</p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            {service.summary}
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Who It Is For</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.audience}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Expected Business Outcomes</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.outcomes}</p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/40"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
              <FaQuestionCircle className="h-4 w-4 text-cyan-500" aria-hidden="true" />
              Problems It Solves
            </h4>
            <ul className="space-y-2.5">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
              <FaChartLine className="h-4 w-4 text-cyan-500" aria-hidden="true" />
              Includes
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/70 px-3.5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
              <FaDatabase className="h-4 w-4 text-cyan-500" aria-hidden="true" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border-2 border-cyan-200 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 px-3.5 py-2 text-sm font-bold text-cyan-700 dark:text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-cyan-200 dark:border-cyan-500/30 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 p-4">
            <h4 className="text-sm font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-300 mb-2">Relevant Case Studies</h4>
            <p className="text-gray-700 dark:text-gray-300">{service.caseStudy}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const ServicesSection = () => (
  <section id="services" className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-8 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-8 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-6 mx-auto"></div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400 mb-3">Services</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-5">
          Custom Digital Solutions for Business Operations
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          A dedicated services page that explains what I build, who it helps, the technologies I use,
          and the business outcomes clients can expect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mb-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group min-h-32 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 p-4 text-left shadow-lg transition-all hover:-translate-y-1 hover:border-cyan-300 dark:hover:border-cyan-500/60 hover:shadow-cyan-500/15 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
            >
              <Icon className="mb-3 h-6 w-6 text-cyan-500 transition-transform group-hover:scale-110" aria-hidden="true" />
              <span className="block text-sm font-bold leading-snug text-gray-900 dark:text-white">{service.title}</span>
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
        <div className="rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 p-6 sm:p-8 shadow-xl">
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

        <div className="rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 p-6 sm:p-8 shadow-xl">
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

      <div className="mt-12 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 sm:p-8 text-center shadow-2xl shadow-cyan-500/25">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Have a system idea or an existing app that needs improvement?</h3>
        <p className="text-cyan-50 max-w-2xl mx-auto mb-6">
          Let’s discuss the workflow, users, core features, and best technical path for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href="#contact" className="min-h-12 rounded-full bg-white px-7 py-3 font-bold text-cyan-700 shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50">
            Book a Free Consultation
          </a>
          <a href="#portfolio" className="min-h-12 rounded-full border-2 border-white/70 px-7 py-3 font-bold text-white transition-all hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40">
            View Relevant Projects
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
