import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

        {/* <h5 className="text-white text-[16px] font-bold text-center">
          {description}
          </h5> */}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        A passionate Full-Stack Developer and UI/UX Specialist with expertise
        in Angular, React, Tailwind CSS, PrimeNG, and Bootstrap. Skilled in 
        building scalable, lightweight, and fully configurable solutions. 
        Proficient in AI integration, microservices architecture, and modern backend 
        technologies like Node.js, Python, Java, and Spring Boot. 
        Adept at creating intuitive user interfaces, optimizing workflows, and delivering 
        impactful digital experiences through innovation and collaboration.
        Enthusiastic about transforming complex challenges into seamless, user-centric solutions.
        
      </motion.p>


      <motion.h3
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-center text-3xl font-semibold"
      >
        Innovative Full-Stack & UI/UX Development Services
      </motion.h3>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
