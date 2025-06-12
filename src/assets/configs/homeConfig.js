import { FaReact, FaUniversity } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const homeConfig = {
    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name">Anudeep Suraneni</strong>
        </h1>,
    titles: [
        "Aspiring Data Scientist",
        "Experienced Web Developer",
        "Problem Solver",
        "Proud Indian"
    ],
    about: {
        start: "With 8+ years of experience solving real-world business problems, I excel at analytical thinking, data-driven decision making, and building scalable solutions. I thrive in open-ended challenges, leveraging my technical and communication skills to deliver impactful results.",
        exit: "Skilled in data analysis, cleaning, and visualization using Spreadsheets, SQL, R, and Tableau. Strong foundation in programming, problem solving, and collaborating across teams."
    },
    workTimeline: [
        {
            id: "work-5",
            title: "Google AI Essentials",
            company: "Coursera",
            description: "Completed a course on AI essentials, focusing on understanding AI technologies, their applications, and ethical considerations. Gained insights into how AI can augment tasks and improve decision-making processes.",
            date: "NOVEMBER 2024",
            icon: <GiArtificialIntelligence />,
            tags: [
                "Augment Tasks with AI",
                "Prompt Engineering",
                "Use AI Responsibly",
                "Evaluate AI Tools",
                "Recognize AI Harms",
                "Iterative Thinking",
                "Use Generative AI Technologies"
            ]
        },
        {
            id: "work-4",
            title: "Google Data Analytics Professional Certificate",
            company: "Coursera",
            description: "Completed intensive six-month program, gaining hands-on experience in data cleaning, visualization, project management, analysis interpretation, programming, and database management for data science roles.",
            date: "JANUARY 2024 - JULY 2024",
            icon: <SiGoogleanalytics />,
            tags: [
                "Jupyter Notebook",
                "R Programming",
                "Tableau",
                "SQL",
                "Spreadsheets",
                "Presentation skills",
                "Data Cleaning",
                "Data Analysis",
                "Data Visualization",
                "Data Aggregation",
                "Data Collection",
                "Data Ethics",
                "Data Calculations",
                "Attention to Detail",
                "Active Listening",
                "Collaboration",
                "Communication",
                "Structured Thinking",
                "Creative Thinking",
                "Critical Thinking",
                "Problem Solving",
                "Analytical Skills"
            ]
        },
        {
            id: "work-3",
            title: "Experience Engineer L2",
            company: "Publicis Sapient",
            description: "Migrated complex systems from JavaScript to React, demonstrating strong analytical and problem-solving skills. Tackled large codebases, resolved accessibility issues, and contributed to design systems. Collaborated with cross-functional teams to deliver solutions under tight deadlines.",
            date: "APRIL 2022 - Present",
            icon: <FaReact />,
            tags: [
                "Analytical Skills",
                "Collaboration",
                "Adobe Experience Manager (AEM)",
                "SalesForce Commerce Cloud (SFCC)",
                "React.js"
            ]
        },
        {
            id: "work-2",
            title: "Senior Software Developer",
            company: "Hexagon Safety & Infrastructure",
            description: "Led end-to-end web development as a full stack developer, improving product performance through root cause analysis and scalable solutions. Applied data-driven methods, laying the foundation for a transition into data science.",
            date: "JULY 2019 - MARCH 2022",
            icon: <FaReact />,
            tags: [
                "Full-Stack Development",
                "GIT",
                "React.js",
                "Angular",
                "TypeScript",
                "SQL",
                "API Development",
                "Node.js",
                "JavaScript (ES6)",
                "CSS 3",
                "HTML 5",
                "ASP.NET MVC"
            ]
        },
        {
            id: "work-1",
            title: "Software Developer",
            company: "Hexagon Safety & Infrastructure",
            description: "Improved software responsiveness by fivefold through collaborative efforts, fixing major performance issues.",
            date: "JUNE 2017 - JUNE 2019",
            icon: <MdWork />,
            tags: [
                "Problem Solving",
                "SQL",
                "VB.NET MVC",
                "Scrum Methodologies",
                "Collaboration",
                "Communication"
            ]
        },
        {
            id: "work-0",
            title: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
            company: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
            description: "Developed a strong foundation in computer science principles, algorithms, and data structures. Engaged in projects that honed my programming skills and problem-solving abilities.",
            date: "2013 - 2017",
            icon: <FaUniversity />,
            tags: [
                "Communication",
                "Artificial Intelligence",
                "Python",
                "R Programming",
                "Java",
                "Data Structures",
                "Algorithms",
                "C Programming",
                "Programming Languages",
                "Statistics",
                "Probability",
                "Computer Science"
            ]
        }
    ]
}

export default homeConfig
