"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface LinkPreviewProps {
    url: string;
}

interface Metadata {
    title: string;
    description: string;
    image: string | null;
    favicon: string | null;
    url: string;
}

export default function LinkPreview({ url }: LinkPreviewProps) {
    const [metadata, setMetadata] = useState<Metadata | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;

        const fetchMetadata = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
                if (!res.ok) throw new Error("Failed to fetch metadata");
                const data = await res.json();
                setMetadata(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchMetadata();
    }, [url]);

    if (loading) {
        return (
            <div className="border rounded-lg p-3 max-w-md w-full animate-pulse bg-gray-50">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
            </div>
        );
    }

    if (error || !metadata) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
            >
                {url}
            </a>
        );
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg overflow-hidden hover:bg-gray-50 transition-colors duration-200 max-w-2xl bg-white shadow-sm hover:shadow-md"
        >
            <div className="flex flex-col sm:flex-row">
                <div className="p-4 flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                        {metadata.favicon && (
                            <img
                                src={metadata.favicon}
                                alt=""
                                className="w-4 h-4 object-contain"
                            />
                        )}
                        <span className="text-xs text-gray-500 truncate">
                            {new URL(url).hostname}
                        </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                        {metadata.description}
                    </h3>
                    {metadata.description && (
                        <p className="text-xs text-gray-600 line-clamp-2">
                            {metadata.description}
                        </p>
                    )}
                </div>
                {metadata.image && (
                    <div className="relative w-full sm:w-32 h-32 sm:h-auto bg-gray-100 flex-shrink-0">
                        <img
                            src={metadata.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
        </a>
    );
}
