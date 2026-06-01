import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import {
    FaTimesCircle,
    FaChevronCircleLeft,
    FaChevronCircleRight,
    FaGlobe,
    FaAndroid,
    FaAppStoreIos,
    FaBriefcase,
    FaExclamationTriangle,
    FaLightbulb,
    FaChartLine
} from 'react-icons/fa';

import projectDataModule from '../constants/projectData';

const { PROJECT_DATA } = projectDataModule;

const FILTER_CATEGORIES = [
    { id: "all", label: "All Projects", mobileLabel: "All" },
    { id: "web", label: "Web Development", mobileLabel: "Web" },
    { id: "mobile", label: "Mobile Apps", mobileLabel: "Mobile" },
];

const PROOF_FILTERS = [
    "Live Website",
    "Healthcare",
    "Google Play",
    "iOS + Android",
    "Internal System",
    "Trading",
    "Finance",
    "Retail",
];

const CASE_STUDIES = {
    "Kaizen Daily": {
        clientType: "SaaS productivity users / self-improvement professionals",
        problem: "Users often track habits, journals, reviews, and spending across disconnected tools, making it hard to see progress and patterns.",
        solution: "Built a full-stack life operating system with habit tracking, journaling, mood insights, weekly/monthly reviews, finance tracking, subscriptions, email reminders, and PWA support.",
        result: "Shipped a live SaaS/PWA that centralizes habits, reflection, spending, reminders, and subscription access in one focused self-improvement workspace.",
    },
    "Powerhouse Church Website": {
        clientType: "Church / community organization",
        problem: "Visitors and members needed one reliable place to find service times, sermons, events, ministries, and location details.",
        solution: "Built a responsive church website with sermon integration, event pages, ministry sections, Google Maps, and clear visitor information.",
        result: "Launched a live church website that centralizes sermons, events, ministries, location details, and visitor information for members and first-time guests.",
    },
    "JFAAC Katsutadai Church Website": {
        clientType: "Church / Japanese local community",
        problem: "The church needed a bilingual-friendly online presence for members and new visitors in Japan.",
        solution: "Built a responsive website with church information, service schedules, events, ministries, sermon content, and contact details.",
        result: "Published a responsive church website that gives the congregation a clearer digital home and makes service, event, and contact details easier to find.",
    },
    "Better Swing Trader Website": {
        clientType: "Trading education / financial analytics platform",
        problem: "Swing traders needed a professional website to explain the product, capture subscribers, publish educational content, and support marketing.",
        solution: "Built a multi-page website with features, pricing, guides, blog content, subscriber capture, automated email notifications, and chatbot support.",
        result: "Launched a public trading website with subscriber capture, email automation, chatbot support, and content pages to support product education and lead generation.",
    },
    "Our Wedding Website": {
        clientType: "Private event / wedding guests",
        problem: "Guests needed easy access to event details, RSVP, galleries, schedules, and shared memories in one place.",
        solution: "Built a full wedding website with story pages, venue details, RSVP, countdown, categorized galleries, and guest photo upload.",
        result: "Centralized RSVP, venue details, galleries, countdowns, and guest uploads into one private event hub for guests and family memories.",
    },
    "Better Swing Trader Mobile App": {
        clientType: "Stock swing traders",
        problem: "Traders needed a practical way to track trade performance, evaluate strategies, and review gains and losses over time.",
        solution: "Built a mobile analytics app with trade logging, strategy evaluation, performance summaries, charts, local storage, and API sync.",
        result: "Published an iOS trading analytics app with API sync, trade history, strategy review, and performance summaries for disciplined trade tracking.",
    },
    "Queue Management System": {
        clientType: "Hospital / service center",
        problem: "Long waiting times, manual queue handling, and poor visibility for staff, patients, and management.",
        solution: "Built a web-based queue system with transaction types, windows, user roles, queue display, SMS notifications, and reports.",
        result: "Reduced manual queue handling by centralizing patient flow, service windows, live queue displays, SMS notifications, and management reports.",
    },
    "Meal Monitoring System": {
        clientType: "Hospital / employee operations",
        problem: "Manual meal tracking made it difficult to validate claims, monitor consumption, and produce accurate reports.",
        solution: "Built a barcode-enabled meal monitoring system with admin dashboards, filtering, reports, Excel export, and MySQL-backed records.",
        result: "Reduced manual meal tracking with barcode-based claims, searchable records, admin dashboards, and Excel-ready consumption reports.",
    },
    "The Medical City South Luzon SOL APP": {
        clientType: "Hospital / patient-facing healthcare service",
        problem: "Patients needed easier mobile access to appointments, lab results, billing information, and hospital transactions.",
        solution: "Built a Flutter mobile app integrated with hospital systems through REST APIs, secure authentication, notifications, and patient service modules.",
        result: "Supported patient-service workflows by connecting appointments, lab results, billing, notifications, and hospital API integrations in one mobile app.",
    },
    "SSC - For Online SST Customers": {
        clientType: "Small retail stores / online customers",
        problem: "Small stores needed a simple way for customers to browse products and place orders without a full e-commerce platform.",
        solution: "Built a React Native customer ordering app connected to the SST POS workflow with product browsing, cart, order placement, and status updates.",
        result: "Extended retail POS workflows into mobile ordering, giving customers a Google Play app for browsing products and stores clearer order visibility.",
    },
    "SST, Sari Sari iPOS Terminal": {
        clientType: "Small retail / sari-sari stores",
        problem: "Small store owners often relied on manual sales logs, limited inventory tracking, and slow checkout workflows.",
        solution: "Built an Android POS app with barcode scanning, inventory management, sales history, reports, and multi-user support.",
        result: "Published a Google Play POS app that helps small retailers centralize checkout, barcode scanning, inventory, sales history, and reports on mobile devices.",
    },
    "Cash Expense Tracker": {
        clientType: "Personal finance users / households",
        problem: "Users needed a simple way to understand where cash was going across daily expenses and categories.",
        solution: "Built a mobile expense tracker with categories, calendar views, reports, receipt scanning, cloud backup, and Excel export.",
        result: "Published a Google Play finance app with expense logging, receipt support, cloud backup, Excel export, and clearer household spending reports.",
    },
    "Task and Reward Tracker": {
        clientType: "Families / teams",
        problem: "Parents and team leaders needed a structured way to assign tasks, motivate completion, and track accountability.",
        solution: "Built a gamified task app with assigned tasks, token rewards, approvals, recurring schedules, notifications, and analytics.",
        result: "Published iOS and Android apps that turn recurring tasks into assignable, measurable workflows with rewards, approvals, notifications, and analytics.",
    },
    "Caregiver Assistant": {
        clientType: "Caregivers / healthcare families",
        problem: "Caregivers needed a reliable way to record vitals, monitor trends, and share patient health data with others.",
        solution: "Built a cross-platform health tracker with custom vitals, reminders, charts, patient profiles, secure sharing, and export tools.",
        result: "Published iOS and Android healthcare apps that centralize vitals, reminders, patient profiles, secure sharing, charts, and exportable health records.",
    },
    "Client Logger": {
        clientType: "Restaurants, clinics, retail stores, and events",
        problem: "Businesses needed a fast and secure way to log customer visits, reservations, and contact details.",
        solution: "Built a business check-in app with QR scanning, manual entry, SMS notifications, reservations, Firebase sync, and visit history.",
        result: "Replaced paper visit logs with a private business check-in app using QR scanning, Firebase sync, SMS notifications, reservations, and searchable visit history.",
    },
    "Entry Logger": {
        clientType: "Venue visitors / customers",
        problem: "Visitors had to repeatedly fill out manual check-in forms when entering establishments or events.",
        solution: "Built a QR code generator app with profile controls, visit history, printable QR support, and secure encoded contact details.",
        result: "Published a QR check-in companion app that reduces repeated form entry while giving visitors control over shared contact details and visit history.",
    },
    "Budgetfy": {
        clientType: "Personal finance users",
        problem: "Users needed a lightweight offline budget app for logging expenses, income, and spending patterns.",
        solution: "Built a native Android app with SQLite storage, transaction categories, budget alerts, reports, and MPAndroidChart visualizations.",
        result: "Published a Google Play budgeting app with offline SQLite records, transaction reports, charts, and fast personal finance review.",
    },
    "Web Coast Apps": {
        clientType: "Mobile app company / product showcase",
        problem: "The company needed a central website to present its products, app features, downloads, and contact information.",
        solution: "Built a responsive company website with portfolio sections, app feature highlights, download CTAs, and contact pathways.",
        result: "Launched a public product showcase that centralizes app features, download paths, and contact routes for app discovery and business leads.",
    },
    "Performance Evaluation Manager": {
        clientType: "Managers / HR teams",
        problem: "Performance feedback was difficult to compare over time when evaluations were informal or scattered.",
        solution: "Built a mobile evaluation app with weighted questions, self-evaluations, manager reviews, historical records, and performance summaries.",
        result: "Published iOS and Android HR apps that centralize evaluations, weighted scoring, self-reviews, historical records, and Firebase-backed performance summaries.",
    },
    "Tipsee Elite": {
        clientType: "Tipped workers / service professionals",
        problem: "Workers needed a fast ad-free way to log tips, wages, tip-outs, and earning patterns after each shift.",
        solution: "Built a cross-platform tip tracker with quick entry, calendar views, summaries, charts, comparisons, and local backup.",
        result: "Published iOS and Android tip-tracking apps with fast local records, charts, comparisons, calendar views, and local backup for service professionals.",
    },
    "Tipsee": {
        clientType: "Tipped workers / gig professionals",
        problem: "Users with variable income needed long-term tracking for tips, wages, commissions, expenses, goals, and reports.",
        solution: "Built and maintained a native Android income tracker with multi-job support, charts, exports, backups, widgets, and receipts.",
        result: "Published and maintained a Google Play income-tracking app with multi-job records, reports, widgets, exports, backups, and long-term earnings history.",
    },
    "Medicine Scheduler and Tracker": {
        clientType: "Medication users / family caregivers",
        problem: "Users needed reminders and records to stay consistent with medication schedules across multiple profiles.",
        solution: "Built a medication tracker with alarms, flexible schedules, calendar history, taken/missed statuses, voice alerts, and profile support.",
        result: "Published iOS and Android medication apps that centralize reminders, flexible schedules, taken/missed records, calendar history, and offline medication routines.",
    },
};

