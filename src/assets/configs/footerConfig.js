import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/anudeepsuraneni",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-2",
            url: "https://www.kaggle.com/anudeepsuraneni",
            className: "social-icon",
            target: "_blank",
            icon: <SiKaggle size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/anudeep-suraneni/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        }
    ]
}

export default footerConfig
