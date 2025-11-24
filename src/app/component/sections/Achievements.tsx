"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { achievementsData } from "../data/achievements";
import ImageSlider from "./ImageSlider";
import LinkPreview from "./LinkPreview";

interface AchievementsProps {
    custom: number;
    cardVariant: any;
}

export default function Achievements({ custom, cardVariant }: AchievementsProps) {
    return (
        <motion.div
            custom={custom}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            id="achievements"
        >
            <Card className="mb-6 shadow-md">
                <CardHeader>
                    <CardTitle className="font-bold text-xl">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {achievementsData.map((achievement) => (
                            <div key={achievement.id} id={`achievement-${achievement.id}`} className={`border-l-4 ${achievement.borderColor} pl-4`}>
                                <div className="flex items-center mb-2">
                                    <span className={`inline-block w-2 h-2 ${achievement.dotColor} rounded-full mr-2`}></span>
                                    <time className={`text-sm font-semibold ${achievement.timeColor}`}>
                                        {achievement.year}
                                    </time>
                                </div>
                                {achievement.badge && (
                                    <div className="mb-2">
                                        <img
                                            src={achievement.badge}
                                            alt={`${achievement.title} Badge`}
                                            className="h-14 w-auto"
                                        />
                                    </div>
                                )}
                                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                                    {achievement.title}
                                </h4>
                                <div className="space-x-2 my-2">
                                    {achievement.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className={`inline-block px-3 py-1 ${tag.bgColor} ${tag.textColor} text-xs font-medium rounded-full`}
                                        >
                                            {tag.text}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {achievement.description}
                                </p>
                                {achievement.source && (
                                    <div className="mt-4 mb-2">
                                        <LinkPreview url={achievement.source} />
                                    </div>
                                )}


                                {/* Image Slider */}
                                {achievement.images && achievement.images.length > 0 && (
                                    <div className="mt-4">
                                        <ImageSlider
                                            images={achievement.images}
                                            className="max-w-md mx-auto"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}