const CaseStudyItem = ({ icon: Icon, label, children }) => (
    <div className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm uppercase tracking-wide">
            <Icon className="h-4 w-4" aria-hidden="true" />
            {label}
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>
    </div>
);

const ProjectCaseStudy = ({ project }) => {
    const caseStudy = CASE_STUDIES[project.project_name];
    if (!caseStudy) return null;

    return (
        <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-2xl border-2 border-cyan-200 dark:border-cyan-500/30 shadow-md">
            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                Case Study
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
                <CaseStudyItem icon={FaBriefcase} label="Client Type">
                    {caseStudy.clientType}
                </CaseStudyItem>
                <CaseStudyItem icon={FaExclamationTriangle} label="Problem">
                    {caseStudy.problem}
                </CaseStudyItem>
                <CaseStudyItem icon={FaLightbulb} label="Solution">
                    {caseStudy.solution}
                </CaseStudyItem>
                <CaseStudyItem icon={FaChartLine} label="Result">
                    {caseStudy.result}
                </CaseStudyItem>
            </div>
        </div>
    );
};

const ProjectLinks = ({ project }) => {
    const privateCtaLabel = project.proofLabels?.some((label) => label === 'Internal App' || label === 'Private App')
        ? 'Private internal app'
        : 'Private internal system';

    const privateCta = (
        <span
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 sm:w-auto"
            aria-label={`${project.project_name} is a private internal project`}
        >
            <FaBriefcase size={16} aria-hidden="true" />
            <span>{privateCtaLabel}</span>
        </span>
    );

    const renderLinks = () => {
        switch (project.linkType) {
            case 'website':
                if (!project.link || project.link === '#') return privateCta;

                return (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all active:scale-[0.98] hover:shadow-md whitespace-nowrap font-medium focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
                        aria-label={`Visit ${project.project_name} website`}
                    >
                        <FaGlobe size={18} className="group-hover:rotate-12 transition-transform" />
                        <span>Visit Website</span>
                    </a>
                );

            case 'android':
                if (!project.androidLink || project.androidLink === '#') return privateCta;

                return (
                    <a
                        href={project.androidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl transition-all active:scale-[0.98] hover:shadow-md whitespace-nowrap font-medium focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                        aria-label={`Download ${project.project_name} on Google Play`}
                    >
                        <FaAndroid size={18} className="group-hover:rotate-12 transition-transform" />
                        <span>Google Play</span>
                    </a>
                );

            case 'ios':
                if (!project.iosLink || project.iosLink === '#') return privateCta;

                return (
                    <a
                        href={project.iosLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl transition-all active:scale-[0.98] hover:shadow-md whitespace-nowrap font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                        aria-label={`Download ${project.project_name} on App Store`}
                    >
                        <FaAppStoreIos size={18} className="group-hover:rotate-12 transition-transform" />
                        <span>App Store</span>
                    </a>
                );

            case 'both':
                if (!project.androidLink || !project.iosLink || project.androidLink === '#' || project.iosLink === '#') {
                    return privateCta;
                }

                return (
                    <div className="grid w-full gap-3 sm:flex sm:w-auto sm:flex-wrap">
                        <a
                            href={project.androidLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex min-h-11 items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl transition-all active:scale-[0.98] hover:shadow-md font-medium focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                            aria-label={`Download ${project.project_name} on Google Play`}
                        >
                            <FaAndroid size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Google Play</span>
                        </a>
                        <a
                            href={project.iosLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex min-h-11 items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl transition-all active:scale-[0.98] hover:shadow-md font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                            aria-label={`Download ${project.project_name} on App Store`}
                        >
                            <FaAppStoreIos size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>App Store</span>
                        </a>
                    </div>
                );

            default:
                return privateCta;
        }
    };

    return <div className="flex w-full items-center gap-2 sm:w-auto">{renderLinks()}</div>;
};

const ProofLabels = ({ labels = [], variant = 'card' }) => {
    if (!labels.length) return null;

    const isModal = variant === 'modal';
    const chipClassName = `${isModal
        ? 'px-3 py-2 text-xs sm:text-sm'
        : 'px-2.5 py-1.5 text-[0.7rem] sm:text-xs'
        } inline-flex min-h-7 items-center rounded-full border border-cyan-200 bg-cyan-50 font-bold leading-none text-cyan-700 shadow-sm shadow-cyan-500/5 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300`;

    const chips = labels.map((label) => (
        <span key={label} className={chipClassName}>
            {label}
        </span>
    ));

    if (!isModal) return chips;

    return (
        <div className="flex min-w-0 flex-wrap gap-2" aria-label="Project proof labels">
            {chips}
        </div>
    );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
            setIsFullScreen(false);
        }
    }, [isOpen, project?.project_name]);

    const handleNext = useCallback((e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, [project?.images.length]);

    const handlePrev = useCallback((e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    }, [project?.images.length]);

    // Separate open/close handlers to avoid toggle conflicts
    const openFullScreen = useCallback((e) => {
        e?.stopPropagation();
        setIsFullScreen(true);
    }, []);

    const closeFullScreen = useCallback((e) => {
        e?.stopPropagation();
        setIsFullScreen(false);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (isFullScreen) {
                    setIsFullScreen(false);
                } else {
                    onClose();
                }
            }
            if (e.key === 'ArrowLeft' && project?.images.length > 1) handlePrev();
            if (e.key === 'ArrowRight' && project?.images.length > 1) handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, isFullScreen, onClose, handlePrev, handleNext, project?.images.length]);

    if (!isOpen || !project) return null;

    const hasMultipleImages = project.images.length > 1;

    return (
        <>
            {/* Main Modal */}
            <div
                className="fixed inset-0 z-[200] flex items-end justify-center bg-black/60 p-0 backdrop-blur-md animate-fadeIn dark:bg-black/60 sm:items-center sm:p-4"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div
                    className="relative w-full max-w-7xl max-h-[100dvh] rounded-t-3xl bg-white shadow-xl overflow-hidden animate-scaleIn border border-gray-200 dark:bg-gray-900 dark:border-gray-700 sm:max-h-[95dvh] sm:rounded-3xl sm:border-2"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:bg-gray-100 active:scale-95 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 dark:bg-gray-800/95 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
                        aria-label="Close modal"
                    >
                        <FaTimesCircle size={18} className="sm:hidden" />
                        <FaTimesCircle size={24} className="hidden sm:block" />
                    </button>

                    <div className="overflow-y-auto max-h-[100dvh] custom-scrollbar sm:max-h-[95dvh]">
                        <div className="relative h-52 sm:h-72 md:h-[28rem] bg-gray-100 dark:bg-gray-950">
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent z-[1]"></div>

                            <img
                                src={project.images[currentImageIndex]}
                                alt={`${project.project_name} - ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain cursor-zoom-in transition-opacity duration-300 hover:opacity-95 relative z-[2]"
                                onClick={openFullScreen}
                            />

                            {/* Tap-to-expand hint on mobile */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[3] sm:hidden">
                                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                                    Tap image to expand
                                </span>
                            </div>

                            {hasMultipleImages && (
                                <>
                                    {/* Smaller nav buttons on mobile */}
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-2 sm:left-6 top-1/2 z-[3] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white shadow-md transition-all hover:bg-black/70 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/40 sm:h-12 sm:w-12 sm:bg-cyan-600 sm:hover:bg-cyan-700"
                                        aria-label="Previous image"
                                    >
                                        <FaChevronCircleLeft size={20} className="sm:hidden" />
                                        <FaChevronCircleLeft size={22} className="hidden sm:block" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-2 sm:right-6 top-1/2 z-[3] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white shadow-md transition-all hover:bg-black/70 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/40 sm:h-12 sm:w-12 sm:bg-cyan-600 sm:hover:bg-cyan-700"
                                        aria-label="Next image"
                                    >
                                        <FaChevronCircleRight size={20} className="sm:hidden" />
                                        <FaChevronCircleRight size={22} className="hidden sm:block" />
                                    </button>

                                    {/* Dot indicators */}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-[3]">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`h-2 rounded-full transition-all ${index === currentImageIndex
                                                    ? 'bg-gradient-to-r from-cyan-400 to-blue-400 w-6 shadow-lg'
                                                    : 'bg-white/60 w-2 hover:bg-white/80'
                                                    }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:p-8 md:p-10 space-y-5 sm:space-y-8 bg-white dark:bg-gray-900">
                            <div className="flex flex-col items-start justify-between gap-4 pr-12 sm:flex-row sm:pr-0">
                                <h2 id="modal-title" className="max-w-full break-words text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
                                    {project.project_name}
                                </h2>
                                <ProjectLinks project={project} />
                            </div>

                            <ProofLabels labels={project.proofLabels} variant="modal" />

                            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>

                            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                                {project.project_description}
                            </p>

                            <ProjectCaseStudy project={project} />

                            <div className="bg-cyan-50/70 dark:bg-gray-800 p-4 sm:p-6 rounded-2xl border-2 border-cyan-200 dark:border-gray-700 shadow-md">
                                <h3 className="text-lg sm:text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                                    My Role
                                </h3>
                                <p className="text-gray-800 dark:text-gray-200 font-medium text-base sm:text-lg">{project.role}</p>
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                                    Technologies & Tools
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-2 sm:px-4 sm:py-2.5 bg-cyan-100 dark:bg-cyan-500/20 border-2 border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 rounded-xl text-xs sm:text-sm font-semibold cursor-default shadow-sm"
                                            style={{ animationDelay: `${index * 0.05}s` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                                    Key Responsibilities
                                </h3>
                                <ul className="space-y-3">
                                    {project.responsibilities.map((responsibility, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 p-3 sm:p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700/50 hover:border-cyan-300 dark:hover:border-cyan-500/30 transition-colors shadow-sm"
                                        >
                                            <span className="text-cyan-500 dark:text-cyan-400 mt-1 flex-shrink-0 text-xl font-bold">→</span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen overlay */}
            {isFullScreen && (
                <div
                    className="fixed inset-0 z-[210] bg-black flex h-[100dvh] flex-col animate-fadeIn"
                    onClick={closeFullScreen}
                >
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-black/80 backdrop-blur-md flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                        <span className="text-white/70 text-sm font-medium truncate max-w-[60%]">
                            {project.project_name}
                        </span>
                        <button
                            onClick={closeFullScreen}
                            className="ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-all duration-300 hover:bg-white/20 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30"
                            aria-label="Exit fullscreen"
                        >
                            <FaTimesCircle size={20} />
                        </button>
                    </div>

                    {/* Image area — fills remaining space */}
                    <div className="flex-1 flex items-center justify-center overflow-hidden px-2 py-2">
                        <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.project_name} - Fullscreen`}
                            className="max-w-full max-h-full object-contain animate-scaleIn"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    {/* Bottom bar — counter + nav all in one row */}
                    {hasMultipleImages && (
                        <div
                            className="flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md flex-shrink-0 gap-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handlePrev}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-md transition-all hover:bg-cyan-500/70 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30"
                                aria-label="Previous image"
                            >
                                <FaChevronCircleLeft size={20} />
                            </button>

                            {/* Dot indicators + counter */}
                            <div className="flex flex-col items-center gap-2 flex-1">
                                <div className="flex gap-1.5">
                                    {project.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-1.5 rounded-full transition-all ${index === currentImageIndex
                                                ? 'bg-cyan-400 w-5'
                                                : 'bg-white/30 w-1.5 hover:bg-white/60'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-white/60 text-xs font-medium">
                                    {currentImageIndex + 1} / {project.images.length}
                                </span>
                            </div>

                            <button
                                onClick={handleNext}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-md transition-all hover:bg-cyan-500/70 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/30"
                                aria-label="Next image"
                            >
                                <FaChevronCircleRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

const FilterButton = ({ category, isActive, onClick }) => (
    <button
        onClick={onClick}
        type="button"
        className={`relative overflow-hidden ${isActive
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md border-transparent"
            : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600"
            } min-h-11 flex-1 sm:flex-none focus:outline-none focus:ring-4 focus:ring-cyan-500/50 font-semibold rounded-2xl text-sm px-3 py-2.5 sm:px-6 sm:py-3 transition-all active:scale-[0.98] hover:shadow-md group`}
        aria-pressed={isActive}
        aria-label={category.label}
    >
        <span className="relative z-10 sm:hidden">{category.mobileLabel || category.label}</span>
        <span className="relative z-10 hidden sm:inline">{category.label}</span>
    </button>
);

const ProofFilterButton = ({ label, isActive, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`${isActive
            ? 'border-cyan-400 bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
            : 'border-gray-200 bg-white/80 text-gray-600 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-300 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300'
            } inline-flex min-h-9 max-w-full flex-shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-cyan-500/20`}
        aria-pressed={isActive}
    >
        {label}
    </button>
);

const getProjectCardMeta = (project) => {
    const caseStudy = CASE_STUDIES[project.project_name];

    return {
        platform: project.tag === 'mobile' ? 'Mobile App' : 'Web System',
        outcome: caseStudy?.result,
    };
};

const ProjectCard = ({ project, onOpenModal }) => {
    const cardMeta = getProjectCardMeta(project);
    const hasCaseStudyPreview = cardMeta.outcome;

    return (
        <div className="flex min-w-0 justify-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="group min-w-0 max-w-lg w-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:border-cyan-300 dark:hover:border-cyan-500/40 transition-all duration-300 overflow-hidden">
                <button
                    className="relative flex justify-center cursor-pointer w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl h-56 sm:h-64 focus:outline-none focus:ring-4 focus:ring-cyan-500/40 focus:ring-inset"
                    onClick={onOpenModal}
                    aria-label={`View details for ${project.project_name}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-200 dark:from-gray-900 via-transparent to-transparent z-10 opacity-50 group-hover:opacity-35 transition-opacity"></div>
                    <img
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                        src={project.project_image}
                        alt={project.project_name}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-[11]"></div>

                    <div className="absolute inset-x-4 bottom-4 z-[12] flex justify-center opacity-100 sm:inset-0 sm:items-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <span className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white font-bold rounded-full border-2 border-cyan-400 shadow-md">
                            View Details
                        </span>
                    </div>
                </button>

                <div className="relative min-w-0 max-w-full p-3">
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
                    <h5 className="mb-1 break-words text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
                        {project.project_name}
                    </h5>

                    <div className="mb-2 min-w-0 max-w-full space-y-3 overflow-hidden">
                        <div className="flex min-w-0 max-w-full flex-row flex-wrap items-center gap-2">
                            <span className="inline-flex min-h-8 items-center rounded-full border-2 border-cyan-200 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide leading-none text-cyan-700 dark:text-cyan-300">
                                {cardMeta.platform}
                            </span>
                            <ProofLabels labels={project.proofLabels} />
                        </div>

                        {cardMeta.outcome && (
                            <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/70 dark:bg-cyan-500/10 p-3">
                                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
                                    Outcome
                                </p>
                                <p className="line-clamp-2 min-w-0 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    {cardMeta.outcome}
                                </p>
                            </div>
                        )}
                    </div>

                    <p className={`min-w-0 max-w-full font-normal text-gray-600 dark:text-gray-400 line-clamp-5 leading-relaxed ${hasCaseStudyPreview ? 'mb-5 text-sm' : 'mb-5'}`}>
                        {project.project_description}
                    </p>
                    <button
                        onClick={onOpenModal}
                        className="inline-flex min-h-11 w-full max-w-full items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-500/50 transition-all active:scale-[0.98] hover:shadow-md group/btn sm:w-auto"
                    >
                        Learn more
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1 group-hover/btn:translate-x-1 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState("web");
    const [activeProofFilter, setActiveProofFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const previousBodyOverflow = useRef('');

    const filteredProjects = useMemo(() => {
        return PROJECT_DATA.filter((project) => {
            const matchesPlatform = activeFilter === "all" || project.tag === activeFilter;
            const matchesProof =
                activeProofFilter === "all" || project.proofLabels?.includes(activeProofFilter);

            return matchesPlatform && matchesProof;
        });
    }, [activeFilter, activeProofFilter]);

    const openModal = useCallback((project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        previousBodyOverflow.current = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = previousBodyOverflow.current;
    }, []);

    const handleFilterChange = useCallback((filterId) => {
        setActiveFilter(filterId);
    }, []);

    const handleProofFilterChange = useCallback((filterId) => {
        setActiveProofFilter(filterId);
    }, []);

    useEffect(() => {
        return () => {
            document.body.style.overflow = previousBodyOverflow.current;
        };
    }, []);

    return (
        <section id="portfolio" className="relative min-h-screen scroll-mt-16 py-14 sm:py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                    <div className="inline-block mb-4">
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-6"></div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-3 sm:mb-4">
                        <span className="text-gray-900 dark:text-white">
                            My Portfolio
                        </span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg text-center max-w-2xl">
                        Explore my latest projects and see what I've been working on
                    </p>
                </div>

                <div className="mb-4 overflow-visible py-1">
                    <div className="flex w-full gap-2 sm:flex-wrap sm:justify-center sm:gap-3" role="list" aria-label="Project filters">
                        {FILTER_CATEGORIES.map((category) => (
                            <FilterButton
                                key={category.id}
                                category={category}
                                isActive={activeFilter === category.id}
                                onClick={() => handleFilterChange(category.id)}
                            />
                        ))}
                    </div>
                </div>

                <div className="mb-8 w-full max-w-full px-1 pb-1 sm:mb-12 sm:px-0">
                    <div className="flex max-w-full flex-wrap justify-center gap-2" role="list" aria-label="Proof label filters">
                        <ProofFilterButton
                            label="All Labels"
                            isActive={activeProofFilter === "all"}
                            onClick={() => handleProofFilterChange("all")}
                        />
                        {PROOF_FILTERS.map((label) => (
                            <ProofFilterButton
                                key={label}
                                label={label}
                                isActive={activeProofFilter === label}
                                onClick={() => handleProofFilterChange(label)}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mb-8 sm:mb-10">
                    <div className="inline-flex min-h-11 items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-md">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">{filteredProjects.length}</span>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {filteredProjects.length === 1 ? 'project' : 'projects'}
                        </span>
                    </div>
                </div>

                <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.project_name}
                            project={project}
                            onOpenModal={() => openModal(project)}
                        />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 animate-fadeIn">
                        <div className="inline-block p-10 bg-white dark:bg-gray-900 rounded-3xl border-2 border-gray-200 dark:border-gray-700 shadow-lg">
                            <div className="text-6xl mb-4 opacity-30">🔍</div>
                            <p className="text-xl text-gray-700 dark:text-gray-400 mb-2 font-semibold">No projects found</p>
                            <p className="text-gray-500 dark:text-gray-500">Try selecting a different category</p>
                        </div>
                    </div>
                )}

                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
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
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.25s ease-out;
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-fadeIn,
                    .animate-scaleIn,
                    .animate-fadeInUp {
                        animation: none !important;
                        opacity: 1 !important;
                        transform: none !important;
                    }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(31, 41, 55, 0.5);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #06b6d4, #3b82f6);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #0891b2, #2563eb);
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;
