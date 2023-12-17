import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "./global/styledGlobal";

export const metadata: Metadata = {
  title: "Anderson Cardoso",
  description: "Developed by Anderson Cardoso using Next 13.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
