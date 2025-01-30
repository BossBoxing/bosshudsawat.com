import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Content() {
    return (
        <section className="lg:w-3/4 p-6 bg-white text-black">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        <li>💁‍♂️View my resume: <Link href="https://kku.ac.th/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Click here</Link></li>
                        <li>🗺Nationality: Thai</li>
                        <li>🏠Live in Khon Kaen, Thailand</li>
                        <li>🏳️Languages: Thai - English</li>
                        <li>📧Email: <Link href="mailto:contact@bosshudsawat.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">contact@bosshudsawat.com</Link></li>
                        <li>💭Hobbies: 🎮Video Game, 🏸Badminton, 🥁Drums, 🎸Guitar, 🎸Bass, 🎤Singing</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Working Experiences</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Coming soon..</p>    
                    {/* <ul className="list-disc pl-5">
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Personal Projects</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Coming soon..</p>
                    {/* <ul className="list-disc pl-5">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul> */}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Latest News</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Coming soon..</p>
                    {/* <p>Add your latest news or updates here.</p> */}
                </CardContent>
            </Card>
        </section>
    )
}

