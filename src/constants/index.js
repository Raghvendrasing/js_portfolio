import {
  mobile,
  backend,
  creator,
  web,
  UI_UX,
  webDeveloper,
  fullStack,
  frontend,
  AI,
  javascript,
  typescript,
  html5,
  css3,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  mspl,
  digitalEdu,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ngx_admin,
  angular,
  bootstrap,
  primeng,
  java,
  material,
  micro_serivce,
  react,
  statemagament,
  sql,
  spring,
  three,
  HIMS,
  CRM,
  EIMS
} from "../assets";

import { FaCode, FaMobileAlt, FaServer, FaPencilAlt, FaRobot, FaLaptop, FaDocker, FaClipboardList } from "react-icons/fa";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: webDeveloper, // Code icon for full-stack development
    description: "Building scalable, end-to-end web and mobile applications with modern frameworks.",
  },
  {
    title: "Frontend Specialist",
    icon: frontend, // Laptop icon for frontend development
    description: "Crafting intuitive and responsive user interfaces using Angular, React, and Tailwind CSS.",
  },
  {
    title: "Backend Architect",
    icon: backend, // Server icon for backend development
    description: "Designing secure and efficient APIs and backend systems using Node.js, Python, and Java Spring Boot.",
  },
  {
    title: "AI & ML Integrator",
    icon: AI, // Robot icon for AI & ML integration
    description: "Leveraging artificial intelligence to enhance application capabilities and user experiences.",
  },
  {
    title: "UI/UX Designer",
    icon: UI_UX, // Pencil icon for UI/UX design
    description: "Creating user-centric designs and experiences that drive engagement and satisfaction.",
  },
  {
    title: "Mobile App Developer",
    icon: mobile, // Mobile icon for mobile app development
    description: "Developing cross-platform mobile applications using React Native and Flutter.",
  }
];


const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "PrimeNg",
    icon: primeng,
  },
  {
    name: "Angular Material",
    icon: material
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "State Management",
    icon: statemagament,
  },
  {
    name: "NGX-Admin",
    icon: ngx_admin,
  },
  {
    name: "HTML 5",
    icon: html5,
  },
  {
    name: "CSS 3",
    icon: css3,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Microservices",
    icon: micro_serivce,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Senior Angular Developer",
    company_name: "DigitalEdu IT Solutions Pvt. Ltd.",
    icon: digitalEdu,
    iconBg: "#F0F0F0",
    date: "Aug 2024 -  Present",
    points: [
      "Demonstrated expertise in project architecture design, optimizing compatibility and performance by selecting the most suitable UI libraries and managing large-scale nested data structures efficiently.",  
      "Led the modernization of legacy projects by rewriting an Angular 9 application to Angular 18 using Module Federation for smooth end-to-end integration, while effectively breaking down requirements and delegating tasks within the team.",
      "Developed AI-driven bots to elevate user experiences and engineered configurable, intelligent custom libraries for dynamic forms, grids, cards, and more, enhancing usability and maintainability.",
      // "Additionally, I foster a culture of continuous learning within the team through active participation in code reviews and knowledge sharing, while maintaining clear and concise documentation for smooth project handovers."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Medimaze Solutions Pvt Ltd",
    icon: mspl,
    iconBg: "#F0F0F0",
    date: "Mar 2023 - Aug 2024",
    points: [
      // "Integrated the Ayushman Bharat Health Account (ABHA) database, implementing seamless server-side integration using Java and intuitive front-end display using Angular, contributing to critical modules like CSSD and Bio-Medical Waste Management.",
      "Took ownership in the absence of the lead, managing full-stack development with Angular and Spring Boot, delivering key modules like Billing, EMR, Operating Theatre (OT), and Oncology.",
      "Orchestrated the integration of third-party applications such as RIS (Radiology Information System) and LIS (Laboratory Information System) for improved operational efficiency.",
      // "Spearheaded a complete project rewrite with a focus on modularity and scalability, leveraging Angular and Spring Boot to create reusable, dynamic full-stack components enabling real-time updates without extensive code refactoring.",
      "Designed and implemented a microservices architecture to enhance application scalability and performance, ensuring seamless deployment and integration across services."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HIMS",
    description:
      "Developed a scalable and modular Hospital Information Management System (HIMS) with features like Patient Dashboard, Appointments, ICU Management, Billing, and real-time token systems. Integrated interactive 3D visualizations, optimized data handling, and ensured seamless deployment with CI/CD pipelines and containerization.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PrimeNG",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },
    ],
    image: HIMS,
    source_code_link: "https://raghav-portfolio-drab.vercel.app/#project",
  },
  {
    name: "CRM",
    description:
      "Designed and implemented a comprehensive CRM system with modules for Lead Management, Sales Pipeline, Task Tracking, Reporting, and Email/SMS Campaigns. Delivered seamless integration of communication services, robust activity tracking, and insightful analytics to enhance customer engagement and sales efficiency.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Python Django",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "SendGrid",
        color: "pink-text-gradient",
      },
    ],
    image: CRM,
    source_code_link: "https://raghav-portfolio-drab.vercel.app/#project",
  },
  {
    name: "EIMS",
    description:
      "Developed a dynamic system with modules for Course Management, Student Enrollment, Timetable Scheduling, Attendance Tracking, and Feedback Collection. Enabled efficient operations, seamless online admissions, and real-time data updates to enhance student experiences and streamline educational workflows.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Python Django",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
      {
        name: "Razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: EIMS,
    source_code_link: "https://raghav-portfolio-drab.vercel.app/#project",
  },
];

export { services, technologies, experiences, testimonials, projects };
