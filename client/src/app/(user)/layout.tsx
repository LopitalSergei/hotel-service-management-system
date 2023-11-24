import type { Metadata } from "next";
import { Inter, Montserrat_Alternates } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Stack } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Toast from "@/components/Toast/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Service",
  description: "Hotel service management system",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          {children}
        </Stack>
        <Toast />
        <Footer />
      </body>
    </html>
  );
}
