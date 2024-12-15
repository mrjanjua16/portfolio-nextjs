import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import erpImage from '@/../public/images/erp-image.png';
import expImage from '@/../public/images/exp-web2.png'
import blogImage from '@/../public/images/blog-admin-control-panel4.png'
import authImage from '@/../public/images/blog-admin-control-panel5.png'
import liquidityPoolImage from '@/../public/images/liquidity-pool.jpg'
import eventImage from '@/../public/images/event-app2.png'
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Full Stack Developer',
    location: 'Rawalpindi, Pakistan',
    description: `Full-stack developer with expertise in React, TypeScript, AdonisJS, and multiple database systems, specializing in scalable web applications. Core competencies include frontend (React ecosystem, UI libraries), backend (AdonisJS, ORMs), and databases (PostgreSQL,MySQL, MongoDB). Led development of comprehensive ERP system with modules for user/team management, project tracking, and automated payroll. Built automated invoicing platform with Stripe integration and journals management system using modern tech stack. Implemented secure authentication (RBAC), third-party integrations, and followed Agile practices across all projects.`,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sept 2024 - Present',
  },
  {
    title: 'MERN Stack Developer',
    location: 'Rawalpindi, Pakistan',
    description: `Full Stack MERN Developer Intern focusing on web application development using MongoDB, Express.js, React, and Node.js.
Frontend expertise includes React (Hooks, Context API, Redux), responsive design with CSS Grid/Flexbox, and modern UI libraries (Tailwind CSS, Material-UI).
Backend skills cover Node.js/Express.js development, RESTful APIs, GraphQL, MongoDB with Mongoose ODM, and authentication systems (JWT, OAuth).
Collaborated effectively in team environments to build, deploy, and maintain web applications while demonstrating strong problem-solving abilities.
Developed strong time management skills and adaptability to new technologies through hands-on experience with modern web development practices.`,
    icon: React.createElement(BookIcon),
    date: 'April 2024 - July 2024',
  },
  {
    title: 'Implementation Specialist',
    location: 'Rawalpindi, Pakistan',
    description: `Led the implementation of EHR software solutions, ensuring successful deployment and alignment with client needs. Collaborated with clients to identify requirements, analyzed existing systems, and provided recommendations. Coordinated with cross-functional teams, managed multiple projects, and delivered on time and within budget. Provided end-user training and support, conducted post-implementation assessments, and developed best practices to enhance implementation efficiency. Contributed feedback to product development based on client experiences.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Feb 2021 - Oct 2024',
  },
  {
    title: 'Graphics Designer',
    location: 'Islamabad, Pakistan',
    description: `Produced motion graphics projects, including logo animations and explainer videos, using Adobe After Effects and Vyond. Performed photo editing and designed banners, posters, and flyers with Adobe Photoshop and Illustrator. Collaborated with clients to meet their vision, managed multiple projects, and ensured on-time, within-budget delivery. Demonstrated expertise in motion graphics, 2D animation, and photo editing. Maintained strong client communication, resulting in repeat business and referrals.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Nov 2020 - Aug 2021',
  },
  {
    title: 'Lead Game Developer',
    location: 'Rawalpindi, Pakistan',
    description: `Led a team of game developers in Unity-based game projects, managing workflow, and collaborating with designers, artists, and developers to ensure timely and budget-compliant delivery. Conducted code reviews, maintained high-quality standards, and contributed to technical documentation. Demonstrated expertise in Unity, solving technical challenges, and providing mentorship to team members for their professional growth.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Aug 2020 - Feb 2021',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Custom ERP',
    description:
      'Designed and developed a complete ERP system encompassing modules for user, RBAC, team, project tracking, CRM, employee management, attendance tracking, and automated payroll generation.',
    tags: [
      'TypeScript',
      'Adonisjs',
      'Lucid ORM',
      'Vinejs',
      'Edge',
      'Cronjob',
      'Postgresql',
      'MySQL',
      'ETL',
      'React',
      'ReduxToolkit',
      'Tanstack Query',
      'Shadcn UI',
      'Tailwind',
    ],
    imageUrl: erpImage,
    link: '#',
  },
  {
    title: 'Expense Management',
    description:
      'Designed and developed a complete ERP system encompassing modules for user, RBAC, team, project tracking, CRM, employee management, attendance tracking, and automated payroll generation.',
    tags: [
      'TypeScript',
      'Adonisjs',
      'Lucid ORM',
      'Vinejs',
      'Postgresql',
      'Next.Js',
      'ReduxToolkit',
      'Tanstack Query',
      'Shadcn UI',
      'Tailwind',
    ],
    imageUrl: expImage,
    link: 'https://github.com/mrjanjua16/exp-backend.git',
  },
  {
    title: 'Blog',
    description: `The Blog Application is a full-stack MERN project containing authentication, RBAC, blog, & comments modules. It features secure user authentication with JWT and bcrypt, RBAC, CRUD operations for blog posts, and a rich text editor.`,
    tags: [
      'React',
      'Tailwind CSS',
      'ReduxToolkit',
      'React Router Dom',
      'OAuth',
      'Google Firebase',
      'ReactQuill',
      'Express',
      'MongoDB',
      'Mongoose ODM',
      'JWT',
      'Bcrypt',
    ],
    imageUrl: blogImage,
    link: 'https://github.com/mrjanjua16/blog.git',
  },
  {
    title: 'Authentication Web Application',
    description: `The Authentication Web App, built with the MERN stack, manages user authentication with features like login, sign-up, deletion, and updates. It integrates Google Firebase for enhanced authentication and profile image handling, uses Redux for state management, and Tailwind CSS for modern design. The app ensures security with JWT tokens.`,
    tags: [
      'React',
      'Tailwind CSS',
      'ReduxToolkit',
      'React Router Dom',
      'OAuth',
      'Google Firebase',
      'Express',
      'MongoDB',
      'Mongoose ODM',
      'JWT',
      'Bcrypt',
    ],
    imageUrl: authImage,
    link: 'https://github.com/mrjanjua16/mern-auth.git',
  },
  {
    title: 'Event Management Website',
    description:
      'The Event Management React Web Application offers a responsive and user-friendly interface for managing and displaying events, leveraging React, Bootstrap, and a carousel feature to ensure a seamless user experience. The application is built with reusable components to ensure maintainability and scalability.',
    tags: [
      'React',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'SASS',
    ],
    imageUrl: eventImage,
    link: 'https://github.com/mrjanjua16/event-management-site.git',
  },
  {
    title: 'LiquidityPool',
    description:
      'A platform to find and book campsites, featuring a well-designed backend and seamless client-server communication.',
    tags: ['TypeScript', 'Solidity', 'Remix', 'Ethers.js', 'Web3.js'],
    imageUrl: liquidityPoolImage,
    link: 'https://github.com/mrjanjua16/LiquidityPool.git',
  },
] as const;

export const skillsData = [
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Adonis.js', '/svgs/adonisJS.svg'],
  ['Nest.js', '/svgs/nest.js.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Ant Design', '/svgs/ant-design.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['MUI', '/svgs/material-UI.svg'],
  ['Framer', '/svgs/framer-motion.svg'],
  ['Redux', '/svgs/redux.svg'],
  ['React Router DOM', '/svgs/react-router.svg'],
  ['Prisma', '/svgs/prisma-3.svg'],
  ['Lucid', '/svgs/lucid-orm.svg'],
  ['Mongoose', '/svgs/mongoose-odm.svg'],
  ['MongoDB', '/svgs/mongoDB.svg'],
  ['PostgreSQL', '/svgs/PostgresSQL.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/tanstack.svg'],
  ['Redis', '/svgs/redis-svgrepo-com.svg'],
  ['Google Firebase', '/svgs/firebase-02.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['OAuth', '/svgs/oauth-svgrepo-com.svg'],
  ['Axios', '/svgs/axios-purple.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
