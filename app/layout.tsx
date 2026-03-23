import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FRZ System | Tecnologia sob medida para negócios que evoluem",
  description:
    "FRZ System oferece soluções em ERP, automações, análise de dados e criação de SaaS para empresas que buscam crescimento e eficiência.",
  keywords: ["ERP", "automação", "análise de dados", "SaaS", "tecnologia", "FRZ System"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} min-h-full bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
