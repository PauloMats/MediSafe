import "../app/globals.css";
import { ReactNode } from "react";
import Footer from "../../components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>MediSafe - Cálculos Precisos</title>
      </head>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}