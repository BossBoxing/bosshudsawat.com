"use client";
import { motion } from "framer-motion";
import { sectionVariant, cardVariant, listItemVariant } from "./animations/variants";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";
import Achievements from "./sections/Achievements";
import MobileTableOfContents from "./navigation/MobileTableOfContents";

export default function Content() {

    return (
        <>
            <motion.section
                className="flex-1 p-6 text-black"
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 xl:grid-cols-1">
                    <div>
                        <AboutMe 
                            custom={0} 
                            cardVariant={cardVariant} 
                            listItemVariant={listItemVariant} 
                        />
                        
                        <Skills 
                            custom={1} 
                            cardVariant={cardVariant} 
                        />
                    </div>
                    
                    <div className="pl-0">
                        <WorkExperience 
                            custom={2} 
                            cardVariant={cardVariant} 
                        />
                    </div>
                    
                    <div className="pl-0">
                        <Achievements 
                            custom={3} 
                            cardVariant={cardVariant} 
                        />
                    </div>
                </div>
            </motion.section>

            {/* Mobile Table of Contents - Floating button (only for < lg screens) */}
            <MobileTableOfContents />
        </>
    );
}


