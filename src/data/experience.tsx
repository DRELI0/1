import { BlurImage } from "@/components/ui/apple-cards-carousel"

export const EXPERIENCE_TIMELINE = [
  {
    title: "Step 1: Get a Deal Link",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          Head to our #order-here channel and paste a valid Uber Eats group order link. Make sure the store supports group orders and hasn’t expired.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <BlurImage src="/images/dealdiner/linkstep.png" alt="Group order link" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
          <BlurImage src="/images/dealdiner/validlink.png" alt="Valid order" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
        </div>
      </div>
    ),
  },
  {
    title: "Step 2: Check the Order",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          Use the `/check` command in Discord to preview items, prices, promos, and order status. This helps prevent errors and confirms eligibility.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <BlurImage src="/images/dealdiner/checkstep.png" alt="Check command" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
          <BlurImage src="/images/dealdiner/promo.png" alt="Promo options" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
        </div>
      </div>
    ),
  },
  {
    title: "Step 3: Wait for a Chef",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          Our chefs will review the order and confirm if it can be placed. Don’t spam or ping—just wait and check for status updates in your ticket.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <BlurImage src="/images/dealdiner/chefrespond.png" alt="Chef reply" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
          <BlurImage src="/images/dealdiner/status.png" alt="Order status" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
        </div>
      </div>
    ),
  },
  {
    title: "Step 4: Pay and Confirm",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          Once a chef replies with the total, send payment using one of the listed methods. Confirm your name and address if prompted.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <BlurImage src="/images/dealdiner/payment.png" alt="Payment" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
          <BlurImage src="/images/dealdiner/confirm.png" alt="Confirmation" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
        </div>
      </div>
    ),
  },
  {
    title: "Step 5: Track and Vouch",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          You’ll get a tracking link after the order is placed. Once food is delivered, post a vouch with proof to earn vouch points and promos.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <BlurImage src="/images/dealdiner/track.png" alt="Track order" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
          <BlurImage src="/images/dealdiner/vouch.png" alt="Vouch" width={500} height={500} className="rounded-lg object-cover h-32 w-full shadow-md" />
        </div>
      </div>
    ),
  },
]
