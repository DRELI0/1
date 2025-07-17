"use client"

import { BlurImage } from "@/components/ui/apple-cards-carousel"
import { Lens } from "@/components/ui/lens"
import { useState } from "react"

export function MyResume() {
  const [hovering, setHovering] = useState(false)

  return (
    <div>
      <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#111827] to-[#1f2937]">
        <div className="relative z-10">
          <Beams />
          <Lens hovering={hovering} setHovering={setHovering}>
            <BlurImage
              src="https://i.imgur.com/SF2jQ2r.png"
              alt="Deal Diner Order Summary Preview"
              width={450}
              height={400}
              className="rounded-2xl object-contain"
            />
          </Lens>
          <div className="py-4 px-6 relative z-20">
            <h2 className="text-white text-xl font-bold">📋 Deal Diner System</h2>
            <p className="text-neutral-300 mt-2 text-sm">
              Hover to preview a real group order checkout. Learn how our ordering process works, how fees apply, and what to expect before and after your order is placed.
            </p>
            <a
              href="/files/dealdiner_info_sheet.pdf"
              download
              className="mt-4 inline-block bg-white text-black font-semibold px-5 py-2 text-xs rounded-xl hover:bg-zinc-200 transition"
            >
              ⬇️ Download Info Sheet
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Glowing beam visuals
const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      <g filter="url(#filter0_f)">
        <circle cx="34" cy="52" r="114" fill="#FD4766" />
      </g>
      <g filter="url(#filter1_f)">
        <circle cx="332" cy="24" r="102" fill="#FFD644" />
      </g>
      <g filter="url(#filter2_f)">
        <circle cx="191" cy="53" r="102" fill="#34D399" />
      </g>
      <defs>
        <filter id="filter0_f" x="-192" y="-174" width="452" height="452">
          <feGaussianBlur stdDeviation="56" />
        </filter>
        <filter id="filter1_f" x="70" y="-238" width="524" height="524">
          <feGaussianBlur stdDeviation="80" />
        </filter>
        <filter id="filter2_f" x="-71" y="-209" width="524" height="524">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </defs>
    </svg>
  )
}
