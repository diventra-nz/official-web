import type { Metadata } from "next";
import HowWeWorkContent from "@/components/sections/HowWeWorkContent";

export const metadata: Metadata = {
  title: "How We Work — Diventra",
  description:
    "Our six-stage delivery process — Discover, Define, Design, Develop, Deploy, and Improve — with clear communication, governance, and quality built in.",
};

export default function HowWeWorkPage() {
  return <HowWeWorkContent />;
}
