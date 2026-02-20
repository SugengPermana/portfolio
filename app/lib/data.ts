import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandLaravel,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPhp,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandNodejs,
  IconBrandMysql,
} from "@tabler/icons-react";

export const socialLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/sgprmna_",
    icon: IconBrandInstagram,
  },
  {
    title: "GitHub",
    href: "https://github.com/SugengPermana",
    icon: IconBrandGithub,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sugengpermanadesembry",
    icon: IconBrandLinkedin,
  },
];

export const techTools = [
  {
    name: "Next Js",
    icon: IconBrandNextjs,
    progress: 90,
    color: "#808080",
  },
  {
    name: "React",
    icon: IconBrandReact,
    progress: 85,
    color: "#61DAFB",
  },
  {
    name: "Laravel",
    icon: IconBrandLaravel,
    progress: 80,
    color: "#FF2D20",
  },
  {
    name: "Javascript",
    icon: IconBrandJavascript,
    progress: 95,
    color: "#F7DF1E",
  },
  {
    name: "Typescript",
    icon: IconBrandTypescript,
    progress: 85,
    color: "#3178C6",
  },
  {
    name: "Php",
    icon: IconBrandPhp,
    progress: 80,
    color: "#777BB4",
  },
  {
    name: "Tailwind CSS",
    icon: IconBrandTailwind,
    progress: 90,
    color: "#06B6D4",
  },
  {
    name: "Figma",
    icon: IconBrandFigma,
    progress: 75,
    color: "#F24E1E",
  },
  {
    name: "Node.js",
    icon: IconBrandNodejs,
    progress: 70,
    color: "#339933",
  },
  {
    name: "My Sql",
    icon: IconBrandMysql,
    progress: 75,
    color: "#4479A1",
  },
];

export interface Certificate {
  title: string;
  image: string;
  description: string;
  date: string;
  learned: string[];
  issuer?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Complete Web Development Bootcamp",
    image: "/green.png",
    description:
      "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and modern web development practices.",
    date: "January 2024",
    learned: [
      "Frontend development with React and Next.js",
      "Backend development with Node.js and Express",
      "Database management with MongoDB and MySQL",
      "RESTful API design and implementation",
      "Deployment and DevOps practices",
    ],
    issuer: "Online Learning Platform",
  },
  {
    title: "Advanced JavaScript & TypeScript",
    image: "/lambo.jpg",
    description:
      "Deep dive into modern JavaScript features, TypeScript type system, and advanced programming patterns.",
    date: "March 2024",
    learned: [
      "ES6+ features and modern JavaScript syntax",
      "TypeScript type system and generics",
      "Async/await and Promises",
      "Design patterns and best practices",
      "Performance optimization techniques",
    ],
    issuer: "Tech Academy",
  },
  {
    title: "UI/UX Design Fundamentals",
    image: "/green.png",
    description:
      "Learn the principles of user interface and user experience design, including wireframing, prototyping, and design systems.",
    date: "May 2024",
    learned: [
      "Design thinking and user research",
      "Wireframing and prototyping with Figma",
      "Color theory and typography",
      "Responsive design principles",
      "Accessibility and inclusive design",
    ],
    issuer: "Design Institute",
  },
];

export const projects = [
  {
    title: "Bedakin",
    description:
      "I developed a marketplace-style website that enables users to sell and purchase service-based products. Each product includes detailed information, and users can interact by leaving comments and submitting reviews based on their experience. These features help build trust and transparency between buyers and sellers. The platform focuses on usability, allowing users to easily explore products, share feedback, and engage within the marketplace environment.",
    image: "/bedakin.png",
    tags: ["react", "tailwind", "nodejs", "express", "neonDB"],
    links: {
      code: "https://github.com/SugengPermana/Bedakin",
      demo: "https://github.com/SugengPermana/Bedakin",
    },
    category: "Web Dev",
  },
  {
    title: "Belanja",
    description:
      " I developed an e-commerce website called Belanja.com that allows users to browse and purchase products through a user-friendly frontend interface. Customers can explore product listings, view detailed product information, and complete purchases seamlessly. The platform focuses on providing a smooth and responsive shopping experience for users.",
    image: "/belanja.png",
    tags: ["html", "css", "javascript", "nodejs"],
    links: {
      code: "https://github.com/SugengPermana/Belanja.com",
      demo: "https://sugengpermana.github.io/Belanja.com/",
    },
    category: "Web Dev",
  },
  {
    title: "Grenesia",
    description:
      "My friend and I created a website that can display Geographic Information System.",
    image: "/green.png",
    tags: ["html", "css", "Javascript"],
    links: {
      code: "https://github.com/SugengPermana/Belanja.com",
      demo: "https://sugengpermana.github.io/Belanja.com/",
    },
    category: "Web Dev",
  },
  
  {
    title: "Grenesia",
    description:
      "My friend and I created a website that can display Geographic Information System.",
    image: "/lambo.jpg",
    tags: ["html", "css", "Javascript"],
    links: {
      design: "#", // Placeholder for design link
    },
    isDesign: true,
    category: "Design App",
  },
  {
    title: "Grenesia",
    description:
      "My friend and I created a website that can display Geographic Information System.",
    image: "/green.png",
    tags: ["html", "css", "Javascript"],
    links: {
      code: "https://github.com/SugengPermana",
      demo: "",
    },
    category: "Web Dev",
  },
];

export const stats = [
  {
    value: "2+",
    label: "Fun Clients",
  },
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "1+",
    label: "Years Exp",
  },
];