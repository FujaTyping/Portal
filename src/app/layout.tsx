import type { Metadata } from "next";
import type { Viewport } from "next";
import { Big_Shoulders_Display } from "next/font/google";
import "./globals.css";

const BSD = Big_Shoulders_Display({
  subsets: ['latin'],
})

const openGraphImage = { images: ['https://portal.siraphop.me/assets/media/Banner.png'] }

export const metadata: Metadata = {
  title: "Siraphop ✦ Portal",
  description: "Follow all my social media profiles in one place",
  keywords: "FujaTyping, Siraphop, Siraphop Sukchu, fujatyping, siraphop, siraphop sukchu",
  openGraph: {
    ...openGraphImage,
    title: "Siraphop ✦ Portal",
    description: 'Follow all my social media profiles in one place',
    type: "website",
    url: "https://portal.siraphop.me/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b90000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BSD.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
