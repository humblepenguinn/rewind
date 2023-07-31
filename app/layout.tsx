import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Box } from "@mui/material";
import NavBar from "@/app/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rewind",
  description: "A Youtube Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ backgroundColor: "#000" }}>
          <NavBar />
          {children}
        </Box>
      </body>
    </html>
  );
}
