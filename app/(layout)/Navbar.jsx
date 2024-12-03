import React from "react";
import Link from "next/link";
import Image from "next/image";
import Buttons from "../components/Shared/Buttons";

const Navbar = () => {
  const navItems = [
    {
      title: "Products",
      items: ["ILO Pools", "Token Launch", "Analytics"],
    },
    {
      title: "Business",
      items: ["Partners", "Enterprise", "Success Stories"],
    },
    {
      title: "Developers",
      items: ["Documentation", "GitHub", "Audit Reports"],
    },
    {
      title: "Help",
      items: ["Support", "FAQ", "Security"],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1F211C]/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#644881] to-[#291240]" />
            <span className="text-xl font-bold text-white">AquaVault</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-300 hover:text-white flex items-center gap-2 py-2">
                  {item.title}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-48 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-[#1F211C] border border-gray-800 shadow-xl">
                  <div className="p-2">
                    {item.items.map((subItem, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#644881]/20 rounded-lg"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Connect Wallet
            </button>
            <Link href="/create-ilo">
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#644881] to-[#291240] text-white rounded-xl hover:opacity-90 transition-all">
                Create ILO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
