import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
 
export const metadata: Metadata = {
  title: "Ansh Narula",
  description: "JavaScript, TypeScript, C++, Java proficient full-stack engineer integrating AWS, seeking innovative projects and collaborative growth.",
};

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={`${nunito_sans.className} bg-[#0f172a] max-w-[80rem] mx-auto overflow-x-hidden`}>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {children}
      </body>
      <GoogleAnalytics gaId="G-JRL5Y4FK9N" />
    </html>
  );
}
