import {SiKaggle} from "react-icons/si";
import {MdSlideshow} from "react-icons/md";
import cyclisticLogo from "../images/cyclistic-logo.png"

const projectConfig = [
    {
        id: "project-1",
        title: "How does a bike-share navigate speedy success?",
        links: [
            {
                name: "analysis",
                url: "https://www.kaggle.com/code/anudeepsuraneni/how-does-a-bike-share-navigate-speedy-success",
                icon: <SiKaggle />
            },
            {
                name: "insights",
                url: "https://docs.google.com/presentation/d/1Fe4hTNBd_gMWMHCTpdQ2ozi8gHiuvlYfJgCWwgiELLs/edit?usp=sharing",
                icon: <MdSlideshow />
            }
        ],
        image: cyclisticLogo,
        description: "A comprehensive analysis of bike-share data to understand user behavior and improve business strategies.",
        target: "_blank"
    }
]

export default projectConfig