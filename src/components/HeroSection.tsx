import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

export default function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20} className="w-full z-50 relative">
        <nav className="w-full flex justify-between items-center text-[#D7E2EA] px-6 md:px-10 pt-6 md:pt-8">
          <div className="text-[1.4rem] font-bold uppercase tracking-tighter hidden sm:block">JACK &mdash;</div>
          <div className="flex gap-4 sm:gap-12 text-[1.2rem] font-medium uppercase tracking-wider">
            {["About", "Price", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-70 transition-opacity duration-200">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center relative w-full">
        <div className="px-6 w-full text-center z-20">
          <FadeIn delay={0.15} y={40} duration={0.9}>
            <h1 className="hero-heading uppercase leading-[0.8] whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[15.5vw] -mt-6 sm:-mt-8 md:-mt-12 select-none">
              HI, i&apos;M JACK
            </h1>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-6 sm:bottom-10 left-0 w-full px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center sm:items-end z-30 gap-6 sm:gap-0 pointer-events-none">
          <FadeIn delay={0.35} y={20} className="pointer-events-auto w-full sm:w-auto">
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug w-full max-w-[260px] text-center sm:text-left text-[1rem]">
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} y={20} className="pointer-events-auto">
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 bottom-[-40px] -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-[-20px]">
        <Magnet padding={150} strength={3}>
          <div className="w-full relative portrait-frame rounded-[40px] flex items-end justify-center overflow-hidden border border-white/10 aspect-[3/4]">
             <div className="w-full h-full bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent absolute inset-0 z-20 pointer-events-none"></div>
             <img 
               src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
               alt="Jack Portrait" 
               className="w-[90%] h-auto object-contain z-10 relative bottom-0 pointer-events-none mb-[-5%]"
             />
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
}
