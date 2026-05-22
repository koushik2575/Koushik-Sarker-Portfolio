import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const projects = [
  {
    num: "Project 01",
    client: "Nextlevel Studio",
    cat: "Client",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "Project 02",
    client: "Aura Brand Identity",
    cat: "Personal",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "Project 03",
    client: "Solaris Digital",
    cat: "Client",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  }
];

function ProjectCard({ project, index, totalCards, key }: { project: typeof projects[0], index: number, totalCards: number, key?: React.Key }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });
  
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  
  return (
    <div ref={containerRef} className="h-[85vh] w-full flex items-center justify-center sticky top-24 md:top-32" style={{ top: `calc(100px + ${index * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="w-full max-w-7xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 h-full max-h-[800px] overflow-hidden drop-shadow-2xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
          <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-8">
            <span className="text-[#D7E2EA] font-black loading-none text-[clamp(2.5rem,6vw,80px)] uppercase tracking-tighter leading-none block">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-medium uppercase text-sm sm:text-base opacity-60 tracking-wider">
                {project.cat}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.2rem,2.5vw,2.5rem)] tracking-wide">
                {project.client}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>
        
        <div className="flex flex-col md:flex-row w-full flex-1 gap-4 overflow-hidden">
          <div className="w-full md:w-[40%] flex flex-col gap-4 h-full">
            <div className="w-full relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.images.leftTop} alt="Project detail 1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-full flex-1 min-h-[160px] relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.images.leftBottom} alt="Project detail 2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-[60%] flex-1 h-full relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden min-h-[250px]">
            <img src={project.images.right} alt="Project main display" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-32 px-5 sm:px-8 md:px-10 relative z-30 w-full">
      <div className="w-full flex justify-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Project
        </h2>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl relative pb-[10vh]">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} totalCards={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
