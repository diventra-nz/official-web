import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { getCaseStudyWithProject } from "@/lib/case-studies";
import CaseStudyPageTemplate from "@/components/sections/CaseStudyPageTemplate";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getCaseStudyWithProject(slug);
  if (!data) return {};
  return {
    title: `${data.project.name} — Diventra`,
    description: data.caseStudy.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const data = getCaseStudyWithProject(slug);
  if (!data) notFound();

  return <CaseStudyPageTemplate project={data.project} caseStudy={data.caseStudy} />;
}
