import { notFound } from "next/navigation";
import { getProblemBySlug } from "@/features/problems";
import { ProblemDetail } from "@/features/problems/ProblemDetail";

interface ProblemDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProblemDetailPage({ params }: ProblemDetailPageProps) {
  const { slug } = await params;
  const problem = await getProblemBySlug(slug);

  if (!problem) notFound();

  return <ProblemDetail key={problem.slug} problem={problem} />;
}
