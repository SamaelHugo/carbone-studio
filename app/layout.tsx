import type { Metadata } from "next";
import { Bebas_Neue, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CARBONE — Барбершоп и тату-студия",
  description:
    "Премиальный барбершоп и тату-студия в Москве. Искусство на коже и в деталях.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${bebas.variable} ${manrope.variable} ${playfair.variable} font-manrope`}
      >
        <LenisProvider>
          <CustomCursor />
          <Preloader>
            <Navbar />
            <PageTransition>
              {children}
            </PageTransition>
            <Footer />
          </Preloader>
        </LenisProvider>
      </body>
    </html>
  );
}
