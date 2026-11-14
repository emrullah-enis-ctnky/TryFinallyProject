/**
 * API uçlarının ortak yardımcıları: oturumdaki kullanıcı ve hata yanıtı (sadece sunucuda çalışır).
 */

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import db from "@/lib/db";

/** Oturumdaki kullanıcının veritabanı kaydını getirir; yoksa oluşturur. Giriş yoksa null. */
export async function currentDbUser() {
  const session = await auth();
  const email = session?.user?.email;
  if (!email) return null;
  return db.user.upsert({
    where: { email },
    update: {},
    create: { email, name: session?.user?.name ?? null, image: session?.user?.image ?? null },
  });
}

export function jsonError(status: number, error: string) {
  return NextResponse.json({ error }, { status });
}
