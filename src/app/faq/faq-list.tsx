// src/app/faq/faq-list.tsx
"use client"

import { faqs } from "@/data/faqs"
import { useState } from "react"

export function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black dark:text-white">
        Deal Diner FAQ
      </h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-neutral-300 dark:border-neutral-700 py-4"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left text-lg md:text-xl font-semibold text-black dark:text-white focus:outline-none"
          >
            {faq.question}
          </button>
          <div
            className={`mt-2 text-neutral-700 dark:text-neutral-300 transition-all duration-300 ${
              openIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
            }`}
          >
            <p className="text-base md:text-lg">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
