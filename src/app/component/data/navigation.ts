export interface NavigationItem {
    id: string;
    title: string;
    href: string;
    subItems?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
    {
        id: "about-me",
        title: "About Me",
        href: "#about-me"
    },
    {
        id: "skills",
        title: "What can I do?",
        href: "#skills",
        subItems: [
            {
                id: "programming-languages",
                title: "Programming Languages",
                href: "#programming-languages"
            },
            {
                id: "tools-experience",
                title: "Tools & Frameworks",
                href: "#tools-experience"
            }
        ]
    },
    {
        id: "work-experience",
        title: "My Experience",
        href: "#work-experience",
        subItems: [
            {
                id: "tdc",
                title: "THAI DATA CLOUD",
                href: "#experience-tdc"
            },
            {
                id: "behinder",
                title: "Behinder AI",
                href: "#experience-behinder"
            },
            {
                id: "friendrobot",
                title: "Friend Robot",
                href: "#experience-friendrobot"
            },
            {
                id: "softtech",
                title: "Khon Kaen Softtech",
                href: "#experience-softtech"
            }
        ]
    },
    {
        id: "achievements",
        title: "Achievements",
        href: "#achievements",
        subItems: [
            {
                id: "thailand-representative",
                title: "Representative of Thailand",
                href: "#achievement-thailand-representative"
            },
            {
                id: "speaker-at-tdc-x-alibaba-cloud",
                title: "Speaker at TDC x Alibaba Cloud",
                href: "#achievement-speaker-at-tdc-x-alibaba-cloud"
            }
            // {
            //     id: "performance-award",
            //     title: "Performance Award",
            //     href: "#achievement-performance-award"
            // },
            // {
            //     id: "fullstack-developer",
            //     title: "Full-Stack Developer Journey",
            //     href: "#achievement-fullstack-developer"
            // }
        ]
    }
];