import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Shantell_Sans, Fraunces, Caveat, Domine, Space_Grotesk, Petrona } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import NavBar from "./components/NavBar";

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-shantell",
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Heading face for the experimental hero (matches the Figma direction).
const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-petrona",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditi Shinde, Product Designer",
  description:
    "Product designer building education products at Superr. Focused on experiences that feel simple, playful, and human.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${shantellSans.variable} ${fraunces.variable} ${caveat.variable} ${domine.variable} ${spaceGrotesk.variable} ${petrona.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else if (theme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
