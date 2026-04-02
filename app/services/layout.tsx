import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги — CARBONE",
  description: "Стрижки, бритьё и авторские татуировки в студии CARBONE. Москва.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
