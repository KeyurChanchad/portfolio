import { Project, Experience } from './types';

export const PERSONAL_INFO = {
  name: 'Keyur Chanchad',
  title: 'Full-Stack Developer & Software Engineer',
  tagline: 'Building modern, high-performance web and mobile applications with clean architecture and robust UX.',
  bio: 'I am a highly motivated Software Engineer specializing in building robust full-stack web and mobile applications. With a strong foundation in modern frontend frameworks (React, Next.js, React Native) and backend architectures (Node.js, Express, Microservices), I enjoy bridging hardware and software solutions and turning complex challenges into optimized, user-centric products.',
  email: 'chanchadkeyur2001@gmail.com',
  github: 'https://github.com/keyurchanchad',
  linkedin: 'https://www.linkedin.com/in/keyur-chanchad/',
  resumeUrl: '#',
  location: 'Gujarat, India',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Thomas App',
    description: 'A comprehensive social media platform enabling users to write articles/blogs, comment, receive immediate notifications, and access advanced administrative utilities.',
    longDescription: 'Developed Thomas App, a performance-optimized social media hub enabling users to share posts and blogs, nested reply trees, and receive live socket notifications. It supports administrative broadcast dispatch systems, group push alerts, and direct member moderation tools.',
    category: 'frontend',
    tags: ['Vanilla JS', 'React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Optimization'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'RTK Query Caching Sync',
  },
  {
    id: '2',
    title: 'Platform OMS',
    description: 'A robust operations management suite designed for UK railway workforce planning, fatigue diagnostics, compliance tracking, and asset allocations.',
    longDescription: 'Platform OMS is an enterprise operations dashboard catering to UK rail systems. Highly optimized user experiences powered by RTK Query and Redux Toolkit caching strategies to expedite compliant shift schedules, certification matrices, and real-time fatigue analysis.',
    category: 'frontend',
    tags: ['RTK Query', 'Redux Toolkit', 'TypeScript', 'Optimization', 'React', 'Node.js'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'Workforce Fatigue Analytics',
  },
  {
    id: 'equality',
    title: 'Equality',
    description: 'An automated batch manufacturing system in pharma, governing process synchronization, ingredient lists, and raw material status tracking.',
    longDescription: 'Built a highly automated batch control pipeline tailored to clean-room pharmaceutical processing. Manages complex ingredient formulations, active process logs, system diagnostics, and real-time state telemetry, guaranteeing full compliance.',
    category: 'fullstack',
    tags: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Domino & Videojet', 'Pharma Tech'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'Automated Batching Controls',
  },
  {
    id: 'inspecta',
    title: 'Inspecta',
    description: 'An FDA-compliant pharmaceutical batch tracking and label distribution system integrated directly with Domino and Videojet industrial printers.',
    longDescription: 'Inspecta handles high-precision batch tracking and labels pattern distribution by establishing live middleware integrations with Domino and Videojet hardware devices. Retains pristine audit pathways for medical packaging.',
    category: 'fullstack',
    tags: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Domino & Videojet', 'FDA Compliant'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'Industrial Printer API Sync',
  },
  {
    id: 'printingcodes',
    title: 'PrintingCodes',
    description: 'Printing product batch information on products following FDA guidelines to generate each product’s unique code alongside complete stock management.',
    longDescription: 'Designed a high-throughput code generator engine adhering strictly to Pharma FDA guidelines. Directly commands Domino and Videojet thermal ink printers to trace unique cryptographic security codes on container layers and coordinates active stock distribution systems.',
    category: 'backend',
    tags: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Domino & Videojet', 'FDA Guidelines', 'Stock Management'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'Unique FDA Serial Generator',
  },
  {
    id: 'rnca-server',
    title: 'RNCA Server',
    description: 'A Sails.js power-backend designed for secure mobile chat channels, orchestrating real-time WebSockets, push alerts, and MongoDB telemetry.',
    longDescription: 'Engineered a highly optimized backend server powered by Sails.js, MongoDB, and Firebase. Implemented robust push notification dispatches, real-time message stream pathways, tokenized credentials, and RealmDB synchronization endpoints for smooth offline integration.',
    category: 'backend',
    tags: ['Sails.js', 'Node.js', 'MongoDB', 'Firebase', 'WebSockets', 'RealmDB'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'Low-Latency Channel Gateway',
  },
  {
    id: '4',
    title: 'Apex-Web',
    description: 'Official web platform and corporate presentation portal for Apex Infocom Private Limited built with modern React paradigms.',
    longDescription: 'Developed the official React-based website for Apex Infocom Private Limited. Delivers flawless visual aesthetics, responsive navigation paths, high-fidelity layouts, and robust interactive elements for client interactions.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Responsive Grid'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'React Tech Site',
  },
  {
    id: '5',
    title: 'Shreeganesh Enterprises',
    description: 'A logistics and order placement mobile application published on Google Play Store streamlining real-time dispatches.',
    longDescription: 'Developed and shipped the Shreeganesh Enterprises mobile app to the Google Play Store. Integrates active tracking, field deliveries, warehouse inventory updates, and instant push dispatches for offline-first technicians.',
    category: 'mobile',
    tags: ['React Native', 'Android SDK', 'Google Play Store', 'Push Notifications', 'Expo'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: 'https://play.google.com/store/apps',
    featured: true,
    metrics: 'Live on Google Play Store',
  },
  {
    id: '6',
    title: 'Apex-Photo',
    description: 'An event photo sharing mobile app supporting prompt multi-user upload spaces, secure rooms, and instant media dispatches.',
    longDescription: 'Apex-Photo is a high-speed event picture hosting and sharing mobile application. Employs fluid photo uploads, custom shared event galleries, and low-latency cache streaming for massive assemblies.',
    category: 'mobile',
    tags: ['React Native', 'Android SDK', 'Expo', 'Mobile Galleries', 'Media Cloud'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'Event Sharing Service',
  },
  {
    id: '7',
    title: 'Stock Distribute Scan App',
    description: 'A mobile warehousing catalog and dispatch layout connecting directly with Honeywell scanner hardware SDK library.',
    longDescription: 'Coded a robust warehousing and delivery mobile application utilizing Honeywell scan SDKs for accurate QR & barcode scanning. Decreased warehouse tracking re-renders by 80% while scaling real-time item dispatches.',
    category: 'mobile',
    tags: ['React Native', 'Honeywell SDK', 'QR & Barcode Scan', 'Stock Distribution', 'Android SDK'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: 'https://play.google.com/store/apps',
    featured: true,
    metrics: 'Honeywell Scanning Sync',
  },
  {
    id: '8',
    title: 'RNCA',
    description: 'A feature-rich WhatsApp-like mobile messaging application implementing responsive real-time chats, media transfers, and client-side database synchronization.',
    longDescription: 'RNCA is a custom mobile messaging app built with React Native. Leverages RealmDB for high-performance localized message caching, and integrates seamless multimedia exchange, active token authentications, and offline-first interfaces.',
    category: 'mobile',
    tags: ['React Native', 'RealmDB', 'Android SDK', 'Mobile Chat', 'Firebase'],
    githubUrl: 'https://github.com/keyurchanchad/Portfolio',
    liveUrl: '#',
    featured: true,
    metrics: 'Real-Time Sync Platform',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-galekt',
    role: 'MERN Stack Developer',
    company: 'Galekt Private Limited',
    period: 'November 2025 - Present',
    description: [
      'Building scalable web and mobile applications focusing on performance optimizations, state preservation, and clean architectural modules.',
      'Developed Thomas App, a full social hub incorporating blogs, nested comment threads, instant socket status updates, broadcast actions, and advanced admins.',
      'Contributed to Platform OMS, a comprehensive UK railway operations manager driving workforce rotas, compliance tracking, fatigue diagnostics, and asset listings.',
      'Implemented performance tactics reducing react component re-renders and utilized RTK Query for immediate API syncs and optimal cache management.'
    ],
    skills: ['TypeScript', 'Redux Toolkit', 'RTK Query', 'React Optimization', 'React Native', 'Node.js', 'MongoDB']
  },
  {
    id: 'exp-digilize',
    role: 'Full-Stack Developer',
    company: 'Digilize Solution',
    period: 'May 2024 - November 2025',
    description: [
      'Engineered scalable web and mobile applications intersecting physical instrumentation devices and database control caches.',
      'Developed Equality and Inspecta server / frontend web packages, allowing unique product code generation following strict FDA guidelines using Domino and Videojet industrial printers.',
      'Architected mobile warehousing apps using Honeywell barcode/QR scan SDK, slashing redundant re-renders by 80% and managing complex stock distribution.',
      'Designed high-speed Node.js microservices with Prisma and PostgreSQL, dropping backend API latencies by over 35% using Redis caching.'
    ],
    skills: ['AWS Basic', 'PostgreSQL', 'Prisma ORM', 'Microservices', 'NextJs', 'ReactJs', 'NodeJs', 'TailwindCss', 'Jest', 'Docker', 'Honeywell SDK', 'Domino & Videojet']
  },
  {
    id: 'exp-rao',
    role: 'MERN Stack Developer',
    company: 'Rao Information Technology',
    period: 'December 2022 - April 2024',
    description: [
      'Spearheaded development of a chat system mirroring WhatsApp, implementing seamless real-time communication modules.',
      'Architected P2P audio/video calling systems, dynamic media distribution channels, and secure end-to-end cryptographic encryption layers.',
      'Coded cross-compatible mobile UI layouts using React Native, guaranteeing robust offline synchronization and zero frame lag.',
      'Partnered closely with team operators within fast delivery pipelines, delivering scalable, secure mobile messaging capabilities.'
    ],
    skills: ['React Native', 'ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'WebRTC', 'Encryption']
  }
];

export const SKILL_CATEGORIES = [
  {
    name: 'Frontend Technologies',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript / ES6+', level: 90 },
      { name: 'React Native', level: 88 },
      { name: 'Redux Toolkit / RTK Query', level: 91 },
      { name: 'Tailwind CSS', level: 96 },
      { name: 'Performance Optimization', level: 89 },
    ],
  },
  {
    name: 'Backend & Cloud System',
    skills: [
      { name: 'Node.js / Express.js', level: 88 },
      { name: 'PostgreSQL / Prisma ORM', level: 86 },
      { name: 'MongoDB / Redis', level: 85 },
      { name: 'Microservices & API Sockets', level: 90 },
      { name: 'AWS Basic & Docker', level: 75 },
      { name: 'Hardware & IoT (TCP/IP)', level: 80 },
    ],
  },
  {
    name: 'Core & Production Soft Skills',
    skills: [
      { name: 'Responsive UI Architecture', level: 95 },
      { name: 'Lighthouse Performance Tuning', level: 88 },
      { name: 'E-Signature Audits & Security', level: 85 },
      { name: 'Google Play Store Publishing', level: 90 },
    ],
  },
];

