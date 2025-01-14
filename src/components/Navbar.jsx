import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const navItems = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Join', path: '/contact' },
    { name: 'Sponsor', path: '/sponsor' },
    { name: 'Contact', path: '/contact' },

  ];
  
const Navbar = () => { 
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  // scroll nav bar
  useEffect(() => {
    if(currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current.classList.add('floating-nav');
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.05,
    })
  })

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);

    setIsIndicatorActive((prev) => !prev);
  }

  useEffect(() => {
    if(isAudioPlaying) {
        audioElementRef.current.play();
    } else {
        audioElementRef.current.pause();
    }

  }, [isAudioPlaying])

  const handleLogoClick = () => {
    if (location.pathname === '/Hpliondancechicago/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div ref={navContainerRef}       className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"  >        
        <header className="absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-8">
                <div className="flex items-center gap-7">
                    <Link to="/" onClick={handleLogoClick}>
                      <img src="./img/hp-logo-2.png" alt="logo" className="w-8" />
                    </Link>
                    <Link to="/services" className="inline-block">
                      <Button 
                          id="services-button"
                          title="SERVICES"
                          rightIcon={<TiLocationArrow />}
                          containerClass="bg-blue-50 md:flex hidden items-center justify-center"
                      />
                    </Link>


                </div>
                <div className="flex h-full items-center">
                    <div className="hidden md:block">
                        {navItems.map((item) => (
                            <Link key={item.name} to={item.path} className="nav-hover-btn">
                            {item.name}
                            </Link>
                        ))}
                    </div>
                    
                    <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
                        <audio ref={audioElementRef} className="hidden" src="./audio/loop.mp3" loop />
                            {[1,2,3,4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{animationDelay: `${bar * 0.1}s`}} />
                            ))}
                    </button>


                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar