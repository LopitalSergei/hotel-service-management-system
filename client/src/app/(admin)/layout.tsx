import type { Metadata } from "next";
import { Inter, Montserrat_Alternates } from "next/font/google";
import "../globals.css";
import { Stack } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "@/components/Toast/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin panel of Hotel service management system",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          {children}
        </Stack>
        <Toast />
      </body>
    </html>
  );
}
