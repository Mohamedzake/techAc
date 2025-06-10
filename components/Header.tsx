"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#internship", label: "Internship" },
    { href: "#contactus", label: "Contact Us", isButton: true },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="Logo" className="h-36 w-36" priority />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    currentPath === item.href
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  } ${
                    item.isButton &&
                    "bg-emerald-600 text-white hover:text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 ml-4"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 rounded-lg hover:bg-gray-50"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex h-20 items-center justify-between px-4 bg-white border-b">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Logo"
                  className="h-36 w-36"
                  onClick={() => setIsMenuOpen(false)}
                />
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-emerald-600"
              >
                ✕
              </button>
            </div>

            <nav className="px-4 py-6 space-y-4 bg-white">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block p-3 text-base rounded-lg ${
                    currentPath === item.href
                      ? "text-emerald-600 font-semibold"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 py-6 border-t border-gray-100 bg-white">
              <Link
                href="#contactus"
                className="w-full inline-flex justify-center items-center px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
