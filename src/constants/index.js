import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
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
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    cpp,
    swift,
    duolingo,
    achaAnnex,
    swarthmore,
    hermann,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    {
      name: "Swift",
      icon: swift,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern (Duolingo)",
      company_name: "Duolingo",
      icon: duolingo,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Built and deployed an internal retrospective tool to enhance team feedback and post-sprint analysis",
        "Collaborated with cross-functional teams to deliver high-quality, scalable software solutions.",
        "Implemented responsive design practices and ensured cross-browser compatibility",
        "Contributed to code reviews, providing and receiving constructive feedback to improve code quality.",
      ],
    },
    {
      title: "Data Solutions Intern (Acha Annex)",
      company_name: "Acha Annex",
      icon: achaAnnex,
      iconBg: "#E6DEDD",
      date: "June 2023 - August 2023",
      points: [
        "Led the digital transformation of healthcare data by designing and implementing relational database structures, leveraging SQL to modernize over 3,000 patient records.",
        "Managed the seamless migration from paper-based records to a computerized database, significantly enhancing the hospital's data management system.",
        "Increased operational efficiency by 10%, optimizing patient admissions and saving approximately $500 monthly.",
      ],
    },
    {
      title: "Digital Accessibility Engineer (Swarthmore College)",
      company_name: "swarthmore",
      icon: swarthmore,
      iconBg: "#383E56",
      date: "October 2022 - present",
      points: [
        "Enhanced student learning by developing accessible course materials using JavaScript, HTML, and CSS, resulting in a 30% increase in course engagement.",
        "Led an accessibility audit of college software, providing data-driven recommendations that increased usability by 20% and reduced accessibility issues by 50%",
        "Collaborated with faculty and IT teams to implement inclusive practices, fostering a more accessible learning environment for all students",
        "Optimized web applications for performance and accessibility, contributing to a more inclusive and efficient educational platform",
      ],
    },
    {
      title: "Computer Science Teaching Assistant (Swarthmore College)",
      company_name: "Swarthmore",
      icon: swarthmore,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - December 2023",
      points: [
        "Provided personalized mentoring for 20+ students in Intro to Computer Science and Data Structures courses, enhancing their problem-solving skills and assessment performance",
        "Collaborated with professors to deliver tailored feedback, helping adapt course content to individual learning needs, leading to a 25% increase in student exam scores.",
        "Facilitated lab sessions and study groups, reinforcing core concepts and promoting collaborative learning among students.",
        "Supported the grading process, ensuring timely and constructive feedback on assignments and exams.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I didn't think it was possible to find a candidate better than myself, but Maxwell proved me wrong. He's the upgrade you've been looking for.",
      name: "Hermann Kumbong",
      designation: "Phd",
      company: "Stanford",
      image: hermann,
    },
    
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };