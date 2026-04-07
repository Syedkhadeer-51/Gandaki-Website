"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/animals", label: "Our Animals" },
  { href: "/rescue", label: "Rescue & Care" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/blog", label: "Stories" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-5 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.25 p-1 cursor-pointer md:hidden"
          >
            {open ? (
              <X size={20} className="text-gray-800" />
            ) : (
              <>
                <span className="block w-5 h-0.5 bg-gray-800" />
                <span className="block w-5 h-0.5 bg-gray-800" />
                <span className="block w-5 h-0.5 bg-gray-800" />
              </>
            )}
          </button>
          <div className="flex items-center gap-3">
            <Image
              src="/Gandaki_Logo.png"        
              alt="Gandaki Animal Rescue Farm Logo"
              width={50}            
              height={50}
            />
            <Link href="/" className="leading-tight flex flex-col">
              <span className="font-serif text-xl font-bold text-gray-900 tracking-tight">
                GANDAKI
              </span>
              <span className="block text-[9px] tracking-[3px] uppercase text-gray-400">
                animal rescue farm
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-900 hover:text-gray-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex gap-2">
          <Link
            href="/visit"
            className="px-7 h-12 flex items-center text-[11px] font-bold tracking-[1.5px] uppercase bg-emerald-600 text-white hover:bg-emerald-700 transition-colors rounded"
          >
            Visit Us
          </Link>
          <Link
            href="/donate"
            className="px-7 h-12 flex items-center text-[11px] font-bold tracking-[1.5px] uppercase bg-emerald-800 text-white hover:bg-emerald-900 transition-colors rounded"
          >
            Donate
          </Link>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-bold tracking-widest uppercase text-gray-800 hover:text-gray-500"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2">
            <Link
              href="/visit"
              onClick={() => setOpen(false)}
              className="flex-1 text-center py-3 bg-emerald-600 text-white text-xs font-bold tracking-widest uppercase rounded"
            >
              Visit Us
            </Link>
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="flex-1 text-center py-3 bg-emerald-800 text-white text-xs font-bold tracking-widest uppercase rounded"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
