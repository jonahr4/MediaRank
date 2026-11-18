import React from "react";
import GlobalStyle from "@/components/GlobalStyle";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

// layout wraps every page. nav lives here so the tabs show up everywhere

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  );
}
