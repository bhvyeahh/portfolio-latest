import PageTransition from "../components/PageTransition";
import Sidebar from "../components/usableComponents/SidebarLayout";

import "./globals.css";
import "../styles/SideBar.css";
import "../styles/Home.css";

import { Inter, Urbanist } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Bhavya Rathore — Portfolio",
  description: "Modern Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable}`}>
      <body>
        <div className="layout-container">
          {/* SIDEBAR (Client Component for Active Tab) */}
          <Sidebar />

          <div className="content-wrapper">
            <PageTransition>
              <main className="main-content">{children}</main>
            </PageTransition>
          </div>
        </div>
      </body>
    </html>
  );
}
