"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { workExperienceData } from "../data/workExperience";

interface WorkExperienceProps {
    custom: number;
    cardVariant: any;
}

export default function WorkExperience({ custom, cardVariant }: WorkExperienceProps) {
    return (
        <motion.div
            custom={custom}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            id="work-experience"
        >
            <Card className="mb-6 shadow-md">
                <CardHeader>
                    <CardTitle className="font-bold text-xl">My Experience</CardTitle>
                </CardHeader>
                <CardContent>
                    <ol className="relative z-0 border-s border-black dark:border-gray-700">
                        {workExperienceData.map((experience, index) => (
                            <li key={experience.id} id={`experience-${experience.id}`} className={`${index < workExperienceData.length - 1 ? 'mb-10' : ''} ms-4 ${index === 0 ? 'mb-5 space-y-1' : ''}`}>
                                <div className="absolute z-10 w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
                                    {experience.period}
                                </time>
                                
                                {experience.logo && (
                                    <img 
                                        src={experience.logo}
                                        alt={experience.logoAlt}
                                        width={200}
                                        height={200}
                                        className={experience.logoClassName}
                                    />
                                )}
                                
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {experience.position} at{' '}
                                    {experience.companyUrl ? (
                                        <Link 
                                            href={experience.companyUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-blue-500"
                                        >
                                            {experience.company}
                                        </Link>
                                    ) : (
                                        experience.company
                                    )}
                                </h3>
                                
                                {experience.description && (
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                        {experience.description}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ol>
                </CardContent>
            </Card>
        </motion.div>
    );
}