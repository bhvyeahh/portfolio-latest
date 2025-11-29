"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

/**
 * Client Sidebar component.
 * Uses usePathname() to determine which link is active and applies `active` class.
 * Keeps all original classes & icons so your CSS stays unchanged.
 */

export default function Sidebar() {
  const pathname = usePathname() || "/";

  // helper to check active (exact or prefix)
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <aside className="sidebar">
      {/* HEADER */}
      <div className="sidebar-header">
        <img src="/images/logo.jpg" alt="profile" className="avatar" />
        <div>
          <h2 className="name">Bhavya Rathore</h2>
          <p className="role">MERN Developer</p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-nav">
        <Link className={`nav-item ${isActive("/") ? "active" : ""}`} href="/">
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          Homepage
        </Link>

        <Link className={`nav-item ${isActive("/projects") ? "active" : ""}`} href="/projects">
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          Projects
        </Link>

        <Link className={`nav-item ${isActive("/about") ? "active" : ""}`} href="/about">
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"></circle>
              <path d="M4 21C4.8 17 8 14 12 14C16 14 19.2 17 20 21" stroke="currentColor" strokeWidth="1.5"></path>
            </svg>
          </span>
          About
        </Link>

        <Link className={`nav-item ${isActive("/contacts") ? "active" : ""}`} href="/contacts">
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4H20V14H4V4Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 14L12 20L20 14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          Contact
        </Link>
      </nav>

      {/* SOCIAL LINKS */}
      <div className="sidebar-social">
        <p className="social-title">Social</p>

        <a className="social-link" href="#" target="_blank" rel="noreferrer">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="14" height="14" rx="4" />
            <circle cx="10" cy="10" r="3" />
            <circle cx="15" cy="5" r="1" />
          </svg>
          Instagram
        </a>

        <a className="social-link" href="#" target="_blank" rel="noreferrer">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 19C13.7 19 18 12.8 18 7.5V7C18.8 6.4 19.5 5.6 20 4.7C19.2 5.1 18.3 5.3 17.4 5.4C18.3 4.8 19 4 19.3 3C18.4 3.6 17.4 4 16.3 4.2C15.5 3.3 14.3 2.8 13 2.8C10.5 2.8 8.5 4.9 8.5 7.4C8.5 7.7 8.6 8 8.6 8.3C5.3 8.1 2.4 6.4 0.7 3.8C0.3 4.5 0.1 5.3 0.1 6.1C0.1 7.6 0.9 9 2.2 9.8C1.5 9.8 0.7 9.6 0 9.2C0 11.4 1.5 13.3 3.4 13.7C2.9 13.9 2.2 14 1.6 14C1.2 14 0.8 14 0.4 13.9C1.2 15.7 2.9 17 5 17.1C3.5 18.3 1.6 19 0 19H6Z" />
          </svg>
          X (Twitter)
        </a>

        <a className="social-link" href="#" target="_blank" rel="noreferrer">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 8H7V20H4V8Z" />
            <circle cx="5.5" cy="4.5" r="1.5" />
            <path d="M10 8H13V10C13.5 9 15 8 16.5 8C19.5 8 20 10 20 12.8V20H17V13.5C17 12 16.9 10.7 15 10.7C13 10.7 13 12.3 13 13.5V20H10V8Z" />
          </svg>
          LinkedIn
        </a>
      </div>

      {/* FOOTER */}
      <div className="sidebar-footer">
        <span className="theme-icon">🌙</span>
      </div>
    </aside>
  );
}
