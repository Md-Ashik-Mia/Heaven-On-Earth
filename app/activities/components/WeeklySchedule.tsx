"use client";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

const activities = [
  {
    name: "Morning Flow Yoga",
    time: "8:00 AM - 9:00 AM",
    capacity: "12 people",
    location: "Movement Studio",
    duration: "60 minutes",
    price: "€40",
    image: "/images/activities/weeklyschedule/img1.png",
  },
  {
    name: "Transformational Breathwork",
    time: "8:00 AM - 9:00 AM",
    capacity: "12 people",
    location: "Movement Studio",
    duration: "60 minutes",
    price: "€40",
    image: "/images/activities/weeklyschedule/img2.png",
  },
  {
    name: "Guided Meditation",
    time: "8:00 AM - 9:00 AM",
    capacity: "12 people",
    location: "Movement Studio",
    duration: "60 minutes",
    price: "€40",
    image: "/images/activities/weeklyschedule/img3.png",
  },
  {
    name: "Restorative Yoga",
    time: "8:00 AM - 9:00 AM",
    capacity: "12 people",
    location: "Movement Studio",
    duration: "60 minutes",
    price: "€40",
    image: "/images/activities/weeklyschedule/img4.png",
  },
  {
    name: "Sound Healing Circle",
    time: "8:00 AM - 9:00 AM",
    capacity: "12 people",
    location: "Movement Studio",
    duration: "60 minutes",
    price: "€40",
    image: "/images/activities/weeklyschedule/img5.png",
  },
  {
    name: "Mindfulness Workshop",
    time: "8:00 AM - 9:00 AM",
    capacity: "12 people",
    location: "Movement Studio",
    duration: "60 minutes",
    price: "€40",
    image: "/images/activities/weeklyschedule/img6.png",
  },
];

const WeeklySchedule = () => {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "96px 128px",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: 48,
          fontWeight: 700,
          color: "#0F172A",
          textAlign: "center",
          marginBottom: 56,
          lineHeight: "140%",
        }}
      >
        This Week&apos;s Schedule
      </h2>

      {/* 3×2 Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
        }}
      >
        {activities.map((activity, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 16,
              background: "#FFFFFF",
              boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)",
              overflow: "hidden",
              alignSelf: "stretch",
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 283,
                flexShrink: 0,
              }}
            >
              <Image
                src={activity.image}
                alt={activity.name}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "16px 16px 0 0",
                }}
              />
            </div>

            {/* Card Body */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: "24px 24px 32px 24px",
                flex: 1,
              }}
            >
              {/* Name */}
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#0F172A",
                  lineHeight: "150%",
                  margin: 0,
                }}
              >
                {activity.name}
              </h3>

              {/* Meta rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {/* Time */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      background: "rgba(255, 107, 74, 0.10)",
                      padding: 4,
                      flexShrink: 0,
                    }}
                  >
                    <AiOutlineClockCircle size={16} color="#8B7355" />
                  </div>
                  <span
                    style={{
                      fontFamily: "Cambria, Georgia, serif",
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#475569",
                      lineHeight: "150%",
                    }}
                  >
                    {activity.time}
                  </span>
                </div>

                {/* People */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      background: "rgba(255, 107, 74, 0.10)",
                      padding: 4,
                      flexShrink: 0,
                    }}
                  >
                    <LuUsers size={16} color="#8B7355" />
                  </div>
                  <span
                    style={{
                      fontFamily: "Cambria, Georgia, serif",
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#475569",
                      lineHeight: "150%",
                    }}
                  >
                    {activity.capacity}
                  </span>
                </div>

                {/* Location */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      background: "rgba(255, 107, 74, 0.10)",
                      padding: 4,
                      flexShrink: 0,
                    }}
                  >
                    <IoLocationOutline size={16} color="#8B7355" />
                  </div>
                  <span
                    style={{
                      fontFamily: "Cambria, Georgia, serif",
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#475569",
                      lineHeight: "150%",
                    }}
                  >
                    {activity.location}
                  </span>
                </div>
              </div>

              {/* Spacer */}
              <div style={{ flex: 1 }} />

              {/* Bottom row: duration + price */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "Cambria, Georgia, serif",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#6B5D54",
                    lineHeight: "150%",
                  }}
                >
                  {activity.duration}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#6B5D54",
                    lineHeight: "150%",
                    textAlign: "right",
                  }}
                >
                  {activity.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklySchedule;
