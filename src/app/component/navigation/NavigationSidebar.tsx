"use client";
import { motion } from "framer-motion";
import { navigationData, NavigationItem } from "../data/navigation";

interface NavigationSidebarProps {
    className?: string;
}

export default function NavigationSidebar({ className = "" }: NavigationSidebarProps) {
    // Smooth scroll to section
    const scrollToSection = (href: string) => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
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
                        w-full text-left py-2 px-3 rounded-md text-sm transition-all duration-200 truncate
                        text-gray-600 hover:text-gray-900 hover:bg-gray-50
                        ${level > 0 ? 'text-xs' : ''}
                    `}
                    whileHover={{ x: level > 0 ? 4 : 2 }}
                    whileTap={{ scale: 0.98 }}
                    title={item.title}
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
        <motion.div
            className={`lg:min-w-80 lg:max-w-md flex-shrink-0 ${className}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="sticky top-6 flex flex-col max-h-[calc(100vh-3rem)]">
                <div className="p-6 flex-shrink-0">
                    <h3 className="font-bold text-xl text-gray-800 whitespace-nowrap">Table of Contents</h3>
                </div>
                
                <nav className="flex-1 pl-4 pr-2 space-y-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {navigationData.map(item => renderNavigationItem(item))}
                </nav>
            </div>
        </motion.div>
    );
}