import {FaKaggle, FaRegEye} from "react-icons/fa";
import {SiTableau} from "react-icons/si";
import cyclisticLogo from "../../projects/cyclistic/logo.png";
import bellabeatLogo from "../../projects/bellabeat/logo.png";

const projectConfig = [
    {
        id: "project-2",
        title: "How does a bike-share navigate speedy success?",
        links: [
            {
                name: "Kaggle Notebook",
                url: "https://www.kaggle.com/code/anudeepsuraneni/how-does-a-bike-share-navigate-speedy-success",
                icon: <FaKaggle />
            },
            {
                name: "Tableau Dashboard",
                url: "https://public.tableau.com/views/HowDoesaBike-ShareNavigateSpeedySuccess_17490155704140/RidershipbetweenCasualRidersandAnnualMembers?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
                icon: <SiTableau />
            },
            {
                name: "Executive Summary",
                url: "https://docs.google.com/presentation/d/1yb0p4hqFRoglSHLMsj1jNgswz7IFKU_U2kfHrOvyB6Q/edit?usp=sharing",
                icon: <FaRegEye />
            }
        ],
        image: cyclisticLogo,
        description: "A comprehensive analysis of bike-share data to understand user behavior and improve business strategies.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "How Can a Wellness Technology Company Play It Smart?",
        links: [
            {
                name: "Kaggle Notebook",
                url: "https://www.kaggle.com/code/anudeepsuraneni/how-can-a-wellness-tech-company-play-it-smart",
                icon: <FaKaggle />
            },
            {
                name: "Executive Summary",
                url: "https://docs.google.com/presentation/d/1RmR7E-n8LG3ChkKzMdp_hvu58NEcJupVKOYmFJNkl4g/edit?usp=sharing",
                icon: <FaRegEye />
            }
        ],
        image: bellabeatLogo,
        description: "A data-driven exploration of smart device usage data to uncover usage trends and inform strategic marketing recommendations.",
        target: "_blank"
    },
]

export default projectConfig