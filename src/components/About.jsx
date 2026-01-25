import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Download from './Download'

const About = () => {
  return (
    <>
      <div className="overflow-hidden min-h-screen bg-[rgb(255, 255, 255)]">

        {/* Navbar */}
        <div className="flex flex-col md:flex-row items-center justify-between 
                        border-4 rounded-3xl bg-sky-500 text-indigo-50 px-6 py-4">
          <h1 className="text-2xl md:text-4xl font-semibold">Suvrat Narayan Pandey</h1>

          <div className="flex gap-6 text-lg md:text-2xl mt-4 md:mt-0">
            <Link to="/" className="hover:text-indigo-950">Home</Link>
            <Link to="/About" className="hover:text-indigo-950">About</Link>
          </div>
        </div>

        {/* About Me Section */}
        <div className="border-4 rounded-3xl bg-black text-amber-50 mt-6 px-6 py-10 text-center md:text-left">
          <h1 className="text-xl md:text-2xl mb-4">About me</h1>
          <h1 className="text-3xl md:text-5xl font-mono leading-snug">
            Aspiring Web <br /> Developer
          </h1>

          <div className="mt-6">
            <Download />
          </div>
        </div>

        {/* My Journey Section */}
        <div className="bg-[rgb(221,204,194)] rounded-3xl border-4 mt-10 p-6 md:p-10 text-black">
          <h1 className="text-xl md:text-2xl font-semibold">My Journey</h1>
          <p className="text-base md:text-xl lg:text-2xl mt-6 max-w-5xl leading-relaxed text-gray-700
">
            I am a passionate Frontend and MERN Stack Developer with practical experience from industrial training and a remote internship. I specialize in creating responsive and engaging user interfaces using HTML, CSS, JavaScript, and React.

            I also have foundational experience with backend technologies such as Node.js, Express, and MongoDB, which helps me understand full-stack application flow. I am continuously learning, improving my skills, and looking for opportunities where I can grow while contributing to real-world projects.
            {/* I am a Frontend / MERN Developer with hands-on experience gained through industrial training and a remote internship. I build clean, responsive, and user-focused web interfaces using HTML, CSS, JavaScript, and React. I also work with backend technologies such as Node.js, Express, and MongoDB, enabling me to contribute across the full development lifecycle. I’m passionate about creating practical web solutions and continuously improving my skills through real-world projects. */}
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12 px-6">
          <img
            className="h-60 w-full md:w-1/2 lg:w-1/3 object-cover rounded-3xl hover:scale-105 transition"
            src="images/laptopusing.avif"
            alt="Laptop"
          />
          <img
            className="h-60 w-full md:w-1/2 lg:w-1/3 object-cover rounded-3xl hover:scale-105 transition"
            src="images/developer.jpeg"
            alt="Developer"
          />
        </div>

        {/* Footer */}
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default About
