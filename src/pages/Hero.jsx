import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { TiLocationArrow } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const videoSrc = "videos/hero-1.mp4"; // Set the single video source here

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
          playsInline
        />

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          LION DA<b>N</b>CE
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              HO<b>A</b>NG PHUC
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Step into the culture <br /> Celebrate the tradition
            </p>

            <Link to="/contact" className="inline-block">
              <Button
                className="hover-btn animate-bounce"
                id="book-now"
                title="Book now"
                leftIcon={<TiLocationArrow />}
                containerClass="!bg-blue-400 flex-center gap-1 transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        LI<b>O</b>N DANCE
      </h1>
    </div>
  );
};

export default Hero;
