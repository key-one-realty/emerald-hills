import React, { useRef } from 'react'
import { useScroll, useTransform , motion } from 'framer-motion';
import Image from 'next/image';

const MobileHorizontalScroll = () => {

    const mobileTargetRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: mobileTargetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-65%", "1%"]);



  return (
    <div
    className="lg:hidden banner w-10/12 xl:w-9/12 flex flex-col lg:flex-row gap-10 lg:gap-24 justify-between items-center"
    ref={mobileTargetRef}
  >
    <h1 className="flex lg:hidden text-3xl lg:text-5xl text-slate-800 font-bold lg:leading-[56px]">
      A Lifestyle Beyond Imagination
    </h1>
    <div className='relative ml-[50vw] h-[200vh]' style={{ marginLeft: 70 + "vw" }}>
        <motion.div style={{ x }} className="images-section flex w-full lg:w-[42.917vw] gap-4 sticky top-0 h-screen overflow-hidden items-center">
        {/* <HorizontalScroll targetRef={luxuryBannerContainer}> */}
        <div className="image-1 relative w-[313px] md:w-[60vw] lg:w-[300px] h-[230px] lg:h-[450px] rounded-[10px]">
            <Image
            src="/Placeholder.png"
            alt="placeholder"
            fill="responsive"
            className="object-cover rounded-[10px]"
            />
        </div>
        <div className="image-2 relative w-[313px] lg:mt-12 h-[230px] lg:h-[450px] rounded-[10px]">
            <Image
            src="/placeholder2.png"
            alt="placeholder 1"
            fill="responsive"
            className="object-cover rounded-[10px]"
            />
        </div>
        {/* </HorizontalScroll> */}
        </motion.div>
    </div>
    <div className="know-more w-full flex flex-col justify-center items-center lg:w-[36.528vw]">
      <h1 className="hidden lg:flex text-5xl text-slate-800 font-bold leading-[56px]">
        A Lifestyle Beyond Imagination
      </h1>
      <p className="text-base text-center text-zinc-600 font-normal pb-14 pt-10 font-poppins leading-relaxed">
        Immerse yourself in the realm of unseen prestige and exclusivity
        at Emerald Hills.
        <br /> <br />
        It’s an invitation to a world where sophistication meets serenity.
      </p>
      <button className="flex items-center space-x-2 px-10 py-5 bg-sky-400 rounded-[10px] shadow justify-center gap-2.5 text-right text-white text-base font-semibold leading-relaxed tracking-tight font-poppins">
        Know More
      </button>
    </div>
  </div>
  )
}

export default MobileHorizontalScroll;