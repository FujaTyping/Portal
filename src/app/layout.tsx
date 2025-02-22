import type { Metadata } from "next";
import { Big_Shoulders_Display } from "next/font/google";
import "./globals.css";

const BSD = Big_Shoulders_Display({
  subsets: ['latin'],
})

const openGraphImage = { images: ['https://portal.siraphop.me/assets/media/Banner.png'] }

export const metadata: Metadata = {
  title: "Siraphop ✦ Portal",
  description: "Follow all my social media profiles in one place",
  themeColor: "#b90000",
  openGraph: {
    ...openGraphImage,
    title: "Siraphop ✦ Portal",
    description: 'Follow all my social media profiles in one place',
  }
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
