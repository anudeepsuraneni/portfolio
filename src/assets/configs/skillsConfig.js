// SI (Simple Icons)
import { 
  // SiTensorflow,      // Machine Learning
  // SiScikitlearn,     // Regression Models
  SiTableau,         // Tableau
  SiJupyter,         // Jupyter Notebook
  SiAdobe,           // Adobe Experience Manager (AEM)
  SiSalesforce,      // SalesForce Commerce Cloud (SFCC)
  SiTypescript,      // TypeScript
  SiAngular,         // Angular
  SiDotnet,          // ASP.NET MVC
  SiJira, // Scrum Methodologies
  SiOpenjdk,           // Java
  SiC // C Programming
} from "react-icons/si";

// FA (Font Awesome)
import { 
  // FaChartBar,        // Statistical Analysis
  FaPython,          // Python
  FaRProject,        // R Programming
  FaBalanceScale,    // Data Ethics
  FaTable,           // Spreadsheets
  FaKaggle,         // Kaggle
  FaRegLightbulb,    // Creative Thinking
  FaRobot,           // Augment Tasks with AI
  FaRegCheckCircle,  // Use AI Responsibly
  FaMagic,         // Use Generative AI Technologies
  FaRegComments,     // Active Listening
  FaRegEdit,         // Attention to Detail
  FaStackOverflow,   // Full-Stack Development
  FaGitAlt,          // GIT
  FaReact,           // React.js
  FaNodeJs,          // Node.js
  FaJs,              //  (ES6)
  FaCss3Alt,         // CSS 3
  FaHtml5,           // HTML 5
  FaBrain,           // Problem Solving
  FaWindows, // VB.NET MVC
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
  MdAssessment,      // Evaluate AI Tools
  MdScience,         // Recognize AI Harms
  MdPrecisionManufacturing, // Iterative Thinking
  MdComputer         // Computer Science
} from "react-icons/md";

// Box Icons
import { 
    BiConversation, // Communication
    BiBarChartAlt2 // Statistics
} from "react-icons/bi";

// Hero Icons
import { 
    HiOutlineCollection, // Data Collection
    HiUserGroup // Collaboration
} from "react-icons/hi";

// Game Icons
import { 
    GiArtificialIntelligence // Artificial Intelligence
} from "react-icons/gi";

// AI (Ant Design Icons)
import { 
  AiOutlineFundProjectionScreen, // Data Visualization
  AiOutlineCalculator, // Data Calculations
  AiOutlineSearch, // Analytical Skills
  AiOutlineApi,      // API Development
  AiOutlineDatabase, // Data Structures
  AiOutlineCode      // Programming Languages
} from "react-icons/ai";

import { 
    TbSql // SQL
} from "react-icons/tb";

