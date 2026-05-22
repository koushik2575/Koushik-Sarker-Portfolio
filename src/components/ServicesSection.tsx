import React from 'react';
import FadeIn from './FadeIn';

const services = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <FadeIn delay={0}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>
        
        <div className="w-full max-w-5xl flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1} y={30} className="w-full">
              <div className={`flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 ${i !== services.length - 1 ? 'service-divider' : ''}`}>
                <div className="text-[#D7E2EA] font-black leading-none text-[clamp(3rem,10vw,140px)] w-full md:w-[35%] tracking-tighter shrink-0 mb-4 md:mb-0">
                  {service.num}
                </div>
                <div className="flex flex-col w-full md:w-[65%]">
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2 md:mb-4 tracking-wide">
                    {service.name}
                  </h3>
                  <p className="text-[#D7E2EA] opacity-60 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
