"use client";
import { motion } from "framer-motion";
import { navigationData, NavigationItem } from "../data/navigation";

interface TableOfContentsProps {
    className?: string;
}

export default function TableOfContents({ className = "" }: TableOfContentsProps) {
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
        }
    };

    const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
        const hasSubItems = item.subItems && item.subItems.length > 0;

        return (
            <div key={item.id} className={`${level > 0 ? 'ml-4' : ''}`}>
                <motion.button
                    onClick={() => scrollToSection(item.href)}
                    className={`
                        w-full text-left py-2 px-3 rounded-md text-sm transition-all duration-200
                        text-gray-600 hover:text-gray-900 hover:bg-gray-50
                        ${level > 0 ? 'text-xs' : ''}
                    `}
                    whileHover={{ x: level > 0 ? 4 : 2 }}
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
        <motion.nav
            className={`fixed right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 w-64 max-h-[80vh] overflow-y-auto z-50 hidden lg:block ${className}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="mb-4">
                <h3 className="font-bold text-lg text-gray-800 border-b pb-2">📑 Table of Contents</h3>
            </div>
            
            <div className="space-y-1">
                {navigationData.map(item => renderNavigationItem(item))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">Click to navigate</p>
            </div>
        </motion.nav>
    );
}