const skillsConfig = {
    mainSkills: [
        {
            id: "RProgramming",
            className: "skill-icon",
            icon: <FaRProject size={50}/>,
            text: "R Programming"
        },
        {
            id: "Tableau",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        {
            id: "SQL",
            className: "skill-icon",
            icon: <TbSql size={50}/>,
            text: "SQL"
        },
        {
            id: "Spreadsheets",
            className: "skill-icon",
            icon: <FaTable size={50}/>,
            text: "Spreadsheets"
        },
        {
            id: "Presentationskills",
            className: "skill-icon",
            icon: <MdOutlinePresentToAll size={50}/>,
            text: "Presentation skills"
        },
        {
            id: "DataCleaning",
            className: "skill-icon",
            icon: <MdCleaningServices size={50}/>,
            text: "Data Cleaning"
        },
        {
            id: "DataAnalysis",
            className: "skill-icon",
            icon: <MdDataAnalysis size={50}/>,
            text: "Data Analysis"
        },
        {
            id: "DataVisualization",
            className: "skill-icon",
            icon: <AiOutlineFundProjectionScreen size={50}/>,
            text: "Data Visualization"
        },
        {
            id: "DataAggregation",
            className: "skill-icon",
            icon: <MdOutlineDataUsage size={50}/>,
            text: "Data Aggregation"
        },
        {
            id: "DataCollection",
            className: "skill-icon",
            icon: <HiOutlineCollection size={50}/>,
            text: "Data Collection"
        },
        {
            id: "DataEthics",
            className: "skill-icon",
            icon: <FaBalanceScale size={50}/>,
            text: "Data Ethics"
        },
        {
            id: "DataCalculations",
            className: "skill-icon",
            icon: <AiOutlineCalculator size={50}/>,
            text: "Data Calculations"
        },
        {
            id: "Kaggle",
            className: "skill-icon",
            icon: <FaKaggle size={50}/>,
            text: "Kaggle"
        },
        {
            id: "JupyterNotebook",
            className: "skill-icon",
            icon: <SiJupyter size={50}/>,
            text: "Jupyter Notebook"
        },
        {
            id: "AttentionToDetail",
            className: "skill-icon",
            icon: <FaRegEdit size={50}/>,
            text: "Attention to Detail"
        },
        {
            id: "ActiveListening",
            className: "skill-icon",
            icon: <FaRegComments size={50}/>,
            text: "Active Listening"
        },
        {
            id: "Collaboration",
            className: "skill-icon",
            icon: <HiUserGroup size={50}/>,
            text: "Collaboration"
        },
        {
            id: "Communication",
            className: "skill-icon",
            icon: <BiConversation size={50}/>,
            text: "Communication"
        },
        {
            id: "StructuredThinking",
            className: "skill-icon",
            icon: <MdOutlineLightbulb size={50}/>,
            text: "Structured Thinking"
        },
        {
            id: "CreativeThinking",
            className: "skill-icon",
            icon: <FaRegLightbulb size={50}/>,
            text: "Creative Thinking"
        },
        {
            id: "CriticalThinking",
            className: "skill-icon",
            icon: <MdPsychology size={50}/>,
            text: "Critical Thinking"
        },
        {
            id: "ProblemSolving",
            className: "skill-icon",
            icon: <FaBrain size={50}/>,
            text: "Problem Solving"
        },
        {
            id: "AnalyticalSkills",
            className: "skill-icon",
            icon: <AiOutlineSearch size={50}/>,
            text: "Analytical Skills"
        },
    ],
    complementarySkills: [
        // {
        //     id: "MachineLearning",
        //     className: "skill-icon",
        //     icon: <SiTensorflow size={50}/>,
        //     text: "Machine Learning"
        // },
        // {
        //     id: "RegressionModels",
        //     className: "skill-icon",
        //     icon: <SiScikitlearn size={50}/>,
        //     text: "Regression Models"
        // },
        // {
        //     id: "StatisticalAnalysis",
        //     className: "skill-icon",
        //     icon: <FaChartBar size={50}/>,
        //     text: "Statistical Analysis"
        // },
        {
            id: "AugmentTasksWithAI",
            className: "skill-icon",
            icon: <FaRobot size={50}/>,
            text: "Augment Tasks with AI"
        },
        {
            id: "PromptEngineering",
            className: "skill-icon",
            icon: <MdEngineering size={50}/>,
            text: "Prompt Engineering"
        },
        {
            id: "UseAiResponsibly",
            className: "skill-icon",
            icon: <FaRegCheckCircle size={50}/>,
            text: "Use AI Responsibly"
        },
        {
            id: "EvaluateAiTools",
            className: "skill-icon",
            icon: <MdAssessment size={50}/>,
            text: "Evaluate AI Tools"
        },
        {
            id: "RecognizeAiHarms",
            className: "skill-icon",
            icon: <MdScience size={50}/>,
            text: "Recognize AI Harms"
        },
        {
            id: "IterativeThinking",
            className: "skill-icon",
            icon: <MdPrecisionManufacturing size={50}/>,
            text: "Iterative Thinking"
        },
        {
            id: "UseGenerativeAiTechnologies",
            className: "skill-icon",
            icon: <FaMagic size={50}/>,
            text: "Use Generative AI Technologies"
        },
        // {
        //     id: "Rprogramming",
        //     className: "skill-icon",
        //     icon: <FaRProject size={50}/>,
        //     text: "R programming"
        // },
        // {
        //     id: "Tableau",
        //     className: "skill-icon",
        //     icon: <SiTableau size={50}/>,
        //     text: "Tableau"
        // },
        // {
        //     id: "SQL",
        //     className: "skill-icon",
        //     icon: <TbSql size={50}/>,
        //     text: "SQL"
        // },
        // {
        //     id: "Spreadsheets",
        //     className: "skill-icon",
        //     icon: <FaTable size={50}/>,
        //     text: "Spreadsheets"
        // },
        // {
        //     id: "Presentationskills",
        //     className: "skill-icon",
        //     icon: <MdOutlinePresentToAll size={50}/>,
        //     text: "Presentation skills"
        // },
        // {
        //     id: "DataCleaning",
        //     className: "skill-icon",
        //     icon: <MdCleaningServices size={50}/>,
        //     text: "Data Cleaning"
        // },
        // {
        //     id: "DataAnalysis",
        //     className: "skill-icon",
        //     icon: <MdDataAnalysis size={50}/>,
        //     text: "Data Analysis"
        // },
        // {
        //     id: "DataVisualization",
        //     className: "skill-icon",
        //     icon: <AiOutlineFundProjectionScreen size={50}/>,
        //     text: "Data Visualization"
        // },
        // {
        //     id: "DataAggregation",
        //     className: "skill-icon",
        //     icon: <MdOutlineDataUsage size={50}/>,
        //     text: "Data Aggregation"
        // },
        // {
        //     id: "DataCollection",
        //     className: "skill-icon",
        //     icon: <HiOutlineCollection size={50}/>,
        //     text: "Data Collection"
        // },
        // {
        //     id: "DataEthics",
        //     className: "skill-icon",
        //     icon: <FaBalanceScale size={50}/>,
        //     text: "Data Ethics"
        // },
        // {
        //     id: "DataCalculations",
        //     className: "skill-icon",
        //     icon: <AiOutlineCalculator size={50}/>,
        //     text: "Data Calculations"
        // },
        // {
        //     id: "AttentionToDetail",
        //     className: "skill-icon",
        //     icon: <FaRegEdit size={50}/>,
        //     text: "Attention to Detail"
        // },
        // {
        //     id: "ActiveListening",
        //     className: "skill-icon",
        //     icon: <FaRegComments size={50}/>,
        //     text: "Active Listening"
        // },
        // {
        //     id: "Collaboration",
        //     className: "skill-icon",
        //     icon: <HiUserGroup size={50}/>,
        //     text: "Collaboration"
        // },
        // {
        //     id: "Communication",
        //     className: "skill-icon",
        //     icon: <BiConversation size={50}/>,
        //     text: "Communication"
        // },
        // {
        //     id: "StructuredThinking",
        //     className: "skill-icon",
        //     icon: <MdOutlineLightbulb size={50}/>,
        //     text: "Structured Thinking"
        // },
        // {
        //     id: "CreativeThinking",
        //     className: "skill-icon",
        //     icon: <FaRegLightbulb size={50}/>,
        //     text: "Creative Thinking"
        // },
        // {
        //     id: "CriticalThinking",
        //     className: "skill-icon",
        //     icon: <MdPsychology size={50}/>,
        //     text: "Critical Thinking"
        // },
        // {
        //     id: "ProblemSolving",
        //     className: "skill-icon",
        //     icon: <FaBrain size={50}/>,
        //     text: "Problem Solving"
        // },
        // {
        //     id: "AnalyticalSkills",
        //     className: "skill-icon",
        //     icon: <AiOutlineSearch size={50}/>,
        //     text: "Analytical Skills"
        // },
        {
            id: "AEM",
            className: "skill-icon",
            icon: <SiAdobe size={50}/>,
            text: "Adobe Experience Manager (AEM)"
        },
        {
            id: "SFCC",
            className: "skill-icon",
            icon: <SiSalesforce size={50}/>,
            text: "SalesForce Commerce Cloud (SFCC)"
        },
        {
            id: "FullStackDevelopment",
            className: "skill-icon",
            icon: <FaStackOverflow size={50}/>,
            text: "Full-Stack Development"
        },
        {
            id: "GIT",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "GIT"
        },
        {
            id: "ReactJS",
            className: "skill-icon",
            icon: <FaReact size={50}/>,
            text: "React.js"
        },
        {
            id: "Angular",
            className: "skill-icon",
            icon: <SiAngular size={50}/>,
            text: "Angular"
        },
        {
            id: "TypeScript",
            className: "skill-icon",
            icon: <SiTypescript size={50}/>,
            text: "TypeScript"
        },
        {
            id: "ApiDevelopment",
            className: "skill-icon",
            icon: <AiOutlineApi size={50}/>,
            text: "API Development"
        },
        {
            id: "Node.js",
            className: "skill-icon",
            icon: <FaNodeJs size={50}/>,
            text: "Node.js"
        },
        {
            id: "JavaScriptES6",
            className: "skill-icon",
            icon: <FaJs size={50}/>,
            text: "JavaScript (ES6)"
        },
        {
            id: "CSS3",
            className: "skill-icon",
            icon: <FaCss3Alt size={50}/>,
            text: "CSS 3"
        },
        {
            id: "HTML5",
            className: "skill-icon",
            icon: <FaHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "AspDotNetMVC",
            className: "skill-icon",
            icon: <SiDotnet size={50}/>,
            text: "ASP.NET MVC"
        },
        {
            id: "VB.NET MVC",
            className: "skill-icon",
            icon: <FaWindows size={50}/>,
            text: "VB.NET MVC"
        },
        {
            id: "ScrumMethodologies",
            className: "skill-icon",
            icon: <SiJira size={50}/>,
            text: "Scrum Methodologies"
        },
        {
            id: "Artificial Intelligence",
            className: "skill-icon",
            icon: <GiArtificialIntelligence size={50}/>,
            text: "Artificial Intelligence"
        },
        {
            id: "Python",
            className: "skill-icon",
            icon: <FaPython size={50}/>,
            text: "Python"
        },
        {
            id: "Java",
            className: "skill-icon",
            icon: <SiOpenjdk size={50}/>,
            text: "Java"
        },
        {
            id: "DataStructures",
            className: "skill-icon",
            icon: <AiOutlineDatabase size={50}/>,
            text: "Data Structures"
        },
        {
            id: "Algorithms",
            className: "skill-icon",
            icon: <FaProjectDiagram size={50}/>,
            text: "Algorithms"
        },
        {
            id: "CProgramming",
            className: "skill-icon",
            icon: <SiC size={50}/>,
            text: "C Programming"
        },
        {
            id: "ProgrammingLanguages",
            className: "skill-icon",
            icon: <AiOutlineCode size={50}/>,
            text: "Programming Languages"
        },
        {
            id: "Statistics",
            className: "skill-icon",
            icon: <BiBarChartAlt2 size={50}/>,
            text: "Statistics"
        },
        {
            id: "Probability",
            className: "skill-icon",
            icon: <FaCalculator size={50}/>,
            text: "Probability"
        },
        {
            id: "ComputerScience",
            className: "skill-icon",
            icon: <MdComputer size={50}/>,
            text: "Computer Science"
        }
    ]
}

export default skillsConfig
