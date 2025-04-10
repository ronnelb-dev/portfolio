import React from 'react';
import XPTrackerImg from '../Images/xpt-feature.png';
import CGAFeatureImg from '../Images/cga-feature.png';
import MSTFeatureImg from '../Images/mst-feature.png';
import TRTFeatureImg from '../Images/trt-feature.png';
import WCAFeatureImg from '../Images/wca-feature.png';
import STGFeatureImg from '../Images/stg-feature.png';
import ELFeatureImg from '../Images/el-feature.png';
import CLFeatureImg from '../Images/cl-feature.png';
import TEFeatureImg from '../Images/te-feature.png';
import PEMFeatureImg from '../Images/pem-feature.png';
import TSFeatureImg from '../Images/ts-feature.png';
import PFFeatureImg from '../Images/pf-feature.png';
import BFFeatureImg from '../Images/bf-feature.png';
import SSTFeatureImg from '../Images/sst-feature.png';
import SSCFeatureImg from '../Images/ssc-feature.png';
import SOLFeatureImg from '../Images/sol-feature.png';
import MEALFeatureImg from '../Images/meal-feature.png';
import QMSFeatureImg from '../Images/qms-feature.png';
import BSTFeatureImg from '../Images/bst-feature.png';
import { Slide } from "react-awesome-reveal";

