
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { GlobalProvider } from "@/app/context/globalContext";

export const metadata: Metadata = {
    title: "GymFuel",
    description: "Daily Calorie Intake Tracker"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <GlobalProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </GlobalProvider>
            </body>
        </html>
    );
}
