"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageSliderProps {
    images: Array<{
        url: string;
        alt: string;
        caption?: string;
    }>;
    className?: string;
}

export default function ImageSlider({ images, className = "" }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);

    if (!images || images.length === 0) return null;

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <>
            <div className={`relative bg-gray-50 rounded-lg overflow-hidden w-full max-w-2xl flex-shrink-0 ${className}`}>
                {/* Main Image Display */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 cursor-pointer"
                            onClick={toggleFullScreen}
                        >
                            <Image
                                src={images[currentIndex].url}
                                alt={images[currentIndex].alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Full Screen Button */}
                    <button
                        onClick={toggleFullScreen}
                        className="absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-label="View full screen"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    </button>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
                                aria-label="Previous image"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 z-10"
                                aria-label="Next image"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm z-10">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </div>

                {/* Caption */}
                {images[currentIndex].caption && (
                    <div className="p-3 bg-white border-t">
                        <p className="text-sm text-gray-600 italic text-center">
                            {images[currentIndex].caption}
                        </p>
                    </div>
                )}

                {/* Thumbnail Navigation */}
                {images.length > 1 && (
                    <div className="p-3 bg-white border-t">
                        <div className="relative">
                            <div className="flex space-x-2 overflow-x-auto overflow-y-hidden pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                <div className="flex space-x-2 px-2">
                                    {images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToImage(index)}
                                            className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                                                ? 'border-blue-500 ring-2 ring-blue-200 shadow-md'
                                                : 'border-gray-300 hover:border-gray-400 hover:shadow-sm'
                                                }`}
                                            title={`Image ${index + 1} of ${images.length}`}
                                        >
                                            <Image
                                                src={image.url}
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                                sizes="64px"
                                            />
                                            {/* Image number overlay */}
                                            <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white text-xs px-1 rounded-tl">
                                                {index + 1}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation dots as alternative */}
                            <div className="flex justify-center space-x-1 mt-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex
                                            ? 'bg-blue-500 w-4'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        title={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Full Screen Modal */}
            <AnimatePresence>
                {isFullScreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
                        onClick={toggleFullScreen}
                    >
                        <button
                            onClick={toggleFullScreen}
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative w-full h-full max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={images[currentIndex].url}
                                alt={images[currentIndex].alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />

                            {/* Full Screen Navigation */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-4 rounded-r-lg transition-all duration-200"
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-4 rounded-l-lg transition-all duration-200"
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Full Screen Caption */}
                            {images[currentIndex].caption && (
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <p className="inline-block bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm">
                                        {images[currentIndex].caption}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}