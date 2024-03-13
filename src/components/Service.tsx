import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import { SparklesCore } from './ui/sparkles';

const Service = () => {
    return (
        <div>
            <div className=' w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
                <h1 className='md:text-7xl text-center justify-center text-3xl lg:text-4xl font-bold mt-6 text-white relative z-20'>My Services</h1>
                <div className="w-[40rem] h-20 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    )
}

export const projects = [
    {
        title: "Web Developement",
        description:
            "I craft beautiful, interactive, and performant web applications using the latest advancements in React and Next.js.",
        // link: "https://stripe.com",
    },
    {
        title: "App Developement",
        description:
            "I build beautiful, high-performing mobile apps for Android & iOS using React Native. Let's create something amazing together!",
        // link: "https://netflix.com",
    },
    {
        title: "Backend Development",
        description:
            "I craft robust and scalable backend systems using Node.js and Express to fuel your web applications.RESTful API development,Database integration (e.g., MongoDB, SQL databases),User authentication and authorization",
        // link: "https://google.com",
    },

];

export default Service