/**
 * Salike Kranthi Kowshik - Portfolio Data Store
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Salike Kranthi Kowshik",
    title: "Computer Science Undergraduate | Full-Stack & ML Developer",
    phone: "+91 9398637365",
    email: "salikekranthi@gmail.com",
    linkedin: "https://linkedin.com/in/salike-kranthi-kowshik",
    github: "https://github.com/kowshik301",
    location: "Andhra Pradesh, India",
    objective: "Computer Science undergraduate with expertise in Java, MERN Stack, Data Structures & Algorithms, Machine Learning, AWS, and IoT. Built full-stack applications, intelligent analytics systems, and research-based image processing solutions through academic projects. Strong foundation in software development, problem-solving, and scalable application design.",
    typewriterTitles: [
      "Full Stack MERN Developer",
      "Machine Learning & AI Enthusiast",
      "Image Processing Researcher",
      "AWS Cloud Practitioner",
      "Soft Skills Captain & Cadet Leader"
    ],
    stats: [
      { number: "8.20", label: "B.Tech CGPA at VIT-AP" },
      { number: "3+", label: "Academic & Research Projects" },
      { number: "12+", label: "REST APIs Built" },
      { number: "150+", label: "Cadets Mentored & Led" }
    ]
  },

  skillsCategories: [
    {
      id: "programming",
      name: "Programming Languages",
      skills: [
        { name: "Java", level: 90, icon: "fa-brands fa-java" },
        { name: "Python", level: 92, icon: "fa-brands fa-python" },
        { name: "SQL", level: 85, icon: "fa-solid fa-database" },
        { name: "R", level: 75, icon: "fa-solid fa-chart-line" }
      ]
    },
    {
      id: "web-db",
      name: "Database & Web",
      skills: [
        { name: "React.js", level: 88, icon: "fa-brands fa-react" },
        { name: "Node.js", level: 85, icon: "fa-brands fa-node-js" },
        { name: "Express.js", level: 85, icon: "fa-solid fa-server" },
        { name: "MongoDB", level: 82, icon: "fa-solid fa-leaf" },
        { name: "JavaScript (ES6+)", level: 90, icon: "fa-brands fa-js" },
        { name: "HTML5 / CSS3", level: 95, icon: "fa-brands fa-html5" }
      ]
    },
    {
      id: "ml-ai",
      name: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: 88, icon: "fa-solid fa-brain" },
        { name: "OpenCV", level: 85, icon: "fa-solid fa-eye" },
        { name: "YOLO Object Detection", level: 80, icon: "fa-solid fa-camera" },
        { name: "ANN & Fuzzy Logic", level: 84, icon: "fa-solid fa-diagram-project" },
        { name: "Data Preprocessing & Matplotlib", level: 90, icon: "fa-solid fa-chart-pie" }
      ]
    },
    {
      id: "cloud-tools",
      name: "Cloud, BI & Tools",
      skills: [
        { name: "AWS (EC2, Lambda, RDS, IAM)", level: 82, icon: "fa-brands fa-aws" },
        { name: "Power BI & DAX", level: 85, icon: "fa-solid fa-chart-column" },
        { name: "Git & GitHub", level: 90, icon: "fa-brands fa-github" },
        { name: "Arduino IDE & IoT", level: 78, icon: "fa-solid fa-microchip" },
        { name: "Jupyter Notebook & Google Colab", level: 92, icon: "fa-solid fa-code" }
      ]
    }
  ],

  projects: [
    {
      id: "mental-health-ai",
      title: "Mental Health Detection Using ANN & Fuzzy Logic",
      category: "ml-ai",
      period: "Jan 2025 – Mar 2025",
      badge: "Machine Learning",
      image: "assets/images/project_mental_health.jpg",
      description: "Built an ML-based mental health prediction system using Artificial Neural Networks (ANN) and Fuzzy Logic to analyze 5 key behavioral parameters in real-time.",
      techStack: ["Python", "Scikit-learn", "Scikit-Fuzzy", "NumPy", "Pandas", "Matplotlib"],
      highlights: [
        "Analyzed 5 behavioral parameters including sleep, stress level, mood state, social activity, and physical activity.",
        "Designed 20+ custom fuzzy rules and membership functions for intelligent multi-faceted mental health risk classification.",
        "Evaluated the model on real-world datasets, delivering instantaneous predictions through an interactive interface.",
        "Combined neural network feature extraction with fuzzy decision logic for high reliability."
      ]
    },
    {
      id: "image-encryption",
      title: "Image Encryption Using Hyperchaotic System",
      category: "security",
      period: "Aug 2025 – Dec 2025",
      badge: "Digital Image Processing",
      image: "assets/images/project_encryption.jpg",
      description: "Developed a robust, high-security image encryption pipeline leveraging 4D hyperchaotic system maps, hash functions, and multi-stage diffusion.",
      techStack: ["Python", "NumPy", "OpenCV", "Pillow (PIL)", "Matplotlib", "Scikit-image", "Google Colab"],
      highlights: [
        "Implemented a 5-stage image encryption pipeline using Hash-384, 4D Hyperchaotic mapping, Zigzag permutation, Roulette Rotation, and Diffusion.",
        "Evaluated encryption performance rigorously using 6 security metrics: NPCR, UACI, Entropy, PSNR, MSE, and SSIM.",
        "Tested the encryption model across multiple grayscale images to validate zero correlation and lossless decryption accuracy.",
        "Achieved near-ideal entropy scores (>7.99) preventing differential and statistical cryptographic attacks."
      ]
    },
    {
      id: "mern-project-mgmt",
      title: "Full-Stack Project Management Tool",
      category: "fullstack",
      period: "Jan 2026 – Mar 2026",
      badge: "MERN Stack",
      image: "assets/images/project_mern.jpg",
      description: "Developed an enterprise-grade project management web platform supporting secure role-based access, task assignment, and real-time status tracking.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "HTML", "CSS"],
      highlights: [
        "Architected and deployed 12+ REST APIs for user authentication, project creation, task assignment, and activity tracking.",
        "Designed flexible MongoDB schemas with 4+ collections for users, projects, tasks, comments, and activity logs.",
        "Built responsive React interfaces featuring 10+ reusable modular components for dashboards, task boards, and project status views.",
        "Integrated JWT token-based authentication and BCrypt password encryption for robust endpoint security."
      ]
    }
  ],

  education: [
    {
      institution: "VIT-AP University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2023 – Present",
      grade: "CGPA: 8.20",
      details: "Relevant Coursework: Data Structures and Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering."
    },
    {
      institution: "Sainik School Kalikiri, Andhra Pradesh",
      degree: "Senior Secondary (Class XII), CBSE",
      period: "2021 – 2023",
      grade: "80.0%",
      details: "Focus on Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      institution: "Sainik School Kalikiri, Andhra Pradesh",
      degree: "Secondary (Class X), CBSE",
      period: "2016 – 2021",
      grade: "85.0%",
      details: "Structured military cadet training, leadership discipline, and academic excellence."
    }
  ],

  certifications: [
    {
      title: "AWS Academy Cloud Foundations & Architecture",
      issuer: "AWS Academy",
      date: "Nov 2025",
      icon: "fa-brands fa-aws"
    },
    {
      title: "MERN Full Stack Development",
      issuer: "ETHNUS",
      date: "Jul 2025",
      icon: "fa-solid fa-code"
    }
  ],

  achievements: [
    {
      title: "NCC A and B Certificates",
      desc: "Earned NCC A & B Certificates after completing structured military cadet training, physical endurance tests, and formal assessments.",
      icon: "fa-solid fa-award"
    },
    {
      title: "CBSE District Volleyball Champion",
      desc: "Represented the school volleyball team for 4 consecutive years, clinching the CBSE District Championship title.",
      icon: "fa-solid fa-trophy"
    },
    {
      title: "10+ Sports & Athletics Podium Finishes",
      desc: "Secured over 10 podium finishes in various athletic events across inter-district and university-level sports competitions.",
      icon: "fa-solid fa-medal"
    }
  ],

  leadership: [
    {
      title: "Soft Skills Captain",
      desc: "Mentored 150+ cadets, organizing academic drills, communication workshops, and leadership development activities.",
      icon: "fa-solid fa-user-tie"
    },
    {
      title: "CATC Parade & Operations Commander",
      desc: "Led 70+ NCC cadets during the Combined Annual Training Camp (CATC), managing parade drills, camp discipline, and daily operations.",
      icon: "fa-solid fa-flag"
    },
    {
      title: "House Athletics Captain",
      desc: "Captained the house athletics team to secure the Athletics Championship after a 9-year gap through strategic event planning and team motivation.",
      icon: "fa-solid fa-person-running"
    }
  ]
};
