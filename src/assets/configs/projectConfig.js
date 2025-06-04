import {FaKaggle, FaRegEye} from "react-icons/fa";
import {SiTableau} from "react-icons/si";
import cyclisticLogo from "../projects/cyclistic/logo.png"

const projectConfig = [
    {
        id: "project-1",
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
                url: "https://docs.google.com/presentation/d/1Fe4hTNBd_gMWMHCTpdQ2ozi8gHiuvlYfJgCWwgiELLs/edit?usp=sharing",
                icon: <FaRegEye />
            }
        ],
        image: cyclisticLogo,
        description: "A comprehensive analysis of bike-share data to understand user behavior and improve business strategies.",
        target: "_blank"
    }
]

export default projectConfig