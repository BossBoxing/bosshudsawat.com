import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const dirPath = path.join(process.cwd(), 'src', 'app', 'experience', 'articles')

    function getFilesInDir(dir: string): Record<string, any> {
        return fs.readdirSync(dir).reduce((acc, item) => {
            const fullPath = path.join(dir, item)
            const stat = fs.statSync(fullPath)

            if (stat.isDirectory()) {
                acc[item] = getFilesInDir(fullPath) // Sub-folder
            } else if (item.endsWith('.md')) {
                if (!acc["files"]) acc["files"] = [] // ✅ ตรวจสอบให้ "files" เป็น array จริง ๆ
                acc["files"].push(item)
            }

            return acc
        }, {} as Record<string, any>)
    }

    const fileStructure = getFilesInDir(dirPath)
    return NextResponse.json(fileStructure)
}
