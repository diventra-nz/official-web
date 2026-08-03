import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About — Diventra",
  description:
    "A Wellington-based AI and digital agency helping New Zealand organisations modernise customer experiences, operations, and technology platforms.",
};

export default function AboutPage() {
  return <AboutContent />;
}
