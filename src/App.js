import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { FaReact, FaPython, FaJs, FaHtml5, } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';
import avatar from './avatar.png'
import quote from './quote.png'
import { useState } from 'react';

// remember that we have to set the font, here and in taiwind.config.js

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? 'dark' : ''}>
      <main className='transition duration-1000 bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>  
            <h1 className='text-3xl font-sedgwick'>K4mp47</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
            </ul>
          </nav>
          <h2 className='text-5xl text-teal-600 p-0 font-medium md:text-6xl mx-auto text-center'>Campagnolo Alberto</h2>
          <div className='text-center p-5 py-5'>
            <h3 className='text-2xl py-2 pt-5'>Freelance developer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
              Freelancer providing services for programming content needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-5'>
            <a href="https://www.linkedin.com/in/alberto-campagnolo-916b86265/"><AiFillLinkedin className='animate-pulse animation-delay-400'/></a>
            <a href="https://www.instagram.com/campagnoloalberto5/"><AiFillInstagram className='animate-pulse'/></a>
            <a href="https://github.com/K4mp47"><AiFillGithub className='animate-pulse animation-delay-900'/></a>
          </div>
          <div className='relative w-60 h-60 my-20 mx-auto'>
            <img src={avatar} alt="Avatar"/>
          </div>
        </section>
        <div className='text-center'>
          <h3 className='text-3xl py-5 text-teal-600 font-medium md:text-5xl'>Services I offer</h3>
          <p className='text-xl py-2 leading-8 text-gray-800 md:mx-20 lg:mx-40 md:text-2xl dark:text-white'>
            Since the beginning of my journey as a developer, I've done work for <span className='text-teal-500'>Elettronica Veneta S.P.A</span> and collaborated with people to create digital products for business and consumer use.
          </p>
          <p className='text-xl py-2 leading-8 text-gray-800 md:text-2xl dark:text-white'>
          I can program in different languages:
          </p>
          <ul className='text-xl py-2 leading-8 text-gray-800 md:text-2xl dark:text-white block items-center justify-center mt-12'>
            <li>
              <div className='flex items-center justify-center mb-5 animate-bounce animation-duration'>
                <FaReact className='w-10 h-10 ml-2 mr-2 text-teal-500'/> React
              </div>
            </li>
            <li>
              <div className='flex items-center justify-center mb-5 animate-bounce animation-delay-100'>
                <FaPython className='w-10 h-10 ml-2 mr-2 text-teal-500'/> Python
              </div>
            </li>
            <li>
              <div className='flex items-center justify-center mb-5 animate-bounce'>
                <SiFlask className='w-10 h-10 ml-2 mr-2 text-teal-500'/> Flask
              </div>
            </li>
            <li>
              <div className='flex items-center justify-center mb-5 animate-bounce animation-delay-200'>
                <FaHtml5 className='w-10 h-10 ml-2 mr-2 text-teal-500'/> Html
              </div>
            </li>
            <li>
              <div className='flex items-center justify-center animate-bounce animation-delay-700'>
                <FaJs className='w-10 h-10 ml-2 mr-2 text-teal-500'/> Javascript
              </div>
            </li>
          </ul>
          <br/>
          <p className='m-9 text-xl py-2 leading-8 text-gray-800 md:text-2xl dark:text-white'>
            So what i can do for you is creating the <span className='text-teal-500'>API</span> and <span className='text-teal-500'>Website</span> that you need!
          </p>
        </div>
        <div className='text-center'>
          <h3 className='text-3xl text-teal-600 font-medium md:text-5xl my-5 mt-20 md:mt-10'>Personal Projects</h3>
          <p className='text-xl py-2 leading-8 text-gray-800 mx-auto md:text-2xl dark:text-white'>In this section, you can see the best results from my <span className='text-teal-500'>work</span>, I hope you will like it!</p>
          <div className='text-center'>
            <img className='relative h-40 w-90 mx-auto rounded-md mt-10 md:h-60' src={quote} alt='first webpage'/>
            <h2 className='text-3xl md:text-4xl text-teal-600 font-medium py-5'>Quote generator</h2>
            <p className='text-md md:text-xl pb-20 dark:text-white'>Site that generates quotes, to have a nice thought every day</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
