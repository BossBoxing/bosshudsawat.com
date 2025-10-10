"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationData, NavigationItem } from "../data/navigation";

export default function MobileTableOfContents() {
    const [isOpen, setIsOpen] = useState(false);

    // Smooth scroll to section
    const scrollToSection = (href: string) => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 30; // 50px offset
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false); // Close menu after navigation
        }
    };

    const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
        const hasSubItems = item.subItems && item.subItems.length > 0;

        return (
            <div key={item.id} className={`${level > 0 ? 'ml-4' : ''}`}>
                <motion.button
                    onClick={() => scrollToSection(item.href)}
                    className={`
                        w-full text-left py-3 px-4 text-sm transition-all duration-200
                        text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md
                        ${level > 0 ? 'text-xs' : 'font-medium'}
                    `}
                    whileTap={{ scale: 0.98 }}
                >
                    {item.title}
                </motion.button>
                
                {hasSubItems && (
                    <div className="mt-1 space-y-1">
                        {item.subItems!.map(subItem => renderNavigationItem(subItem, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center lg:hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? '✕' : '📑'}
                </motion.div>
            </motion.button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        
                        {/* Menu Content */}
                        <motion.div
                            className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-4 w-72 max-h-[70vh] overflow-y-auto z-50 lg:hidden"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="mb-4">
                                <h3 className="font-bold text-lg text-gray-800 border-b pb-2">📑 Table of Contents</h3>
                            </div>
                            
                            <div className="space-y-1">
                                {navigationData.map(item => renderNavigationItem(item))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}