import React from "react";

function Work() {
  const experience = [
    `Responsible for End to End Automation Framework (with over 300+ Testcases).`,
    `Drive Test Automation and helping to drive continuous improvement in
automation practices.`,
    `Prepare high-level and detailed test estimates for manual, automation & API
testing.`,
    `Perform manual testing for new features, ensuring comprehensive test
coverage and quality assurance.`,
    `Regularly incorporate new feature scenarios into automation frameworks to
maintain robust test coverage.`,
    `Collaborate closely with cross-functional teams to troubleshoot issues and
ensure seamless integration of quality standards across projects.`,
    `Conducted frontend work, successfully fixing defects and bugs to enhance
application functionality.`,
  ];
  return (
    <div id="work" className="sm:px-20 my-10 py-10 px-10">
      <div className="ssp"></div>
      <section className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold">work experience</h1>
        <p className="sm:w-1/2 text-secondary-light">
          I have 2+ years of experience in automation framework development and frontend development
        </p>

        
        <ul className="flex flex-col justify-between gap-4 py-10 sm:px-20 text-secondary-light">
          {experience.map((item, index) => (
            <li key={index} className={`${index%2===0? 'self-start text-left': 'self-end '} flex flex-col gap-3 p-2 border border-primary-light rounded-lg w-2/3`}>
                <img className="w-6 h-6" src="https://static.vecteezy.com/system/resources/previews/035/621/556/original/blue-and-purple-arrow-icon-on-transparent-background-png.png" alt="" />
                <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Work;
