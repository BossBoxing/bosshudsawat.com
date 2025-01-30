import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Boss Hudsawat",
  description: "Portfolio website of Boss Hudsawat",
  icons: {
    icon: "/fav/favicon.ico", // Default favicon
    shortcut: "/fav/android-chrome-192x192.png", // Shortcut icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-black min-h-screen flex flex-col">
        {children}
        <footer className="mt-auto py-4 text-center text-sm">
          This portfolio is coded by Boss Hudsawat, using Next.js and TailwindCSS
        </footer>
      </body>
    </html>
  )
}

