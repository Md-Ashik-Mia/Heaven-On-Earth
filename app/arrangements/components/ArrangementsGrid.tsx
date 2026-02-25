"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const CheckIcon = () => (
  <IoMdCheckmarkCircleOutline size={20} color="#CFB9A3" />
);

/* ─── Static data (replace with API call later) ─── */
type PaymentType = "full" | "partial" | "spot";

interface Arrangement {
  id: number;
  image: string;
  rating: number;
  title: string;
  combo: string;
  description: string;
  includes: string[];
  paymentType: PaymentType;
  price: string;
}

const arrangements: Arrangement[] = [
  {
    id: 1,
    image: "/images/arrangements/cardimages/img1.png",
    rating: 4.9,
    title: "Wellness Escape",
    combo: "Sauna + Massage + Lunch",
    description:
      "A complete day of relaxation combining our finest wellness services.",
    includes: [
      "2-hour private sauna session",
      "60-minute therapeutic massage",
      "Seasonal lunch menu",
      "Herbal tea selection",
    ],
    paymentType: "full",
    price: "$210",
  },
  {
    id: 2,
    image: "/images/arrangements/cardimages/img2.png",
    rating: 4.9,
    title: "Active Retreat",
    combo: "Yoga + Sauna + Dining",
    description: "Balance mind and body with movement, heat, and nourishment.",
    includes: [
      "Morning yoga session",
      "Shared sauna access",
      "Healthy lunch bowl",
      "Meditation guide",
    ],
    paymentType: "partial",
    price: "$210",
  },
  {
    id: 3,
    image: "/images/arrangements/cardimages/img3.png",
    rating: 4.9,
    title: "Group Experience",
    combo: "Private Sauna + Activities + Catering",
    description:
      "Perfect for celebrations, team building, or gatherings with loved ones.",
    includes: [
      "Private sauna (up to 18 persons)",
      "Guided wellness activity",
      "Premium catering service",
      "Dedicated host",
    ],
    paymentType: "spot",
    price: "$210",
  },
  {
    id: 4,
    image: "/images/arrangements/cardimages/img1.png",
    rating: 4.9,
    title: "Wellness Escape",
    combo: "Sauna + Massage + Lunch",
    description:
      "A complete day of relaxation combining our finest wellness services.",
    includes: [
      "2-hour private sauna session",
      "60-minute therapeutic massage",
      "Seasonal lunch menu",
      "Herbal tea selection",
    ],
    paymentType: "full",
    price: "$210",
  },
  {
    id: 5,
    image: "/images/arrangements/cardimages/img2.png",
    rating: 4.9,
    title: "Active Retreat",
    combo: "Yoga + Sauna + Dining",
    description: "Balance mind and body with movement, heat, and nourishment.",
    includes: [
      "Morning yoga session",
      "Shared sauna access",
      "Healthy lunch bowl",
      "Meditation guide",
    ],
    paymentType: "partial",
    price: "$210",
  },
  {
    id: 6,
    image: "/images/arrangements/cardimages/img3.png",
    rating: 4.9,
    title: "Group Experience",
    combo: "Private Sauna + Activities + Catering",
    description:
      "Perfect for celebrations, team building, or gatherings with loved ones.",
    includes: [
      "Private sauna (up to 18 persons)",
      "Guided wellness activity",
      "Premium catering service",
      "Dedicated host",
    ],
    paymentType: "spot",
    price: "$210",
  },
];

const paymentBadge: Record<PaymentType, { label: string; bg: string }> = {
  full: { label: "Full prepayment", bg: "#E59A50" },
  partial: { label: "Partial payment", bg: "#475569" },
  spot: { label: "Pay on the spot", bg: "#0F172A" },
};

const ArrangementsGrid = () => {
  const { t } = useLanguage();
  const bookLabel = t.arrangementsPage?.grid?.bookButton || "Book Arrangement";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arrangements.map((item) => {
            const badge = paymentBadge[item.paymentType];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden flex flex-col"
                style={{ boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)" }}
              >
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1.5"
                    style={{
                      padding: "8px 12px",
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.95)",
                      boxShadow:
                        "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FDC700"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span
                      className="text-base font-bold text-[#0F172A]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        lineHeight: "150%",
                      }}
                    >
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <h3
                    className="text-2xl font-bold text-[#0F172A] leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-[#475569] text-base"
                    style={{ fontFamily: "Cambria, Georgia, serif" }}
                  >
                    {item.combo}
                  </p>

                  <p
                    className="text-[#475569] text-base leading-relaxed"
                    style={{ fontFamily: "Cambria, Georgia, serif" }}
                  >
                    {item.description}
                  </p>

                  {/* Includes — icon circle: Figma border-radius 999px, bg rgba(255,107,74,0.10), padding 8px */}
                  <ul className="flex flex-col gap-3 mt-1">
                    {item.includes.map((inc, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span
                          className="shrink-0 flex items-center justify-center"
                          style={{
                            width: 31,
                            height: 31,
                            borderRadius: 999,
                            background: "rgba(255, 107, 74, 0.10)",
                          }}
                        >
                          <CheckIcon />
                        </span>
                        <span
                          className="text-[#475569] text-base"
                          style={{ fontFamily: "Cambria, Georgia, serif" }}
                        >
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex-1" />

                  {/* Badge + price — Figma: border-radius 12px, padding 7px 10px, Playfair 12px */}
                  <div
                    className="flex items-center justify-between pt-3"
                    style={{ borderTop: "1px solid #E2E8F0" }}
                  >
                    <span
                      className="text-white text-xs"
                      style={{
                        background: badge.bg,
                        borderRadius: 12,
                        padding: "7px 10px",
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      {badge.label}
                    </span>
                    <span
                      className="text-3xl font-bold text-[#0F172A]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.price}
                    </span>
                  </div>

                  {/* Book button — Figma: border 1px #CFB9A3, border-radius 12px, padding 16px 32px */}
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full transition-colors hover:bg-[#FCF2E9]"
                    style={{
                      border: "1px solid #CFB9A3",
                      borderRadius: 12,
                      padding: "16px 32px",
                    }}
                  >
                    <span
                      className="text-base font-bold"
                      style={{
                        color: "#CFB9A3",
                        fontFamily: "Cambria, Georgia, serif",
                      }}
                    >
                      {bookLabel}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CFB9A3"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArrangementsGrid;
