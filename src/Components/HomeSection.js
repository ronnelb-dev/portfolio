import React from 'react';
import Typewriter from 'typewriter-effect';
import myLogo from '../Images/logo192.png';

class HomeSection extends React.Component {
  render() {
    return (
        <section id="home" class="grid h-screen place-items-center m-5">
            <div>
            <img class="rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-72" src={myLogo} alt="image description"/>
                <div class="flex flex-row">
                <p class="text-4xl md:text-5xl lg:text-7xl text-gray-900 dark:text-white">Hello, I'am 
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-cyan-400"> Ronnel Barashari</span>
                </p>
                </div>

                <div class="flex flex-row">
                <p class="text-4xl sm:text-3xl md:text-5xl lg:text-7xl text-gray-900 dark:text-white">I'm a&nbsp;</p>
                <Typewriter
                  options={{
                    wrapperClassName:"text-4xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-400",
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["Web Developer","Mobile Developer"]
                  }}
                    />
                </div>
            </div>
        </section>
    );
  }
}

export default HomeSection;