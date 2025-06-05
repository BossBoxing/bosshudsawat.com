"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
    sender: "Boss" | "You"
    text: string
    options?: string[]
}

const currentCompany = "THAI DATA CLOUD";

const conversationFlow: Record<string, { response: string; options?: string[] }> = {
    // English Questions
    "Hi, How are you?": {
        response: "I'm pretty fine! I have many projects, but yes, I'm still alive lol.",
        options: ["How does this work?", "Where do you work?", "How old are you?"],
    },
    "How does this work?": {
        response: "I made this amazing AI Chatbot. No, I'm just kidding. It just an If...else program lol",
        options: ["Where do you live?", "What do you do?", "How old are you?"],
    },
    "Where do you live?": {
        response: "I'm live in Khon Kaen, Thailand.",
        options: ["What do you do?", "What are your hobbies?", "How old are you?"],
    },
    "How old are you?": {
        response: "I'm 24 yrs old, born in 2000",
        options: ["Are you AI Chatbot?", "Where do you work?", "Where do you live?"],
    },
    "Where do you work?": {
        response: `Currently, I work at ${currentCompany}.`,
        options: ["Where do you live?", "What are your hobbies?", "What do you do?"],
    },
    "What do you do?": {
        response: `I started programming with C by working with Arduino to control robots. Later, I pursued a degree in Computer Science at Khon Kaen University and eventually became a Full Stack Developer at ${currentCompany}. I mostly work on backend development using NestJS with TypeScript. Over time, I expanded my skills to include project deployment using Docker, Kubernetes, and traffic handling. Since my company provides Cloud Solutions, I also work with various cloud computing platforms.`,
        options: ["What are your hobbies?", "Where do you work?", "Are you AI Chatbot?"],
    },
    "What are your hobbies?": {
        response: "I enjoy playing video games, badminton, drums, guitar, bass, and singing.",
        options: ["Are you AI Chatbot?"],
    },
    "Are you AI Chatbot?": {
        response: "I'm just an if-else chatbot created by Hudsawat Akkati! 😆",
        options: ["Nice to meet you."],
    },
    "Nice to meet you.": {
        response: "Nice to meet you too. You can close this page to see all my personal website.",
    },

    // Thai Questions (Translated)
    "พูดไทยได้ไหม?": {
        response: "แน่นอนครับ! ผมเป็นคนไทย 😁",
        options: ["คุณอาศัยอยู่ที่ไหน?", "ทำงานที่ไหน?", "ทำไมถึงมาเป็นโปรแกรมเมอร์?"],
    },
    "คุณอาศัยอยู่ที่ไหน?": {
        response: "ผมเป็นคนกาฬสินธุ์ แต่ปัจจุบันทำงานและอาศัยอยู่ที่จังหวัดขอนแก่น แถวๆ มหาวิทยาลัยขอนแก่นครับ",
        options: ["ทำงานที่ไหน?", "ทำไมถึงมาเป็นโปรแกรมเมอร์?", "คุณอายุกี่ปี?"],
    },
    "ทำงานที่ไหน?": {
        response: `ปัจจุบัน ผมทำงานที่ บริษัท ${currentCompany} ครับ`,
        options: ["คุณอาศัยอยู่ที่ไหน?", "ทำไมถึงมาเป็นโปรแกรมเมอร์?", "คุณอายุกี่ปี?"],
    },
    "ทำไมถึงมาเป็นโปรแกรมเมอร์?": {
        response: "เพราะเริ่มต้นเขียนโปรแกรมจากการเข้าร่วมชมรมหุ่นยนต์ จนรู้ว่าตัวเองชอบการเขียนโปรแกรมจนเป็นผมถึงทุกวันนี้ครับ ",
        options: ["คุณเป็นเอไอหรือป่าว?", "คุณอาศัยอยู่ที่ไหน?", "ทำงานที่ไหน?"],
    },
    "คุณอายุกี่ปี?": {
        response: "ผมอายุ 24 ปีครับ เกิดปี ค.ศ.2000 พอดีเป๊ะ พ่อจึงตั้งชื่อว่าหัสวรรษ มาจากคำว่า สหัสวรรษ ครับ",
        options: ["คุณเป็นเอไอหรือป่าว?", "คุณอาศัยอยู่ที่ไหน?", "ทำงานที่ไหน?"],
    },
    "คุณเป็นเอไอหรือป่าว?": {
        response: "555+ เป็นเพียง If...else ธรรมดาครับผม",
        options: ["ยินดีที่ได้รู้จักนะ"],
    },
    "ยินดีที่ได้รู้จักนะ": {
        response: "ยินดีที่ได้รู้จักเช่นกันครับ คุณสามารถปิดหน้าต่างนี้ และชมเว็บโปรไฟล์ของผมเต็มๆ ได้เลย",
    }
};

export default function ModernAIChat() {
    const [isOpen, setIsOpen] = useState(true)
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: "Boss",
            text: "Hello, My name's Hudsawat.\nHow can I help you today?",
            options: ["Hi, How are you?", "พูดไทยได้ไหม?"],
        },
    ])

    const [typing, setTyping] = useState(false)
    const [currentText, setCurrentText] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, []) // Updated useEffect dependency

    const handleOptionClick = (option: string) => {
        const nextStep = conversationFlow[option]

        if (!nextStep) return

        setMessages((prev) => [...prev, { sender: "You", text: option }])
        setTyping(true)
        setCurrentText("")

        let index = 0
        const typingInterval = setInterval(() => {
            setCurrentText(nextStep.response.slice(0, index + 1))
            index++

            if (index === nextStep.response.length) {
                clearInterval(typingInterval)
                setTyping(false)
                setMessages((prev) => [...prev, { sender: "Boss", text: nextStep.response, options: nextStep.options || [] }])
            }
        }, 50)
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 60 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 60 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-full max-w-md h-[600px] mx-auto shadow-lg rounded-lg bg-slate-100 flex flex-col"
                >
                    <CardHeader className="flex flex-row justify-between items-center border-b p-4">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarImage src="/img/bosshudsawat-on-stage.jpg?height=40&width=40" alt="Boss" />
                                <AvatarFallback>BA</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-lg font-semibold">Boss Hudsawat Akkati</h2>
                                <p className="text-sm text-gray-500">Full Stack Developer @ THAI DATA CLOUD</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X size={20} />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
                        <AnimatePresence initial={false}>
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex ${msg.sender === "Boss" ? "justify-start" : "justify-end"}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.35, delay: index * 0.06 }}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${msg.sender === "Boss" ? "bg-gray-300 text-gray-800" : "bg-blue-500 text-white"
                                            }`}
                                    >
                                        {msg.sender === "Boss" && typing && index === messages.length - 1 ? currentText : msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {typing && (
                            <motion.div
                                className="flex justify-start"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-gray-100 p-3 rounded-lg">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                        {!typing && messages[messages.length - 1].options && messages[messages.length - 1].options!.length > 0 && (
                            <motion.div
                                className="grid grid-cols-1 justify-items-end gap-2 w-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {messages[messages.length - 1].options!.map((option, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.2, delay: i * 0.08 }}
                                    >
                                        <Button
                                            onClick={() => handleOptionClick(option)}
                                            className="w-auto justify-end text-end rounded-lg bg-slate-800 hover:bg-slate-700"
                                        >
                                            {option}
                                        </Button>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </CardContent>
                    {/* <CardFooter className="border-t p-4">
                ...
                    </CardFooter> */}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

