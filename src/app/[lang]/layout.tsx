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
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>
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
