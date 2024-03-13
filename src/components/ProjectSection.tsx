import React from 'react'
import { SparklesCore } from './ui/sparkles';
import { PinContainer } from './ui/3d-pin';
import Link from 'next/link';
import Image from 'next/image';
import github from "../../public/github.png"
import blogweb from "../../public/blogweb.png"
import { SocialIcon } from 'react-social-icons';

const ProjectSection = () => {
    return (
        <div className="min-h-screen relative mt-4 mb-4 w-full bg-[#010210] flex flex-col items-center  overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 min-h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <h1 className="md:text-7xl text-center justify-center text-3xl lg:text-5xl font-bold mt-6 text-white relative z-20">
                Projects
            </h1>
            <div className='md:mt-12 mt-52 justify-center'>
                <div className='justify-center'>
                    <PinContainer
                        title="https://cakyy.netlify.app/"
                        href="https://cakyy.netlify.app/"
                    >
                        <div className="flex bg-dark rounded overflow-hidden shadow-lg mx-4 my-6 justify-center flex-col md:flex-row">
                            <div className="md:w-96 w-72 justify-center">
                                <Link href="https://cakyy.netlify.app/" >
                                    <img className="w-full h-full object-cover" src='https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww' alt="Card" />
                                </Link>
                            </div>

                            <div className="md:w-80 w-72 text-center justify-center p-4">
                                <h2 className="text-2xl font-bold mb-2 text-gray-300">Cake Shope</h2>
                                <p className="text-gray-300">Built a successful online cake shop featuring delicious treats, customer reviews, and a touch of sweetness for every occasion.</p>
                                <p className='text-gray-300 mt-3 grid grid-cols-2 gap-2'>
                                    <span>#ReactJs</span>
                                    <span>#NodeJs</span>
                                    <span>#Express</span>
                                    <span>#Mongodb</span>
                                </p>
                                <Link href="https://github.com/nikunj309/cakyy" className='flex gap-4 justify-center items-center mt-6'>
                                    <p>Code</p>
                                    <SocialIcon url="https://github.com/nikunj309/cakyy" />
                                    {/* <Image className=' bg-slate-200' src={github} alt='githib' width={24} height={24} /> */}
                                </Link>
                            </div>
                        </div>
                    </PinContainer>
                </div>

                <div className='mt-72 md:mt-20 mb-20'>
                    <PinContainer
                        title="Blog website video"
                        href="https://www.linkedin.com/posts/nikunj-dudhat-965193222_nextjs-webdevelopment-inovation-activity-7132380874045632512-gVG4?utm_source=share&utm_medium=member_desktop"
                    >
                        {/* <div className="flex bg-dark rounded overflow-hidden shadow-lg mx-4 my-6 max-w-2xl">

                            <div className="w-80 text-center justify-center p-4">
                                <h2 className="text-2xl font-bold mb-2 text-gray-300">cake</h2>
                                <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque reiciendis nihil?</p>
                                <p className='text-gray-300 mt-3 grid grid-cols-2 gap-2'>
                                    <span>#ReactJs</span>
                                    <span>#NodeJs</span>
                                    <span>#Express</span>
                                    <span>#Mongodb</span>
                                </p>
                                <Link href="https://github.com/nikunj309/cakyy" className='flex gap-2 justify-center mt-6'>
                                    <p>Code</p>
                                    <Image className=' bg-slate-200' src={github} alt='github' width={24} height={24} />
                                </Link>
                            </div>
                            <Link href="https://cakyy.netlify.app/" className="w-96">
                                <img className="w-full h-full object-cover" src='https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww' alt="Card" />
                            </Link>
                        </div> */}
                        <div className="flex bg-dark rounded overflow-hidden shadow-lg mx-4 my-6 justify-center flex-col md:flex-row">
                            <div className="md:w-96 w-72 justify-center">
                                <Link href="https://www.linkedin.com/posts/nikunj-dudhat-965193222_nextjs-webdevelopment-inovation-activity-7132380874045632512-gVG4?utm_source=share&utm_medium=member_desktop" >
                                    <Image className="w-full h-full object-cover" src={blogweb} alt="Card" />
                                </Link>
                            </div>

                            <div className="md:w-80 w-72 text-center justify-center p-4">
                                <h2 className="text-2xl font-bold mb-2 text-gray-300">Blog Website</h2>
                                <p className="text-gray-300">Crafted a dynamic blog website using Next.js, showcasing engaging content with seamless navigation and responsive design.</p>
                                <p className='text-gray-300 mt-3 grid grid-cols-2 gap-2'>
                                    <span>#NextJs</span>
                                    <span>#NodeJs</span>
                                    <span>#Express</span>
                                    <span>#Mongodb</span>
                                </p>
                                <Link href="https://github.com/nikunj309/blogtour" className='flex gap-4 justify-center items-center mt-6'>
                                    <p>Code</p>
                                    <SocialIcon url="https://github.com/nikunj309/blogtour" />
                                    {/* <Image className=' bg-slate-200' src={github} alt='githib' width={24} height={24} /> */}
                                </Link>
                            </div>
                        </div>
                    </PinContainer>
                </div>
                <div className='mt-72 md:mt-20 md:mb-20 mb-56'>
                    <PinContainer
                        title="Locker app video"
                        href="https://www.linkedin.com/posts/nikunj-dudhat-965193222_reactnativedeveloper-reactjs-appdevelopment-activity-7146907203088683008-8W2H?utm_source=share&utm_medium=member_desktop"
                    >
                        {/* <div className="flex bg-dark rounded overflow-hidden shadow-lg mx-4 my-6 max-w-2xl">
                            <Link href="https://cakyy.netlify.app/" className="w-96">
                                <img className="w-full h-full object-cover" src='https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww' alt="Card" />
                            </Link>
                            <div className="w-80 text-center justify-center p-4">
                                <h2 className="text-2xl font-bold mb-2 text-gray-300">cake</h2>
                                <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque reiciendis nihil?</p>
                                <p className='text-gray-300 mt-3 grid grid-cols-2 gap-2'>
                                    <span>#ReactJs</span>
                                    <span>#NodeJs</span>
                                    <span>#Express</span>
                                    <span>#Mongodb</span>
                                </p>
                                <Link href="https://github.com/nikunj309/cakyy" className='flex gap-2 justify-center mt-6'>
                                    <p>Code</p>
                                    <Image className=' bg-slate-200' src={github} alt='githib' width={24} height={24} />
                                </Link>
                            </div>
                        </div> */}
                        <div className="flex bg-dark rounded overflow-hidden shadow-lg mx-4 my-6 justify-center flex-col md:flex-row">
                            <div className="md:w-96 w-72 justify-center">
                                <Link href="https://www.linkedin.com/posts/nikunj-dudhat-965193222_reactnativedeveloper-reactjs-appdevelopment-activity-7146907203088683008-8W2H?utm_source=share&utm_medium=member_desktop" >
                                    <img className="w-full h-full object-cover" src='https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Card" />
                                </Link>
                            </div>

                            <div className="md:w-80 w-72 text-center justify-center p-4">
                                <h2 className="text-2xl font-bold mb-2 text-gray-300">Locker App</h2>
                                <p className="text-gray-300">Secure Locker app built with Appwrite for effortless password, note & login management.</p>
                                <p className='text-gray-300 mt-3 grid grid-cols-2 gap-2'>
                                    <span>#React Native</span>
                                    <span>#Appwrite</span>
                                    <span>#Typescript</span>
                                    <span>#javascript</span>
                                </p>
                                <Link href="https://github.com/nikunj309/locker-app" className='flex gap-4 justify-center items-center mt-6'>
                                    <p>Code</p>
                                    <SocialIcon url="https://github.com/nikunj309/locker-app" />
                                    {/* <Image className=' bg-slate-200' src={github} alt='githib' width={24} height={24} /> */}
                                </Link>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection
