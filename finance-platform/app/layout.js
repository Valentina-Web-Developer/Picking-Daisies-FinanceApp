import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: "Picking Daisies",
  description: "Ai Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/img/daisy.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/*footer*/}
          <footer className=" bg-[#505d55] py-10">
            <div className="container mx-auto px-4 text-center text-white">
              <p>Made with &hearts; by Valentina</p>
            </div>{" "}
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
