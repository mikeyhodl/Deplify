import type { Metadata } from "next";
// import "./globals.css";
import Sidebar from "@/components/ui/sidenav-items";
import Header from "@/components/ui/header";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Bulk SMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
