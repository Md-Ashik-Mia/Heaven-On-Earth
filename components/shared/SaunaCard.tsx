"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { IoFolderOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

interface SaunaCardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  capacity: string;
  duration: string;
  paymentType: string;
  price: number;
  bookingLink: string;
}

export default function SaunaCard({
  title,
  description,
  image,
  rating,
  capacity,
  duration,
  paymentType,
  price,
  bookingLink,
}: SaunaCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Section with Rating Badge */}
      <div className="relative w-full h-[320px]">
        <Image src={image} alt={title} fill className="object-cover" />
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FDC700"
            />
          </svg>
          <span
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-lg font-bold text-[#0F172A]"
          >
            {rating}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        {/* Title */}
        <h3
          style={{ fontFamily: "var(--font-playfair)" }}
          className="text-[32px] font-bold text-[#0F172A] mb-3"
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-[#475569] text-base mb-6"
          style={{ fontFamily: "Cambria, Georgia, serif" }}
        >
          {description}
        </p>

        {/* Features List */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Capacity */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FF6B4A1A] bg-opacity-10 flex items-center justify-center shrink-0">
              <LuUsers className="w-5 h-5 text-[#CFB9A3]" strokeWidth={1.5} />
            </div>
            <span
              className="text-[#475569] text-base"
              style={{ fontFamily: "Cambria, Georgia, serif" }}
            >
              {capacity}
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FF6B4A1A] bg-opacity-10 flex items-center justify-center shrink-0">
              <FiClock className="w-5 h-5 text-[#CFB9A3]" strokeWidth={1.5} />
            </div>
            <span
              className="text-[#475569] text-base"
              style={{ fontFamily: "Cambria, Georgia, serif" }}
            >
              {duration}
            </span>
          </div>

          {/* Payment */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FF6B4A1A] bg-opacity-10 flex items-center justify-center shrink-0">
              <IoFolderOutline
                className="w-5 h-5 text-[#CFB9A3]"
                strokeWidth={1.5}
              />
            </div>
            <span
              className="text-[#475569] text-base"
              style={{ fontFamily: "Cambria, Georgia, serif" }}
            >
              {paymentType}
            </span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
            <span
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-[36px] font-bold text-[#0F172A]"
            >
              ${price}
            </span>
          </div>

          <Link
            href={bookingLink}
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#CFB9A3] text-[#0F172A] font-bold rounded-sm hover:bg-[#CFB9A3] hover:bg-opacity-10 transition-colors"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book Sauna
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
