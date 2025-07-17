"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { cn } from "@/lib/utils"
import { Utensils } from "lucide-react"
import { motion } from "motion/react"

export function PersonalInterests() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  )
}

const DiscordPreviewCard = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col items-center justify-center text-center px-4 py-6"
    >
      <span className="text-3xl mb-2">💬</span>
      <p className="text-lg font-semibold">Join Our Discord</p>
      <p className="text-sm text-neutral-400 max-w-xs">
        Order food 🍔, ask questions ❓, or vouch for your favorite chef 👨‍🍳
      </p>
      <a
        href="https://discord.gg/dealdiner"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-500 transition-colors"
      >
        Join Now
      </a>
    </motion.div>
  )
}

const items = []
