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

  // ProblemDetail bir istemci bileşeni: verdiğimiz her şey tarayıcıya gider.
  // Gizli testlerin girdisini ve beklenen çıktısını göndermiyoruz; sadece sayıları kalıyor.
  const safeProblem = {
    ...problem,
    testCases: problem.testCases.map((testCase) =>
      testCase.isHidden ? { id: testCase.id, input: "", expectedOutput: "", isHidden: true } : testCase,
    ),
  };

  return <ProblemDetail key={problem.slug} problem={safeProblem} />;
}
