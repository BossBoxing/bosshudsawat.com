"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { aboutMeItems, AboutMeItem } from "../data/aboutMe";

interface AboutMeProps {
    custom: number;
    cardVariant: any;
    listItemVariant: any;
}

export default function AboutMe({ custom, cardVariant, listItemVariant }: AboutMeProps) {
    return (
        <motion.div
            custom={custom}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            id="about-me"
        >
            <Card className="mb-6 shadow-md">
                <CardHeader>
                    <CardTitle className="font-bold text-xl">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                        {aboutMeItems.map((item: AboutMeItem, i: number) => (
                            <motion.li
                                key={item.id}
                                custom={i}
                                variants={listItemVariant}
                                initial="hidden"
                                animate="visible"
                            >
                                {item.content}
                            </motion.li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </motion.div>
    );
}