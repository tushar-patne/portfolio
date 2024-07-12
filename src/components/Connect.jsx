import React from 'react'

function Connect() {
  return (
    <div id='connect' className='sm:px-20 mt-10 py-10 px-10 bg-primary'>
        <div className="sss"></div>
        <section className='flex flex-col gap-16'>
            <div className='sm:flex justify-between items-center text-white'>
                <div>
                  <h1 className='text-4xl font-semibold'>contact me</h1>
                  <div className='flex justify-between gap-5 mt-10'>
                      <a className='flex gap-2 px-4 py-2 opacity-80 items-center ' href="tel:+91 9702800841"><i className="fa-solid fa-phone"></i> <span>call</span></a>
                      <a className='flex gap-2 px-4 py-2 opacity-80 items-center ' href="mailto:patnetushar2000@gmail.com"><i className="fa-regular fa-envelope"></i> <span>mail</span></a>
                      <a className='flex gap-2 px-4 py-2 opacity-80 items-center ' href="https://www.linkedin.com/in/tushar-patne-091772191"><i className="fa-brands fa-linkedin-in"></i> <span>linkedin</span></a>
                  </div>
                </div>
                <p className='mt-5 sm:mt-0 sm:w-1/3 opacity-50'>Hello there! I'm glad you're here. Whether you're a hiring manager interested in my professional background or someone looking to collaborate on a project, I'm excited to connect with you. Feel free to connect with me to start a conversation. I'm eager to discuss how we can work together or answer any questions you may have.</p>
            </div>
            <div className='flex flex-wrap gap-5 opacity-75'>
               
            </div>
        </section>
    </div>
  )
}

export default Connect