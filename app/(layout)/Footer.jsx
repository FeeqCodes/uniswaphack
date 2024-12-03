import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    protocol: {
      title: "Protocol",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Terms", href: "/terms" },
      ],
    },
    developers: {
      title: "Developers",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "GitHub", href: "https://github.com" },
        { name: "Audit Reports", href: "/audits" },
        { name: "Bug Bounty", href: "/bounty" },
      ],
    },
    community: {
      title: "Community",
      links: [
        { name: "Discord", href: "https://discord.gg" },
        { name: "Twitter", href: "https://twitter.com" },
        { name: "Telegram", href: "https://telegram.org" },
        { name: "Forum", href: "/forum" },
      ],
    },
  };

  return (
    <footer className="bg-[#1F211C] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#644881] to-[#291240]" />
              <span className="text-xl font-bold text-white">AquaVault</span>
            </div>
            <p className="text-gray-400 pr-8">
              Secure and efficient token launches powered by Uniswap V4
            </p>
            <div className="flex space-x-4">
              {Object.values(footerLinks.community.links).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-lg bg-[#291240] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#644881] transition-all"
                >
                  {link.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex justify-between items-center">
          <p className="text-gray-400">
            © 2024 AquaVault. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
