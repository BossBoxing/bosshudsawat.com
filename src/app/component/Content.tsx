import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Content() {
    return (
        <section className="grow lg:w-6/12 p-6 text-black">
            <h2 className="pb-2 pl-2 text-2xl font-bold mb-2">About Me</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="">
                    <Card className="mb-6 shadow-md">
                        <CardContent>
                            <ul className="mt-6 list-disc pl-5 space-y-2">
                                <li>💁‍♂️View my resume: Coming soon..</li>
                                <li>🗺Nationality: Thai</li>
                                <li>🏠Live in Khon Kaen, Thailand</li>
                                <li>🏳️Languages: Thai - English</li>
                                <li>
                                    📧Email:{" "}
                                    <Link
                                        href="mailto:contact@bosshudsawat.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500"
                                    >
                                        contact@bosshudsawat.com
                                    </Link>
                                </li>
                                <li>
                                    💭Hobbies: 🎮Video Game, 🏸Badminton, 🥁Drums, 🎸Guitar, 🎸Bass, 🎤Singing
                                </li>
                                <li>
                                    🎞️Videos:
                                    <ul className="mt-2 list-disc pl-5 space-y-2">
                                        <li>
                                            🎓 Provide educational guidance to high school (Thai)
                                            <div className="mt-2">
                                                <iframe
                                                    width="600"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/xs4PMjC70GM?si=0QtQ1bxtrAj5EVte"
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="mb-6 shadow-md">
                        <CardHeader>
                            <CardTitle className="font-bold text-xl">What can I do?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5">
                                <li>
                                    <strong>Programming Language</strong>
                                    <ul className="mt-1 list-[circle] pl-6 space-y-1 text-gray-700">
                                        <li>C,C++ for Arduino/Robotics/Fundamental-Programming</li>
                                        <li>Typescript/Javascript</li>
                                        <li>Python for Classification, Web Development (Flask)</li>
                                        <li>C# for .NET Core/Framework</li>
                                        <li>Java for Spring Boot</li>
                                        <li>SQL</li>
                                        <li>Lua</li>
                                        <li>HTML/CSS</li>
                                    </ul>
                                </li>
                                <Separator className="mt-4 mb-4" />
                                <li>
                                    <strong>Web Development (Full Stack Role)</strong>
                                    <ul className="mt-1 list-[circle] pl-6 space-y-1 text-gray-700">
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>NestJS (Advanced)</li>
                                        <li>Nuxt (Vue/Js)</li>
                                        <li>React (Typescript)</li>
                                        <li>Relational Database (PostgreSQL, MariaDB, MySQL)</li>
                                        <li>MongoDB</li>
                                        <li>Redis (Caching, Bull Queue)</li>
                                        <li>Centralized System (Logs, Transaction)</li>
                                        <li>CI/CD (Github Action by YML)</li>
                                        <li>Docker</li>
                                        <li>Kubernetes</li>
                                        <li>Cloud Computing (Alibaba Cloud, Huawei Cloud)</li>
                                        <li>Handle large traffic with Load Balancer</li>
                                        <li>Cloudflare DNS Management</li>
                                        <li>Telegram Bot/Discord Bot/LINE Bot (Logs and dialogs system) for processor handling</li>

                                    </ul>
                                </li>
                            </ul>
                        </CardContent>

                        <Separator className="mx-auto justify-self-center w-11/12" />

                        {/* <CardHeader>
                            <CardTitle className="font-bold text-xl">Other things</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Coming soon..</p>
                        </CardContent> */}
                    </Card>
                </div>
                <div className="pl-0 xl:pl-4">
                    <Card className="mb-6 shadow-md">
                        <CardHeader>
                            <CardTitle className="font-bold text-xl">My Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ol className="relative border-s border-black dark:border-gray-700">
                                <li className="mb-5 ms-4 space-y-1">
                                    <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">August 2023 - Present</time>
                                    <img src="https://thaidatacloud-www.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2024/05/21122516/TDC_main_logo.svg"
                                        alt="THAI DATA CLOUD Logo"
                                        width={200}
                                        height={200}
                                        className="justify-left mb-4 m-2"></img>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full Stack Developer at <Link href="https://thaidata.cloud/" target="_blank" rel="noopener noreferrer" className="text-blue-500">THAI DATA CLOUD </Link></h3>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">THAI DATA CLOUD is a leading provider of high-performance cloud servers and comprehensive cloud solutions, offering scalable, secure, and cost-effective services tailored to businesses' specific needs, with a focus on driving digital transformation and innovation in Thailand</p>

                                    {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg></a> */}
                                </li>
                                <li className="mb-10 ms-4 space-y-1">
                                    <img src="https://mlvrv2qgedqb.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://behinder.ai/wp-content/uploads/2024/07/website-logo.png"
                                        alt="Behinder-AI Logo"
                                        width={200}
                                        height={200}
                                        className="justify-left mb-4 m-2"></img>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full Stack Developer (Parallel Side Project) at <Link href="https://behinder.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Behinder AI </Link></h3>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">Behinder AI is an AI-powered content creation platform that streamlines the process of generating high-quality content for businesses and individuals. It offers tools for various content types, including blogs, marketing materials, business documents, and creative writing, aiming to enhance efficiency and output quality.</p>

                                    {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg></a> */}
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">August 2022 - August 2023</time>
                                    <img src="\img\friendrobot-logo.png"
                                        alt="Friend Robot logo"
                                        width={200}
                                        height={200}
                                        className="justify-left mb-2 bg-black m-1 p-1 rounded-md"></img>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer at <Link href="https://www.friendrobot.co/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Friend Robot </Link></h3>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">Friend Robot is an educational platform that provides online courses and resources to make robotics accessible to everyone. They offer various products and services, including microcontroller boards, sensors, and online courses, to support learning in robotics.</p>
                                </li>
                                <li className="ms-4">
                                    <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">May 2022 - August 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Programmer Trainee at Khon kaen Softtech co.,ltd.</h3>
                                    {/* <p className="text-sm font-normal text-gray-600 dark:text-gray-400">Khon kaen Softtech is a web development solutions</p> */}
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>


    )
}

