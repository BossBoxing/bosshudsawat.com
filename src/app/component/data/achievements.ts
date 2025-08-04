export interface Achievement {
    id: string;
    year: string;
    title: string;
    description: string;
    images?: Array<{
        url: string;
        alt: string;
        caption?: string;
    }>;
    tags: Array<{
        text: string;
        bgColor: string;
        textColor: string;
    }>;
    borderColor: string;
    dotColor: string;
    timeColor: string;
}

export const achievementsData: Achievement[] = [
    {
        id: "thailand-representative",
        year: "2016",
        title: "Representative of Thailand",
        description: "Selected as a national representative to compete in World Robot Games Firefighting Robot Competition in Bandung, Indonesia, in collaboration with the Office of the Basic Education Commission (OBEC), Thailand. Received Performance Award for outstanding technical performance and innovative robotics solutions.",
        images: [
            {
                url: "/img/robotics-competition/bandung/bandung-1.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 1",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-2.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 2",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-3.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 3",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-4.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 4",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-5.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 5",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-6.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 6",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-7.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 7",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-8.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 8",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-9.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 9",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            },
            {
                url: "/img/robotics-competition/bandung/bandung-10.jpg",
                alt: "World Robot Games 2016 @Bandung, Indonesia Image 10",
                caption: "World Robot Games 2016 @Bandung, Indonesia"
            }
        ],
        tags: [
            {
                text: "Robotics Competition",
                bgColor: "bg-green-100",
                textColor: "text-green-800"
            },
            {
                text: "International Competition",
                bgColor: "bg-blue-100",
                textColor: "text-blue-800"
            }
        ],
        borderColor: "border-blue-500",
        dotColor: "bg-blue-500",
        timeColor: "text-blue-600"
    },
    {
        id: "speaker-at-tdc-x-alibaba-cloud",
        year: "2023",
        title: "Speaker at TDC x Alibaba Cloud Grand Opening Conference",
        description: "Presented at TDC x Alibaba Cloud in Bangkok, Thailand, sharing insights on cloud computing, IT solutions in \"Explore Cloud Services and 200+ Innovative Use Cases Across All Industries and Business Sectors\" topic.",
        tags: [
            {
                text: "Cloud Computing",
                bgColor: "bg-green-100",
                textColor: "text-green-800"
            }
        ],
        images: [
            {
                url: "/img/speaker-at-tdc-x-alibaba-cloud/0.jpg",
                alt: "TDC x Alibaba Cloud Image 1",
                caption: "TDC x Alibaba Cloud"
            },
            {
                url: "/img/speaker-at-tdc-x-alibaba-cloud/1.jpg",
                alt: "TDC x Alibaba Cloud Image 2",
                caption: "TDC x Alibaba Cloud"
            },
            {
                url: "/img/speaker-at-tdc-x-alibaba-cloud/2.jpg",
                alt: "TDC x Alibaba Cloud Image 3",
                caption: "TDC x Alibaba Cloud"
            },
            {
                url: "/img/speaker-at-tdc-x-alibaba-cloud/3.jpg",
                alt: "TDC x Alibaba Cloud Image 4",
                caption: "TDC x Alibaba Cloud"
            },
            {
                url: "/img/speaker-at-tdc-x-alibaba-cloud/4.jpg",
                alt: "TDC x Alibaba Cloud Image 5",
                caption: "TDC x Alibaba Cloud"
            },
            {
                url: "/img/speaker-at-tdc-x-alibaba-cloud/5.jpg",
                alt: "TDC x Alibaba Cloud Image 6",
                caption: "TDC x Alibaba Cloud"
            }
        ],
        borderColor: "border-green-500",
        dotColor: "bg-green-500",
        timeColor: "text-green-600"
    },
    {
        id: "alibaba-cloud-certificates",
        year: "2023",
        title: "Alibaba Cloud Certificates from Alibaba Cloud",
        description: "Received Alibaba Cloud Certificate for completing the Alibaba Cloud Essentials course, demonstrating expertise in cloud computing and Alibaba Cloud services.",
        tags: [
            {
                text: "Certificate",
                bgColor: "bg-orange-100",
                textColor: "text-orange-800"
            },
            {
                text: "Cloud Computing",
                bgColor: "bg-green-100",
                textColor: "text-green-800"
            }
        ],
        images: [
            {
                url: "/img/alibaba-cloud-certificates/alibaba-cert-1.png",
                alt: "Alibaba Cloud Certified Handle Large Traffic with Load Balancer",
                caption: "Alibaba Cloud Certified Handle Large Traffic with Load Balancer"
            },
            {
                url: "/img/alibaba-cloud-certificates/alibaba-cert-2.jpg",
                alt: "Alibaba Cloud Certified Operate and Manage Object Storage on the Cloud",
                caption: "Alibaba Cloud Certified Operate and Manage Object Storage on the Cloud"
            },
            {
                url: "/img/alibaba-cloud-certificates/alibaba-cert-3.png",
                alt: "Alibaba Cloud Certified Operate and Manage a Cloud Server",
                caption: "Alibaba Cloud Certified Operate and Manage a Cloud Server"
            },
            {
                url: "/img/alibaba-cloud-certificates/alibaba-cert-4.jpg",
                alt: "Alibaba Cloud Certified Operate and Manage a Relational Database on the Cloud",
                caption: "Alibaba Cloud Certified Operate and Manage a Relational Database on the Cloud"
            },
            {
                url: "/img/alibaba-cloud-certificates/alibaba-cert-5.png",
                alt: "Alibaba Cloud Certified Use Cloud Resources Flexibly According to Business Requirement",
                caption: "Alibaba Cloud Certified Use Cloud Resources Flexibly According to Business Requirement"
            }
        ],
        borderColor: "border-blue-500",
        dotColor: "bg-blue-500",
        timeColor: "text-blue-600"
    },
    // {
    //     id: "performance-award",
    //     year: "2016",
    //     title: "Performance Award",
    //     description: "Received Performance Award at World Robot Games Firefighting Robot Competition in Bandung, Indonesia for outstanding technical performance and innovative robotics solutions.",
    //     images: [
    //         // Add images here if you have any photos of the award ceremony
    //     ],
    //     tags: [
    //         {
    //             text: "Award Winner",
    //             bgColor: "bg-yellow-100",
    //             textColor: "text-yellow-800"
    //         },
    //         {
    //             text: "Excellence",
    //             bgColor: "bg-purple-100",
    //             textColor: "text-purple-800"
    //         }
    //     ],
    //     borderColor: "border-yellow-500",
    //     dotColor: "bg-yellow-500",
    //     timeColor: "text-yellow-600"
    // },
    // {
    //     id: "fullstack-developer",
    //     year: "2023",
    //     title: "💼 Full-Stack Developer Journey",
    //     description: "Successfully transitioned from robotics to full-stack development, mastering modern web technologies and working on enterprise-level cloud solutions and AI platforms.",
    //     tags: [
    //         {
    //             text: "Career Milestone",
    //             bgColor: "bg-green-100",
    //             textColor: "text-green-800"
    //         },
    //         {
    //             text: "Technology",
    //             bgColor: "bg-purple-100",
    //             textColor: "text-purple-800"
    //         }
    //     ],
    //     borderColor: "border-green-500",
    //     dotColor: "bg-green-500",
    //     timeColor: "text-green-600"
    // }
];