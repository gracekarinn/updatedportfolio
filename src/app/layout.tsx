import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-switch";
import LoadingWrapper from "@/components/loadingwrapper";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Grace Karin",
  description: "Hi, come and take a look of my portfolio!! :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <LoadingWrapper>
            <main className="fixed inset-0 overflow-hidden -z-10 bg-white dark:bg-gray-900 transition-colors duration-300">
              <div className="absolute left-0 top-0 h-[50vmax] w-[50vmax] -translate-x-1/4 -translate-y-1/4 rounded-full bg-[rgba(255,105,180,0.5)] dark:bg-[rgba(255,105,180,0.2)] opacity-50 blur-[80px] sm:h-[60vmax] sm:w-[60vmax] lg:h-[50vmax] lg:w-[50vmax]"></div>
              <div className="absolute bottom-0 right-0 h-[50vmax] w-[50vmax] translate-x-1/4 translate-y-1/4 rounded-full bg-[rgba(100,149,237,0.5)] dark:bg-[rgba(100,149,237,0.2)] opacity-50 blur-[80px] sm:h-[60vmax] sm:w-[60vmax] lg:h-[50vmax] lg:w-[50vmax]"></div>
            </main>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="main-content flex-grow dark:text-white transition-colors duration-300">
                {children}
              </main>
              <Navbar />
            </div>
          </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
