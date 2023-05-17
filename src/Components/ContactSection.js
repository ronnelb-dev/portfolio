import React from 'react';
import { Slide } from "react-awesome-reveal";

class ContactSection extends React.Component {
  render() {
    return (
        <section id="contact" class="lg:m-40 md:m-25 sm:m-10">
            <div>
                <div class="flex justify-center">
                    <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-cyan-400 underline underline-offset-8 decoration-cyan-400 ">Contact Me</h1>
                </div>
                <Slide direction="up" triggerOnce>
                <div>

                <div class="flex justify-center max-w-lg mx-auto">
                    <p class="mb-3 text-center text-base text-gray-500 dark:text-gray-300 mt-4">Feel free to reach out to me through the Button below if you have any inquiries or if you'd like to discuss potential projects. I am always excited to take on new challenges and contribute my expertise to help your business thrive online.</p>
                </div>

                        <div class="flex justify-center mt-10">
                            <a href="mailto:barasharironnel29@gmail.com" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-cyan-600 group-hover:from-green-400 group-hover:to-cyan-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Say Hello
                                </span>
                            </a>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
  }
}

export default ContactSection;