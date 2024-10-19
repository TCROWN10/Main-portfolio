import React from 'react';
// images
import Image from '../assets/Tobi.png';

import { Link } from 'react-scroll'

const Banner = () => {
    return(
        <section className='min -h-[85vh] lg:min-h-[78vh] flex items-center'
        id="home">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    {/* text */}
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                            T <span className='text-[#006dff]'>CROWN</span>
                        </h1>
                        <div className='mb-4 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                            <p className='text-[#006dff] mr-4'> I am a <span className="text-white">Developer</span></p>
                        </div>
                        <p className='mb-8 max-w-lg mx-auto lg:mx-0'>I'm a motivated professional whose expertise is in HTML5,CSS3, Javascript, TailwindCSS, ReactJS and API's. Adept at troubleshooting and resolving complex technical issues, while consistently meeting deadlines and client expectations. </p>
                        <div className='flex gap-x-6 max-w-max mx-auto lg:mx-0 items-center mb-12'>
                            <button className='btn btn-lag'>
                                <Link to="contact" smooth={true}>Contact me</Link>
                            </button>
                            <Link to="work" smooth={true} className="text-gradient btn-link cursor-pointer "> my Portfolio</Link>
                        </div>
                    </div>
                    {/* image */}
                    <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px]'>
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
        </section>
            
    )
}

export default Banner;