import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "../../public/styles/index.scss";
import "lenis/dist/lenis.css";

import { ReduxProvider, SmoothScroll } from "./_components/common/wrapper";

import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import PageTransition from "./_components/common/wrapper/page-transition";
import SWRConfigWrapper from "./_components/common/wrapper/swr-config";
import { ToastContainer } from "react-toastify";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PV Food",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/alpinejs" defer></script>
      </head>

      <body className={mont.className}>
        <ReduxProvider>
          <PageTransition>
            <SWRConfigWrapper>
              <CssBaseline />
              <SmoothScroll>{children}</SmoothScroll>
              <ToastContainer />
            </SWRConfigWrapper>
          </PageTransition>
        </ReduxProvider>
      </body>
    </html>
  );
}
