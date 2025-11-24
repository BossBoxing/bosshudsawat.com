import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React
import Script from "next/script"

export const metadata: Metadata = {
  title: "Boss Hudsawat - Portfolio",
  description: "Portfolio of Boss Hudsawat, a passionate software engineer, tech speaker, and robotics enthusiast. Explore my work experience, achievements, and technical expertise.",
  keywords: ["Boss Hudsawat", "Full Stack Developer", "Tech Speaker", "Robotics", "Portfolio", "Developer", "Web Development", "Public Speaking"],
  authors: [{ name: "Boss Hudsawat" }],
  creator: "Boss Hudsawat",
  publisher: "Boss Hudsawat",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bosshudsawat.com",
    siteName: "Boss Hudsawat Portfolio",
    title: "Boss Hudsawat - Full Stack Developer & Tech Speaker",
    description: "Portfolio of Boss Hudsawat, a passionate software engineer, tech speaker, and robotics enthusiast. Explore my work experience, achievements, and technical expertise.",
    images: [
      {
        url: "https://bosshudsawat.com/opengraph-image", // Using absolute URL for better compatibility
        width: 1200,
        height: 630,
        alt: "Boss Hudsawat - Full Stack Developer & Tech Speaker",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boss Hudsawat - Full Stack Developer & Tech Speaker",
    description: "Portfolio of Boss Hudsawat, a passionate software engineer, tech speaker, and robotics enthusiast.",
    images: ["https://bosshudsawat.com/twitter-image"], // Using absolute URL
    creator: "@bosshudsawat", // Add your Twitter handle if you have one
  },
  icons: {
    icon: "/fav/logo.png", // Default favicon
    // shortcut: "/fav/android-chrome-192x192.png", // Shortcut icon
  },
  alternates: {
    canonical: "https://bosshudsawat.com",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  other: {
    "theme-color": "#667eea",
    "color-scheme": "light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Boss Hudsawat",
    "application-name": "Boss Hudsawat Portfolio",
    "msapplication-TileColor": "#667eea",
    "msapplication-config": "/browserconfig.xml",
    // Facebook specific meta tags
    "fb:app_id": "", // Add your Facebook App ID if you have one
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:alt": "Boss Hudsawat - Full Stack Developer & Tech Speaker",
    // Additional meta tags for better compatibility
    "viewport": "width=device-width, initial-scale=1",
    "format-detection": "telephone=no",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Boss Hudsawat",
              "jobTitle": "Full Stack Developer",
              "description": "Passionate software engineer, tech speaker, and robotics enthusiast",
              "url": "https://bosshudsawat.com",
              "image": "https://bosshudsawat.com/img/boss-3.jpg",
              "sameAs": [
                "https://twitter.com/bosshudsawat",
                "https://linkedin.com/in/bosshudsawat",
                "https://github.com/bosshudsawat"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "Software Engineering",
                "Web Development",
                "Robotics",
                "Public Speaking",
                "Technology",
                "Full Stack Developer",
                "Software Engineer",
                "Cloud Computing",
              ]
            })
          }}
        />
      </head>
      <body className="bg-white text-black min-h-screen flex flex-col">
        <header className="bg-[#041632] py-4">
          <nav className="container mx-auto px-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-[#2596be] to-[#0f63d5] bg-clip-text text-transparent">Boss Hudsawat</a>
            {/* Add navigation links here if needed */}
          </nav>
        </header>

        <main className="flex-1 bg-white">
          {children}
        </main>
        <footer className="bg-white py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a className="font-bold text-gray-700">© {new Date().getFullYear()} Boss Hudsawat. All rights reserved.</a>
            <div className="flex gap-2">
              <a href="https://github.com/bossboxing" className="font-bold text-gray-700">GitHub</a>
              <a href="https://www.linkedin.com/in/hudsawat-akkati/" className="font-bold text-gray-700">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

