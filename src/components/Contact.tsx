"use client"

import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                // Reset the form fields after successful submission if needed
                setFormData({ name: '', email: '',subject: '', message: '' });
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="h-[50rem] w-full dark:bg-[#02081a] bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='h-full bg-primary/30 '>
                <div className='container mx-auto py-12 text-center xl:text-left flex items-center justify-center h-full'>
                    <div className='flex flex-col md:w-full w-80 max-w-[700px]'>
                        <h2 className='md:text-7xl text-center justify-center text-3xl lg:text-5xl font-bold mt-4 mb-14 text-white relative z-20'>
                        Time to <span className='animate-pulse bg-gradient-to-r text-transparent from-orange-400 to-orange-600 bg-clip-text'>succeed</span> together
                        </h2>
                        <form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-6 w-full mx-auto'>
                            <div className='flex gap-x-6 w-full'>
                                <input type='text' placeholder='name' name="name"
                                    value={formData.name}
                                    onChange={handleChange} className='input' />
                                <input type='text' placeholder='email' name="email"
                                    value={formData.email}
                                    onChange={handleChange} className='input' />
                            </div>
                            <input type='text' placeholder='subject'
                                className='input'
                                name='subject'
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <textarea placeholder='message' name="message"
                                value={formData.message}
                                onChange={handleChange} className='textarea'></textarea>
                            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden mb-20 hover:border-accent group'>
                                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Submit</span>
                                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact