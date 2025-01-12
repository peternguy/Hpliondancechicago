import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedTitle2 = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate each letter individually
      titleAnimation.fromTo(
        '.animated-letter2',
        {
          opacity: 0,
          y: 20, // Start below
        },
        {
          opacity: 1,
          y: 0, // Move to original position
          ease: 'power1.out',
          stagger: 0.018, // Delay between letters
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title2 ${containerClass}`}>
      {title.split('<br />').map((line, index) => (
        <div key={index} className="flex justify-center max-w-full flex-wrap overflow-hidden">
          {line.split('').map((char, i) => (
            <span
              key={i}
              className="animated-letter2"
              dangerouslySetInnerHTML={{ __html: char === ' ' ? '&nbsp;' : char }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle2;
