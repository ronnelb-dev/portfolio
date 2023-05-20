import React from 'react';
import { MoonIcon,SunIcon } from "@heroicons/react/24/outline";
import logoSrc from '../Images/logo192.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDarkMode = this.handleDarkMode.bind(this);
    this.state = {darkMode: false};
    this.state = {isNavExpanded : false};

  }

  componentDidMount(){
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.setState({darkMode: true});
    } else {
      document.documentElement.classList.remove('dark');
      this.setState({darkMode: false});
    }
  }

  handleDarkMode(){
    if(this.state.darkMode){
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      this.setState({darkMode: false});
    }else{
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      this.setState({darkMode: true});
    }
  }

  
  render() {

    let dark_Mode = this.state.darkMode;
    let isNav_Expanded = this.state.isNavExpanded;
    
    return (
    <nav class="bg-gray-200 border-gray-200 dark:bg-gray-900 relative z-10">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
          <img title="my-logo" src={logoSrc} class="h-8 mr-3 p-1" alt="Ronnel Logo"/>
          {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ronnel B</span> */}
      </a>
      <div class="flex md:order-2">
          <div class="flex space-x-4 items-center">
            {dark_Mode ? 
            <MoonIcon onClick={this.handleDarkMode} className="h-6 w-6 mr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"  />
            :
            <SunIcon onClick={this.handleDarkMode} className="h-6 w-6 mr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"  />
            }
          </div>
          <button onClick={() => {this.setState({isNavExpanded: !isNav_Expanded})}} data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class={this.state.isNavExpanded ? "items-center justify-between w-full md:flex md:w-auto md:order-1 absolute top-full inset-x-0" : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"} id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
          </li>
          <li>
            <a href="#portfolio" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</a>
          </li>
          <li>
            <a href="#about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    );
  }
}

export default NavBar;