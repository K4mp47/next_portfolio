import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { FaReact, FaPython, FaJs, FaHtml5, } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';
import avatar from './avatar.png'
import personal_face from './personal_face.jpg';
import { useState } from 'react';

// remember that we have to set the font, here and in taiwind.config.js

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAvatar, setShowAvatar] = useState(true);

  const toggleAvatar = () => {
    setShowAvatar(!showAvatar);    
  };

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
          <h2 className='text-5xl text-teal-600 p-0 font-medium md:text-6xl mx-auto text-center animate-pulse animation-delay-75'>Campagnolo Alberto</h2>
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
          <div className='relative w-60 h-60 my-20 mx-auto transition-transform transform' onClick={toggleAvatar}>
              <img src={showAvatar ? avatar : personal_face} alt="Avatar" className={`w-full h-full object-cover rounded-md ${showAvatar ? '' : 'scale-110' } transition-all duration-500`}/>
          </div>
        </section>
        <div className='text-center'>
          <h3 className='text-3xl py-5 text-teal-600 font-medium md:text-5xl animate-pulse animation-delay-75'>Services I offer</h3>
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
            So what i can do for you is create the <span className='text-teal-500'>API</span> and <span className='text-teal-500'>Website</span> that you need!
          </p>
        </div>
        <div className='text-center'>
          <h3 className='text-3xl text-teal-600 font-medium md:text-5xl my-5 mt-20 md:mt-10'>Personal Projects</h3>
          <p className='text-xl py-2 leading-8 text-gray-800 mx-auto md:text-2xl dark:text-white mb-20'>In this section, you can see the best results from my <span className='text-teal-500'>work</span>, I hope you will like it!</p>
          <div className='text-center mx-20'>
            <h2 className='text-3xl md:text-4xl text-teal-600 font-medium py-5 animate-pulse animation-delay-75'><a href='https://github.com/K4mp47/Flask_mega_tutorial_book'>- Microblog</a></h2>
            <p className='text-md md:text-xl pb-20 dark:text-white'>My small project created to learn how to use flask and its power!!</p>
            <h2 className='text-3xl md:text-4xl text-teal-600 font-medium py-5 animate-pulse animation-delay-75'><a href='https://github.com/K4mp47/personal_web_projects'>- Website Tests</a></h2>
            <p className='text-md md:text-xl pb-20 dark:text-white'>All my project in front-end developing!</p>
            <h2 className='text-3xl md:text-4xl text-teal-600 font-medium py-5 animate-pulse animation-delay-75'><a href='https://github.com/K4mp47/PEL/tree/main'>- JSON Parser</a></h2>
            <p className='text-md md:text-xl pb-20 dark:text-white'>From a project inside my university!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
