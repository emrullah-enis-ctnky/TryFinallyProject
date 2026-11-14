"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createThread,
  addCommentToThread,
  toggleThreadVote,
  toggleCommentVote,
} from "./service";

export async function createThreadAction(formData: FormData) {
  const title = formData.get("title")?.toString().trim() || "";
  const category = formData.get("category")?.toString().trim() || "genel";
  const content = formData.get("content")?.toString().trim() || "";
  const tagsRaw = formData.get("tags")?.toString() || "";

  if (!title || !content) {
    throw new Error("Başlık ve içerik alanları zorunludur.");
  }

  const tags = tagsRaw
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const newThread = await createThread({
    title,
    content,
    category,
    tags,
  });

  revalidatePath("/forum");
  redirect(`/forum/${newThread.id}`);
}

export async function addCommentAction(
  threadId: string,
  content: string,
  parentCommentId?: string
) {
  if (!content.trim()) return;

  await addCommentToThread(threadId, content.trim(), "Misafir Kullanıcı", parentCommentId);
  revalidatePath(`/forum/${threadId}`);
  revalidatePath("/forum");
}

export async function toggleVoteAction(threadId: string, increment: boolean) {
  const updatedVotes = await toggleThreadVote(threadId, increment);
  revalidatePath("/forum");
  revalidatePath(`/forum/${threadId}`);
  return updatedVotes;
}

export async function toggleCommentVoteAction(
  threadId: string,
  commentId: string,
  increment: boolean
) {
  const updatedVotes = await toggleCommentVote(threadId, commentId, increment);
  revalidatePath(`/forum/${threadId}`);
  return updatedVotes;
}