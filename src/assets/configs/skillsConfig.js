// SI (Simple Icons)
import { 
  // SiTensorflow,      // Machine Learning
  // SiScikitlearn,     // Regression Models
  SiTableau,         // Tableau
  SiAdobe,           // Adobe Experience Manager
  SiSalesforce,      // Salesforce Commerce Cloud
  SiRedux, // React Redux
  SiTypescript,      // TypeScript
  SiDotnet,          // ASP.NET MVC
} from "react-icons/si";

// FA (Font Awesome)
import { 
  // FaChartBar,        // Statistical Analysis
  // FaPython,          // Python
  FaRProject,        // R
  FaBalanceScale,    // Data Ethics
  FaTable,           // Spreadsheets
  FaRegLightbulb,    // Creative Thinking
  FaRobot,           // Augment tasks with AI
  FaRegCheckCircle,  // Use AI responsibly
  FaRegComments,     // Active listening
  FaRegEdit,         // Attention to Detail
  FaStackOverflow,   // Full Stack Development
  FaGitAlt,          // Git
  FaReact,           // React.js
  FaNodeJs,          // Node.js
  FaJs,              // JavaScript
  FaCss3Alt,         // CSS 3
  FaHtml5,           // HTML 5
  FaBrain,           // Problem Solving
  FaRegComments as FaCommunication, // Communication
  FaProjectDiagram,  // Algorithms
  FaCalculator       // Probability
} from "react-icons/fa";

// MD (Material Design)
import {
  MdOutlinePresentToAll, // Presentation Skills
  MdOutlineDataUsage,// Data Aggregation
  MdAnalytics as MdDataAnalysis, // Data Analysis
  MdCleaningServices,// Data Cleaning
  MdOutlineLightbulb,// Structured Thinking
  MdPsychology,      // Critical Thinking
  MdEngineering,     // Prompt Engineering
  MdAssessment,      // Evaluate AI tools
  MdScience,         // Recognize AI harms
  MdPrecisionManufacturing, // Iterative thinking
  MdComputer         // Computer Science
} from "react-icons/md";

// AI (Ant Design Icons)
import { 
  AiOutlineFundProjectionScreen, // Data Visualization
  AiOutlineCalculator, // Data Calculations
  AiOutlineApi,      // API Development
  AiOutlineDatabase, // Data Structures
  AiOutlineCode      // Programming Languages
} from "react-icons/ai";

import { 
    TbSql // SQL
} from "react-icons/tb";

