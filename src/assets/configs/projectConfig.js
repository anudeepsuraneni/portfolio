import {SiR} from "react-icons/si";
import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {MdSlideshow} from "react-icons/md";
import cyclisticLogo from "../images/cyclistic-logo.png"

const projectConfig = [
    {
        id: "project-1",
        title: "How does a bike-share navigate speedy success?",
        links: [
            {
                name: "analysis",
                url: "https://anudeepsuraneni.github.io/cyclistic/",
                icon: <SiR />
            },
            {
                name: "insights",
                url: "https://docs.google.com/presentation/d/1Fe4hTNBd_gMWMHCTpdQ2ozi8gHiuvlYfJgCWwgiELLs/edit?usp=sharing",
                icon: <MdSlideshow />
            },
            {
                name: "repo",
                url: "https://github.com/anudeepsuraneni/cyclistic",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/anudeepsuraneni/cyclistic/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/anudeepsuraneni/cyclistic/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: cyclisticLogo,
        description: "A comprehensive analysis of bike-share data to understand user behavior and improve business strategies.",
        target: "_blank"
    }
]

export default projectConfig