"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// --- Carousel data and component ---
import { useState, useEffect } from "react";

const profileSlides = [
    // {
    //     img: "/img/bosshudsawat-on-stage.jpg",
    //     caption: "Boss Hudsawat Akkati - On Stage"
    // },
    {
        img: "/img/boss-on-stage-2.jpg",
        caption: "THAI DATA CLOUD x Alibaba Cloud"
    },
    {
        img: "/img/boss-on-stage-3.jpg",
        caption: "THAI DATA CLOUD x Alibaba Cloud"
    },
    {
        img: "/img/boss-4.jpg",
        caption: "THAI DATA CLOUD x Alibaba Cloud"
    },
    {
        img: "/img/boss-3.jpg",
        caption: "THAI DATA CLOUD x Alibaba Cloud"
    },
    {
        img: "/img/boss-3.jpg",
        caption: "THAI DATA CLOUD x Alibaba Cloud"
    },
    // {
    //     img: "/img/boss-on-stage-4.jpg",
    //     caption: "Boss Hudsawat Akkati - On Stage"
    // }
];

function ProfileCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [previewIndex, setPreviewIndex] = useState<number|null>(null);
    // Auto-slide ทุก 3 วินาที
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % profileSlides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
        <motion.div
            className="w-full max-w-xs mx-auto mb-4 mt-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="flex flex-col items-center justify-center">
                        <div className="relative w-72 h-44 mb-2 flex items-center justify-center">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.img
                                    key={profileSlides[current].img}
                                    src={profileSlides[current].img}
                                    alt={profileSlides[current].caption}
                                    className="rounded-lg shadow-md object-cover w-full h-full absolute left-0 top-0 cursor-zoom-in"
                                    initial={{ opacity: 0, x: 80, scale: 0.98 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -80, scale: 0.98 }}
                                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                                    onClick={() => { setPreviewIndex(current); setIsPreviewOpen(true); }}
                                />
                            </AnimatePresence>
                        </div>
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={profileSlides[current].caption}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="text-xs text-center text-gray-600 min-h-[1.5em]"
                            >
                                {profileSlides[current].caption}
                            </motion.div>
                        </AnimatePresence>
                    </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-2">
                    {profileSlides.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-2 h-2 rounded-full ${current === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
                            style={{ outline: 'none', border: 'none' }}
                            onClick={() => setCurrent(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </Carousel>
        </motion.div>
        {/* Modal Preview (React Portal) */}
        {typeof window !== "undefined" && isPreviewOpen && previewIndex !== null &&
            require("react-dom").createPortal(
                <AnimatePresence>
                    <motion.div
                        className="fixed inset-0 z-[9999999999] flex items-center justify-center bg-black/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative bg-white rounded-lg shadow-lg flex flex-col items-center p-4"
                            initial={{ scale: 0.9, opacity: 0, y: 60 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 60 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:bg-red-200 bg-white rounded-full px-2 hover:text-red-600 text-xl font-bold"
                                onClick={() => setIsPreviewOpen(false)}
                                aria-label="Close preview"
                            >
                                ×
                            </button>
                            <img
                                src={profileSlides[previewIndex].img}
                                alt={profileSlides[previewIndex].caption}
                                className="max-w-[90vw] max-h-[75vh] rounded-lg object-contain"
                            />
                            <div className="mt-3 text-center text-gray-700 text-base font-medium">
                                {profileSlides[previewIndex].caption}
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )
        }
        </>
    );
}

export default function Profile() {
    // const { t } = useTranslation('content');

    // Animation variants
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="lg:w-1/4 p-6"
            role="complementary"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div className="sticky top-6">
                <motion.div variants={item}>
                    <Image
                        src="/img/bosshudsawat-on-stage.jpg"
                        alt="Boss Hudsawat Akkati"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-md object-cover mx-auto mb-4"
                    />
                </motion.div>
                {/* <span> {t('about-me')}</span> */}
                <motion.h2 className="text-xl font-bold text-center" variants={item}>Hello! I'm</motion.h2>
                <motion.h1 className="text-2xl font-bold text-center mb-2" variants={item}>(Boss) Hudsawat Akkati</motion.h1>
                <motion.p className="text-center mb-2" variants={item}>
                    Full Stack Developer at <Link href="https://thaidata.cloud/" target="_blank" rel="noopener noreferrer" className="text-blue-500">THAI DATA CLOUD </Link>
                </motion.p>
                <motion.p className="text-center text-sm" variants={item}>
                    Graduated from <Link href="https://kku.ac.th/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Khon Kaen University </Link>
                </motion.p>

                <motion.div className="mt-6 -mb-6 place-self-center" variants={item}>
                    <a href="https://git.io/typing-svg">
                        <img src="https://readme-typing-svg.demolab.com?font=Roboto+Slab&weight=600&size=24&duration=4000&pause=1000&color=4E99F7&center=true&width=435&lines=Hello+Everyone.;I'm+Hudsawat.;He%2FHim;Computer+Science." alt="Typing SVG" />
                    </a>
                </motion.div>
                <motion.div variants={item}>
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
                    {/* Carousel ใต้รูปโปรไฟล์ */}
                    <ProfileCarousel />
                </motion.div>



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
        </motion.div>
    )
}

