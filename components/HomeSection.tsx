//import Image from 'next/image'
//import ProfilePic from '../public/osarogie.jpg' // Save your uploaded image as public/osarogie.jpg
//import { ModeToggle } from './Dark'

export default function HomeSection() {
    return (
    <>
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    👋 Hi, I'm <span className="text-blue-600 dark:text-blue-400">Osarogie Daniel</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                    Full Stack Developer – I build modern web applications using React, Next.js, and Django.
                </p>
                <div className="flex gap-4">
                    <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                        View Projects
                    </a>
                    <a href="#contact" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                        Contact Me
                    </a>
                </div>
            </section>

    </>
    )
}