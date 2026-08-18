import { Poppins, Orbitron } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Skyron — Spatial Experience Studio",
  description:
    "Skyron sits at the intersection of intelligent technology, cinematic content, and environment design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${orbitron.variable} bg-[#08060f] font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
