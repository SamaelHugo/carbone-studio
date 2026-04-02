import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мастера — CARBONE",
  description: "Наша команда барберов и тату-мастеров. Профессионалы с характером.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
