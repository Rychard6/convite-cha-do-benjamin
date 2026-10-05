import type { Metadata, Viewport } from "next";
import { Dancing_Script, Quicksand } from "next/font/google";
import "./globals.css";
import { eventConfig } from "@/config/event";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: eventConfig.title,
  description: `${eventConfig.invitationMessage} ${eventConfig.date} às ${eventConfig.time}.`,
  openGraph: {
    title: eventConfig.title,
    description: eventConfig.invitationMessage,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F8F7F3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dancingScript.variable} ${quicksand.variable}`}>
      <body className="font-sans text-brown-dark antialiased">
        <div id="app-root">{children}</div>
      </body>
    </html>
  );
}
