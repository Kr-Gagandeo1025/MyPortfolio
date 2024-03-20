import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gagandeo | Portfolio",
  description: "Technical portfolio of Kumar Gagandeo an IT Undergrad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  >{
      children
      }</body>
    </html>
  );
}