const skillsConfig = {
    mainSkills: [
        // {
        //     id: "skills-45",
        //     className: "skill-icon",
        //     icon: <SiTensorflow size={50}/>,
        //     text: "Machine Learning"
        // },
        // {
        //     id: "skills-44",
        //     className: "skill-icon",
        //     icon: <SiScikitlearn size={50}/>,
        //     text: "Regression Models"
        // },
        // {
        //     id: "skills-43",
        //     className: "skill-icon",
        //     icon: <FaChartBar size={50}/>,
        //     text: "Statistical Analysis"
        // },
        // {
        //     id: "skills-42",
        //     className: "skill-icon",
        //     icon: <FaPython size={50}/>,
        //     text: "Python"
        // },
        {
            id: "skills-41",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        {
            id: "skills-40",
            className: "skill-icon",
            icon: <FaRProject size={50}/>,
            text: "R"
        },
        {
            id: "skills-39",
            className: "skill-icon",
            icon: <TbSql size={50}/>,
            text: "SQL"
        },
        {
            id: "skills-38",
            className: "skill-icon",
            icon: <FaTable size={50}/>,
            text: "Spreadsheets"
        },
        {
            id: "skills-37",
            className: "skill-icon",
            icon: <MdOutlinePresentToAll size={50}/>,
            text: "Presentation Skills"
        },
        {
            id: "skills-36",
            className: "skill-icon",
            icon: <MdDataAnalysis size={50}/>,
            text: "Data Analysis"
        },
        {
            id: "skills-35",
            className: "skill-icon",
            icon: <AiOutlineFundProjectionScreen size={50}/>,
            text: "Data Visualization"
        },
        {
            id: "skills-34",
            className: "skill-icon",
            icon: <MdOutlineDataUsage size={50}/>,
            text: "Data Aggregation"
        },
        {
            id: "skills-33",
            className: "skill-icon",
            icon: <MdCleaningServices size={50}/>,
            text: "Data Cleaning"
        },
        {
            id: "skills-32",
            className: "skill-icon",
            icon: <AiOutlineCalculator size={50}/>,
            text: "Data Calculations"
        },
        {
            id: "skills-31",
            className: "skill-icon",
            icon: <FaBalanceScale size={50}/>,
            text: "Data Ethics"
        },
        {
            id: "skills-30",
            className: "skill-icon",
            icon: <MdOutlineLightbulb size={50}/>,
            text: "Structured Thinking"
        },
        {
            id: "skills-29",
            className: "skill-icon",
            icon: <FaRegLightbulb size={50}/>,
            text: "Creative Thinking"
        },
        {
            id: "skills-28",
            className: "skill-icon",
            icon: <MdPsychology size={50}/>,
            text: "Critical Thinking"
        },
        {
            id: "skills-27",
            className: "skill-icon",
            icon: <FaBrain size={50}/>,
            text: "Problem Solving"
        }
    ],
    complementarySkills: [
        {
            id: "skills-26",
            className: "skill-icon",
            icon: <FaRobot size={50}/>,
            text: "Augment tasks with AI"
        },
        {
            id: "skills-25",
            className: "skill-icon",
            icon: <MdEngineering size={50}/>,
            text: "Prompt Engineering"
        },
        {
            id: "skills-24",
            className: "skill-icon",
            icon: <MdAssessment size={50}/>,
            text: "Evaluate AI tools"
        },
        {
            id: "skills-23",
            className: "skill-icon",
            icon: <FaRegCheckCircle size={50}/>,
            text: "Use AI responsibly"
        },
        {
            id: "skills-22",
            className: "skill-icon",
            icon: <MdScience size={50}/>,
            text: "Recognize AI harms"
        },
        {
            id: "skills-21",
            className: "skill-icon",
            icon: <MdPrecisionManufacturing size={50}/>,
            text: "Iterative thinking"
        },
        {
            id: "skills-20",
            className: "skill-icon",
            icon: <FaRegComments size={50}/>,
            text: "Active listening"
        },
        {
            id: "skills-19",
            className: "skill-icon",
            icon: <FaRegEdit size={50}/>,
            text: "Attention to Detail"
        },
        {
            id: "skills-18",
            className: "skill-icon",
            icon: <SiAdobe size={50}/>,
            text: "Adobe Experience Manager"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiSalesforce size={50}/>,
            text: "Salesforce Commerce Cloud"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <FaStackOverflow size={50}/>,
            text: "Full Stack Development"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiRedux size={50}/>,
            text: "React Redux"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <FaReact size={50}/>,
            text: "React.js"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiTypescript size={50}/>,
            text: "TypeScript"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiDotnet size={50}/>,
            text: "ASP.NET MVC"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <AiOutlineApi size={50}/>,
            text: "API Development"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <FaNodeJs size={50}/>,
            text: "Node.js"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <FaJs size={50}/>,
            text: "JavaScript"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <FaCss3Alt size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <FaHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaCommunication size={50}/>,
            text: "Communication"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <FaProjectDiagram size={50}/>,
            text: "Algorithms"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <AiOutlineDatabase size={50}/>,
            text: "Data Structures"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <AiOutlineCode size={50}/>,
            text: "Programming Languages"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <FaCalculator size={50}/>,
            text: "Probability"
        },
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <MdComputer size={50}/>,
            text: "Computer Science"
        }
    ]
}

export default skillsConfig