const projectData = [
    {
        "project_name": "Better Swing Trader (BST)",
        "project_description": 'BST tracks stocks daily for gain and loss(by amount and %). BST allows you to easily see if you are meeting your goals, and try out new approaches to find a winning strategy and develop positive habits.',
        "project_image": BSTFeatureImg,
        "tag": "react-native",
        "link": "https://apps.apple.com/us/app/best-swing-trader/id6737796315",
    },
    {
        "project_name": "Queue Management System",
        "project_description": 'The Queue Management System (QMS) Web Application is a robust and user-friendly platform designed to streamline and optimize queue operations for organizations of all sizes. Built with flexibility and efficiency in mind, this application empowers administrators and queue managers to effectively manage transactions, users, and reporting needs, all from a centralized interface.',
        "project_image": QMSFeatureImg,
        "tag": "web",
        "link": "#",
    },
    {
        "project_name": "Meal Monitoring System",
        "project_description": 'streamlined solution designed to efficiently manage and track meal claims for employees. This web application leverages the power of Laravel for a user-friendly front-end experience and Express.js for a robust and scalable back-end infrastructure.',
        "project_image": MEALFeatureImg,
        "tag": "web",
        "link": "#",
    },
    {
        "project_name": "The Medical City South Luzon SOL APP",
        "project_description": 'The TMCSL Mobile App is designed to streamline the healthcare process by allowing patients and healthcare professionals to manage appointments, view laboratory results, and handle billing transactions efficiently. With a focus on security and user experience, the app ensures that sensitive information is protected and accessible only by authorized users.',
        "project_image": SOLFeatureImg,
        "tag": "flutter",
        "link": "#",
    },
    {
        "project_name": "Sari Sari Customer (SSC)",
        "project_description": 'SSC - For Online SST Customers can now easily access your stores products online, from the comfort of their home. They can send there orders directly to you through SST, which can be prepared ahead of time.',
        "project_image": SSCFeatureImg,
        "tag": "react-native",
        "link": "https://webcoastapps.com/ssc-introduction/",
    },
    {
        "project_name": "Sari Sari Tracker (SST)",
        "project_description": 'The SST app will act like a cash register for small retail neighborhood or convenience stores (Sari Sari) by using a smart phone or tablet. You will be able to handle products with or without Bar codes.  Products with Bar codes can be quickly scanned using your phone. After scanning the app show a running total of each item and the price. ',
        "project_image": SSTFeatureImg,
        "tag": "react-native",
        "link": "https://webcoastapps.com/sst-introduction/",
    },
    {
        "project_name": "My Portfolio",
        "project_description": 'A collection of work that showcases my skills and projects as a mobile and web developer. These include all of my best work, along with the descriptions of each project. I build this website using React and TailwindCSS.',
        "project_image": PFFeatureImg,
        "tag": "react",
        "link": "#",
    },
    {
        "project_name": "Expense Tracker",
        "project_description": 'Expense Tracker is a mobile application that was designed for quick and simple record keeping of your Cash expenses and has many professional features only found on expensive apps, like auto backup, and exporting to Excel or other financial packages.',
        "project_image": XPTrackerImg,
        "tag": "react-native",
        "link": "https://webcoastapps.com/expense-tracker/",
    },
    {
        "project_name": "Task and Reward Tracker",
        "project_description": 'Task and Reward Tracker is a mobile application that easily tracks the time of your task. Our focus is exclusively on the development of "Tracking, Report, and Notification" Apps for personal and individual business use, to improve life through mobile devices.',
        "project_image": TRTFeatureImg,
        "tag": "react-native",
        "link": "https://webcoastapps.com/trt-introduction/",
    },
    {
        "project_name": "Caregiver Assistant",
        "project_description": "Caregiver Assistant is a mobile application that easily track the time your daily vitals. When your vitals change over time, you will have a historical record when you need to provide it to others, eg your primary physician.",
        "project_image": CGAFeatureImg,
        "tag": "react-native",
        "link": "https://webcoastapps.com/cga-introduction/",
    },
    // {
    //     "project_name": "Habit Breaker",
    //     "project_description": "Caregiver Assistant is a mobile application that easily track the time your daily vitals. When your vitals change over time, you will have a historical record when you need to provide it to others, eg your primary physician.",
    //     "project_image": CGAFeatureImg,
    //     "tag": "react-native",
    // },
    {
        "project_name": "Client Logger",
        "project_description": "Allows a user to quickly, securely and reliably sign in to a business or event. Allows a Restaurant to accept reservations, and notify Customer using SMS notification when their reservation is available. Records and log customer information, include date and times.",
        "project_image": CLFeatureImg,
        "tag": "react-native",
        "link": "https://webcoastserver.com/clientlogger/downloads/",
    },
    {
        "project_name": "Entry Logger",
        "project_description": "Entry Logger - This app converts basic user information into a QR Code eg name, phone number, email address.",
        "project_image": ELFeatureImg,
        "tag": "react-native",
        "link": "https://webcoastserver.com/entrylogger/downloads/",
    },
    {
        "project_name": "Budget App: Budgetfy",
        "project_description": "Budgetfy helps you manage and track your budget, expenses, and income with ease. Budgetfy app shows an overview of every transaction you made which you can filter by daily, weekly, or monthly. It also has powerful graphs and reports that will give you a detailed insight into everything regarding your budget, expenses, and income.",
        "project_image": BFFeatureImg,
        "tag": "android-studio",
        "link": "https://play.google.com/store/apps/details?id=budgetfy.arsoft.com",
    },
    // {
    //     "project_name": "Revyoudeo",
    //     "project_description": "Revyoudeo is a mobile application platform for reviewing a video, a user can post, edit and delete his own personal video. You can also view other people reviews of their videos.",
    //     "project_image": bgggg,
    //     "tag": "react-native",
    // },
    // {
    //     "project_name": "St. Garabed Armenian Apostolic Church",
    //     "project_description": "The Las Vegas Armenian Apostolic Church Parish Council was established in April of 1998. After 12 years of holding our church services in different rented churches; finally, on April 1, 2010, we were able to have the first  Divine Liturgy Badarak on our own property.",
    //     "project_image": STGFeatureImg,
    //     "tag": "wordpress",
    //     "link": "https://stgarabedlv.org/",
    // },
    {
        "project_name": "Web Coast Apps",
        "project_description": "Web Coast Apps is a website built on the WordPress. The site showcase various of mobile tracking applications that improves lives through tracking, reporting, and notification” Apps for personal and individual business use.",
        "project_image": WCAFeatureImg,
        "tag": "wordpress",
        "link": "https://webcoastapps.com/",
    },
    {
        "project_name": "Performance Evaluation Manager",
        "project_description": "This app allows managers and users to quickly and easily evaluate Employees often between formal evaluation periods. ",
        "project_image": PEMFeatureImg,
        "tag": "react-native",
        "link": "https://webcoastapps.com/performance-evaluation-manager/",
    },
    {
        "project_name": "Tipsee Elite",
        "project_description": "Lite version of Tipsee. Simple, yet powerful tip tracking app, track your tips, view tip patterns, and quickly compare tips for the week, month, or year",
        "project_image": TEFeatureImg,
        "tag": "react-native",
        "link": "https://webcoastapps.com/tipsee-elite/",
    },
    {
        "project_name": "Tipsee",
        "project_description": "TipSee is an all-inclusive tip-tracking app for anyone who gets tips daily or enough times throughout the year that you would like to keep a record.",
        "project_image": TSFeatureImg,
        "tag": "android-studio",
        "link": "https://webcoastapps.com/tipsee-tip-tracker/",
    },
    {
        "project_name": "Medicine Scheduler and Tracker",
        "project_description": "Easily track the time your medicines are taken. When your medicines change over time or the dosage, you will have a historical record when you need to provide it to others, eg your primary physician",
        "project_image": MSTFeatureImg,
        "tag": "android-studio",
        "link": "https://webcoastapps.com/mst/",
    },
    // {
    //     "project_name": "Wizard of Knowledge",
    //     "project_description": "My capstone project, Wizard of Knowledge is an Role-Playing Game(RPG) adventure and education game that provides an enjoyable, learning and challenge the users knowledge by the questions that the game give to the users. The game is inspired by the Bookworm Advanture",
    //     "project_image": bgggg,
    //     "tag": "unity",
    // },

]

class PortfolioSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            selectedPortfolio: "All",
        };

        this.PortfolioBtnClick = this.PortfolioBtnClick.bind(this);
    }

    componentDidMount() {

        this.setState({
            projects: projectData,
        });

    }

    PortfolioBtnClick(techStack) {
        if (techStack == "All") {
            this.setState({
                projects: projectData,
                selectedPortfolio: "All",
            });
        } else {
            var result = projectData.filter(obj => {
                return obj.tag === techStack;
            })
            console.log(result);
            this.setState({
                projects: result,
                selectedPortfolio: techStack,
            });
        }

    }

    render() {
        const { projects } = this.state;
        return (
            <section id="portfolio" class="mb-5">

                <div class="flex justify-center">
                    <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-cyan-400 underline underline-offset-8 decoration-cyan-400 ">Portfolio</h1>
                </div>
                <Slide triggerOnce>
                    <div>
                        <div class="flex flex-wrap justify-center">
                            <button onClick={() => this.PortfolioBtnClick("All")} type="button" class={this.state.selectedPortfolio === "All" ? "bg-cyan-300 dark:bg-cyan-400 text-gray-900 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700" : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}>All</button>
                            <button onClick={() => this.PortfolioBtnClick("react")} type="button" class={this.state.selectedPortfolio === "react" ? "bg-cyan-300 dark:bg-cyan-400 text-gray-900 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700" : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}>React</button>
                            <button onClick={() => this.PortfolioBtnClick("flutter")} type="button" class={this.state.selectedPortfolio === "flutter" ? "bg-cyan-300 dark:bg-cyan-400 text-gray-900 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700" : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}>Flutter</button>
                            <button onClick={() => this.PortfolioBtnClick("android-studio")} type="button" class={this.state.selectedPortfolio === "android-studio" ? "bg-cyan-300 dark:bg-cyan-400 text-gray-900 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700" : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}>Android Studio</button>
                            <button onClick={() => this.PortfolioBtnClick("react-native")} type="button" class={this.state.selectedPortfolio === "react-native" ? "bg-cyan-300 dark:bg-cyan-400 text-gray-900 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700" : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}>React-Native</button>
                            <button onClick={() => this.PortfolioBtnClick("wordpress")} type="button" class={this.state.selectedPortfolio === "wordpress" ? "bg-cyan-300 dark:bg-cyan-400 text-gray-900 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700" : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}>Wordpress</button>
                        </div>
                        <div class="grid lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1">
                            {
                                projects.map((project) => (
                                    <div key={project.length} class="flex justify-center m-5">
                                        <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                            <a class="flex justify-center" href={project.link} target="_blank">
                                                <img class="w-70 h-60 m-5" src={project.project_image} alt="" />
                                            </a>
                                            <div class="p-5">
                                                <a href="#">
                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.project_name}</h5>
                                                </a>
                                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.project_description}</p>
                                                <a href={project.link} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-400 rounded-lg hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus:ring-cyan-800">
                                                    Learn more
                                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Slide>
            </section>
        );
    }
}

export default PortfolioSection;