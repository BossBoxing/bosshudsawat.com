import Link from "next/link";

export interface ExperienceItem {
    id: string;
    period: string;
    company: string;
    position: string;
    companyUrl?: string;
    logo: string;
    logoAlt: string;
    description: string;
    logoClassName?: string;
}

export const workExperienceData: ExperienceItem[] = [
    {
        id: "tdc",
        period: "August 2023 - Present",
        company: "THAI DATA CLOUD",
        position: "Full Stack Developer",
        companyUrl: "https://thaidata.cloud/",
        logo: "https://thaidatacloud-www.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2024/05/21122516/TDC_main_logo.svg",
        logoAlt: "THAI DATA CLOUD Logo",
        description: "THAI DATA CLOUD is a leading provider of high-performance cloud servers and comprehensive cloud solutions, offering scalable, secure, and cost-effective services tailored to businesses' specific needs, with a focus on driving digital transformation and innovation in Thailand",
        logoClassName: "justify-left mb-4 m-2"
    },
    {
        id: "behinder",
        period: "August 2023 - Present",
        company: "Behinder AI",
        position: "Full Stack Developer (Parallel Side Project)",
        companyUrl: "https://behinder.ai/",
        logo: "https://mlvrv2qgedqb.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://behinder.ai/wp-content/uploads/2024/07/website-logo.png",
        logoAlt: "Behinder-AI Logo",
        description: "Behinder AI is an AI-powered content creation platform that streamlines the process of generating high-quality content for businesses and individuals. It offers tools for various content types, including blogs, marketing materials, business documents, and creative writing, aiming to enhance efficiency and output quality.",
        logoClassName: "justify-left mb-4 m-2"
    },
    {
        id: "friendrobot",
        period: "August 2022 - August 2023",
        company: "Friend Robot",
        position: "Software Engineer",
        companyUrl: "https://www.friendrobot.co/",
        logo: "/img/friendrobot-logo.png",
        logoAlt: "Friend Robot logo",
        description: "Friend Robot is an educational platform that provides online courses and resources to make robotics accessible to everyone. They offer various products and services, including microcontroller boards, sensors, and online courses, to support learning in robotics.",
        logoClassName: "justify-left mb-2 bg-black m-1 p-1 rounded-md"
    },
    {
        id: "softtech",
        period: "May 2022 - August 2022",
        company: "Khon kaen Softtech co.,ltd.",
        position: "Web Programmer Trainee",
        logo: "",
        logoAlt: "",
        description: "",
        logoClassName: ""
    }
];