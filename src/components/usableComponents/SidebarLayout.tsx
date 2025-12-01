"use client";

/* SidebarLayout.tsx */
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
// Ensure you have imported sidebar.css in your layout or here
// import "./sidebar.css";

export default function Sidebar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Active state logic
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem("site-theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        // fallback to system preference
        const prefersLight =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: light)").matches;
        const init = prefersLight ? "light" : "dark";
        setTheme(init);
        document.documentElement.setAttribute("data-theme", init);
      }
    } catch (e) {
      // ignore
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }, []);

  // toggle handler
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("site-theme", next);
    } catch {
      /* ignore */
    }
  };

  // close mobile menu on route change (optional safety)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ---------------- DESKTOP SIDEBAR ---------------- */}
      <aside
        className="sidebar desktop-sidebar"
        role="navigation"
        aria-label="Sidebar"
      >
        <div className="sidebar-header">
          <img src="/images/logo.jpg" alt="profile" className="avatar" />
          <div>
            <h2 className="name">Bhavya Rathore</h2>
            <p className="role">MERN Developer</p>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          <Link
            className={`nav-item ${isActive("/") ? "active" : ""}`}
            href="/"
          >
            <span className="nav-icon" aria-hidden>
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

          <Link
            className={`nav-item ${isActive("/projects") ? "active" : ""}`}
            href="/projects"
          >
            <span className="nav-icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4H20V20H4V4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            Projects
          </Link>

          <Link
            className={`nav-item ${isActive("/about") ? "active" : ""}`}
            href="/about"
          >
            <span className="nav-icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 21C4.8 17 8 14 12 14C16 14 19.2 17 20 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            About
          </Link>

          <Link
            className={`nav-item ${isActive("/contacts") ? "active" : ""}`}
            href="/contacts"
          >
            <span className="nav-icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4H20V14H4V4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 14L12 20L20 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            Contact
          </Link>
        </nav>

        <div className="sidebar-social" aria-label="Social links">
          <p className="social-title">Social</p>

          <Link
            className="social-link mobile-link"
            href="https://www.instagram.com/bhv.yeahh?igsh=Z3N4M293dDRtczU0"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </Link>

          <Link
            className="social-link mobile-link"
            href="https://leetcode.com/u/bhvyeah/"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.151a1.378 1.378 0 0 0-.151-1.94l-3.501-2.831c-.87-.703-1.92-1.077-3.006-1.077-1.107 0-2.181.39-3.045 1.11l-3.792 3.166c-.244.204-.457.436-.636.691-.18.254-.316.529-.408.823a3.67 3.67 0 0 0-.053 2.103c.15.53.42 1.01.78 1.41l4.276 4.193c.34.333.74.566 1.17.683.43.117.88.136 1.32.056.44-.08.85-.26 1.2-.53l2.396-2.392c1.08-1.08 1.08-2.83 0-3.91l-2.396-2.392a1.378 1.378 0 0 0-1.951 1.955l2.396 2.392c.3.3.3.79 0 1.09-.3.3-.79.3-1.09 0l-2.396-2.392a3.021 3.021 0 0 1 0-4.27 3.021 3.021 0 0 1 4.205 0l2.396 2.392c1.08 1.08 1.08 2.83 0 3.91l-2.396 2.392c-.54.54-1.41.54-1.95 0-.54-.54-.54-1.41 0-1.95l2.396-2.392c.3-.3.3-.79 0-1.09-.3-.3-.79-.3-1.09 0l-2.396 2.392a3.021 3.021 0 0 1-4.205 0c-1.16-1.16-1.16-3.05 0-4.21l3.501-2.831c.3-.24.63-.42 1.00-.52.37-.10.76-.11 1.14-.02.38.09.73.27 1.04.52l4.88 3.95c.59.48 1.46.39 1.94-.15.48-.59.39-1.46-.15-1.94l-4.88-3.95c-.87-.70-1.92-1.08-3.01-1.08-1.09 0-2.14.37-3.01 1.08L6.23 8.11l-.02.02c-.3.3-.3.79 0 1.09.3.3.79.3 1.09 0l3.79-3.17c.54-.45 1.24-.65 1.93-.57.69.08 1.34.42 1.78.96l4.88 3.95c.3.24.63.42 1.00.52.37.10.76.11 1.14.02.38-.09.73-.27 1.04-.52l2.396-2.392c.54-.54.54-1.41 0-1.95-.54-.54-1.41-.54-1.95 0L21.55 6.23l-3.501-2.83c-1.22-1-2.91-.98-4.11.02L8.71 8.65c-.3.3-.79.3-1.09 0-.3-.3-.3-.79 0-1.09l5.23-5.23c.3-.3.79-.3 1.09 0 .3.3.3.79 0 1.09L12.55 4.81c-.3.3-.3.79 0 1.09.3.3.79.3 1.09 0l1.39-1.39c.3-.3.3-.79 0-1.09-.3-.3-.79-.3-1.09 0l-1.39 1.39c-.3.3-.79.3-1.09 0-.3-.3-.3-.79 0-1.09l1.39-1.39c.3-.3.3-.79 0-1.09-.3-.3-.79-.3-1.09 0L13.483 0z" />
            </svg>
            LeetCode
          </Link>

          <Link
            className="social-link mobile-link"
            href="https://linkedin.com/in/bhavya-rathore"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </Link>
        </div>

        <div className="sidebar-footer">
          <button
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            title="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☕"}
          </button>
        </div>
      </aside>

      {/* ---------------- MOBILE TOP NAV ---------------- */}
      <div className="mobile-topbar" role="banner">
        <img src="/images/logo.jpg" alt="profile" className="mobile-avatar" />

        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span aria-hidden></span>
          <span aria-hidden></span>
          <span aria-hidden></span>
        </button>
      </div>

      {/* ---------------- MOBILE DROPDOWN MENU ---------------- */}
      <div
        className={`mobile-menu ${open ? "show" : ""}`}
        role="menu"
        aria-hidden={!open}
      >
        <Link href="/" className="mobile-link" onClick={() => setOpen(false)}>
          <span className="nav-icon" aria-hidden>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          Homepage
        </Link>

        <Link
          href="/projects"
          className="mobile-link"
          onClick={() => setOpen(false)}
        >
          <span className="nav-icon" aria-hidden>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4H20V20H4V4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          Projects
        </Link>

        <Link
          href="/about"
          className="mobile-link"
          onClick={() => setOpen(false)}
        >
          <span className="nav-icon" aria-hidden>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M4 21C4.8 17 8 14 12 14C16 14 19.2 17 20 21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          About
        </Link>

        <Link
          href="/contacts"
          className="mobile-link"
          onClick={() => setOpen(false)}
        >
          <span className="nav-icon" aria-hidden>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4H20V14H4V4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M4 14L12 20L20 14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          Contact
        </Link>

        <div className="mobile-social">
          <p className="social-title">Social</p>

          <Link
            className="social-link mobile-link"
            href="https://www.instagram.com/bhv.yeahh?igsh=Z3N4M293dDRtczU0"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </Link>

          <Link
            className="social-link mobile-link"
            href="https://leetcode.com/u/bhvyeah/"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.151a1.378 1.378 0 0 0-.151-1.94l-3.501-2.831c-.87-.703-1.92-1.077-3.006-1.077-1.107 0-2.181.39-3.045 1.11l-3.792 3.166c-.244.204-.457.436-.636.691-.18.254-.316.529-.408.823a3.67 3.67 0 0 0-.053 2.103c.15.53.42 1.01.78 1.41l4.276 4.193c.34.333.74.566 1.17.683.43.117.88.136 1.32.056.44-.08.85-.26 1.2-.53l2.396-2.392c1.08-1.08 1.08-2.83 0-3.91l-2.396-2.392a1.378 1.378 0 0 0-1.951 1.955l2.396 2.392c.3.3.3.79 0 1.09-.3.3-.79.3-1.09 0l-2.396-2.392a3.021 3.021 0 0 1 0-4.27 3.021 3.021 0 0 1 4.205 0l2.396 2.392c1.08 1.08 1.08 2.83 0 3.91l-2.396 2.392c-.54.54-1.41.54-1.95 0-.54-.54-.54-1.41 0-1.95l2.396-2.392c.3-.3.3-.79 0-1.09-.3-.3-.79-.3-1.09 0l-2.396 2.392a3.021 3.021 0 0 1-4.205 0c-1.16-1.16-1.16-3.05 0-4.21l3.501-2.831c.3-.24.63-.42 1.00-.52.37-.10.76-.11 1.14-.02.38.09.73.27 1.04.52l4.88 3.95c.59.48 1.46.39 1.94-.15.48-.59.39-1.46-.15-1.94l-4.88-3.95c-.87-.70-1.92-1.08-3.01-1.08-1.09 0-2.14.37-3.01 1.08L6.23 8.11l-.02.02c-.3.3-.3.79 0 1.09.3.3.79.3 1.09 0l3.79-3.17c.54-.45 1.24-.65 1.93-.57.69.08 1.34.42 1.78.96l4.88 3.95c.3.24.63.42 1.00.52.37.10.76.11 1.14.02.38-.09.73-.27 1.04-.52l2.396-2.392c.54-.54.54-1.41 0-1.95-.54-.54-1.41-.54-1.95 0L21.55 6.23l-3.501-2.83c-1.22-1-2.91-.98-4.11.02L8.71 8.65c-.3.3-.79.3-1.09 0-.3-.3-.3-.79 0-1.09l5.23-5.23c.3-.3.79-.3 1.09 0 .3.3.3.79 0 1.09L12.55 4.81c-.3.3-.3.79 0 1.09.3.3.79.3 1.09 0l1.39-1.39c.3-.3.3-.79 0-1.09-.3-.3-.79-.3-1.09 0l-1.39 1.39c-.3.3-.79.3-1.09 0-.3-.3-.3-.79 0-1.09l1.39-1.39c.3-.3.3-.79 0-1.09-.3-.3-.79-.3-1.09 0L13.483 0z" />
            </svg>
            LeetCode
          </Link>

          <Link
            className="social-link mobile-link"
            href="https://linkedin.com/in/bhavya-rathore"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </Link>

          {/* Added Mobile Theme Toggle explicitly since it's common to want it in the mobile menu */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            style={{ marginLeft: "18px", marginTop: "10px" }}
          >
            {theme === "dark" ? "Dark 🌙" : "Light ☕"}
          </button>
        </div>
      </div>
    </>
  );
}
