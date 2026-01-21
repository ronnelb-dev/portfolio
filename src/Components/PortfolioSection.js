import { useState, useCallback, useEffect, useMemo } from 'react';
import {
    FaTimesCircle,
    FaChevronCircleLeft,
    FaChevronCircleRight,
    FaGlobe,
    FaAndroid,
    FaAppStoreIos
} from 'react-icons/fa';

import { PROJECT_DATA } from '../constants/projectData';

const FILTER_CATEGORIES = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
];

const ProjectLinks = ({ project }) => {
    const renderLinks = () => {
        switch (project.linkType) {
            case 'website':
                return (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap font-medium"
                        aria-label={`Visit ${project.project_name} website`}
                    >
                        <FaGlobe size={18} className="group-hover:rotate-12 transition-transform" />
                        <span>Visit Website</span>
                    </a>
                );

            case 'android':
                return (
                    <a
                        href={project.androidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap font-medium"
                        aria-label={`Download ${project.project_name} on Google Play`}
                    >
                        <FaAndroid size={18} className="group-hover:rotate-12 transition-transform" />
                        <span>Google Play</span>
                    </a>
                );

            case 'ios':
                return (
                    <a
                        href={project.iosLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap font-medium"
                        aria-label={`Download ${project.project_name} on App Store`}
                    >
                        <FaAppStoreIos size={18} className="group-hover:rotate-12 transition-transform" />
                        <span>App Store</span>
                    </a>
                );

            case 'both':
                return (
                    <div className="flex flex-wrap gap-3">
                        <a
                            href={project.androidLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg font-medium"
                            aria-label={`Download ${project.project_name} on Google Play`}
                        >
                            <FaAndroid size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>Google Play</span>
                        </a>
                        <a
                            href={project.iosLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg font-medium"
                            aria-label={`Download ${project.project_name} on App Store`}
                        >
                            <FaAppStoreIos size={16} className="group-hover:rotate-12 transition-transform" />
                            <span>App Store</span>
                        </a>
                    </div>
                );

            default:
                return null;
        }
    };

    return <div className="flex items-center gap-2">{renderLinks()}</div>;
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

    const handleNext = useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, [project?.images.length]);

    const handlePrev = useCallback(() => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    }, [project?.images.length]);

    const toggleFullScreen = useCallback(() => {
        setIsFullScreen(prev => !prev);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft' && project?.images.length > 1) handlePrev();
            if (e.key === 'ArrowRight' && project?.images.length > 1) handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, handlePrev, handleNext, project?.images.length]);

    if (!isOpen || !project) return null;

    const hasMultipleImages = project.images.length > 1;

    return (
        <>
            <div
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 dark:bg-black/60 backdrop-blur-md animate-fadeIn"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div
                    className="relative w-full max-w-7xl max-h-[95vh] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl overflow-hidden animate-scaleIn border-2 border-gray-200 dark:border-gray-700"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-white transition-all hover:scale-110 hover:rotate-90 duration-300 shadow-lg"
                        aria-label="Close modal"
                    >
                        <FaTimesCircle size={26} />
                    </button>

                    <div className="overflow-y-auto max-h-[95vh] custom-scrollbar">
                        <div className="relative h-[35rem] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900">
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent z-[1]"></div>
                            <img
                                src={project.images[currentImageIndex]}
                                alt={`${project.project_name} - ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain cursor-zoom-in transition-all duration-500 hover:scale-105"
                                onClick={toggleFullScreen}
                            />

                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full text-white transition-all hover:scale-110 shadow-xl z-[2]"
                                        aria-label="Previous image"
                                    >
                                        <FaChevronCircleLeft size={24} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full text-white transition-all hover:scale-110 shadow-xl z-[2]"
                                        aria-label="Next image"
                                    >
                                        <FaChevronCircleRight size={24} />
                                    </button>

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-[2]">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`h-3 rounded-full transition-all ${index === currentImageIndex
                                                    ? 'bg-gradient-to-r from-cyan-400 to-blue-400 w-10 shadow-lg'
                                                    : 'bg-gray-400 dark:bg-gray-500 w-3 hover:bg-gray-500 dark:hover:bg-gray-400'
                                                    }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="p-8 md:p-10 space-y-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <h2 id="modal-title" className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                    {project.project_name}
                                </h2>
                                <ProjectLinks project={project} />
                            </div>

                            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>

                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                {project.project_description}
                            </p>

                            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-750 p-6 rounded-2xl border-2 border-cyan-200 dark:border-gray-700 shadow-lg">
                                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                                    My Role
                                </h3>
                                <p className="text-gray-800 dark:text-gray-200 font-medium text-lg">{project.role}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                                    Technologies & Tools
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2.5 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-500/20 dark:to-blue-500/20 border-2 border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 rounded-xl text-sm font-semibold hover:scale-105 transition-transform cursor-default shadow-md hover:shadow-lg"
                                            style={{ animationDelay: `${index * 0.05}s` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                                    Key Responsibilities
                                </h3>
                                <ul className="space-y-3">
                                    {project.responsibilities.map((responsibility, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700/50 hover:border-cyan-300 dark:hover:border-cyan-500/30 transition-colors shadow-sm hover:shadow-md"
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

            {isFullScreen && (
                <div
                    className="fixed inset-0 z-[210] bg-black/98 flex items-center justify-center p-4 animate-fadeIn backdrop-blur-md"
                    onClick={toggleFullScreen}
                >
                    <button
                        onClick={toggleFullScreen}
                        className="absolute top-6 right-6 p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-all hover:scale-110 hover:rotate-90 duration-300 z-10 shadow-2xl"
                        aria-label="Exit fullscreen"
                    >
                        <FaTimesCircle size={32} />
                    </button>

                    <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.project_name} - Fullscreen`}
                        className="max-w-full max-h-full object-contain cursor-zoom-out animate-scaleIn"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFullScreen();
                        }}
                    />

                    {hasMultipleImages && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full text-white transition-all hover:scale-110 shadow-2xl"
                                aria-label="Previous image"
                            >
                                <FaChevronCircleLeft size={32} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full text-white transition-all hover:scale-110 shadow-2xl"
                                aria-label="Next image"
                            >
                                <FaChevronCircleRight size={32} />
                            </button>

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-gray-900/90 backdrop-blur-md rounded-full text-white text-base font-medium border border-gray-700 shadow-2xl">
                                {currentImageIndex + 1} / {project.images.length}
                            </div>
                        </>
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
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl scale-105 border-transparent"
            : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600"
            } focus:outline-none focus:ring-4 focus:ring-cyan-500/50 font-semibold rounded-2xl text-sm px-6 py-3 mr-3 mb-3 transition-all hover:scale-105 hover:shadow-lg group`}
        aria-pressed={isActive}
    >
        <span className="relative z-10">{category.label}</span>
        {!isActive && (
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        )}
        {isActive && (
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 blur-xl"></span>
        )}
    </button>
);

const ProjectCard = ({ project, onOpenModal }) => (
    <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <div className="group max-w-lg w-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 hover:scale-[1.03] transition-all duration-500 overflow-hidden">
            <button
                className="relative flex justify-center cursor-pointer w-full overflow-hidden rounded-t-3xl h-64"
                onClick={onOpenModal}
                aria-label={`View details for ${project.project_name}`}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-200 dark:from-gray-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.project_image}
                    alt={project.project_name}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-[11]"></div>

                <div className="absolute inset-0 flex items-center justify-center z-[12] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-6 py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white font-bold rounded-full border-2 border-cyan-400 shadow-xl">
                        View Details
                    </span>
                </div>
            </button>

            <div className="p-6 relative">
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-4"></div>
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 group-hover:from-cyan-400 group-hover:to-blue-300 transition-all">
                    {project.project_name}
                </h5>
                <p className="mb-5 font-normal text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {project.project_description}
                </p>
                <button
                    onClick={onOpenModal}
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 group/btn"
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

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState("web");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") return PROJECT_DATA;
        return PROJECT_DATA.filter(project => project.tag === activeFilter);
    }, [activeFilter]);

    const openModal = useCallback((project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    }, []);

    const handleFilterChange = useCallback((filterId) => {
        setActiveFilter(filterId);
    }, []);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section id="portfolio" className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-12">
                    <div className="inline-block mb-4">
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mb-6"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                            My Portfolio
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg text-center max-w-2xl">
                        Explore my latest projects and see what I've been working on
                    </p>
                </div>

                <div className="flex flex-wrap justify-center mb-12">
                    {FILTER_CATEGORIES.map((category) => (
                        <FilterButton
                            key={category.id}
                            category={category}
                            isActive={activeFilter === category.id}
                            onClick={() => handleFilterChange(category.id)}
                        />
                    ))}
                </div>

                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">{filteredProjects.length}</span>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {filteredProjects.length === 1 ? 'project' : 'projects'}
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.project_name}
                            project={project}
                            onOpenModal={() => openModal(project)}
                        />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 animate-fadeIn">
                        <div className="inline-block p-10 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl border-2 border-gray-200 dark:border-gray-700 shadow-xl">
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
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 8s ease infinite;
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