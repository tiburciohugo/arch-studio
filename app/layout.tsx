import "./globals.css";
import { League_Spartan } from "next/font/google";

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
      <body className={league.className}>{children}</body>
    </html>
  );
}
