"use client";

import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function DealDinerInfo() {
  return (
    <div className="mx-auto w-80">
      <FollowerPointerCard
        title={
          <TitleComponent
            title="📄 Deal Diner Info"
            avatar="https://i.imgur.com/NSE5gCJ.png"
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-gray-100">
            <Image
              src="https://i.imgur.com/2DPGrQd.png"
              alt="Order Summary Preview"
              fill
              className="object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-black/30 rounded-t-2xl" />
          </div>
          <div className="p-4">
            <h2 className="my-4 text-lg font-bold text-zinc-800">
              Download Info
            </h2>
            <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
              This PDF includes everything you need to know about ordering, payment rules, promo guidance, tips, and more.
            </p>
            <div className="mt-6 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-500">📅 Updated July 2025</span>
              <a
                href="/files/dealdiner_info_sheet.pdf"
                download
                className="relative z-10 block rounded-xl bg-black px-5 py-2 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors"
              >
                ⬇️ Download PDF
              </a>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt="Deal Diner Logo"
      className="rounded-full border-2 border-white"
    />
    <p className="text-base font-medium">{title}</p>
  </div>
);
