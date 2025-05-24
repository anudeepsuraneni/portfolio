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
            title: "Experience Engineer L2",
            company: "Publicis Sapient",
            description: "Migrated complex systems from JavaScript to React, demonstrating strong analytical and problem-solving skills. Tackled large codebases, resolved accessibility issues, and contributed to design systems. Collaborated with cross-functional teams to deliver solutions under tight deadlines.",
            date: "2022-Present",
            icon: <FaReact />,
            tags: [
                "adobe experience manager",
                "salesforce commerce cloud",
                "redux saga",
                "react redux"
            ]
        },
        {
            id: "work-4",
            title: "Google AI Essentials",
            company: "Coursera",
            description: "Completed a course on AI essentials, focusing on understanding AI technologies, their applications, and ethical considerations. Gained insights into how AI can augment tasks and improve decision-making processes.",
            date: "2023-2024",
            icon: <GiArtificialIntelligence />,
            tags: [
                "augment tasks with ai",
                "prompt engineering",
                "evaluate ai tools",
                "use ai responsibly",
                "recognize ai harms",
                "iterative thinking",
                "use generative technologies"
            ]
        },
        {
            id: "work-3",
            title: "Google Data Analytics Professional Certificate",
            company: "Coursera",
            description: "Completed a comprehensive program covering data analysis, visualization, and ethics. Developed skills in R programming, SQL, and Tableau to analyze and visualize data effectively.",
            date: "2022-2023",
            icon: <SiGoogleanalytics />,
            tags: [
                "R programming",
                "active listening",
                "presentation skills",
                "tableau",
                "data visualization",
                "data ethics",
                "data aggregation",
                "data calculations",
                "data analysis",
                "data cleaning",
                "spreadsheets",
                "structured thinking",
                "creative thinking",
                "critical thinking",
                "attention to detail"
            ]
        },
        {
            id: "work-2",
            title: "Senior Software Developer",
            company: "Hexagon Safety & Infrastructure",
            description: "Enhanced product performance and reliability by identifying root causes and implementing solutions. Applied data-driven approaches to optimize workflows and ensure quality deliverables.",
            date: "2019-2022",
            icon: <FaReact />,
            tags: [
                "full-stack development",
                "git",
                "react.js",
                "typescript",
                "asp.net mvc",
                "api development",
                "node.js",
                "javascript",
                "css3",
                "html5"
            ]
        },
        {
            id: "work-1",
            title: "Software Developer",
            company: "Hexagon Safety & Infrastructure",
            description: "Improved software responsiveness by fivefold through collaborative efforts, fixing major performance issues.",
            date: "2017-2019",
            icon: <MdWork />,
            tags: [
                "sql",
                "problem solving",
                "communication"
            ]
        },
        {
            id: "work-0",
            title: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
            company: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
            description: "Developed a strong foundation in computer science principles, algorithms, and data structures. Engaged in projects that honed my programming skills and problem-solving abilities.",
            date: "2013-2017",
            icon: <FaUniversity />,
            tags: [
                "algorithms",
                "data structures",
                "programming languages",
                "probaility",
                "computer science"
            ]
        }
    ]
}

export default homeConfig
