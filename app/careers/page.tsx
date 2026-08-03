import type { Metadata } from "next";
import CareersContent from "@/components/sections/CareersContent";

export const metadata: Metadata = {
  title: "Careers — Diventra",
  description:
    "Join Diventra — a Wellington-based digital agency building meaningful products for New Zealand organisations.",
};

export default function CareersPage() {
  return <CareersContent />;
}
