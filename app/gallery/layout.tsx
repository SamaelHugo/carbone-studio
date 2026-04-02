import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея — CARBONE",
  description: "Портфолио работ: стрижки, бритьё и авторские татуировки.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
