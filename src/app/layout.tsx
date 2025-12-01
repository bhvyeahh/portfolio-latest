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
      <body style={{ backgroundColor: '#050505', position: 'relative' }}> 
        {/* Set a dark background on body so white ribbons show up */}
        
        {/* === LAYER 1: RIBBONS (Fixed Background) === */}
        <div style={{
          position: 'fixed',
          inset: 0,           // Covers entire screen
          zIndex: 0,          // Layer 0
          pointerEvents: 'none', // Lets clicks pass through
        }}>
        </div>

        {/* === LAYER 2: CONTENT (Sits on top) === */}
        {/* Important: layout-container must NOT have a solid background color in CSS */}
        <div className="layout-container" style={{ position: 'relative', zIndex: 1 }}>
          
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