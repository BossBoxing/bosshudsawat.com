import Link from "next/link";
import { ReactNode } from "react";

export interface AboutMeItem {
    id: string;
    content: string | ReactNode;
}

export const aboutMeItems: AboutMeItem[] = [
    {
        id: "cv",
        content: (
            <>
                💁‍♂️View my CV: <Link href="/HUDSAWAT-AKKATI-CV.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click here</Link>
            </>
        )
    },
    {
        id: "nationality",
        content: "🗺Nationality: Thai"
    },
    {
        id: "location",
        content: "🏠Live in Khon Kaen, Thailand"
    },
    {
        id: "languages",
        content: "🏳️Languages: Thai - English"
    },
    {
        id: "email",
        content: (
            <>
                📧Email: <Link href="mailto:contact@bosshudsawat.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">contact@bosshudsawat.com</Link>
            </>
        )
    },
    {
        id: "medium",
        content: (
            <>
                📝Medium: <Link href="https://medium.com/@hudsawat.ak" target="_blank" rel="noopener noreferrer" className="text-blue-500">Click here</Link>
            </>
        )
    },
    {
        id: "hobbies",
        content: "💭Hobbies: 🎮Video Game, 🏸Badminton, 🥁Drums, 🎸Guitar, 🎸Bass, 🎤Singing, 📝Writing on Medium (Planning to write on Medium)"
    }
];