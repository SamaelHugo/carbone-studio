import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — CARBONE",
  description: "Адрес, телефон и режим работы студии CARBONE. Москва, ул. Графитная, 12.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
