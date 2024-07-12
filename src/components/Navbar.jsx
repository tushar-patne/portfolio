import React from 'react'

function Navbar() {
  return (
    <nav className='sticky top-0 z-50  backdrop-blur-xl sm:px-20 flex justify-between items-center my-2'>
        <h1 className='text-primary text-xl font-semibold py-2 hidden sm:inline-block'>Tushar Patne</h1>
        <div className='flex justify-between items-center gap-1 text-secondary-light'>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#skill">skill</a>
            <a href="#work">work</a>
            <a href="https://github.com/tushar-patne" target='_main'>projects</a>
            <a href="/public/tushar-resume-0.pdf" download>
              <button className='bg-primary text-white rounded-3xl px-3 py-1'><span className='hidden sm:inline-block'>resume</span> <i className="fa-solid fa-download"></i></button>
            </a>
        </div>
    </nav>
  )
}

export default Navbar