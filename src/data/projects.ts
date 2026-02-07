export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  images: ProjectImage[];
  technologies: string[];
  github: string;
  demo?: string;
  featured: boolean;
  role: string;
  keyFeatures: string[];
}

export const featuredProjects: Project[] = [
  {
    slug: "the-tax-truths",
    title: "The Tax Truths",
    description:
      "A Tax Advisory & Management Platform with multiple dashboards for Admin, Client, Super Admin, and Operations — each tailored with relevant tools, workflows, and data visibility.",
    longDescription:
      "Developed multiple role-based dashboards with a responsive, intuitive frontend using React.js, Material-UI, and Tailwind CSS. Designed secure client interfaces for managing tax filings, payments, financial reports, and document uploads. Enabled collaboration through seamless document sharing and real-time updates between clients and advisors. Implemented efficient workflow designs for admins and operations to monitor activities, manage payments, and oversee tax compliance tasks.",
    images: [
      { src: "https://picsum.photos/seed/taxtruths1/800/500", alt: "Dashboard overview", caption: "Admin Dashboard" },
      { src: "https://picsum.photos/seed/taxtruths2/800/500", alt: "Client portal", caption: "Client Portal" },
      { src: "https://picsum.photos/seed/taxtruths3/800/500", alt: "Tax filing screen", caption: "Tax Filing Interface" },
      { src: "https://picsum.photos/seed/taxtruths4/800/500", alt: "Reports view", caption: "Financial Reports" },
      { src: "https://picsum.photos/seed/taxtruths5/800/500", alt: "Document uploads", caption: "Document Management" },
    ],
    technologies: ["React.js", "Material-UI", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com",
    featured: true,
    role: "Full Stack Developer",
    keyFeatures: [
      "Role-based dashboards for Admin, Client, Super Admin, and Operations teams",
      "Secure client interfaces for managing tax filings and financial reports",
      "Real-time document sharing and collaboration between clients and advisors",
      "Payment tracking and management with detailed transaction history",
      "Tax compliance monitoring with automated workflow pipelines",
      "Responsive design optimized for desktop and mobile devices",
    ],
  },
  {
    slug: "apotek",
    title: "ApoTek",
    description:
      "A Laboratory Management System with role-based dashboards and panels for Admin, Lab Admin, Sales, Logistics, Customer Service, and Clients.",
    longDescription:
      "Built role-based dashboards and panels for multiple roles. Developed interactive and responsive UIs using React.js, Material-UI, and Tailwind CSS for smooth workflows. Implemented client profile management with secure access to lab records, orders, and communications. Enabled real-time updates and notifications across dashboards for lab reports, orders, and tasks. Designed frontend to support efficient multi-role interactions and seamless user experience.",
    images: [
      { src: "https://picsum.photos/seed/apotek1/800/500", alt: "Lab dashboard", caption: "Lab Admin Dashboard" },
      { src: "https://picsum.photos/seed/apotek2/800/500", alt: "Sales panel", caption: "Sales Panel" },
      { src: "https://picsum.photos/seed/apotek3/800/500", alt: "Client profiles", caption: "Client Profile Management" },
      { src: "https://picsum.photos/seed/apotek4/800/500", alt: "Logistics tracking", caption: "Logistics Tracking" },
      { src: "https://picsum.photos/seed/apotek5/800/500", alt: "Reports section", caption: "Lab Reports" },
    ],
    technologies: ["React.js", "Material-UI", "Tailwind CSS", "REST API", "Socket.IO"],
    github: "https://github.com",
    featured: true,
    role: "Frontend Developer",
    keyFeatures: [
      "Multi-role dashboards for Admin, Lab Admin, Sales, Logistics, and Clients",
      "Client profile management with secure access to lab records and orders",
      "Real-time notifications and updates across all dashboards",
      "Interactive lab report generation and viewing interface",
      "Order management system with logistics tracking",
      "Seamless communication channels between roles",
    ],
  },
  {
    slug: "kordia-musical-academy",
    title: "Kordia - Musical Academy",
    description:
      "A platform connecting musicians, students, and event organizers with course management, real-time chat, and event booking capabilities.",
    longDescription:
      "Built a responsive, interactive UI connecting musicians, students, and event organizers. Developed student-facing modules for browsing, enrolling, and accessing courses. Created musician dashboards to manage courses, events, and performances. Enabled real-time updates and notifications for course progress, events, and bookings. Implemented a real-time chat system to facilitate communication between students, musicians, and organizers.",
    images: [
      { src: "https://picsum.photos/seed/kordia1/800/500", alt: "Course listing", caption: "Course Catalog" },
      { src: "https://picsum.photos/seed/kordia2/800/500", alt: "Musician dashboard", caption: "Musician Dashboard" },
      { src: "https://picsum.photos/seed/kordia3/800/500", alt: "Event booking", caption: "Event Booking" },
      { src: "https://picsum.photos/seed/kordia4/800/500", alt: "Chat interface", caption: "Real-time Chat" },
    ],
    technologies: ["React.js", "Socket.IO", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com",
    featured: true,
    role: "Full Stack Developer",
    keyFeatures: [
      "Student-facing modules for browsing, enrolling, and accessing courses",
      "Musician dashboards for managing courses, events, and performances",
      "Real-time chat system connecting students, musicians, and organizers",
      "Event booking and management with calendar integration",
      "Course progress tracking with real-time notifications",
      "Responsive design for seamless mobile and desktop experience",
    ],
  },
];

export const otherProjects: Project[] = [
  {
    slug: "rhs-school-management",
    title: "RHS - School Management System",
    description:
      "Interactive dashboards for managing students, guardians, and staff with academic tracking, attendance, grades, and behavior monitoring.",
    longDescription:
      "Developed a comprehensive school management system with interactive dashboards tailored for students, guardians, and staff. Built modules for academic tracking including attendance records, grade management, and behavior monitoring. Designed intuitive interfaces for staff to manage student records, generate reports, and communicate with guardians. Implemented role-based access control to ensure data privacy across user types.",
    images: [
      { src: "https://picsum.photos/seed/rhs1/800/500", alt: "Student dashboard", caption: "Student Dashboard" },
      { src: "https://picsum.photos/seed/rhs2/800/500", alt: "Attendance view", caption: "Attendance Tracking" },
      { src: "https://picsum.photos/seed/rhs3/800/500", alt: "Grade management", caption: "Grade Management" },
      { src: "https://picsum.photos/seed/rhs4/800/500", alt: "Staff panel", caption: "Staff Panel" },
    ],
    technologies: ["React.js", "Material-UI", "Tailwind CSS", "Node.js"],
    github: "https://github.com",
    featured: false,
    role: "Frontend Developer",
    keyFeatures: [
      "Role-based dashboards for students, guardians, and staff",
      "Academic tracking with attendance records and grade management",
      "Behavior monitoring and reporting system",
      "Staff tools for managing student records and generating reports",
      "Communication channels between staff and guardians",
    ],
  },
  {
    slug: "xpmo-project-management",
    title: "XPMO - Project Management SaaS",
    description:
      "A SaaS project management platform with task tracking, team collaboration, and workflow automation.",
    longDescription:
      "Built a modern SaaS project management platform designed for teams of all sizes. Developed task tracking features with drag-and-drop Kanban boards, list views, and timeline visualizations. Implemented team collaboration tools including real-time updates, commenting, and file sharing. Created workflow automation features to streamline repetitive processes and boost team productivity.",
    images: [
      { src: "https://picsum.photos/seed/xpmo1/800/500", alt: "Project board", caption: "Kanban Board" },
      { src: "https://picsum.photos/seed/xpmo2/800/500", alt: "Task details", caption: "Task Details" },
      { src: "https://picsum.photos/seed/xpmo3/800/500", alt: "Team view", caption: "Team Collaboration" },
      { src: "https://picsum.photos/seed/xpmo4/800/500", alt: "Workflow editor", caption: "Workflow Automation" },
    ],
    technologies: ["React.js", "Shadcn UI", "Tailwind CSS"],
    github: "https://github.com",
    featured: false,
    role: "Frontend Developer",
    keyFeatures: [
      "Drag-and-drop Kanban boards with list and timeline views",
      "Real-time team collaboration with commenting and file sharing",
      "Workflow automation for streamlining repetitive processes",
      "Task tracking with priority, deadline, and assignee management",
      "Dashboard analytics with project progress insights",
    ],
  },
];

export const allProjects: Project[] = [...featuredProjects, ...otherProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = allProjects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? allProjects[index - 1] : null,
    next: index < allProjects.length - 1 ? allProjects[index + 1] : null,
  };
}
