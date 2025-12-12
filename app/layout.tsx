import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savatto",
  description: "Savatto - Design & Software. Desenvolvendo sua marca junto com você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
