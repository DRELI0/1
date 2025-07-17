import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Order Guide | Deal Diner",
  description:
    "Learn how to create and submit Uber Eats group orders through Deal Diner. Follow step-by-step instructions for browser and app users.",
  openGraph: {
    title: "Order Guide | Deal Diner",
    description:
      "Step-by-step guide to creating and submitting Uber Eats group orders through the Deal Diner Discord bot.",
    url: "https://dealdiner.store/order-guide",
    siteName: "Deal Diner",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1392499993230966828/1392715380530610236/ChatGPT_Image_Jul_9_2025_08_52_18_PM_1.png",
        width: 1200,
        height: 630,
        alt: "Deal Diner Order Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Guide | Deal Diner",
    description:
      "Master the process of creating a group order and applying promo deals like 25 OFF 25 with Deal Diner.",
    images: [
      "https://media.discordapp.net/attachments/1392499993230966828/1392715380530610236/ChatGPT_Image_Jul_9_2025_08_52_18_PM_1.png",
    ],
  },
  alternates: {
    canonical: "https://dealdiner.store/order-guide",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
