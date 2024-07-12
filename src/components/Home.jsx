import React from 'react'

function Home() {
  return (
    <div id='home' className='sm:px-20 my-10 py-10 px-10'>
        <div className="ssp"></div>
        <section className='flex justify-between'>
        <div className='flex flex-col gap-5 w-full md:w-2/3 md:pr-5'>
            <h1 className='text-5xl font-bold'>im tushar patne, a <span className='text-primary'>software engineer</span></h1>
            <p className='text-secondary-light'>Experienced Quality Engineer with over 2+ years of experience in the insurance
domain, specializing in UI and API automation and manual testing. Recognized for consistently delivering high-quality work on time, with a proven ability to adapt quickly to
new work environments</p>
            <div>
                <a href="#connect"><button className='primary-btn'>contact me</button></a>
                <button className='secondary-btn'>portfolio</button>
            </div>
        </div>
        <img className='relative -top-20 object-cover hidden md:w-1/3  border-primary-light shadow-lg hover:shadow-2xl rounded-full transition-shadow ease-linear' src="/tushar-photo.jpg" alt="" />
    </section>
    </div>
  )
}

export default Home