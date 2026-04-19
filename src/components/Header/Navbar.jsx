"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiShoppingBag, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <FiHome /> },
    { name: "About", href: "/about", icon: <FiUser /> },
    { name: "Products", href: "/products", icon: <FiShoppingBag /> },
  ];

  const links = (
    <>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              pathname === link.href
                ? "bg-primary text-primary-content font-semibold shadow-md"
                : "hover:bg-base-200"
            }`}
          >
            <span className="text-lg">{link.icon}</span>
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4">
      <div className="navbar bg-base-100/80 backdrop-blur-md border border-base-content/5 rounded-2xl shadow-lg max-w-7xl mx-auto px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-4"
            >
              <FiMenu size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-4 w-52 p-4 shadow-2xl border border-base-content/5 space-y-2"
            >
              {links}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-content font-bold text-xl group-hover:rotate-12 transition-transform">
              M
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block italic">
              Mehrab<span className="text-primary">.</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-2">{links}</ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-primary rounded-xl px-6 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
