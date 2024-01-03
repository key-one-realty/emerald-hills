import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { Children, useState, useEffect, useRef } from 'react'
import useBreakpoint from './hooks/Breakpoint';

const HorizontalScroll = ({ children, targetRef, refType }) => {
    const sectionRef = useRef(null);

    const { isMobile, isTablet, isLaptop,isDesktop } = useBreakpoint();

    const [opulenceScroll, setOpulenceScroll] = useState('-75vw');
    const [luxuryScroll, setLuxuryScroll] = useState('-100vw');

    const [scrollHeight, setScrollHeight] = useState((Children.count(children) - 1) * 600 + "px");
    const [interiorHeight, setInteriorHeight] = useState((Children.count(children) - 1) * 550 + "px");
    const [endAnimation, setEndAnimation] = useState('2000 top');


    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const refToCleanup = sectionRef.current;

    return () => {
        gsap.killTweensOf(refToCleanup);
    }
    }, [])

    useEffect(() => {
        if (isMobile){
            setOpulenceScroll('-340vw');
            setLuxuryScroll('-340vw');
        } else if (isTablet) {
            setOpulenceScroll('-180vw');
            setLuxuryScroll('-150vw');
        } 
        else if (isLaptop) {
            setOpulenceScroll('-75vw');
            setLuxuryScroll('-150vw');
            setScrollHeight((Children.count(children)- 1) * 600 + "px");
        }
        else if (isDesktop) {
            setLuxuryScroll('-200vw');
            setScrollHeight((Children.count(children) - 1) * 640 + "px");
        }
        else {
            setOpulenceScroll('-75vw');
            setLuxuryScroll('-100vw');
        }

    }, [isMobile, isTablet, isLaptop, isDesktop])

    useEffect(() => {
        if (!targetRef) return;

        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0,
        },{
            translateX: refType === "opulence" ? opulenceScroll : luxuryScroll,
            ease: 'none',
            scrollTrigger: {
                trigger: targetRef.current,
                scrub: true,
                pin:  true,
                start: 'top top',
                end: '2000 top',
            }
        })
        
        return () => {
            pin.kill();
        }
    }, [targetRef, refType, isMobile, isTablet, isLaptop, isDesktop, opulenceScroll, luxuryScroll])

  return (
    <div ref={targetRef} className={`relative w-full`} style={{ height: refType === "opulence" ? interiorHeight : scrollHeight, paddingTop: 3 + "px", paddingBottom: 20 + "px" }} >
        <div className="sticky top-0 left-5 flex overflow-hidden items-center scrollbar-hide" style={{ width: 80 + "vw", marginTop: 20 + "px" }}>
            <div ref={sectionRef} className='flex justify-center items-center gap-4'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default HorizontalScroll;