import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo2.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Info */}
        <div className="">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0 ">
            <Image src={logo} alt="Logo" className="h-14 w-44 " priority />
          </Link>
          {/* <h3 className="text-xl font-bold text-white mb-4">🚀 Techify</h3> */}
          <p className="text-xl">
            نصنع مطوري المستقبل بتعليم تقني متميز وتدريب مبني على مشاريع حقيقية
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Internships
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Techify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
