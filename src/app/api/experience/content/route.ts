import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(req: NextRequest) {
    const fileParam = req.nextUrl.searchParams.get('file')
    if (!fileParam) return new NextResponse('Missing file param', { status: 400 })

    const filePath = path.join(process.cwd(), 'src','app', 'experience', 'articles', fileParam)

    if (!fs.existsSync(filePath)) return new NextResponse('File not found', { status: 404 })

    const content = fs.readFileSync(filePath, 'utf-8')
    return new NextResponse(content)
}
