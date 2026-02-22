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
    title: "Memulai Pemograman Dengan Python",
    image: "/memulai_python.jpg",
    description:
      "",
    date: "Mei 2025",
    learned: [
      "belajar basic if condition, numbering, classess",
    ],
    issuer: "dicoding",
  },
  {
    title: "Belajar Dasar pemograman Javascript",
    image: "/javascript.png",
    description:
      "",
    date: " juli 2025",
    learned: [
      "ES6+ features and modern JavaScript syntax",
      "Async/await and Promises",
      "Design patterns and best practices",
      "Performance optimization techniques",
      "OOP"
    ],
    issuer: "dicoding",
  },
  {
    title: "Ai Praktis Untuk Produktivitas",
    image: "/ai-produk.jpg",
    description:
    "",
    date: "juli 2025",
    learned: [
      "belajar ai untuk productivitas setiap hari",
      "mempelajari dasar dasar ai",
      "belajar membuat promnt yang di mengerti ai",
    ],
    issuer: "dicoding",
  },
  {
    title: "Belajar Back end pemula dengan javascript",
    image: "/backend.png",
    description:
      "",
    date: "agustus 2025",
    learned: [
      "Backend development dengan Node.js dan Express",
      "RESTful API design dan implementation",
    ],
    issuer: "dicoding",
  },
  {
    title: "Belajar Dasar Cloud & Aws",
    image: "/cloud.png",
    description:
      "",
    date: "agustus 2025",
    learned: [
      "basic konsep cloud dan aws",
      "mempelajari cloud dan aws menggunakan ai",
    ],
    issuer: "diconding",
  },
  {
    title: "Fundamental Junior Web Developer",
    image: "/junior.jpg",
    description:
      "",
    date: "agustus 2025",
    learned: [
      "belajar basic best Practice",
      "mempelajari karir ke depan nya bagi seornag web developer",
      "mempelajari analogi seorang web developer seperti apa "
    ],
    issuer: "komdigi",
  },
  {
    title: "introduction data science with R",
    image: "/intro-R.jpg",
    description:
      "",
    date: "agustus 2025",
    learned: [
      "mempelajari konsep bahasa R",
      "belajar bagaimana cara kerja R",
    ],
    issuer: "DQlab",
  },
  {
    title: "R For data Science",
    image: "/R-data.jpg",
    description:
      "",
    date: "agustus 2025",
    learned: [
      "belajar basic class R",
      "belajar menggunakan R"
    ],
    issuer: "DQLab",
  },
  {
    title: "Guide Learn R With Ai ",
    image: "/ai-R.jpg",
    description:
      "",
    date: "september 2025",
    learned: [
      "Mempelajari serangan apa yang akan terjadi",
      "belajar konsep dari cybersecurity",
      "belajar melindungi diri dari serangan sosial enginering  "
    ],
    issuer: "DQlab",
  },
  {
    title: "Introduction to cybersecurity",
    image: "/cybersecurity.jpg",
    description:
      "",
    date: "september 2025",
    learned: [
      "Mempelajari serangan apa yang akan terjadi",
      "belajar konsep dari cybersecurity",
      "belajar melindungi diri dari serangan sosial enginering  "
    ],
    issuer: "Networking Academy",
  },

];

export const projects = [
  {
    title: "Bedakin",
    description:
      "I developed a marketplace-style website that enables users to sell and purchase service-based products. Each product includes detailed information, and users can interact by leaving comments and submitting reviews based on their experience. These features help build trust and transparency between buyers and sellers. The platform focuses on usability, allowing users to easily explore products, share feedback, and engage within the marketplace environment.",
    image: "/bedakin.png",
    tags: ["react", "tailwind", "nodejs", "express", "neonDB", "typescript"],
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
    image: "/belanja_com.png",
    tags: ["html", "css", "javascript", "nodejs"],
    links: {
      code: "https://github.com/SugengPermana/Belanja.com",
      demo: "https://sugengpermana.github.io/Belanja.com/",
    },
    category: "Web Dev",
  },
  {
    title: "VillaPlus",
    description:
      "I developed a website called Villa Plus that allows users to explore and view villa recommendations. The platform provides curated villa listings with detailed information to help users find suitable accommodation based on their preferences. The website is designed with a clean and user-friendly interface to ensure a smooth browsing experience.",
    image: "/villa_plus.png",
    tags: ["next js", "react", "tailwind", "node js", "typescript"],
    links: {
      code: "https://github.com/SugengPermana/villa-plus",
      demo: "https://villa-plus.vercel.app/",
    },
    category: "Web Dev",
  },
  
  {
    title: "Task Manajemen",
    description:
    "I developed a task management website that allows users to create and manage tasks efficiently. Users can add tasks, track their progress, and organize their work in one centralized platform. The system is designed to help users stay organized and improve productivity through a simple and user-friendly interface.",
    image: "/Task_manajemen.png",
    tags: ["html", "css", "Javascript"],
    links: {
      code: "https://github.com/SugengPermana/Task_Manajemen",
      demo: "https://task-manajemen.vercel.app/",
    },
    category: "Web Dev",
  },
  {
    title: "Portfolio V1",
    description:
    "I created a personal portfolio website (Version 1) to display my projects, development progress, and professional background. The platform highlights my work, technical skills, and experiences, providing a clear overview of my capabilities as a web developer. The website is designed with a modern and responsive interface to ensure a smooth user experience.",
    image: "/portfolio-1.png",
    tags: ["react", "javascript", "tailwind"],
    links: {
      code: "https://github.com/SugengPermana/Portofolio_SugengPermana",
      demo: "https://sugengpermana.vercel.app/",
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
];

export const stats = [
  {
    value: "2+",
    label: "Fun Clients",
  },
  {
    value: "4+",
    label: "Projects",
  },
  {
    value: "1+",
    label: "Years Exp",
  },
];