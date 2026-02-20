"use client";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

const GetInTouch = () => {
  const { t } = useLanguage();
  return (
    <section
      className="w-full min-h-screen flex items-center overflow-hidden"
      style={{ background: "#f5f1ed" }}
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16 lg:py-24">
        {/* Left: image with blob clip-path */}
        <div
          className="relative w-full lg:flex-shrink-0 lg:w-[480px] h-[340px] sm:h-[440px] lg:h-[580px]"
          style={{
            clipPath:
              "path('M240,0 C340,0 420,70 420,180 C420,290 360,370 300,460 C240,550 120,590 50,540 C-20,490 0,360 0,240 C0,120 20,50 80,20 C130,0 180,0 240,0 Z')",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/home/getintouch/image1.png"
            alt="Get in touch"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: text */}
        <div className="flex flex-col gap-8 w-full lg:max-w-[605px] text-center lg:text-left">
          {/* Title */}
          <div className="flex flex-col gap-3">
            <h2
              style={{
                color: "#0F172A",
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "67.2px",
              }}
            >
              {t.getInTouch.title}
            </h2>
            {/* Decorative SVG underlines */}
            <div className="flex flex-col gap-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="347"
                height="17"
                viewBox="0 0 347 17"
                fill="none"
              >
                <path
                  d="M1 15.4787C13.5428 15.8463 26.0856 16.2138 69.2106 15.8518C112.336 15.4899 185.663 14.3873 235.498 12.3492C285.333 10.3111 309.453 7.37092 323.809 5.30499C338.164 3.23905 342.024 2.13647 346 1.00049"
                  stroke="#CFB9A3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="313"
                height="10"
                viewBox="0 0 313 10"
                fill="none"
              >
                <path
                  d="M1 9C6.1315 9 11.263 9 43.2523 8.90571C75.2415 8.81143 133.933 8.62286 182.93 7.48857C231.927 6.35429 269.451 4.28 289.744 3.02286C310.037 1.76571 311.961 1.38857 312 1"
                  stroke="#CFB9A3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Contact items */}
          <div className="flex flex-col gap-6">
            {t.getInTouch.contacts.map((item) => (
              <div key={item.label} className="flex flex-col gap-0">
                <p
                  style={{
                    color: "#0F172A",
                    fontFamily: "Cambria, Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "30px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    color: "#475569",
                    fontFamily: "Cambria, Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "30px",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
