"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Technology", link: "/technology" },
  { name: "Products", link: "/products" },
  { name: "Case Studies", link: "/case-studies" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        <Link
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1"
        >
          <span className="text-xl font-bold text-white tracking-[0.15em] uppercase">
            AIRZEP
          </span>
        </Link>
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center space-x-2">
          <NavbarButton href="/contact" variant="dark">
            Request Demo
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link
            href="/"
            className="relative z-20 flex items-center space-x-2 px-2 py-1"
          >
            <span className="text-xl font-bold text-white tracking-[0.15em] uppercase">
              AIRZEP
            </span>
          </Link>
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              className="relative w-full text-white/70 hover:text-white dark:text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton href="/contact" variant="dark" className="w-full">
            Request Demo
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
