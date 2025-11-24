import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "bot", // Some sites block requests without a user agent
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch URL" }, { status: response.status });
        }

        const html = await response.text();

        // Simple regex to extract metadata
        const getMetaTag = (name: string) => {
            const regex = new RegExp(
                `<meta\\s+(?:name|property)=["'](?:og:|twitter:)?${name}["']\\s+content=["'](.*?)["']`,
                "i"
            );
            const match = html.match(regex);
            return match ? match[1] : null;
        };

        const getTitle = () => {
            const ogTitle = getMetaTag("title");
            if (ogTitle) return ogTitle;
            const titleMatch = html.match(/<title>(.*?)<\/title>/i);
            return titleMatch ? titleMatch[1] : null;
        };

        const getDescription = () => {
            const ogDesc = getMetaTag("description");
            if (ogDesc) return ogDesc;
            return null;
        };

        const getImage = () => {
            const ogImage = getMetaTag("image");
            if (ogImage) return ogImage;
            return null;
        };

        const getFavicon = () => {
            // Try to find link rel="icon" or "shortcut icon"
            const linkRegex = /<link\s+rel=["'](?:shortcut\s+)?icon["']\s+href=["'](.*?)["']/i;
            const match = html.match(linkRegex);
            if (match) {
                const href = match[1];
                if (href.startsWith("http")) return href;
                if (href.startsWith("//")) return `https:${href}`;
                // Handle relative paths
                try {
                    return new URL(href, url).toString();
                } catch (e) {
                    return null;
                }
            }
            // Fallback to Google Favicon service
            return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
        };

        const metadata = {
            title: getTitle() || new URL(url).hostname,
            description: getDescription(),
            image: getImage(),
            favicon: getFavicon(),
            url: url,
        };

        return NextResponse.json(metadata);
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
