import type { Metadata } from "next";
import { Alex_Brush } from "next/font/google";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

export const metadata: Metadata = {
  title: "Will You Be My Valentine? 💝",
  description: "A special invitation for Mani",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexBrush.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
