"use client";
import VideoComponent from "@/component/VideoComponent";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import HorizontalScroll from "@/component/HorizontalScroll";
import Navbar from "@/component/Navbar";
import MobileHorizontalScroll from "@/component/MobileHorizontalScroll";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const modalRef = useRef(null);
  const modalContainerRef = useRef(null);
  const bannerContainer = useRef(null);
  const luxuryBannerContainer = useRef(null);
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);

  const handlePlayBtn = () => {
    if (!showVideo) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    setShowVideo(true);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowVideo(false);
    }
  };

  const handleModalScroll = () => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      modalContainerRef.current.style.top = `${
        window.scrollY + 0.5 * window.innerHeight
      }px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "";
    }
  };

  useEffect(() => {
    handleModalScroll();
  }, [showVideo]);

  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section>
        <div className="legend bg-gradient-to-b from-slate-800 to-slate-800 h-[100svh] w-full flex flex-col justify-start items-center">
          <Navbar />
          <div className="legend-contents w-10/12 xl:w-9/12 h-[65%]">
            <div className="flex flex-col justify-center items-start h-full">
              <h1 className="text-white text-3xl lg:text-[64px] lg:leading-[72px] w-[70.556vw] 2xl:w-[54.146vw]">
                <span className="font-bold">
                  {" "}
                  Discover Unprecedented Luxury
                </span>{" "}
                at Emerald Hills, Dubai
              </h1>
              <p className="text-white text-base font-normal pb-14 pt-10 font-poppins leading-relaxed lg:w-[31.319vw]">
                Welcome to Emerald Hills, where opulence meets exclusivity.
                Explore our exclusive Ultra Luxury Mansion and redefine your
                concept of luxury living in the heart of Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full overflow-x-hidden relative flex flex-col items-center justify-center py-40">
        <MobileHorizontalScroll />
        <div
          className="lg:flex banner w-10/12 xl:w-9/12 hidden flex-col lg:flex-row gap-10 lg:gap-24 justify-between items-center"
          ref={luxuryBannerContainer}
        >
          <h1 className="flex lg:hidden text-3xl lg:text-5xl text-slate-800 font-bold lg:leading-[56px]">
            A Lifestyle Beyond Imagination
          </h1>
          <div className="images-section flex lg:w-[42.917vw] gap-4">
            <div className="image-1 relative w-[313px] lg:w-[300px] h-[230px] lg:h-[450px] rounded-[10px]">
              <Image
                src="/Placeholder.png"
                alt="placeholder"
                fill="responsive"
                className="object-cover rounded-[10px]"
              />
            </div>
            <div className="image-2 relative w-[300px] lg:mt-12 h-[230px] lg:h-[450px] rounded-[10px]">
              <Image
                src="/placeholder2.png"
                alt="placeholder 1"
                fill="responsive"
                className="object-cover rounded-[10px]"
              />
            </div>
          </div>
          <div className="know-more w-full flex flex-col justify-center items-start lg:w-[36.528vw]">
            <h1 className="hidden lg:flex text-5xl text-slate-800 font-bold leading-[56px]">
              A Lifestyle Beyond Imagination
            </h1>
            <p className="text-base text-zinc-600 font-normal pb-14 pt-10 font-poppins leading-relaxed">
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
        <div className="radial-gradient"></div>
        <div className="radial-gradient-2"></div>
      </section>
      <section className="community flex justify-center items-center bg-sky-100 h-fit lg:h-[53.776vh]">
        <div className="community-contents py-10 lg:py-0 w-10/12 xl:w-9/12 flex flex-col lg:flex-row gap-24 justify-center items-center relative">
          <div className="community-contents-1 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-3xl lg:text-[3.333vw] text-slate-800 font-bold lg:leading-[3.889vw]">
              Community of Unmatched Elegance
            </h1>
            <p className="text-base text-zinc-600 font-normal font-poppins leading-relaxed">
              Enjoy mornings with birdsongs and golf, leisurely afternoons at
              world-class fitness facilities, and evenings creating cherished
              memories.
            </p>
          </div>
          <div
            className="community-contents-2 flex flex-col gap-4 w-full lg:w-[50vw] relative"
            onClick={handlePlayBtn}
          >
            <div className="video-thumbnail w-[43.194vw] h-[55.776vh]">
              <Image
                src="/video_placeholder.png"
                alt="video-thumbnail"
                fill="responsive"
                className="object-cover rounded-[10px]"
              />
            </div>
            <div className="community-contents-3 flex flex-col gap-4 items-center justify-center absolute lg:top-[50%] lg:bottom-[50%] lg:-left-16">
              <Image
                src="/play_video.svg"
                alt="play video"
                width={140}
                height={140}
              />
            </div>
          </div>
        </div>
        {showVideo && (
          <VideoComponent
            setShowVideo={setShowVideo}
            modalRef={modalRef}
            modalContainerRef={modalContainerRef}
          />
        )}
      </section>
      <section
        ref={targetRef1}
        className="w-full overflow-x-hidden relative flex flex-col items-center justify-center py-20"
      >
        <div className="banners w-[100vw]">
          <div className="banner-header w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-center text-slate-800 text-3xl lg:text-5xl font-bold lg:leading-[56px] lg:w-[60.139vw]">
              The Pièce de Résistance: Ultra Luxury Mansion
            </h1>
            <p className="lg:text-center px-10 text-zinc-600 text-sm text-justify lg:text-base font-normal leading-relaxed lg:w-[49.653vw]">
              Behold the crown jewel The grand entry foyer is not just a
              doorway; it's your passage into a realm where every step echoes
              the sophistication that beacons premium Italian craftsmanship.
              Fully automated glass walls, a basement full of natural light, a
              luxurious Havana pool, and a private rooftop helipad are your
              chances to grasp what luxury living really is.
            </p>
          </div>
          <div className="banner-contents w-full flex flex-col items-center justify-center gap-10">
            <div
              className="banner-contents-1 w-full pl-3 flex items-center justify-center gap-7 overflow-x-hidden"
              ref={bannerContainer}
            >
              <HorizontalScroll targetRef={targetRef1}>
                <div className="banner-contents-1-1 relative w-[353px] h-[253px] lg:w-[42.361vw] lg:h-[45.767vh]">
                  <Image
                    src="/banner_1.png"
                    alt="banner-1"
                    fill="responsive"
                    className="object-cover rounded-[10px]"
                  />
                </div>
                <div className="banner-contents-1-2 relative w-[353px] h-[253px] lg:w-[42.361vw] lg:h-[45.767vh]">
                  <Image
                    src="/banner_2.png"
                    alt="banner-2"
                    fill="responsive"
                    className="object-cover rounded-[10px]"
                  />
                </div>
                <div className="banner-contents-2-1 relative w-[353px] h-[253px] lg:w-[42.361vw] lg:h-[45.767vh]">
                  <Image
                    src="/banner_3.png"
                    alt="banner-3"
                    fill="responsive"
                    className="object-cover rounded-[10px]"
                  />
                </div>
                <div className="banner-contents-2-2 relative w-[353px] h-[253px] lg:w-[42.361vw] lg:h-[45.767vh]">
                  <Image
                    src="/banner_2.png"
                    alt="banner-2-1"
                    fill="responsive"
                    className="object-cover rounded-[10px]"
                  />
                </div>
              </HorizontalScroll>
            </div>
          </div>
        </div>
      </section>
      <section className="stats bg-sky-100 py-16 w-full flex justify-center items-center">
        <div className="stats-container w-10/12 xl:w-9/12 grid grid-cols-2 gap-7 lg:flex justify-evenly items-center">
          <div className="sq-ft flex flex-col items-center justify-center">
            <h1 className="text-sky-400 text-[64px] leading-[72px]">30K</h1>
            <p className="text-zinc-600 text-base font-normal leading-relaxed font-poppins">
              Sq.Feet Area
            </p>
          </div>
          <div className="parking flex flex-col items-center justify-center">
            <h1 className="text-sky-400 text-[64px] leading-[72px]">6</h1>
            <p className="text-zinc-600 text-base font-normal leading-relaxed font-poppins">
              Parking Space
            </p>
          </div>
          <div className="Gym flex flex-col items-center justify-center">
            <h1 className="text-sky-400 text-[64px] leading-[72px]">1</h1>
            <p className="text-zinc-600 text-base font-normal leading-relaxed font-poppins">
              Gym Area
            </p>
          </div>
          <div className="Cinema flex flex-col items-center justify-center">
            <h1 className="text-sky-400 text-[64px] leading-[72px]">1</h1>
            <p className="text-zinc-600 text-base font-normal leading-relaxed font-poppins">
              Cinema Room
            </p>
          </div>
          <div className="bedrooms flex flex-col items-center justify-center">
            <h1 className="text-sky-400 text-[64px] leading-[72px]">7</h1>
            <p className="text-zinc-600 text-base font-normal leading-relaxed font-poppins">
              Bedrooms
            </p>
          </div>
          <div className="guest_bedrooms flex flex-col items-center justify-center">
            <h1 className="text-sky-400 text-[64px] leading-[72px]">2</h1>
            <p className="text-zinc-600 text-base font-normal leading-relaxed font-poppins">
              Guest Bedrooms
            </p>
          </div>
        </div>
      </section>
      <section className="brochure flex justify-center items-center py-40">
        <div className="brochure-contents w-10/12 xl:w-9/12 h-full lg:h-[30.892vh] px-5 bg-sky-100 rounded-[15px] flex flex-col lg:flex-row items-center justify-center py-4 lg:py-0 gap-10">
          <div className="brochure-contents-1 flex flex-col items-start justify-center gap-8">
            <h1 className="text-slate-800 text-center lg:text-left text-3xl lg:text-4xl font-bold w-full">
              Want to know more about your Dream Home?
            </h1>
            <button className="hidden lg:flex items-center space-x-2 px-10 py-3 bg-sky-400 rounded-[10px] shadow justify-center gap-2.5 text-right text-white text-base font-semibold leading-relaxed tracking-tight font-poppins">
              Download Our Brochure
            </button>
          </div>
          <div className="brochure-contents-2 flex flex-col items-center justify-center gap-10">
            <div className="brochure-img-container relative w-[80vw] lg:w-[30.819vw] h-[38.547vh] lg:-mt-28">
              <Image
                src="/brochure.png"
                alt="brochure"
                fill="responsive"
                className="object-cover"
              />
            </div>
          </div>
          <button className="lg:hidden flex items-center space-x-2 px-10 py-3 bg-sky-400 rounded-[10px] shadow justify-center gap-2.5 text-right text-white text-base font-semibold leading-relaxed tracking-tight font-poppins">
            Download Our Brochure
          </button>
        </div>
      </section>
      <section className="w-full overflow-x-hidden overflow-y-hidden relative flex flex-col items-center justify-center py-20 pb-48 bg-sky-100">
        <div className="opulence w-10/12 xl:w-9/12 pt-20" ref={targetRef2}>
          <div className="opulence-header flex flex-col items-center justify-center gap-16">
            <h1 className=" text-center text-slate-800 text-3xl lg:text-5xl font-bold lg:leading-[56px]">
              Your Passport to Opulence:
            </h1>
            <p className="text-center text-zinc-600 text-sm lg:text-base font-normal font-poppins leading-relaxed w-[79.389vw] lg:w-[47.361vw]">
              Command the world with the entire Dubai skyline at your grasp,
              from the comfort of your home. Reign supreme with a testament to
              the highest standards of craftsmanship and design. Every detail is
              a work of art, ensuring that your residence stands as a beacon of
              sophistication.
            </p>
          </div>
          <div className="opulence-designs-container flex justify-center items-center gap-5 pb-8">
            <HorizontalScroll targetRef={targetRef2} refType={"opulence"}>
              <div className="opulence-design rounded-[10px]">
                <div className="image relative w-[351px] h-[237px] lg:w-[27.778vw] lg:h-[29.748vh]">
                  <Image
                    src="/opulence_design_1.png"
                    alt="opulence-design-1"
                    fill="responsive"
                    className="object-cover"
                  />
                </div>
                <div className="content w-[351px] lg:w-[27.778vw] bg-white py-6 lg:py-9 px-7">
                  <h1 className="text-slate-800 text-2xl font-bold leading-loose">
                    Fully Automated Glass Walls
                  </h1>
                </div>
              </div>
              <div className="opulence-design rounded-[10px]">
                <div className="image relative w-[351px] h-[237px] lg:w-[27.778vw] lg:h-[29.748vh]">
                  <Image
                    src="/opulence_design_1.png"
                    alt="opulence-design-2"
                    fill="responsive"
                    className="object-cover"
                  />
                </div>
                <div className="content w-[351px] lg:w-[27.778vw] bg-white py-6 lg:py-9 px-7">
                  <h1 className="text-slate-800 text-2xl font-bold leading-loose">
                    Fully Automated Glass Walls
                  </h1>
                </div>
              </div>
              <div className="opulence-design rounded-[10px]">
                <div className="image relative w-[351px] h-[237px] lg:w-[27.778vw] lg:h-[29.748vh]">
                  <Image
                    src="/opulence_design_1.png"
                    alt="opulence-design-3"
                    fill="responsive"
                    className="object-cover"
                  />
                </div>
                <div className="content w-[351px] lg:w-[27.778vw] bg-white py-6 lg:py-9 px-7">
                  <h1 className="text-slate-800 text-2xl font-bold leading-loose">
                    Fully Automated Glass Walls
                  </h1>
                </div>
              </div>
              <div className="opulence-design rounded-[10px]">
                <div className="image relative w-[351px] h-[237px] lg:w-[27.778vw] lg:h-[29.748vh]">
                  <Image
                    src="/opulence_design_1.png"
                    alt="opulence-design-4"
                    fill="responsive"
                    className="object-cover"
                  />
                </div>
                <div className="content w-[351px] lg:w-[27.778vw] bg-white py-6 lg:py-9 px-7">
                  <h1 className="text-slate-800 text-2xl font-bold leading-loose">
                    Fully Automated Glass Walls
                  </h1>
                </div>
              </div>
            </HorizontalScroll>
          </div>
        </div>
        <div className="radial-gradient-opulence"></div>
        <div className="radial-gradient-opulence-2"></div>
      </section>
      <section className="unmatched-luxury flex justify-center items-center">
        <div className="unmatched-luxury-contents w-10/12 xl:w-9/12 flex flex-col items-center justify-center gap-14 py-40">
          <div className="unmatched-luxury-header flex flex-col items-center justify-center gap-16">
            <h1 className="text-center text-slate-800 text-3xl lg:text-5xl font-bold leading-[56px]">
              Unmatched Luxury
            </h1>
            <p className="text-center text-zinc-600 text-sm lg:text-base font-normal font-poppins leading-relaxed lg:w-[33.194vw]">
              Explore the key factors that make the Ultra Luxury Mansion at
              Emerald Hills an unparalleled living experience:
            </p>
          </div>
          <div className="unmatched-luxury-contents-1 flex flex-col lg:flex-row items-center justify-center gap-14">
            <div className="left-image relative w-[90vw] h-[284px] lg:w-[43.056vw] lg:h-[57.208vh]">
              <Image
                src="/banner_2.png"
                alt="unmatched-luxury-1"
                fill="responsive"
                className="object-cover rounded-[15px]"
              />
            </div>
            <div className="right-content flex flex-col justify-between lg:w-[40vw] h-[57.208vh] items-start">
              <div className="point flex justify-center items-center gap-8">
                <div className="point-icon"></div>
                <div className="point-content">
                  <h1 className="text-slate-800 text-2xl font-bold leading-loose">
                    Italian Craftsmanship:
                  </h1>
                  <p className="text-zinc-600 text-sm lg:text-base font-normal leading-relaxed font-poppins">
                    Discover highly qualified and experienced architects and
                    interior designers at Meroni Francesco, committed to
                    creating a sanctuary of modern living and relishing luxury
                    for YOU.
                  </p>
                </div>
              </div>
              <div className="point flex justify-center items-center gap-8">
                <div className="point-icon"></div>
                <div className="point-content">
                  <h1 className="text-slate-800 text-2xl font-bold leading-loose">
                    Outdoor Extravaganza:
                  </h1>
                  <p className="text-zinc-600 text-sm lg:text-base font-normal leading-relaxed font-poppins">
                    Immerse yourself in nature's embrace at the outdoor
                    breakfast area, unwind by the stylish Havana pool with a
                    bar, and enjoy panoramic views from the expansive living
                    room terrace.{" "}
                  </p>
                </div>
              </div>
              <div className="point flex justify-center items-center gap-8">
                <div className="point-icon"></div>
                <div className="point-content">
                  <h1 className="text-slate-800 text-2xl font-bold leading-loose">
                    Strategic Skyline Views:
                  </h1>
                  <p className="text-zinc-600 text-sm lg:text-base font-normal leading-relaxed font-poppins">
                    Relish in the unparalleled views of the iconic Dubai skyline
                    from every corner..
                  </p>
                </div>
              </div>
              <div className="point flex justify-center items-center gap-8">
                <div className="point-icon"></div>
                <div className="point-content">
                  <h1 className="text-slate-800 text-2xl font-bold leading-loose">
                    Rooftop Helipad:
                  </h1>
                  <p className="text-zinc-600 text-sm lg:text-base font-normal leading-relaxed font-poppins">
                    Elevate your arrival experience and travel with unparalleled
                    convenience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact flex justify-center items-center">
        <div className="contact-container w-10/12 xl:w-9/12 flex flex-col-reverse lg:flex-row items-center justify-center gap-6 bg-sky-400 rounded-[15px] lg:h-[49.085vh]">
          <div className="contact-content w-full flex flex-col items-center px-8 lg:px-0 pb-6 lg:pb-0 lg:items-start justify-center gap-10 lg:pl-16">
            <h1 className="text-white text-3xl lg:text-5xl font-bold lg:leading-[56px]">
              Explore Your Future Home
            </h1>
            <p className="text-white text-base font-normal font-poppins leading-relaxed">
              Elevate your luxury living experience at Emerald Hills, where
              every detail speaks the language of extraordinary. Don't just
              dream of opulence; make it your reality. Contact us now to embark
              on a journey to the epitome of refined living and secure your
              place in this exclusive oasis of extravagance. Your kingdom
              awaits!
            </p>
            <button className="flex items-center space-x-2 px-10 py-3 bg-white rounded-[20px] shadow justify-center gap-2.5 text-right text-sky-400 text-base font-semibold leading-relaxed tracking-tight font-poppins">
              Contact Us Now
            </button>
          </div>
          <div className="contact-image-container relative lg:w-[40vw]">
            <div className="contact-image relative w-[89.822vw] h-[284px] lg:w-[43.056vw] lg:h-[55.208vh]">
              <Image
                src="/banner_1.png"
                alt="contact"
                fill="responsive"
                className="object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sign-up overflow-x-hidden flex relative justify-center items-center py-40 w-full">
        <div className="sign-up-container w-10/12 xl:w-9/12 flex flex-col justify-center items-center">
          <p className="text-zinc-600 text-base font-normal pb-6 font-poppins leading-relaxed text-center">
            Join our exclusive mailing list to stay informed about upcoming
            projects that redefine luxury living.
          </p>
          <h1 className="text-slate-800 text-3xl lg:text-5xl font-bold lg:leading-[56px] text-center pb-14">
            Sign up for new awesome projects!
          </h1>
          <div className="sign-up-form w-full lg:w-fit flex justify-start items-center gap-5 p-[10px] border border-slate-800 rounded-[15px]">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-[40vw] bg-transparent rounded-[15px] outline-none px-5 text-base font-normal font-poppins leading-relaxed"
            />
            <button className="hidden lg:flex items-center space-x-2 px-10 py-3 bg-sky-400 rounded-[17px] shadow justify-center gap-2.5 text-right text-white text-base font-semibold leading-relaxed tracking-tight font-poppins">
              Subscribe
            </button>
          </div>
          <button className="flex lg:hidden items-center space-x-2 px-10 py-3 mt-4 bg-sky-400 rounded-[17px] shadow justify-center gap-2.5 text-right text-white text-base font-semibold leading-relaxed tracking-tight font-poppins">
            Subscribe
          </button>
        </div>
        <div className="radial-gradient"></div>
        <div className="radial-gradient-2"></div>
      </section>
      <section className="footer flex justify-center items-center py-8 w-full bg-slate-800">
        <p className="opacity-60 text-center text-white text-base font-normal font-poppins leading-relaxed">
          &copy; 2021 Key One Realty. All Rights Reserved.
        </p>
      </section>
    </main>
  );
}
