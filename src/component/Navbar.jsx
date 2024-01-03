import Image from 'next/image';
import React from 'react'

const Navbar = ({ communitySection, exteriorSection, interiorSection, contactSection }) => {

    const [showMobileNav, setShowMobileNav] = React.useState(false);

    const handleScrollToSection = (section) => {
        section.scrollIntoView({ behavior: 'smooth' });
        setShowMobileNav(false);
    }

  return (
<>
        <nav className="hidden lg:flex items-center justify-between w-10/12 xl:w-9/12 px-4 py-8">
            <div className="flex items-center space-x-4">
              <button className="w-44 flex items-center space-x-2 px-10 py-5 bg-sky-400 rounded-[10px] shadow justify-center gap-2.5 text-right text-white text-base font-semibold leading-relaxed tracking-tight font-poppins">
                Book a Call
              </button>
            </div>
            <div className="nav-links w-[50vw] flex justify-center items-center" style={{width: 50 + 'vw'}}>
              <ul className="flex w-full justify-evenly items-center space-x-4 text-slate-800 text-lg font-normal font-poppins">
                <li className="text-white text-lg font-normal leading-relaxed font-poppins">
                  <p onClick={() => handleScrollToSection(communitySection.current)}>Community</p>
                </li>
                <li className="text-white text-lg font-normal leading-relaxed font-poppins">
                  <p onClick={() => handleScrollToSection(exteriorSection.current)}>Exterior</p>
                </li>
                <li className="text-white text-lg font-normal leading-relaxed font-poppins">
                  <p onClick={() => handleScrollToSection(interiorSection.current)}>Interior</p>
                </li>
                <li className="text-white text-lg font-normal leading-relaxed font-poppins">
                  <p onClick={() => handleScrollToSection(contactSection.current)}>Contact</p>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <button className="w-44 flex items-center space-x-2 px-10 py-5 bg-sky-400 rounded-[10px] shadow justify-center gap-2.5 text-right text-white text-base font-semibold leading-relaxed tracking-tight font-poppins">
                Inquire Now
              </button>
            </div>
          </nav>
          <nav className='mobile_nav flex lg:hidden justify-center items-center px-10 py-9 w-full'>
            <div className='nav-contents w-full flex flex-col justify-center items-center pt-6 gap-4'>
                <div className='flex justify-between items-center w-full'>
                    <div className='inquire_now_btn'>
                        <button className='flex items-center px-8 py-3 bg-sky-400 rounded-[10px] shadow justify-center gap-2.5 text-right text-white text-base font-semibold leading-relaxed tracking-tight font-poppins'>
                            Inquire Now
                        </button>
                    </div>
                    <div className='hamburger' onClick={() => setShowMobileNav(!showMobileNav)}>
                        <Image src='/Menu.svg' alt='Hamburger menu' width={40} height={40} />
                    </div>
                </div>
                <div className={`${ showMobileNav ? 'reveal' : 'hide'} nav-links w-full flex flex-col justify-center items-center`}>
                    <ul className='mobile-nav-dropdown flex flex-col w-full justify-center items-center text-slate-800 text-lg font-normal font-poppins'>
                        <li className='text-white text-lg font-normal font-poppins'>
                            <p onClick={() => handleScrollToSection(communitySection.current)}>Community</p>
                        </li>
                        <li className='text-white text-lg font-normal font-poppins'>
                            <p onClick={() => handleScrollToSection(exteriorSection.current)}>Exterior</p>
                        </li>
                        <li className='text-white text-lg font-normal font-poppins'>
                            <p onClick={() => handleScrollToSection(interiorSection.current)}>Interior</p>
                        </li>
                        <li className='text-white text-lg font-normal font-poppins'>
                            <p onClick={() => handleScrollToSection(contactSection.current)}>Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>
          </>
  )
}

export default Navbar;