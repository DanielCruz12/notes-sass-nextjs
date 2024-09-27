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
    let user = await prisma.user.findUnique({
      where: { id: kindeUser.id },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          id: kindeUser.id,
          email: kindeUser.email,
          name: kindeUser.given_name,
        },
      });
    }

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
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser || !kindeUser.id || !kindeUser.email) {
    throw new Error("User not authenticated");
  }

  let user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: kindeUser.id,
        email: kindeUser.email,
        name: kindeUser.given_name,
      },
    });
  }

  try {
    const notes = await prisma.note.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
    return notes;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
}

export async function deleteNote(noteId: string, userId: string) {
  try {
    const deletedNote = await prisma.note.deleteMany({
      where: {
        id: noteId,
        userId: userId,
      },
    });
    if (deletedNote.count === 0) {
      return { success: false, error: "Note not found or unauthorized" };
    }
    return { success: true };
  } catch (error) {
    console.error("Error deleting note:", error);
    return { success: false, error: "Failed to delete note" };
  }
}

export async function updateNote(
  noteId: string,
  userId: string,
  data: { title?: string; content?: string }
) {
  try {
    const updatedNote = await prisma.note.updateMany({
      where: {
        id: noteId,
        userId: userId,
      },
      data: {
        title: data.title,
        description: data.content,
      },
    });
    if (updatedNote.count === 0) {
      return { success: false, error: "Note not found or unauthorized" };
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating note:", error);
    return { success: false, error: "Failed to update note" };
  }
}

export async function getNoteById(noteId: string) {
  try {
    const note = await prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!note) {
      return { success: false, error: "Note not found" };
    }

    return { success: true, note };
  } catch (error) {
    console.error("Error fetching note:", error);
    return { success: false, error: "Failed to fetch note" };
  }
}
