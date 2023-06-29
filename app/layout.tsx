import Header from "@/components/UI/Header";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import Footer from "@/components/UI/Footer";

const league = League_Spartan({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Arch Studio</title>
        <link
          rel="icon"
          href="/favicon.png"
        />
      </head>
      <body className={league.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
