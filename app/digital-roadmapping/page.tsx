import type { Metadata } from "next";
import DigitalRoadmappingContent from "@/components/sections/DigitalRoadmappingContent";

export const metadata: Metadata = {
  title: "Digital Growth Blueprint — Diventra",
  description:
    "A productised strategy service delivering a prioritised 12–24 month digital roadmap, technology assessment, and AI opportunity analysis for New Zealand organisations.",
};

export default function DigitalRoadmappingPage() {
  return <DigitalRoadmappingContent />;
}
