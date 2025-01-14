import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import AnimatedTitle2 from "../components/AnimatedTitle2";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    setHoverOpacity(1);
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: -165, // Slide up the image by 10px
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    setHoverOpacity(0);
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: 0, // Reset the image position
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      className="relative size-full overflow-hidden rounded-lg shadow-lg bg-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <img
        ref={imgRef}
        src={src}
        alt={title}
        className="absolute left-0 top-60 size-full object-cover object-center transition-transform duration-300"
      />
      {/* Text Content */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 bg-black/60">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20">
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Coming Soon</p>
          </div>
        )}
      </div>
    </div>
  );
};


const Services = () => (
  <section className="bg-gray-900 pb-40">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <AnimatedTitle2 
          title = "SERVICES" 
          containerClass="mt-5 !text-blue-50 text-left font-zentry text-9xl ml-0 md:ml-5"

        />

        <AnimatedTitle2 
          title = "Immoble yorsnelf inna rifflish und evra-spuga" 
          containerClass="max-w-md font-circular-web text-lg text-blue-50 opacity-50 px-10"
        />

        <AnimatedTitle2 
          title = "Imlibbering your glopplay to be more zazz an" 
          containerClass="max-w-md font-circular-web text-lg text-blue-50 opacity-50 px-10"
        />
      </div>

      {/* <div className="grid h-[170vh] w-full grid-cols-3 grid-rows-4 gap-7 rounded-full"> */}
      <div className="grid w-full gap-7 rounded-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            id="weddings"
            src="img/hp-logo-2.png"
            title={
              <AnimatedTitle2 
              title="Weddings" 
              containerClass="font-zentry text-5xl"
              />
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <AnimatedTitle2 
              title="Lunar New Year" 
              containerClass="font-zentry text-5xl"
              />
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <AnimatedTitle2 
              title="Grand Openings" 
              containerClass="font-zentry"
              />
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <AnimatedTitle2 
              title="Restaurants" 
              containerClass="font-zentry"
              />
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <>
                Workshops
              </>
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <>
                Corporate Events
              </>
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <>
                Festivals
              </>
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <>
                Private Parties
              </>
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <>
                AND MORE...
              </>
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-3 md:me-0">
          <BentoCard
            src="img/hp-logo-2.png"
            title={
              <>
                Contact Now
              </>
            }
            //description="ABlorp-zap AI Wizzle - flibbering your glopplay to be more zazz and sprockety."
            isComingSoon
          />
        </BentoTilt>


        
      </div>

  
      
    </div>
  </section>
);

export default Services;