import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Profile() {
    // const { t } = useTranslation('content');

    return (
        <aside className="lg:w-1/4 p-6 ">
            <div className="sticky top-6">
                <Image
                    src="/img/bosshudsawat-on-stage.jpg"
                    alt="Boss Hudsawat Akkati"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                />
                {/* <span> {t('about-me')}</span> */}
                <h2 className="text-xl font-bold text-center">Hello! I'm</h2>
                <h1 className="text-2xl font-bold text-center mb-2">Boss Hudsawat Akkati</h1>
                <p className="text-center mb-2">Full Stack Developer at <Link href="https://thaidata.cloud/" target="_blank" rel="noopener noreferrer" className="text-blue-500">THAI DATA CLOUD </Link> </p>
                <p className="text-center text-sm">Graduated from <Link href="https://kku.ac.th/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Khon Kaen University </Link></p>

                <div className="mt-6 -mb-6 place-self-center">
                    <a href="https://git.io/typing-svg">
                        <img src="https://readme-typing-svg.demolab.com?font=Roboto+Slab&weight=600&size=24&duration=4000&pause=1000&color=4E99F7&center=true&width=435&lines=Hello+Everyone.;I'm+Hudsawat.;He%2FHim;Computer+Science." alt="Typing SVG" />
                    </a>
                </div>
                <Card className="mb-6 mt-6 shadow-md">
                    <CardHeader>
                        <p className="text-gray-500">I am passionate about Full Stack Development, DevOps, AI , Robotics, Game Development, Scripting (RedM, FiveM) and all other things about computer.</p>
                    </CardHeader>
                </Card>

                <div className="mt-7 justify-self-center">
                    <a href="https://github.com/bossboxing" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-500 hover:fill-blue-700 inline-block m-2">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/hudsawat-akkati/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-500 hover:fill-blue-700 inline-block m-2">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                            </path>
                        </svg>
                    </a>
                    {/* <a href="https://stackoverflow.com/users/13700144/xuan-son-nguyen" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-500 hover:fill-blue-700 inline-block m-2">
                            <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z">
                            </path>
                        </svg>
                    </a> */}
                    <a href="mailto:contact@bosshudsawat.com" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-500 hover:fill-blue-700 inline-block m-2">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z">
                            </path>
                        </svg>
                    </a>
                </div>
                {/* <div className="p-10 justify-items-center">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm"
                    >
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div> */}
            </div>
        </aside>
    )
}

