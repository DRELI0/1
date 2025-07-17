import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Deal Diner",
  description:
    "Learn more about Deal Diner – your go-to hub for automated food deals, group order coordination, and Discord-powered order tracking.",
  keywords: [
    "Deal Diner",
    "About Deal Diner",
    "Food Automation",
    "Uber Eats Group Orders",
    "Discord Ordering Bot",
    "Order Tracking",
    "Promo Meals",
    "25 OFF 25",
    "Food Deals",
  ],
  openGraph: {
    title: "About | Deal Diner",
    description:
      "Discover the mission behind Deal Diner – helping you automate, organize, and save on every group meal order.",
    url: "https://dealdiner.store/about",
    siteName: "Deal Diner",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1392499993230966828/1392715380530610236/ChatGPT_Image_Jul_9_2025_08_52_18_PM_1.png",
        width: 1200,
        height: 630,
        alt: "Deal Diner About Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Deal Diner",
    description:
      "Who we are: Deal Diner is the leading Discord-integrated platform for group food orders and exclusive Uber Eats promotions.",
    images: [
      "https://media.discordapp.net/attachments/1392499993230966828/1392715380530610236/ChatGPT_Image_Jul_9_2025_08_52_18_PM_1.png",
    ],
  },
  alternates: {
    canonical: "https://dealdiner.store/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About Deal Diner" />
}
