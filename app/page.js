'use client';
import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import  deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ?  "dark" : ""}>
      <main className=' md:p-4 lg:p-0 dark:bg-gray-800'>
        <section className='min-h-screen lg:min-w-full w-auto'>
          <nav className='flex justify-between mb-5 p-6 dark:bg-white'>
            <h1 className='text-2xl font-burtons '>STAN<span className='text-yellow-500'>DARD</span></h1>
            <ul className='flex items-center'>
              <li> <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl'/></li>
              <li>
                <a className='ml-8 bg-transparent border-yellow-500 border-solid border-2 py-1 px-3 rounded-full' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center py-5 px-10'>
            <h3 className='text-3xl text-yellow-500 font-medium py-2 md:text-5xl md:font-bold'>Oparinde Toluwalope</h3>
            <h1 className='text-xl py-2 dark:text-white '>Web Developer, Full stack.</h1>
            <p className='text-md py-5 leading-8 text-gray-600 max-w-md md:text-xl m-auto dark:text-gray-300'>Hello, I am expert  in Reactjs, HTML and CSS, postgresql, and Ruby on Rails. Motivated with 3 years experience in Web development, dedicated and hard working with internal drive to deliver.</p>
          </div>
          <div className='flex justify-center text-3xl gap-5 text-gray-600 md:text-4xl dark:text-gray-300'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className='relative bg-gradient-to-b from-yellow-500 w-40 h-40 mx-auto mt-10 rounded-full overflow-hidden md:w-90 md:h-90'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>
        
        {/* Services section */}
        <section className='mt-10'>
          <div className='text-center dark:text-gray-300'>
            <h2 className='text-3xl py-1 font-medium dark:text-white'>Services I offer.</h2>
            <p classname='text-md text-gray-600 py-5 leading-8 md:text-xl m-auto'>I build web application that is cross platformed, responsive and engaging. </p>
            <p classname='text-md text-gray-600 py-5 leading-8 md:text-xl m-auto'>I collaborate and assist senior web developers as well as backend Developers to ensure syncronization and smooth operation of websites</p>
          </div>
          <div className=' m-10 lg:flex gap-10 '>
            <div className='text-center shadow-lg p-10 border-solid border-yellow-500 border-2 rounded-xl my-10 dark:border-4'>
              <Image className='m-auto' src={design} width={60} height={60} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Design</h3>
              <p className='dark:text-gray-300'>Work closely with designers to implement visual and interactive elements.</p>
              <h4 className='py-4 text-yellow-500'>Design Tools I Use</h4>
              <p className='text-gray-600 py-1 dark:text-gray-300'>Photoshop</p>
              <p className='text-gray-600 py-1 dark:text-gray-300'>Illustrator</p>
              <p className='text-gray-600 py-1 dark:text-gray-300'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 border-solid border-yellow-500 border-2 rounded-xl my-10 dark:border-4'>
              <Image className='m-auto' src={code} width={60} height={60} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Front-end Development</h3>
              <p className='dark:text-gray-300'>Writing clear and maintainable codes to build component and interactivity in websites.</p>
              <h4 className='py-4 text-yellow-500'>Design Tools I Use</h4>
              <p className='text-gray-600 py-1 dark:text-gray-300'>HTML & Css</p>
              <p className='text-gray-600 py-1 dark:text-gray-300'>Javascript</p>
              <p className='text-gray-600 py-1 dark:text-gray-300'>React</p>
            </div>
            <div className='text-center shadow-lg p-10 border-solid border-yellow-500 border-2 rounded-xl my-10 dark:border-4'>
              <Image className='m-auto' src={consulting} width={60} height={60} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Full-stack development</h3>
              <p className='dark:text-gray-300'>Integrating both frontend annd backend together to create a fully functional website</p>
              <h4 className='py-4 text-yellow-500'>Design Tools I Use</h4>
              <p className='text-gray-600 py-1 dark:text-gray-300'>Ruby on Rails</p>
            </div>
          </div>
        </section>
        <section className='mt-10'>
          <div className='md:max-w-lg md:text-2xl md:m-auto md:text-center dark:text-gray-300'>
            <h2 className='text-3xl py-1 font-medium dark:text-white'>Services I offer.</h2>
            <p classname='text-md text-gray-600 max-w-sm py-5 leading-8 dark:text-gray-300'>While still updating this space, here are some of the projects I am working on</p>
            <br/>
            <p classname='text-md text-gray-600 max-w-sm py-5 leading-8 dark:text-gray-300'></p>
          </div>
          <br/>
          <hr/>
          <br/>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
