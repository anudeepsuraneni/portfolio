import {FaLinkedinIn, FaKaggle} from "react-icons/fa";
import {SiTableau} from "react-icons/si";

const footerConfig = {
    icons: [
        {
            id: "Kaggle",
            url: "https://www.kaggle.com/anudeepsuraneni",
            className: "social-icon",
            target: "_blank",
            icon: <FaKaggle size={50}/>
        },
        {
            id: "Tableau",
            url: "https://public.tableau.com/app/profile/anudeep7780/vizzes",
            className: "social-icon",
            target: "_blank",
            icon: <SiTableau size={50}/>
        },
        {
            id: "LinkedIn",
            url: "https://www.linkedin.com/in/anudeep-suraneni/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        }
    ]
}

export default footerConfig
