"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const contactDetails = [
  {
    label: "Email",
    value: "ieee@example.com",
    href: "mailto:ieee@example.com",
    description: "For general questions and collaborations",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6l8.5 6.25L20.5 6" />
      </svg>
    ),
  },
  {
    label: "Visit",
    value: "UCEK Campus",
    href: "https://maps.google.com/?q=University+College+of+Engineering+Kariavattom",
    description: "Find us at University College of Engineering, Kariavattom",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.05 7-12a7 7 0 10-14 0c0 5.95 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.25" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@ieee_sbucek",
    href: "https://instagram.com",
    description: "Follow the latest from our community",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ieee-white px-6 pb-24 pt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 border-b border-ieee-black/10 pb-10"
        >
          <Link href="/" className="mb-8 inline-flex items-center text-sm font-semibold text-ieee-blue transition-colors hover:text-ieee-black">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ieee-blue">Start a conversation</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-ieee-black md:text-6xl">
                Let&apos;s build what&apos;s next, <span className="text-ieee-blue">together.</span>
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-ieee-black/65 lg:justify-self-end lg:text-lg">
              Have an idea, a question, or a project worth sharing? Reach out to the IEEE Student Branch at UCEK. We&apos;re always glad to hear from curious minds.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-ieee-blue p-8 text-ieee-white shadow-2xl shadow-ieee-blue/20 md:p-10 lg:p-12"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-ieee-white/70">Contact desk</p>
            <h2 className="mb-10 text-3xl font-bold leading-tight md:text-4xl">We&apos;re listening.</h2>
            <div className="space-y-7">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex gap-4"
                >
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-ieee-white/30 text-ieee-white transition-colors group-hover:bg-ieee-white group-hover:text-ieee-blue">
                    {detail.icon}
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-ieee-white/60">{detail.label}</span>
                    <span className="mt-1 block font-semibold">{detail.value}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ieee-white/70">{detail.description}</span>
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-14 border-t border-ieee-white/20 pt-7 text-sm leading-relaxed text-ieee-white/70">
              We usually respond within a couple of working days. For event-specific questions, include the event name in your message.
            </div>
          </motion.aside>

          <motion.section
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative min-h-[520px] overflow-hidden bg-ieee-black shadow-2xl"
          >
            <Image
              src="/bg.jpg"
              alt="IEEE Student Branch members together"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover opacity-75 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ieee-black via-ieee-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-ieee-white md:p-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-ieee-white/65">Join the community</p>
              <h2 className="max-w-lg text-3xl font-bold leading-tight md:text-4xl">
                Ideas grow faster when people build together.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ieee-white/75 md:text-base">
                Connect with the people behind the workshops, projects, and initiatives at IEEE SB UCEK.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:ieee@example.com"
                  className="inline-flex items-center bg-ieee-blue px-5 py-3 text-sm font-bold text-ieee-white transition-colors hover:bg-ieee-white hover:text-ieee-black"
                >
                  Email the branch
                  <svg className="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </a>
                <Link
                  href="/execom"
                  className="inline-flex items-center border border-ieee-white/50 px-5 py-3 text-sm font-bold text-ieee-white transition-colors hover:bg-ieee-white hover:text-ieee-black"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
