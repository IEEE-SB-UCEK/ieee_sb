"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const locationQrCodeUrl =
  "https://ebvuhhzfwxeogebeajby.supabase.co/storage/v1/object/sign/ieee%20website%20files/Reveal_location/location_qr.jpg?token=eyJraWQiOiIyMTYzMGRkNS05NWQxLTQ4ZmQtYWVjYi05OTI4ZTI1MTU2NWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpZWVlIHdlYnNpdGUgZmlsZXMvUmV2ZWFsX2xvY2F0aW9uL2xvY2F0aW9uX3FyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTExODA4NDcsImV4cCI6NjU2ODMxMTY4NDd9.0bWdXR1cZZ3i_DaXT5KEj28WA-pSvuQCkPJutVYc9R_f8WabNicVfVPB0EYbarPkoissSTgDbcXIgfzPd0fPyw";

const contactDetails = [
  { label: "Email", value: "ieeeucek@gmail.com" },
  { label: "Email", value: "ucekprincipal@gmail.com" },
  { label: "Phone", value: "Ph: +91 471 2308874" },
  { label: "Location", value: "University College of Engineering, Kariavattom" },

];

export default function ContactPage() {
  const [isLocationQrOpen, setIsLocationQrOpen] = useState(false);

  useEffect(() => {
    if (!isLocationQrOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLocationQrOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLocationQrOpen]);

  return (
    <main className="min-h-screen bg-[#f4f6fb] text-slate-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.35fr]"
        >
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-ieee-blue/20 bg-ieee-blue/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ieee-blue"
            >
              Contact Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Find us at <span className="text-ieee-blue">UCEK</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-xl text-base leading-8 text-slate-600 md:text-lg"
            >
              We are part of engineering ecosystem at University College of Engineering, Kariavattom, and we love connecting with students, collaborators, and innovation partners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {contactDetails.map((item) => (
                <div key={`${item.label}-${item.value}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  <p className="mt-3 break-words text-sm font-medium text-slate-800">{item.value}</p>
                  {item.label === "Location" && (
                    <button
                      type="button"
                      onClick={() => setIsLocationQrOpen(true)}
                      className="mt-4 rounded-full border border-white/70 bg-ieee-blue/90 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-ieee-blue/20 backdrop-blur-md transition hover:bg-ieee-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ieee-blue focus-visible:ring-offset-2"
                    >
                      Reveal location
                    </button>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
          >
            <div
              className="relative h-[560px] overflow-hidden rounded-[1.5rem] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://ebvuhhzfwxeogebeajby.supabase.co/storage/v1/object/sign/ieee%20website%20files/Contact_section/UCEK.jfif?token=eyJraWQiOiIyMTYzMGRkNS05NWQxLTQ4ZmQtYWVjYi05OTI4ZTI1MTU2NWQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJpZWVlIHdlYnNpdGUgZmlsZXMvQ29udGFjdF9zZWN0aW9uL1VDRUsuamZpZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTExNDcxNjEsImV4cCI6NjU2ODMwODMxNjF9.vQrDAYfuMKgK8i22M_mI5XnLuHj-G-yiQYDjIbq3dK2a0Xt-FH1DoHPnXpOH17cRJQVGMISCeTj0Wl89oYgAKg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-transparent" />

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute left-6 top-6 rounded-2xl border border-white/25 bg-slate-950/50 px-5 py-3 backdrop-blur-md"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70">Campus</p>
                <p className="mt-2 text-3xl font-black tracking-tight text-white">UCEK</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              >
                <div className="max-w-md rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">Location</p>
                  <h2 className="mt-3 text-2xl font-bold text-white">University College of Engineering, Kariavattom</h2>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {isLocationQrOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsLocationQrOpen(false);
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-qr-title"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-sm rounded-[2rem] border border-white/50 bg-white/25 p-6 text-center shadow-[0_30px_100px_rgba(15,23,42,0.35)] backdrop-blur-2xl"
          >
            <button
              type="button"
              onClick={() => setIsLocationQrOpen(false)}
              aria-label="Close location QR code"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/30 text-lg text-slate-700 backdrop-blur-md transition hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ieee-blue"
            >
              &times;
            </button>
            <h2 id="location-qr-title" className="pr-8 text-lg font-bold text-slate-900">
              Reveal location
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Scan the QR code to open the campus location.
            </p>
            <div className="mx-auto mt-5 flex aspect-square w-full max-w-[240px] items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/70 p-4 shadow-inner">
              {locationQrCodeUrl ? (
                <img
                  src={locationQrCodeUrl}
                  alt="QR code for the UCEK location"
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-sm font-medium text-slate-500">
                  QR code image will appear here
                </span>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
