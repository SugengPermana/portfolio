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
  IconBrandPython,
} from "@tabler/icons-react";

export interface ResumeEducation {
  period: string;
  major: string;
  school: string;
  description: string;
  hoverColor: string;
  iconType: "graduation";
  image?: string;
  website?: string;
  learnMoreUrl?: string;
  achievements?: string[];
}

export interface ResumeExperience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  hoverColor: string;
  iconType: "briefcase";
  image?: string;
  achievements?: string[];
}

export interface ResumeBadge {
  month: string;
  title: string;
  issuer: string;
  description: string;
  certificateUrl: string;
}

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
    name: "python",
    icon: IconBrandPython,
    progress: 75,
    color: "#FFD43B",
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

export const resumeEducation: ResumeEducation[] = [
  {
    period: "2024 - Present",
    major: "S1 Information Technology",
    school: "Universitas Pamulang",
    description:
      "Currently I am studying at Universitas Pamulang, Information Technology Department, Informatics Engineering Study Program, 3nd Semester.",
    hoverColor: "#003d7a",
    iconType: "graduation",
    image: "/pamulang.png",
    website: "https://unpam.ac.id/",
    learnMoreUrl: "https://unpam.ac.id/",
    achievements: [
      "Maintained strong academic performance in core programming and computer science subjects.",
      "Actively involved in campus tech communities and self-learning modern web technologies.",
    ],
  },
  {
    period: "2021 - 2024",
    major: "Pariwisata & Perhotelan",
    school: "SMK Laboratorium Indonesia",
    description:
      "I also graduated from SMK Laboratorium Indonesia majoring in Pariwisata & Perhotelan in this school I learn about public speaking and how to serve guests.",
    hoverColor: "#006d3a",
    iconType: "graduation",
    image: "/kkgj.png",
    website: "https://smklaboratoriumindonesia.sch.id/",
    learnMoreUrl: "https://smklaboratoriumindonesia.sch.id/",
    achievements: [
      "Developed strong public speaking and customer service skills.",
      "Participated in school events and hospitality-related activities.",
    ],
  },
];

export const resumeExperiences: ResumeExperience[] = [
  {
    id: "Freelance",
    period: "2025 - Present",
    role: "Freelance",
    company: "Remote - Bogor",
    description:
      "I work as a freelance web developer, creating websites for clients and helping them with their web development needs.",
    hoverColor: "#a600ff",
    iconType: "briefcase",
    image: "",
    achievements: [
      "Built responsive landing pages and company profiles using modern frontend stacks.",
      "Collaborated with clients to translate business needs into usable web interfaces.",
    ],
  },
  {
    id: "magang",
    period: "Feb - April 2023",
    role: "Tour Guide",
    company: "On Site - Museum Sejarah Jakarta",
    description:
      "selama 3 bulan gue ikut terlibat langsung dalam memandu wisatawan asing dan local,Tugas utama gue membantu pengunjung kalau mereka butuh informasi mengenai museum, sekaligus menjaga koleksi museum",
    hoverColor: "#a600ff",
    iconType: "briefcase",
    image: "",
    achievements: [
      "Membantu pengunjung dengan ngasih informasi tentang ruangan dan koleksi yang ada di museum.",
      "Ikut ngejaga koleksi museum dan memastikan area museum tetap tertata dengan baik",
      "Menjadi pemandu tourist local dan asing selama 3 bulan magang"
    ],
  },
];

export const resumeBadges: ResumeBadge[] = [
  {
    month: "February 2025",
    title: "Frontend Web Developer Badge",
    issuer: "Online Course Platform",
    description:
      "Completed a comprehensive frontend course covering React, Tailwind CSS, and modern JavaScript best practices.",
    certificateUrl: "#",
  },
  {
    month: "December 2024",
    title: "JavaScript Fundamentals Badge",
    issuer: "Coding Bootcamp",
    description:
      "Strengthened JavaScript fundamentals including ES6+, asynchronous programming, and DOM manipulation.",
    certificateUrl: "#",
  },
];

export const projects = [
  {
    title: "Bedakin",
    description:
      "Saya mengembangkan website bergaya marketplace yang memungkinkan pengguna untuk menjual dan membeli produk berbasis layanan. Setiap produk dilengkapi dengan informasi detail, serta fitur komentar dan review yang memungkinkan pengguna berbagi pengalaman mereka. Fitur ini membantu membangun kepercayaan dan transparansi antara pembeli dan penjual. Platform ini dirancang dengan fokus pada kemudahan penggunaan, sehingga pengguna dapat menjelajahi layanan, memberikan feedback, dan berinteraksi dengan mudah di dalam sistem marketplace.",
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
      "Saya mengembangkan website e-commerce bernama Belanja.com yang memungkinkan pengguna untuk menjelajahi dan membeli produk melalui antarmuka frontend yang user-friendly. Pengguna dapat melihat daftar produk, membaca informasi detail, dan melakukan proses pembelian dengan lancar. Platform ini dirancang untuk memberikan pengalaman belanja yang responsif, cepat, dan nyaman bagi pengguna.",
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
      "Saya mengembangkan website bernama Villa Plus yang memungkinkan pengguna untuk menjelajahi dan melihat rekomendasi villa. Platform ini menyediakan daftar villa pilihan dengan informasi detail untuk membantu pengguna menemukan akomodasi yang sesuai dengan kebutuhan dan preferensi mereka. Website ini dirancang dengan tampilan yang bersih, modern, dan mudah digunakan untuk memastikan pengalaman browsing yang nyaman.",
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
    "Saya mengembangkan website manajemen tugas yang memungkinkan pengguna untuk membuat dan mengelola tugas secara efisien. Pengguna dapat menambahkan tugas, memantau progress, dan mengatur pekerjaan mereka dalam satu platform terpusat. Sistem ini dirancang untuk membantu meningkatkan produktivitas dengan antarmuka yang sederhana, intuitif, dan mudah digunakan.",
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
    "Saya membuat website portfolio pribadi untuk menampilkan proyek, progress pembelajaran, dan latar belakang profesional saya sebagai developer. Platform ini menampilkan hasil karya, skill teknis, dan pengalaman yang saya miliki, sehingga memberikan gambaran yang jelas tentang kemampuan saya dalam pengembangan web. Website ini dirancang dengan tampilan modern, responsif, dan fokus pada pengalaman pengguna.",
    image: "/portfolio-1.png",
    tags: ["react", "javascript", "tailwind"],
    links: {
      code: "https://github.com/SugengPermana/Portofolio_SugengPermana",
      demo: "https://sugengpermana.vercel.app/",
    },
    category: "Web Dev",
  },
  
  {
    title: "Sepatu Sneakers",
    description:
      "Saya membuat desain produk sepatu untuk kebutuhan promosi di media sosial. Desain ini berfokus pada tampilan yang clean dan modern, dengan produk sebagai fokus utama agar mudah menarik perhatian. Saya mengatur komposisi, tipografi, dan warna agar terlihat seimbang dan nyaman dilihat, serta menambahkan elemen seperti label, harga, dan call-to-action untuk mendukung kebutuhan promosi.",
    image: "/shoes.png",
    tags: ["figma"],
    links: {
      design: "/shoes.png", // Placeholder for design link
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