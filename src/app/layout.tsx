import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React
import Script from "next/script"

export const metadata: Metadata = {
  title: "Boss Hudsawat - Full Stack Developer",
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
    icon: "/fav/favicon.ico", // Default favicon
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
      <body className="bg-slate-100 text-black min-h-screen flex flex-col">
        {children}
        <footer className="mt-auto py-4 text-center text-sm">
          This portfolio is coded by Boss Hudsawat, using Next.js and TailwindCSS
        </footer>
      </body>
    </html>
  )
}

