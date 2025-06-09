/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import logo from "@/public/next.svg";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
//   const currentPath = usePathname();

//   const menuItems = [
//     { href: "/", label: "Home" },
//     {
//       href: "#",
//       label: "Products",
//       dropdown: true,
//       subItems: [
//         { href: "/products/seeds", label: "Seeds" },
//         { href: "/products/herbs", label: "Herbs" },
//       ],
//     },
//     {
//       href: "#",
//       label: "Quality & Certificates",
//       dropdown: true,
//       subItems: [
//         { href: "/quality", label: "Quality" },
//         { href: "/certificates", label: "Certificates" },
//       ],
//     },
//     { href: "/about", label: "About" },
//     { href: "/careers", label: "Careers" },
//     { href: "/contactus", label: "Contact Us", isButton: true },
//   ];

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   const handleDropdownHover = (label: string) => {
//     if (hoverTimeout) clearTimeout(hoverTimeout);
//     setActiveDropdown(label);
//   };

//   const handleDropdownLeave = () => {
//     const timeout = setTimeout(() => setActiveDropdown(null), 200);
//     setHoverTimeout(timeout);
//   };

//   useEffect(() => {
//     return () => {
//       if (hoverTimeout) clearTimeout(hoverTimeout);
//     };
//   }, [hoverTimeout]);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}

//           <Link href="/" className="flex-shrink-0">
//             <Image src={logo} alt="Logo" className="h-20 w-20 " priority />
//           </Link>
//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-4">
//             {menuItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() =>
//                   item.dropdown && handleDropdownHover(item.label)
//                 }
//                 onMouseLeave={handleDropdownLeave}
//               >
//                 {item.dropdown ? (
//                   <div className="relative">
//                     <Link
//                       href={item.href}
//                       className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
//                         currentPath === item.href
//                           ? "text-emerald-600"
//                           : "text-gray-700 hover:text-emerald-600"
//                       }`}
//                     >
//                       {item.label}
//                       <span className="text-xs transform transition-transform duration-200">
//                         {activeDropdown === item.label ? "▲" : "▼"}
//                       </span>
//                     </Link>

//                     {activeDropdown === item.label && (
//                       <div className="absolute left-0 top-full mt-1 w-48 origin-top-right rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
//                         {item.subItems?.map((subItem) => (
//                           <Link
//                             key={subItem.href}
//                             href={subItem.href}
//                             className={`block rounded-md px-4 py-2.5 text-sm ${
//                               currentPath === subItem.href
//                                 ? "bg-emerald-50 text-emerald-600"
//                                 : "text-gray-700 hover:bg-gray-50"
//                             }`}
//                           >
//                             {subItem.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className={`px-3 py-2 text-sm font-medium transition-colors ${
//                       currentPath === item.href
//                         ? "text-emerald-600"
//                         : `text-gray-700 ${
//                             item.isButton ? "" : "hover:text-emerald-600"
//                           }`
//                     } ${
//                       item.isButton &&
//                       "bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 ml-4"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 rounded-lg hover:bg-gray-50"
//             aria-label="Open menu"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   isMenuOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden fixed inset-0 z-50 bg-white">
//             <div className="flex h-16 items-center justify-between px-4 bg-white border-b">
//               <Link href="/" className="flex-shrink-0">
//                 <Image
//                   src={logo}
//                   alt="Logo"
//                   className="h-20 w-20"
//                   onClick={() => setIsMenuOpen(false)}
//                 />
//               </Link>
//               <button
//                 onClick={toggleMenu}
//                 className="p-2 text-gray-700 hover:text-emerald-600"
//               >
//                 ✕
//               </button>
//             </div>

//             <nav className="px-4 py-6 space-y-4 bg-white">
//               {menuItems
//                 .filter((item) => !item.isButton)
//                 .map((item) => (
//                   <div key={item.label} className="space-y-2">
//                     <div
//                       onClick={() =>
//                         item.dropdown &&
//                         setActiveDropdown(
//                           activeDropdown === item.label ? null : item.label
//                         )
//                       }
//                       className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
//                     >
//                       <Link
//                         href={item.href}
//                         className={`flex-1 text-base ${
//                           currentPath === item.href
//                             ? "text-emerald-600 font-semibold"
//                             : "text-gray-900"
//                         }`}
//                         onClick={(e) => {
//                           if (!item.dropdown) {
//                             setIsMenuOpen(false);
//                           } else {
//                             e.preventDefault();
//                           }
//                         }}
//                       >
//                         {item.label}
//                       </Link>
//                       {item.dropdown && (
//                         <span className="text-gray-500 text-sm">
//                           {activeDropdown === item.label ? "▲" : "▼"}
//                         </span>
//                       )}
//                     </div>

//                     {item.dropdown && activeDropdown === item.label && (
//                       <div className="ml-4 space-y-2 bg-gray-50 rounded-lg p-2">
//                         {item.subItems?.map((subItem) => (
//                           <Link
//                             key={subItem.href}
//                             href={subItem.href}
//                             className={`block p-3 text-sm rounded-lg ${
//                               currentPath === subItem.href
//                                 ? "bg-emerald-100 text-emerald-600"
//                                 : "text-gray-700 hover:bg-gray-100"
//                             }`}
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             {subItem.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//             </nav>

//             <div className="px-4 py-6 border-t border-gray-100 bg-white">
//               <Link
//                 href="/contactus"
//                 className="w-full inline-flex justify-center items-center px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
// ===================
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import logo from "@/public/next.svg";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
//   const currentPath = usePathname();

//   const menuItems = [
//     { href: "/", label: "Home" },
//     { href: "/Services", label: "Services" },
//     { href: "/About ", label: "About " },
//     { href: "/Courses", label: "Courses" },
//     { href: "/Contactus", label: "Contact Us", isButton: true },
//   ];

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   useEffect(() => {
//     return () => {
//       if (hoverTimeout) clearTimeout(hoverTimeout);
//     };
//   }, [hoverTimeout]);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image src={logo} alt="Logo" className="h-20 w-20" priority />
//           </Link>
//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-4">
//             {menuItems.map((item) => (
//               <div key={item.label} className="relative">
//                 <Link
//                   href={item.href}
//                   className={`px-3 py-2 text-sm font-medium transition-colors ${
//                     currentPath === item.href
//                       ? "text-emerald-600"
//                       : "text-gray-700 hover:text-emerald-600"
//                   } ${
//                     item.isButton &&
//                     "bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 ml-4"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               </div>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 rounded-lg hover:bg-gray-50"
//             aria-label="Open menu"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   isMenuOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden fixed inset-0 z-50 bg-white">
//             <div className="flex h-16 items-center justify-between px-4 bg-white border-b">
//               <Link href="/" className="flex-shrink-0">
//                 <Image
//                   src={logo}
//                   alt="Logo"
//                   className="h-20 w-20"
//                   onClick={() => setIsMenuOpen(false)}
//                 />
//               </Link>
//               <button
//                 onClick={toggleMenu}
//                 className="p-2 text-gray-700 hover:text-emerald-600"
//               >
//                 ✕
//               </button>
//             </div>

//             <nav className="px-4 py-6 space-y-4 bg-white">
//               {menuItems.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className={`block p-3 text-base rounded-lg ${
//                     currentPath === item.href
//                       ? "text-emerald-600 font-semibold"
//                       : "text-gray-900 hover:bg-gray-50"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>

//             <div className="px-4 py-6 border-t border-gray-100 bg-white">
//               <Link
//                 href="/contactus"
//                 className="w-full inline-flex justify-center items-center px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
// =======================
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/next.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#contactus", label: "Contact Us", isButton: true },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="Logo" className="h-20 w-20" priority />
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
                    "bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 ml-4"
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
            <div className="flex h-16 items-center justify-between px-4 bg-white border-b">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Logo"
                  className="h-20 w-20"
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
