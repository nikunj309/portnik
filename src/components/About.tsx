import Image from 'next/image'
import React from 'react'
import about from '../../public/vecteezy_developer-png-with-ai-generated_29711176.png'
import { Spotlight } from './ui/Spotlight'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const About = () => {
    return (
        // <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden" >
        //     <Spotlight
        //         className="-top-40 left-0 md:left-60 md:-top-20"
        //         fill="white"
        //     />
        //     <div><h1 className='md:text-7xl text-center justify-center text-3xl lg:text-4xl font-bold mt-6 text-white relative z-20'>More than code, it's a mission</h1></div>
        //     <div className='flex mt-5 justify-center '>
        //         <div className='w-1/2 p-4 m-6'>
        //             <p className='text-lg leading-loose mb-8'>
        //                 I'm a passionate full-stack developer driven by the power of code to create
        //                 beautiful, functional, and impactful web experiences. With a deep
        //                 understanding of both front-end and back-end development, I leverage my
        //                 expertise in:
        //             </p>
        //             <ul className='list-disc pl-4 space-y-2'> {/* Unordered list with spacing */}
        //                 <li className='text-lg'>
        //                     React & Next.js: Building dynamic and interactive user interfaces that are
        //                     performant and SEO-friendly.
        //                 </li>
        //                 <li className='text-lg'>
        //                     Node.js: Crafting robust and scalable backend systems that efficiently
        //                     handle data and server-side logic.
        //                 </li>
        //                 <li className='text-lg'>
        //                     React Native: Bringing your mobile app ideas to life, creating seamless
        //                     experiences for both Android and iOS users.
        //                 </li>
        //             </ul>
        //         </div>
        //         <div><Image width={400} height={400} className='bg-transparent bg-none' alt='img' src={about} /></div>
        //     </div>
        // </div>
        <div>
            <div className="min-h-screen md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className='md:text-7xl text-center justify-center text-3xl lg:text-5xl font-bold mt-1 text-white relative z-20'>More than code, it is a mission</h1>
                    <div className='flex mt-5 justify-center '>
                        <div className='md:w-1/2 w-96 ms:p-4 text-white md:m-6'>
                            <p className='text-lg leading-loose mb-8'>
                                I am a passionate full-stack developer driven by the power of code to create
                                beautiful, functional, and impactful web experiences. With a deep
                                understanding of both front-end and back-end development, I leverage my
                                expertise in:
                            </p>
                            <ul className='list-disc pl-4 space-y-2'> 
                                <li className='text-lg'>
                                    React & Next.js: Building dynamic and interactive user interfaces that are
                                    performant and SEO-friendly.
                                </li>
                                <li className='text-lg'>
                                    Node.js: Crafting robust and scalable backend systems that efficiently
                                    handle data and server-side logic.
                                </li>
                                <li className='text-lg'>
                                    React Native: Bringing your mobile app ideas to life, creating seamless
                                    experiences for both Android and iOS users.
                                </li>
                            </ul>
                        </div>
                        <div><Image width={400} height={400} alt='img' className='hidden md:inline' src={about} /></div>
                    </div>
                </div>
            </div>
            <div className='justify-center'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

const testimonials = [
    {
        title: "ReactJS",
    },
    {
        title: "NextJS",
    },
    {
        title: "NodeJS",
    },
    {
        title: "ExpressJS",
    },
    {
        title: "MongoDb",
    },
    {
        title: "React Native",
    },
    {
        title: "Redux",
    },
    {
        title: "Typescript",
    },
];
export default About