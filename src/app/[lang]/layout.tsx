import type { Metadata } from "next";
import StyledComponentsRegistry from "@src/lib/registry";
import GlobalStyle from "@global/styledGlobal";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "@constants/toastStyle";

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
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Toaster toastOptions={toastOptions} />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
