"use client"

import { motion } from "motion/react"
import { useTheme } from "next-themes"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { MY_NETWORKS } from "@/data/my-networks"
import { Code, Layers, UserRound, Zap } from "lucide-react"
import { MyResume } from "../my-resume"

export function MyInformation() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          <div className="col-span-1 md:col-span-1 lg:col-span-2 p-0 order-2 md:order-1">
            <MyResume />
          </div>

          <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 col-span-1 md:col-span-2 lg:col-span-3 order-1 md:order-2 bg-white dark:bg-black/40 shadow-md dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative flex h-full flex-col justify-between gap-6 rounded-xl p-6">
              <div className="relative flex flex-1 flex-col gap-6">
                <div className="flex w-full md:flex-row flex-col items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-lg sm:text-xl font-bold">Deal Diner</p>
                      <p className="text-sm uppercase text-neutral-500 dark:text-neutral-400">
                        Premium Food Automation
                      </p>
                      <p className="text-sm uppercase text-neutral-500 dark:text-neutral-400">
                        Order Processing System
                      </p>
                    </div>
                  </div>

                  <SocialNetwork />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white">
                    Delivering meals, savings, and automation.
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-neutral-700 dark:text-neutral-400">
                    Deal Diner is your go-to hub for group orders, exclusive deals, and streamlined delivery powered by advanced Discord integration.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What We Offer</h3>
                  <KeySkills />
                </div>

                <KeyAchievements />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VelocityScroll
        numRows={1}
        className="!text-xl md:!text-3xl opacity-50 my-6"
      >
        🍽️ Welcome to Deal Diner
      </VelocityScroll>
    </>
  )
}

const SocialNetwork = () => (
  <div className="relative z-20 mt-4 sm:mt-0">
    <div className="flex flex-wrap items-center gap-2">
      {MY_NETWORKS.map((network) => (
        <a
          key={network.name}
          href={network.href}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      ))}
    </div>
  </div>
)

const KeyAchievements = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {[
        {
          icon: <Code className="h-8 w-8 text-green-500 dark:text-green-400" />,
          title: "Fully Automated",
          desc: "From group links to receipts, no clicks needed",
          light: "rgb(220 252 231)",
          dark: "rgba(74, 222, 128, 0.2)"
        },
        {
          icon: <Layers className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
          title: "Discord Integrated",
          desc: "Seamlessly operates inside Discord tickets",
          light: "rgb(219 234 254)",
          dark: "rgba(96, 165, 250, 0.2)"
        },
        {
          icon: <Zap className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />,
          title: "Fast & Reliable",
          desc: "Real-time order checks with receipt decryption",
          light: "rgb(254 243 199)",
          dark: "rgba(251, 191, 36, 0.2)"
        }
      ].map(({ icon, title, desc, light, dark }, idx) => (
        <motion.div
          key={idx}
          className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col items-center text-center cursor-pointer transition-colors duration-300"
          whileHover={{
            scale: 1.05,
            backgroundColor: currentTheme === "dark" ? dark : light,
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }}>
            {icon}
          </motion.div>
          <h4 className="font-medium mt-2 dark:text-white">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

const KeySkills = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const skills = [
    { name: "Discord Bot Automation", color: "rgb(219 234 254)", darkColor: "rgba(59, 130, 246, 0.2)" },
    { name: "Order Parsing", color: "rgb(224 231 255)", darkColor: "rgba(99, 102, 241, 0.2)" },
    { name: "Uber Eats Integration", color: "rgb(237 233 254)", darkColor: "rgba(124, 58, 237, 0.2)" },
    { name: "Receipt Decryption", color: "rgb(254 226 226)", darkColor: "rgba(239, 68, 68, 0.2)" },
    { name: "Promo Tracking", color: "rgb(220 252 231)", darkColor: "rgba(16, 185, 129, 0.2)" },
    { name: "Vouch System", color: "rgb(207 250 254)", darkColor: "rgba(6, 182, 212, 0.2)" },
    { name: "Chef Debt Management", color: "rgb(254 243 199)", darkColor: "rgba(245, 158, 11, 0.2)" },
    { name: "Live Order Status", color: "rgb(224 231 255)", darkColor: "rgba(99, 102, 241, 0.2)" }
  ]

  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      }}
    >
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: currentTheme === "dark" ? skill.darkColor : skill.color,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Badge
            variant="secondary"
            className="px-3 py-1 cursor-pointer dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300"
          >
            {skill.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  )
}
