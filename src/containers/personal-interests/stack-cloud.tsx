"use client"

import { IconCloud } from "@/components/magicui/icon-cloud"

export function StackCloud() {
  const deliveryPlatforms = [
    "ubereats",
    "doordash",
    "grubhub",
    "paypal",
    "stripe",
    "discord",
    "visa",
    "mastercard",
    "cashapp",
  ]

  const images = deliveryPlatforms.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <div className="scale-75">
        <IconCloud images={images} />
      </div>
    </div>
  )
}
