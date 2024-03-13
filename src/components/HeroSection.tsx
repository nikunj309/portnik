"use client"
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
// import { Button } from './ui/moving-border'
import { SocialIcon } from 'react-social-icons';

const HeroSection = () => {
  const words = [
    {
      text: "Hello ",
      className: 'mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
    },
    {
      text: "there!",
      className: 'mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
    },
    {
      text: "👋",
      className: 'mt-20 md:mt-0 text-4xl md:text-7xl font-bold  text-yellow'
    },
    {
      text: "I'm ",
      className: 'hidden md:inline mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
    },
    {
      text: "Nikunj",
      className: ' hidden md:inline mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-100 to-orange-400 ',
    },
  ];

  const words2 = [
    {
      text: "I'm ",
      className: ' md:hidden mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
    },
    {
      text: "Nikunj",
      className: 'md:hidden mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-100 to-orange-400 ',
    },
  ];
  return (
    <div className='h-auto md:h-[46rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-[#02081a] '>
      <div className='p-4 relative z-10 w-full text-center'>
        {/* <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Hello there! <span className='text-yellow-50'>👋 </span>I'm Nikunj, </h1> */}
        <div className='justify-center'>
          <TypewriterEffectSmooth words={words} className='justify-center flex flex-wrap' />
          <TypewriterEffectSmooth words={words2} className='justify-center md:hidden flex flex-wrap' />
        </div>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-3xl mx-auto'> a passionate Full Stack Developer. With a love for coding and a knack for turning ideas into functional, user-friendly applications, I bring a dynamic blend of creativity and technical expertise to every project. \"Let's\" build something remarkable together!</p>
        <div className='mt-6'>
          {/* <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Resume
          </Button> */}
        </div>
        <div className='flex text-center justify-center m-10 gap-4'>
        <SocialIcon url="https://x.com/NikunjDudhat8" bgColor='black' />
        <SocialIcon url="https://linkedin.com/in/nikunj-dudhat-965193222" />
        <SocialIcon url="https://github.com/nikunj309" />
          {/* <Image className=' bg-slate-200' src={github} alt='githib' width={24} height={24} />
          <Image src={linkedin} alt='linkedin' width={24} height={24} /> */}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default HeroSection