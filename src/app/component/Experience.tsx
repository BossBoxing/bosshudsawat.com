'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

export default function Experience() {
    const [fileTree, setFileTree] = useState<Record<string, any>>({})
    const [selectedFile, setSelectedFile] = useState<string | null>(null)
    const [content, setContent] = useState<string>('')

    useEffect(() => {
        fetch('/api/experience/files')
            .then(res => res.json())
            .then(data => setFileTree(data))
    }, [])

    useEffect(() => {
        if (selectedFile) {
            fetch(`/api/experience/content?file=${selectedFile}`)
                .then(res => res.text())
                .then(data => setContent(data))
        }
    }, [selectedFile])

    return (
        <div className="flex w-full h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-100 p-4 border-r max-h-screen overflow-y-auto">
                <button onClick={() => history.back()} className="mb-4 text-blue-500">← Back</button>
                <h2 className="font-bold text-xl mb-4">My Experience</h2>

                <ul>
                    {Object.entries(fileTree).map(([year, data]) => (
                        <li key={year} className="mb-2">
                            <h3 className="font-semibold text-lg">{year}</h3>
                            <ul className="ml-4">
                                {data.files?.map((fileName: string) => (
                                    <li key={`${year}-${fileName}`}>
                                        <button
                                            onClick={() => setSelectedFile(`${year}/${fileName}`)}
                                            className={`text-left w-full ${selectedFile === `${year}/${fileName}`
                                                ? 'text-blue-700 font-semibold'
                                                : 'text-blue-600 hover:underline'
                                                }`}
                                        >
                                            {fileName.replace('.md', '')}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Markdown Content */}
            <div className="max-w-full w-full flex-1 p-6 overflow-auto prose prose-lg prose-blue">
                {selectedFile ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                        {content}
                    </ReactMarkdown>
                ) : (
                    <div className="w-auto h-screen">
                        <h1 className="text-4xl font-extrabold text-gray-900">Welcome to My Work Experience</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Here, you'll find a collection of my professional journey, from past projects to career milestones.
                            Each article reflects my experiences, challenges, and growth in the tech industry.
                        </p>
                        <p className="mt-2 text-lg text-gray-600">
                            Feel free to explore the sidebar on the left to learn more about my work. 🚀
                        </p>
                        <p className="mt-6 text-base text-gray-500 italic">
                            "Experience is the best teacher, and I'm here to share mine with you."
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
