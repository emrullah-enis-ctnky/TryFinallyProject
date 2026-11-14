-- CreateEnum
CREATE TYPE "SubmissionKind" AS ENUM ('RUN', 'SUBMIT');

-- AlterEnum
BEGIN;
CREATE TYPE "SubStatus_new" AS ENUM ('PENDING', 'RUNNING', 'ACCEPTED', 'WRONG_ANSWER', 'TIME_LIMIT', 'MEMORY_LIMIT', 'RUNTIME_ERROR', 'COMPILE_ERROR', 'INTERNAL_ERROR');
ALTER TABLE "Submission" ALTER COLUMN "status" TYPE "SubStatus_new" USING ("status"::text::"SubStatus_new");
ALTER TYPE "SubStatus" RENAME TO "SubStatus_old";
ALTER TYPE "SubStatus_new" RENAME TO "SubStatus";
DROP TYPE "public"."SubStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "judgedAt" TIMESTAMP(3),
ADD COLUMN     "kind" "SubmissionKind" NOT NULL DEFAULT 'SUBMIT',
ADD COLUMN     "passedCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "result" JSONB,
ADD COLUMN     "runtimeMs" INTEGER,
ADD COLUMN     "totalCount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "SolvedProblem" (
    "userId" TEXT NOT NULL,
    "puzzleId" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "solvedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SolvedProblem_pkey" PRIMARY KEY ("userId","puzzleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SolvedProblem_submissionId_key" ON "SolvedProblem"("submissionId");

-- CreateIndex
CREATE INDEX "Submission_status_createdAt_idx" ON "Submission"("status", "createdAt");

-- CreateIndex
CREATE INDEX "Submission_userId_puzzleId_createdAt_idx" ON "Submission"("userId", "puzzleId", "createdAt");

-- CreateIndex
CREATE INDEX "Submission_puzzleId_language_status_idx" ON "Submission"("puzzleId", "language", "status");

-- AddForeignKey
ALTER TABLE "SolvedProblem" ADD CONSTRAINT "SolvedProblem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolvedProblem" ADD CONSTRAINT "SolvedProblem_puzzleId_fkey" FOREIGN KEY ("puzzleId") REFERENCES "Puzzle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolvedProblem" ADD CONSTRAINT "SolvedProblem_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

