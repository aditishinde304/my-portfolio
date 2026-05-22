import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Shantell_Sans } from "next/font/google";
import "./globals.css";

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-shantell",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Aditi Shinde – Product Designer",
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
      className={`${GeistSans.variable} ${GeistMono.variable} ${shantellSans.variable} h-full antialiased`}
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
