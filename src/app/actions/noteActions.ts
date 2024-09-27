"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/db";

export async function createNote(data: { title: string; content: string }) {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser || !kindeUser.id || !kindeUser.email) {
    throw new Error("User not authenticated");
  }

  try {
    // Find or create the user
    const user = await prisma.user.upsert({
      where: { email: kindeUser.email },
      update: {},
      create: {
        id: kindeUser.id,
        email: kindeUser.email,
        name: kindeUser.given_name,
      },
    });

    const newNote = await prisma.note.create({
      data: {
        title: data.title,
        description: data.content,
        userId: user.id,
      },
    });
    return { success: true, note: newNote };
  } catch (error) {
    console.error("Error creating note:", error);
    return { success: false, error: "Failed to create note" };
  }
}

export async function getNotes(userId: string) {
  try {
    const notes = await prisma.note.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
    return notes;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
}
