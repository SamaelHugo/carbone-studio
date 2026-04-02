import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Запись — CARBONE",
  description: "Запишитесь к мастеру онлайн. Барбершоп и тату-студия CARBONE, Москва.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
