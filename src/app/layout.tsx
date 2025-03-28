import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";

export const metadata: Metadata = {
  title: "Marbut",
  description: "placeholder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="my-font-family"
      >
         <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
