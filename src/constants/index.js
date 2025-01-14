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
    title: "Software Developer",
    company_name: "Medimaze Solutions Pvt Ltd",
    icon: mspl,
    iconBg: "#F0F0F0",
    date: "Mar 2023 - Aug 2024",
    points: [
      "As a skilled Software Developer with experience across multiple full-stack projects.",
      "I’ve contributed significantly to both frontend development and team leadership in dynamic environments. At Medimaze Solutions Pvt Ltd",
      "Building complex modules such as Billing, EMR, OT, and Oncology, along with integrating third-party apps like RIS and LIS.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Senior Angular Developer",
    company_name: "DigitalEdu IT Solutions Pvt. Ltd.",
    icon: digitalEdu,
    iconBg: "#F0F0F0",
    date: "Aug 2024 -  Present",
    points: [
      "My expertise in Angular has enabled me to enhance functionality, improve user experience, and maintain clean, efficient code adhering to best practices and industry standards.",  
      "I am committed to delivering reliable, scalable applications, and have consistently demonstrated my ability to identify and resolve issues promptly thorough testing and debugging.",
      "I have a strong track record of optimizing application speed and responsiveness",
      "Additionally, I foster a culture of continuous learning within the team through active participation in code reviews and knowledge sharing, while maintaining clear and concise documentation for smooth project handovers."
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
