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
    git,
    docker,
    remediation,
    python,
    cpp,
    swift,
    duolingo,
    achaAnnex,
    swarthmore,
    hermann,
    cTour,
    railWay,
    keyword,
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
      title: "Mobile App Developer",
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
      name: "git",
      icon: git,
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
        "Contributed to code reviews, improving code quality and improving project success rate by 10%.",
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
      name: "C-Tour",
      description:
        "Mobile-based platform that allows users to explore college campuses either remotely or in person, offering virtual tours, photo sharing, and community engagement for current and prospective students, with plans to expand to application guidance and other tourist destinations.",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
      ],
      image: cTour,
      source_code_link: "https://github.com/kmb21/IOS-Projects/tree/main/C-TOUR",
    },
    {
      name: "Route Master",
      description:
        "A desktop-based interactive application that uses graph algorithms and a dynamic GUI to simulate and optimize railway and flight routes. Users can explore transport logistics, experiment with route planning, and manage network configurations. Initially focused on railways, extension will include flight path simulations with additional transport modes and real-time data integration.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Make file",
          color: "green-text-gradient",
        },
      ],
      image: railWay,
      source_code_link: "https://github.com/kmb21/Railway-Rout-building-game",
    },
    {
      name: "Keyword Search Tool",
      description:
        "A sophisticated desktop application that utilizes advanced algorithms to provide precise search results, optimizing the retrieval process and vastly improving user experience. Ideal for educational settings, research, or any scenario requiring detailed text analysis, this project exemplifies a deep understanding of search engine technology and data structure optimization.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Makefile",
          color: "pink-text-gradient",
        },
      ],
      image: keyword,
      source_code_link: "https://github.com/kmb21/Keyword-Search-Tool-Master",
    },
    {
      name: "DocuPulse",
      description:
        "This robust document scraping script enhances accessible document remediation by automating data extraction from HTML documents, simplifying workflows, and ensuring high accuracy. Key features include a user-friendly interface, customizable scraping parameters, and scalable performance for both small and large-scale projects, making it ideal for a wide range of users and applications.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tex",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: remediation,
      source_code_link: "https://github.com/kmb21/web-accessibility1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };