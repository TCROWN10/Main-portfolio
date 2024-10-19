import React from 'react'
// import icons
import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs'
// Links
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-xl text-white/50">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            to="home"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-30}
            to="services"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            to="work"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
