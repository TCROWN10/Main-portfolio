import React from 'react'

// services data
const services = [
  {
    name: 'Software Development',
    desc: 'Taking responsibility in the development and maintenance of software applications, and work closely with other professionals, including project managers, designers, and quality assurance, to ensure the success of software projects.'
  },
  {
    name: 'Web Design',
    desc: 'I create the visual components of websites, and work closely '
  },
 
]

const Services = () => {
  return (
    <section className="section lg:mb-52" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <div
            className="flex-1 mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-[#006dff] mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Software Developer & a Blockchain-developer with over 3 year of experience
            </h3>
            <button className="btn btn-sm"><a  href="https://github.com/TCROWN10" target="_blank">See my work</a></button>
          </div>
          {/* services */}
          <div
            className="flex-1"
          >
            {/* services list */}
            {services.map((service, index) => {
              const { name, desc } = service
              return (
                <div
                  key={index}
                  className="border-b border-white/20 mb-[38px] flex pb-4"
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 text-blue">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">{desc}</p>
                  </div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
