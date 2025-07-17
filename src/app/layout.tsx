import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Deal Diner | Premium Food Automation",
  description:
    "Deal Diner is your go-to platform for automating Uber Eats group orders through Discord. Fast, simple, and optimized for savings.",
  keywords: [
    "Deal Diner",
    "Uber Eats Bot",
    "Food Automation",
    "Discord Group Orders",
    "Uber Eats Group Order",
    "25 off 25",
    "Food Deals",
    "Delivery Bot",
    "Promo Automation",
    "Discord Bots",
  ],
  openGraph: {
    title: "Deal Diner | Automate Group Food Orders",
    description:
      "Streamline your Uber Eats group ordering with Deal Diner. Easily generate links, apply promos, and let our Discord bot handle the rest.",
    url: "https://dealdiner.store",
    type: "website",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1392499993230966828/1392715380530610236/ChatGPT_Image_Jul_9_2025_08_52_18_PM_1.png",
        width: 1200,
        height: 630,
        alt: "Deal Diner – Group Order Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deal Diner | Group Order Bot",
    description:
      "Automate Uber Eats group orders, apply promos like 25 OFF 25, and get your food delivered fast with Deal Diner.",
    images: [
      "https://media.discordapp.net/attachments/1392499993230966828/1392715380530610236/ChatGPT_Image_Jul_9_2025_08_52_18_PM_1.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
