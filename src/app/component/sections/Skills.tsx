"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

interface SkillsProps {
    custom: number;
    cardVariant: any;
}

export default function Skills({ custom, cardVariant }: SkillsProps) {
    return (
        <motion.div
            custom={custom}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            id="skills"
        >
            <Card className="mb-6 shadow-md">
                <CardHeader>
                    <CardTitle className="font-bold text-xl">What can I do?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        <li id="programming-languages">
                            <strong>{skillsData.programmingLanguages.title}</strong>
                            <ul className="mt-1 list-[circle] pl-6 space-y-1 text-gray-700">
                                {skillsData.programmingLanguages.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                        <Separator className="mt-4 mb-4" />
                        <li id="tools-experience">
                            <strong>{skillsData.toolsExperience.title}</strong>
                            <ul className="mt-1 list-[circle] pl-6 space-y-1 text-gray-700">
                                {skillsData.toolsExperience.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
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
        </motion.div>
    );
}