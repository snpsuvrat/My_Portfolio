import React from 'react'

const Summary = () => {
  return (
    <div className="bg-black text-amber-50 py-12 px-6">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold font-serif text-center md:text-left mb-6">
        Summary
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto md:mx-0 text-center md:text-left">
        I am an entry-level Frontend / MERN Developer with hands-on experience through industrial training and a remote internship. I have worked on building responsive user interfaces using HTML, CSS, JavaScript, and React, and have basic exposure to backend technologies like Node.js, Express, and MongoDB.
      </p>
    </div>
  )
}

export default Summary
