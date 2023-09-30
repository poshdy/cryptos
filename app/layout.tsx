import "./globals.css";
import { Poppins } from "next/font/google";
import Nav from "@/Components/Nav";
import { Metadata } from "next";
import { ThemeProvider } from "@/Components/Providers/theme-provider";
import Stats from "@/Components/Stats";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700", "900", "800"],
});

export const metadata: Metadata = {
  title: "Cryptos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${poppins.className}`}
      >
        <Nav />
        <Stats />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className={"relative duration-500 ease-in-out "}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
