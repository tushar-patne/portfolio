import React from 'react'

function About() {

  const expertise = [
    {
      image: 'https://cdn-icons-png.flaticon.com/512/1581/1581884.png',
      title: 'manual testing',
      description: 'Experience in incident management, trouble shooting, root cause analysis, creating test plan, reporting'
    },
    {
      image: '/automation.png',
      title: 'automation testing',
      description: 'I specialize in UI and API automation testing, creating robust automation frameworks.'
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/3496/3496508.png',
      title: 'frontend development',
      description: 'I excel in React.js and frontend development, crafting intuitive user interfaces with seamless functionality.'
    }
  ]

  return (
    <div id='about' className='sm:px-20 mb-10 pb-10 px-10'>
      <div className="ssp"></div>
      <section className='flex flex-col gap-5'>
          <h1 className='text-4xl font-semibold'>my expertise</h1>
          <p className='sm:w-1/2 text-secondary-light'>
            my expertise ranges from manual testing to automation framework development to frontend development.
          </p>
          <div className='flex flex-col sm:flex-row justify-between gap-5'>
              {
                expertise.map((item, index) => 
                  <div key={index} className='flex flex-col md:h-64 border justify-around align-middle rounded-lg border-primary-light w-full text-center p-5'>
                    <img src={item.image} className='w-20 h-20 mx-auto' alt="skill icon" />
                    <h2 className='text-3xl'>{item.title}</h2>
                    <p className='text-secondary-light'>{item.description}</p>

                  </div>
              )
              }
          </div>
      </section>
    </div>
  )
}

export default About