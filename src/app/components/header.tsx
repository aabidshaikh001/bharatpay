'use client';
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/Benifits", label: "Account Benefit" },
      { href: "/Distribution", label: "Distribution" },
      { href: "#contact", label: "Contact" },
      { href: "/creditcard", label: "Credit Card" },
    ],
    []
  );

  const isActive = (path: string) =>
    pathname === path
      ? "text-grey-600 font-bold"
      : "text-grey-800 hover:text-grey-600";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-md fixed top-0 right-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            className="w-auto h-10"
            height={40}
            width={160}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-2">
          <a href="https://login.bharatpay.agency/register" className="bg-orange-500 text-white py-2 px-4 rounded-full">
            Register
          </a>
          <a href="https://login.bharatpay.agency/login" className="bg-green-600 text-white py-2 px-4 rounded-full">
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IconX className="w-7 h-7" />
          ) : (
            <IconMenu2 className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 w-64 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-out`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button onClick={toggleMenu} aria-label="Close menu">
            <IconX className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col p-4 space-y-2 border-t">
          <a href="https://login.bharatpay.agency/register"
            className="bg-orange-500 text-white py-2 px-4 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </a>
          <a href="https://login.bharatpay.agency/login"
            className="bg-green-600 text-white py-2 px-4 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </a>
        </div>
      </aside>

      {/* Overlay for Sidebar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}

export default Header;
