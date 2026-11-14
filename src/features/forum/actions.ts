"use server";

import { revalidatePath } from "next/cache";
import { createThread, addCommentToThread, toggleThreadVote } from "./service";

export async function createThreadAction(data: {
  title: string;
  content: string;
  category: any;
  tags: string[];
}) {
  const newThread = await createThread(data);
  revalidatePath("/forum");
  return newThread;
}

export async function addCommentAction(threadId: string, content: string) {
  const updatedThread = await addCommentToThread(threadId, content);
  revalidatePath(`/forum/${threadId}`);
  revalidatePath("/forum");
  return updatedThread;
}

export async function toggleVoteAction(threadId: string, increment: boolean) {
  const updatedVotes = await toggleThreadVote(threadId, increment);
  revalidatePath("/forum");
  revalidatePath(`/forum/${threadId}`);
  return updatedVotes;
}