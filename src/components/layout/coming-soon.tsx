"use client"

import { useEffect, useState } from "react"
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { Logo } from "../svg/logo"
import { useRouter } from "next/navigation"
import { FullScreen } from "../full-screen"

export const ComingSoonPage = ({ pageName }: { pageName?: string }) => {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <FullScreen className="flex-col">
      <Terminal>
        <TypingAnimation>&gt; launching dealdiner@latest --init</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Syncing with Uber Eats API...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Group order logic activated.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Injecting promo stack: 20OFF20, 25OFF25</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Generating real-time order tracking modules.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Integrating with Discord bot interface...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Secure payment systems linked (CashApp, PayPal, Venmo).</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Building order queue + chef dashboard...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Loading FAQ and support center...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Enabling customer vouch system...</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ {pageName}:</span>
          <span className="pl-2">- Coming Soon</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          Built by @wewegonbeokay (Discord ID: 955834539123560520)
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-muted-foreground">
          DM on Discord for business inquiries or automation help.
        </TypingAnimation>
      </Terminal>

      <div className="flex mt-10 justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Logo className="size-5" />
          <span>Back to home</span>
        </HoverBorderGradient>
      </div>
    </FullScreen>
  )
}
