import React, {useEffect, useState} from 'react'

const useBreakpoint = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
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
        if (window.innerWidth > 1024) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }

  return { isMobile, isTablet, isDesktop }
}

export default useBreakpoint;