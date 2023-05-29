'use client';
import './globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { SessionProvider } from "next-auth/react";
import Head from "./head"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>

        <SessionProvider>

          <Navbar />
          {children}
          <Footer />
          
        </SessionProvider>

      </body>
    </html>
  )
} 