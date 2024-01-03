import React, {useEffect, useState} from 'react'

const useBreakpoint = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);


    useEffect(() => {
        changeBreakpoint();
        window.addEventListener('resize', changeBreakpoint);

        return () => {
            window.removeEventListener('resize', changeBreakpoint);
        }
    }, [])

    const changeBreakpoint = () => {
        window.scrollTo(0, 0);
        if (window.innerWidth <= 640) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        if (window.innerWidth > 640 && window.innerWidth <= 1024) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
        if (window.innerWidth > 1024 && window.innerWidth <= 1440) {
            setIsLaptop(true);
        } else {
            setIsLaptop(false);
        }
        if (window.innerWidth > 1440) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }

  return { isMobile, isTablet, isLaptop, isDesktop }
}

export default useBreakpoint;