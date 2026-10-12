"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname?.startsWith("/execom/") && pathname !== "/execom";

  return (
    <>
      {!hideChrome && <Navbar />}
      <main className="flex-1 w-full">{children}</main>
      {!hideChrome && <Footer />}
    </>
  );
}
