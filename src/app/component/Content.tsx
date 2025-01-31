import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Content() {
    return (
        <section className="grow lg:w-2/3 p-6 text-black">
            <h2 className="pb-2 pl-2 text-2xl font-bold mb-2">About Me</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="">
                    <Card className="mb-6 shadow-md">
                        {/* <CardHeader>
                        <CardTitle></CardTitle>
                        </CardHeader> */}
                        <CardContent>
                            <ul className="mt-6 list-disc pl-5">
                                <li>💁‍♂️View my resume: <Link href="/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Click here</Link></li>
                                <li>🗺Nationality: Thai</li>
                                <li>🏠Live in Khon Kaen, Thailand</li>
                                <li>🏳️Languages: Thai - English</li>
                                <li>📧Email: <Link href="mailto:contact@bosshudsawat.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">contact@bosshudsawat.com</Link></li>
                                <li>💭Hobbies: 🎮Video Game, 🏸Badminton, 🥁Drums, 🎸Guitar, 🎸Bass, 🎤Singing</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="mb-6 shadow-md">
                        <CardHeader>
                            <CardTitle className="font-bold text-xl">What can I do?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Coming soon..</p>
                        </CardContent>

                        <Separator className="mx-auto justify-self-center w-11/12" />

                        <CardHeader>
                            <CardTitle className="font-bold text-xl">Other things</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Coming soon..</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="pl-4">
                    <Card className="mb-6 shadow-md">
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg></a>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                </li>
                                <li className="ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <h2 className="pb-2 pl-2 text-2xl font-bold mb-2">About Me</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="">
                    <Card className="mb-6 shadow-md">
                        {/* <CardHeader>
                        <CardTitle></CardTitle>
                    </CardHeader> */}
                        <CardContent>
                            <ul className="mt-6 list-disc pl-5">
                                <li>💁‍♂️View my resume: <Link href="/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Click here</Link></li>
                                <li>🗺Nationality: Thai</li>
                                <li>🏠Live in Khon Kaen, Thailand</li>
                                <li>🏳️Languages: Thai - English</li>
                                <li>📧Email: <Link href="mailto:contact@bosshudsawat.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">contact@bosshudsawat.com</Link></li>
                                <li>💭Hobbies: 🎮Video Game, 🏸Badminton, 🥁Drums, 🎸Guitar, 🎸Bass, 🎤Singing</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="mb-6 shadow-md">
                        <CardHeader>
                            <CardTitle className="font-bold text-xl">What can I do?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Coming soon..</p>
                        </CardContent>

                        <Separator className="mx-auto justify-self-center w-11/12" />

                        <CardHeader>
                            <CardTitle className="font-bold text-xl">Other things</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Coming soon..</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="pl-4">
                    <Card className="mb-6 shadow-md">
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg></a>
                                </li>
                                <li className="mb-10 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                </li>
                                <li className="ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        
    )
}

