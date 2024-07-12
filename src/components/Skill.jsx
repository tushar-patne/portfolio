import React from 'react'

function Skill() {
    const skills = [
        'playwright',
        'BDD cucumber',
        'JMeter',
        'agile',
        'react',
        'gitlab',
        'tailwind',
        'sql',
        'javascript',
        'webpack',
        'java',
        'node',
        'scrum',
        'postman',
        'git',
        'rally',
        'robo3t',
        'github',
    ]
  return (
    <div id='skill' className='sm:px-20 my-10 py-10 px-10 bg-primary'>
        <div className="sss"></div>
        <section className='flex flex-col gap-16'>
            <div className='flex justify-between items-center text-white'>
                <h1 className='text-4xl font-semibold'>professional skills</h1>
                {/* <p className='w-1/3 opacity-50'>most of the value of a testing engineer can be realized when assessing the quality of a developer. here are some professional skill i use mostly.</p> */}
            </div>
            <div className='flex flex-wrap gap-5 opacity-75'>
                {
                    skills.map((skill, index) => 
                        <p key={index} className='px-5 py-2 rounded-full bg-white'>
                            {skill}
                        </p>
                    )
                }
            </div>
        </section>
    </div>
  )
}

export default Skill