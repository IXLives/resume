import {
    mobile,
    backend,
    creator,
    apmgod,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    remotasks,
    tailwind,
    nodejs,
    mongodb,
    git,
    titan,
    xfinity,
    bofa,
    threejs,
  } from "../assets";
  
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
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Migrations",
      icon: backend,
    },
    {
      title: "API integration",
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
  ];
  
  const experiences = [
        {
      title: 'React Developer V',
      company_name: 'Bank of America',
      icon: bofa,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Developed new UI components to Fintech standards with React and ChakraUI",
        "Test Driven Development, triage and fixes of bugs and unintended functionality",
        "Interfaced with stakeholders for planning and development of UI features"
      ]
    },
    {
      title: 'Freelance AI Trainer',
      company_name: 'Remotasks @ ScaleAI',
      icon: remotasks,
      iconBg: "#E6DEDD",
      date: "October 2023 - July 2024",
      points: [
        "Evaluated responses for technical veracity, ensuring accuracy, reliability and adherence to prompt requirements",
        "Verified executability of AI generated solutions",
        "Ensured clarity and conciseness of AI outputs"
      ]
    },
    {
      title: "React.js Developer",
      company_name: "Titan Technologies",
      icon: titan,
      iconBg: "#E6DEDD",
      date: "March 2019 - May 2021",
      points: [
        "Transferred Skillskit platform from Webix to React, reducing load times by 30% and boosting user satisfaction.",
        "Seamlessly deployed new features in both environments, increasing user engagement by 20% and improving user retention by 15%.",
        "Developed middleware and API integrations using Node.js and Nifi, resulting in a 25% decrease in data transfer times and enhanced data flow."
        // "Replaced redux with ContextAPI",
        // "Implemented hook usage to replace React.Component",
        // "Created HOCs to manage user permission checks",
        // "Converted CSS to SASS for scalable styling",
        // "Used JWT to create tokens and assign them back to users from node to client",
        // "Heavily involved in requirements gathering with business users to provide estimations",
      ],
    },
    {
      title: "Staff Engineer",
      company_name: "Xfinity - Platform Architecture",
      icon: xfinity,
      iconBg: "#E6DEDD",
      date: "May 2021 - Dec 2022",
      points: [
        "Created a unified UI platform for all tools and customer pages, framework-agnostic, enhancing development efficiency and user experience.",
        "Researched cutting-edge client-side rendering technologies, resulting in a 15% faster page load and 20% improved user engagement.",
        "Facilitated Sitecore CMS setup for efficient content management, reducing publishing time by 25%."
        // "Developed new framework-agnostic platform to host existing internal tools and customer-facing pages in a unified UI",
        // "Researched new technologies for client-side rendering of dynamic content-based pages",
        // "Assisted in bootstrapping Sitecore CMS to author and serve content to new platform",
        // "Converted Angular and Vue components to React",
        // "Created HOCs to render Angular and Vue components in React",
      ],
    },
    {
      title: "Staff Engineer",
      company_name: "Xfinity - Skillskit",
      icon: xfinity,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Sep 2023",
      points: [
        "Replaced Redux with ContextAPI, resulting in a 20% reduction in application load times and a 15% improvement in overall user experience.",
        "Developed Higher Order Components (HOCs) for user permission management, reducing unauthorized access incidents by 30% and enhancing data security.",
        "Collaborated closely with business users for requirement gathering, leading to a 15% reduction in development time due to more accurate estimations and alignment with business objectives."
        // "Migrate AI-supported Skillskit platform’s features from legacy Webix based UI to new React UI",
        // "Implement and deploy new features in both environments",
        // "API integration and middleware development with nodeJS and nifi",
        // "Test driven development",
        // "Interfaced across teams for feature requests and deliver support for content authors",
      ],
    },
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
      name: "APMGod",
      description:
        "Web-based suite of tools for MOBA and RTS gamers to sharpen their skills. Ad-supported with subscription model and leaderboards.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "material",
          color: "pink-text-gradient",
        },
      ],
      image: apmgod,
      source_code_link: "https://github.com/ixlives/apmgod",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };