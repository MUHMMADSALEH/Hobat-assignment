import type { Metadata } from "next";
import {Inter,Calistoga,Poppins} from 'next/font/google'
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter=Inter({subsets:["latin"],variable:"--font-sans",weight:["300"]})
const calistoga=Calistoga({subsets:["latin"],variable:"--font-serif",weight:["400"]})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Habot landing Apge",
  description: "Craeted by Saleh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={twMerge(inter.variable,calistoga.variable,"bg-white antialiased font-sans")}
      >
        {children}
      </body>
    </html>
  );
}
