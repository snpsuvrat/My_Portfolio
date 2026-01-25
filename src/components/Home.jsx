// import React from 'react'
import Download from './Download'

const Home = () => {
  return (
    <div className="bg-black text-amber-50  flex flex-col-reverse md:flex-row items-center justify-center px- py-12 gap-10">

      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <h1 className="text-2xl md:text-3xl">Hii, I am</h1>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Suvrat Narayan Pandey</h1>
        <h2 className="text-lg md:text-xl mt-2">Web Developer.</h2>

        {/* Download Resume Buttons */}
        <div className="mt-6">
          <Download />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a href="https://www.linkedin.com/in/snpsuvrat/" target="_blank" rel="noopener noreferrer">
            <img
              className="rounded-full hover:scale-110 transition h-12 w-12"
              src="images/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/snpsuvrat" target="_blank" rel="noopener noreferrer">
            <img
              className="rounded-full hover:scale-110 transition h-12 w-12"
              src="images/github.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>

      {/* Right - Profile Image */}
      <div className="flex justify-center">
        <img
          className="rounded-3xl w-60 sm:w-72 md:w-96 lg:w-[720px] object-cover"
          src="images/portfoliopic.png"
          alt="Portfolio"
        />
      </div>
    </div>
  )
}

export default Home
