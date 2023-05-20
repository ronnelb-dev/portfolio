import React from 'react';
import { Slide } from "react-awesome-reveal";

class AboutMeSection extends React.Component {
  render() {
    return (
        <section id="about">
            <div class="lg:m-30 md:m-20 sm:m-10 m-10">
                <div class="flex justify-center">
                    <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-cyan-400 underline underline-offset-8 decoration-cyan-400 ">About Me</h1>
                </div>

                <div class="grid lg:grid-cols-2 lg:gap-2 md:grid-cols-1 md:gap-1">
                    <Slide direction="left" triggerOnce>
                    <div>
                        <h5 class="text-xl font-bold text-cyan-400 dark:text-cyan-400">Hello!</h5>
                        <p class="mb-3 text-left text-gray-500 dark:text-gray-300 mt-4">My name is Ronnel Barashari and I am a dedicated and versatile developer with expertise in both web and mobile application development. I have a strong understanding of both front-end and back-end development. Focusing on solving problems for different niches and different industries using the power of technology.</p>
                        <p class="mb-3 text-left text-gray-500 dark:text-gray-300">I would love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.</p>
                    </div>
                    </Slide>
                    <Slide direction="right" triggerOnce>
                    <div>
                        <h5 class="text-xl font-bold text-cyan-600 dark:text-cyan-500">Skills</h5>
                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                        </svg>
                        HTML
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                        </svg>
                        CSS
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                        </svg>
                        Javascript
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                        <path fill="#dcd5f2" d="M15,22.5c-7.995,0-14.5-3.364-14.5-7.5S7.005,7.5,15,7.5s14.5,3.364,14.5,7.5S22.995,22.5,15,22.5z"></path><path fill="#8b75a1" d="M15,8c7.589,0,14,3.206,14,7s-6.411,7-14,7S1,18.794,1,15S7.411,8,15,8 M15,7C6.716,7,0,10.582,0,15 s6.716,8,15,8s15-3.582,15-8S23.284,7,15,7L15,7z"></path><path fill="#36404d" d="M9.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C10.69 15.599 10.216 16 8.089 16H6.58l.563-3H9.417M9.417 12H6.313L5 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C12.316 13.084 11.039 12 9.417 12L9.417 12zM22.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C23.69 15.599 23.216 16 21.089 16H19.58l.563-3H22.417M22.417 12h-3.104L18 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C25.316 13.084 24.039 12 22.417 12L22.417 12z"></path><g><path fill="#36404d" d="M17.652,12.424C17.323,12.122,16.742,12,15.875,12h-1.848l0.451-2h-1.017L12,17h1.016l0.841-4h0.171 h1.848c0.91,0,1.094,0.155,1.096,0.155c0.019,0.03,0.058,0.194-0.008,0.532L16.288,17h1.046l0.61-3.121 C18.075,13.212,17.976,12.722,17.652,12.424z"></path></g>
                        </svg>
                        PHP
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#d43a02" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999	c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#d43a02" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743	s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><linearGradient id="P9ujQJgz7XN9Qbny9S64Ha_Pd2x9GWu9ovX_gr1" x1="22.677" x2="30.737" y1="21.174" y2="43.318" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5c65d6"></stop><stop offset=".999" stop-color="#464eb0"></stop></linearGradient><path fill="url(#P9ujQJgz7XN9Qbny9S64Ha_Pd2x9GWu9ovX_gr1)" d="M32.084,25.055c1.754-0.394,3.233,0.723,3.233,2.01c0,2.901-4.021,5.643-4.021,5.643 s6.225-0.742,6.225-5.505C37.521,24.053,34.464,23.266,32.084,25.055z M29.129,27.395c0,0,1.941-1.383,2.458-1.902 c-4.763,1.011-15.638,1.147-15.638,0.269c0-0.809,3.507-1.638,3.507-1.638s-7.773-0.112-7.773,2.181 C11.683,28.695,21.858,28.866,29.129,27.395z"></path><linearGradient id="P9ujQJgz7XN9Qbny9S64Hb_Pd2x9GWu9ovX_gr2" x1="19.498" x2="27.296" y1="22.77" y2="44.196" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5c65d6"></stop><stop offset=".999" stop-color="#464eb0"></stop></linearGradient><path fill="url(#P9ujQJgz7XN9Qbny9S64Hb_Pd2x9GWu9ovX_gr2)" d="M27.935,29.571 c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><linearGradient id="P9ujQJgz7XN9Qbny9S64Hc_Pd2x9GWu9ovX_gr3" x1="18.698" x2="26.59" y1="23.455" y2="45.14" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5c65d6"></stop><stop offset=".999" stop-color="#464eb0"></stop></linearGradient><path fill="url(#P9ujQJgz7XN9Qbny9S64Hc_Pd2x9GWu9ovX_gr3)" d="M18.686,32.739 c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><linearGradient id="P9ujQJgz7XN9Qbny9S64Hd_Pd2x9GWu9ovX_gr4" x1="18.03" x2="25.861" y1="24.198" y2="45.712" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5c65d6"></stop><stop offset=".999" stop-color="#464eb0"></stop></linearGradient><path fill="url(#P9ujQJgz7XN9Qbny9S64Hd_Pd2x9GWu9ovX_gr4)" d="M36.281,36.632 c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839 C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><linearGradient id="P9ujQJgz7XN9Qbny9S64He_Pd2x9GWu9ovX_gr5" x1="20.725" x2="28.228" y1="24.582" y2="45.197" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5c65d6"></stop><stop offset=".999" stop-color="#464eb0"></stop></linearGradient><path fill="url(#P9ujQJgz7XN9Qbny9S64He_Pd2x9GWu9ovX_gr5)" d="M39,38.604 c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path>
                        </svg>
                        JAVA
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#00c853" d="M4,23C4,11.954,12.954,3,24,3s20,8.954,20,20l-20,2L4,23z"></path><path fill="#00e676" d="M44,23c0,11.046-8.954,20-20,20S4,34.046,4,23H44z"></path><path fill="#c2eafd" d="M39.29,42.34v3.16c0,0.19-0.1,0.35-0.25,0.43c-0.14,0.09-0.33,0.1-0.5,0l-2.72-1.59l-4.68-8.15	l-2-3.47l-3.75-6.52l2.93-2.93l3.99,6.94l2.07,3.6L39.29,42.34z"></path><path fill="#9addfb" d="M31.231,28.335c-0.814,1.101-1.869,2.011-3.092,2.648l3.991,6.941	c1.185-0.648,2.272-1.446,3.265-2.346L31.231,28.335z"></path><path fill="#c2eafd" d="M39,23c0,4.24-1.77,8.08-4.62,10.81c-0.96,0.93-2.05,1.73-3.24,2.38C29.02,37.34,26.59,38,24,38	c-2.53,0-4.96-0.62-7.14-1.81l-4.68,8.15l-2.72,1.59c-0.17,0.1-0.36,0.09-0.5,0c-0.15-0.08-0.25-0.24-0.25-0.43v-3.16l10.97-19.07	l2.93,2.93l-3.75,6.53C20.43,33.56,22.18,34,24,34c1.86,0,3.61-0.46,5.14-1.28c1.21-0.63,2.28-1.49,3.17-2.51	C33.99,28.27,35,25.76,35,23H39z"></path><path fill="#37474f" d="M28.5,13H26v-3h-4v3h-2.5c-0.828,0-1.5,0.672-1.5,1.5V23l4.932,4.932c0.59,0.59,1.546,0.59,2.135,0	L30,23v-8.5C30,13.672,29.328,13,28.5,13z M24,22c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5	C26.5,20.881,25.381,22,24,22z"></path>
                        </svg>
                        Android Studio
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 16 16">
                        <path fill="#4e7ab5" d="M8,11.568c-4.561,0-8-1.534-8-3.568s3.439-3.568,8-3.568S16,5.966,16,8S12.561,11.568,8,11.568z M8,5.432C3.875,5.432,1,6.785,1,8s2.875,2.568,7,2.568S15,9.215,15,8S12.125,5.432,8,5.432z"></path><path fill="#4e7ab5" d="M5.027,15L5.027,15c-0.35,0-0.668-0.081-0.947-0.242c-0.455-0.262-0.783-0.726-0.948-1.343 c-0.445-1.663,0.274-4.474,1.833-7.161C6.792,3.111,9.206,1,10.974,1c0.35,0,0.668,0.081,0.947,0.242 c0.454,0.261,0.782,0.725,0.947,1.341c0.445,1.664-0.274,4.475-1.834,7.162C9.21,12.888,6.796,15,5.027,15z M10.974,2 C9.82,2,7.625,3.667,5.83,6.757c-1.41,2.43-2.106,5.002-1.732,6.4c0.097,0.359,0.258,0.606,0.48,0.734 c0.971,0.558,3.526-1.09,5.591-4.649c1.411-2.431,2.107-5.003,1.733-6.401c-0.097-0.358-0.258-0.605-0.479-0.732 C11.295,2.036,11.148,2,10.974,2z"></path><path fill="#4e7ab5" d="M10.974,15L10.974,15c-1.769,0-4.183-2.112-6.008-5.254C3.406,7.06,2.687,4.249,3.132,2.585 C3.297,1.968,3.625,1.503,4.08,1.242C4.359,1.081,4.678,1,5.027,1c1.768,0,4.182,2.112,6.007,5.256 c1.56,2.687,2.279,5.497,1.833,7.161c-0.165,0.617-0.492,1.081-0.946,1.341C11.642,14.919,11.323,15,10.974,15z M5.027,2 C4.853,2,4.706,2.036,4.578,2.109c-0.223,0.128-0.384,0.375-0.48,0.735c-0.374,1.398,0.322,3.97,1.733,6.4 C7.624,12.333,9.819,14,10.974,14l0,0c0.175,0,0.321-0.036,0.449-0.109c0.222-0.127,0.383-0.374,0.479-0.733 c0.375-1.398-0.321-3.97-1.732-6.4C8.376,3.667,6.181,2,5.027,2z"></path><path fill="#8bb7f0" d="M9,8c0,0.553-0.447,1-1,1S7,8.553,7,8s0.447-1,1-1S9,7.447,9,8z"></path><path fill="#4e7ab5" d="M8,9.5C7.173,9.5,6.5,8.827,6.5,8S7.173,6.5,8,6.5S9.5,7.173,9.5,8S8.827,9.5,8,9.5z M8,7.5 C7.725,7.5,7.5,7.724,7.5,8S7.725,8.5,8,8.5S8.5,8.276,8.5,8S8.275,7.5,8,7.5z"></path>
                        </svg>
                        React
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                        </svg>
                        Tailwind CSS
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#673ab7" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"></path>
                        </svg>
                        Bootstrap
                        </span>


                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#fff" d="M24 4.050000000000001A19.95 19.95 0 1 0 24 43.95A19.95 19.95 0 1 0 24 4.050000000000001Z"></path><path fill="#01579b" d="M8.001,24c0,6.336,3.68,11.806,9.018,14.4L9.385,17.488C8.498,19.479,8.001,21.676,8.001,24z M34.804,23.194c0-1.977-1.063-3.35-1.67-4.412c-0.813-1.329-1.576-2.437-1.576-3.752c0-1.465,1.471-2.84,3.041-2.84 c0.071,0,0.135,0.006,0.206,0.008C31.961,9.584,28.168,8,24.001,8c-5.389,0-10.153,2.666-13.052,6.749 c0.228,0.074,0.307,0.039,0.611,0.039c1.669,0,4.264-0.2,4.264-0.2c0.86-0.057,0.965,1.212,0.099,1.316c0,0-0.864,0.105-1.828,0.152 l5.931,17.778l3.5-10.501l-2.603-7.248c-0.861-0.046-1.679-0.152-1.679-0.152c-0.862-0.056-0.762-1.375,0.098-1.316 c0,0,2.648,0.2,4.217,0.2c1.675,0,4.264-0.2,4.264-0.2c0.861-0.057,0.965,1.212,0.104,1.316c0,0-0.87,0.105-1.832,0.152l5.891,17.61 l1.599-5.326C34.399,26.289,34.804,24.569,34.804,23.194z M24.281,25.396l-4.8,13.952c1.436,0.426,2.95,0.652,4.52,0.652 c1.861,0,3.649-0.324,5.316-0.907c-0.04-0.071-0.085-0.143-0.118-0.22L24.281,25.396z M38.043,16.318 c0.071,0.51,0.108,1.059,0.108,1.645c0,1.628-0.306,3.451-1.219,5.737l-4.885,14.135C36.805,35.063,40,29.902,40,24 C40,21.219,39.289,18.604,38.043,16.318z"></path><path fill="#01579b" d="M4,24c0,11.024,8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4S4,12.976,4,24z M5.995,24 c0-9.924,8.074-17.999,18.004-17.999S42.005,14.076,42.005,24S33.929,42.001,24,42.001C14.072,42.001,5.995,33.924,5.995,24z"></path>
                        </svg>
                        WordPress
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                        </svg>
                        Git
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 100 100">
                        <path fill="#f15b6c" d="M69,82H31c-7.18,0-13-5.82-13-13V31c0-7.18,5.82-13,13-13h38c7.18,0,13,5.82,13,13v38	C82,76.18,76.18,82,69,82z"></path><path fill="#1f212b" d="M66.5,78h-33C27.159,78,22,72.841,22,66.5v-33C22,27.159,27.159,22,33.5,22h33	c0.353,0,0.701,0.021,1.046,0.053c0.275,0.025,0.477,0.269,0.452,0.544c-0.025,0.274-0.258,0.476-0.544,0.452	C67.139,23.02,66.822,23,66.5,23h-33C27.71,23,23,27.71,23,33.5v33C23,72.29,27.71,77,33.5,77h33C72.29,77,77,72.29,77,66.5v-17	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v17C78,72.841,72.841,78,66.5,78z M77.5,40c-0.276,0-0.5-0.224-0.5-0.5v-2	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2C78,39.776,77.776,40,77.5,40z M77.5,47c-0.276,0-0.5-0.224-0.5-0.5v-4	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4C78,46.776,77.776,47,77.5,47z"></path><path fill="#1f212b" d="M69,83H31c-7.72,0-14-6.28-14-14V31c0-7.72,6.28-14,14-14h38c7.72,0,14,6.28,14,14v38	C83,76.72,76.72,83,69,83z M31,19c-6.617,0-12,5.383-12,12v38c0,6.617,5.383,12,12,12h38c6.617,0,12-5.383,12-12V31	c0-6.617-5.383-12-12-12H31z"></path><path fill="#fefdef" d="M61.957,48.415C58.749,48.972,54.504,49.28,50,49.28c-4.503,0-8.749-0.308-11.955-0.865	c-3.593-0.625-5.423-1.467-5.901-2.735C32.058,45.908,32,46.144,32,46.4v7.2c0,1.685,1.809,2.719,6.045,3.455	C41.25,57.612,45.497,57.92,50,57.92c4.504,0,8.749-0.308,11.958-0.865C66.192,56.319,68,55.285,68,53.6v-7.2	c0-0.256-0.056-0.492-0.141-0.72C67.38,46.948,65.549,47.79,61.957,48.415"></path><path fill="#fefdef" d="M61.957,59.935C58.749,60.492,54.504,60.8,50,60.8c-4.503,0-8.749-0.308-11.955-0.865	c-3.593-0.625-5.423-1.467-5.901-2.735C32.058,57.428,32,57.664,32,57.92v7.2c0,1.685,1.809,2.719,6.045,3.455	C41.25,69.132,45.497,69.44,50,69.44c4.504,0,8.749-0.308,11.958-0.865C66.192,67.839,68,66.805,68,65.12v-7.2	c0-0.256-0.056-0.492-0.141-0.72C67.38,58.467,65.549,59.31,61.957,59.935"></path><path fill="#fefdef" d="M61.958,31.425C58.75,30.867,54.504,30.56,50,30.56c-4.503,0-8.749,0.307-11.956,0.865	C33.809,32.161,32,33.195,32,34.88v7.2c0,1.685,1.809,2.719,6.044,3.455C41.251,46.093,45.497,46.4,50,46.4	c4.504,0,8.749-0.307,11.958-0.865C66.193,44.798,68,43.765,68,42.08v-7.2C68,33.195,66.193,32.161,61.958,31.425z M50,32	c9.147,0,16.56,1.29,16.56,2.88S59.147,37.76,50,37.76c-9.145,0-16.56-1.29-16.56-2.88S40.855,32,50,32z"></path><path fill="#f15b6c" d="M56.235,41.517c-0.45,0-0.83-0.349-0.861-0.805c-0.032-0.476,0.327-0.889,0.804-0.921	c2.217-0.151,4.207-0.379,5.914-0.676c0.606-0.104,1.434-0.247,2.278-0.465c0.456-0.12,0.933,0.158,1.053,0.621	c0.119,0.462-0.159,0.933-0.621,1.052c-0.913,0.236-1.781,0.385-2.415,0.495c-1.765,0.307-3.814,0.542-6.092,0.697	C56.275,41.516,56.255,41.517,56.235,41.517z"></path><path fill="#f15b6c" d="M56.235,53.037c-0.45,0-0.83-0.349-0.861-0.805c-0.032-0.476,0.327-0.889,0.804-0.921	c2.212-0.151,4.202-0.379,5.914-0.676c0.606-0.104,1.434-0.247,2.278-0.465c0.456-0.121,0.933,0.157,1.053,0.621	c0.119,0.462-0.159,0.933-0.621,1.052c-0.913,0.236-1.781,0.385-2.415,0.495c-1.77,0.308-3.819,0.542-6.092,0.697	C56.275,53.036,56.255,53.037,56.235,53.037z"></path><path fill="#f15b6c" d="M56.235,64.556c-0.45,0-0.83-0.35-0.861-0.806c-0.032-0.476,0.327-0.888,0.804-0.92	c2.211-0.151,4.201-0.378,5.914-0.676c0.606-0.104,1.434-0.247,2.278-0.465c0.456-0.12,0.933,0.158,1.053,0.621	c0.119,0.462-0.159,0.933-0.621,1.052c-0.913,0.236-1.781,0.385-2.415,0.495c-1.771,0.308-3.821,0.542-6.092,0.697	C56.275,64.555,56.255,64.556,56.235,64.556z"></path>
                        </svg>
                        MySQL
                        </span>

                        <span class="m-4 bg-cyan-100 text-cyan-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <linearGradient id="q17mbB32E_FbIzPpfjq_Ta_W0YEwBDDfTeu_gr1" x1="16.309" x2="23.023" y1="1.101" y2="19.546" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#q17mbB32E_FbIzPpfjq_Ta_W0YEwBDDfTeu_gr1)" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><linearGradient id="q17mbB32E_FbIzPpfjq_Tb_W0YEwBDDfTeu_gr2" x1="15.64" x2="22.314" y1="14.636" y2="32.971" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ae4cd5"></stop><stop offset="1" stop-color="#9331bf"></stop></linearGradient><path fill="url(#q17mbB32E_FbIzPpfjq_Tb_W0YEwBDDfTeu_gr2)" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><linearGradient id="q17mbB32E_FbIzPpfjq_Tc_W0YEwBDDfTeu_gr3" x1="14.81" x2="21.821" y1="26.357" y2="45.617" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33c481"></stop><stop offset="1" stop-color="#21a366"></stop></linearGradient><path fill="url(#q17mbB32E_FbIzPpfjq_Tc_W0YEwBDDfTeu_gr3)" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><linearGradient id="q17mbB32E_FbIzPpfjq_Td_W0YEwBDDfTeu_gr4" x1="27.498" x2="34.119" y1=".512" y2="18.702" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f09ca2"></stop><stop offset="1" stop-color="#eb6773"></stop></linearGradient><path fill="url(#q17mbB32E_FbIzPpfjq_Td_W0YEwBDDfTeu_gr4)" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><linearGradient id="q17mbB32E_FbIzPpfjq_Te_W0YEwBDDfTeu_gr5" x1="28.714" x2="34.857" y1="14.972" y2="31.85" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32bdef"></stop><stop offset="1" stop-color="#1ea2e4"></stop></linearGradient><circle cx="32" cy="24" r="7" fill="url(#q17mbB32E_FbIzPpfjq_Te_W0YEwBDDfTeu_gr5)"></circle>
                        </svg>
                        Figma
                        </span>
                    </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
  }
}

export default AboutMeSection;