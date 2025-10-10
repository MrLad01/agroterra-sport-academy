"use client";
import Navbar from "./Navbar";
import { SidebarComponent } from "./Sidebar";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import Footer from "./Footer";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {

    
    // const themee = ThemeProvider

  return (
    <ThemeProvider>
        <div >
        <Navbar />
        {children}
        <SidebarComponent />
            {/* Footer */}
        <Footer />
        </div>
    </ThemeProvider>
  );
}