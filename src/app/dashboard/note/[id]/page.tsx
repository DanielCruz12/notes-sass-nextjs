import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getNoteById, deleteNote } from "@/app/actions/noteActions";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const NoteInformation = async ({ params }: { params: { id: string } }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const result = await getNoteById(params.id);

  if (!result.success || !result.note) {
    return (
      <div className="flex justify-center items-center">Note not found</div>
    );
  }

  const note = result.note;

  async function handleDelete() {
    "use server";
    const deleteResult = await deleteNote(params.id, user.id);
    if (deleteResult.success) {
      redirect("/dashboard");
    } else {
      throw new Error("Failed to delete note");
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-7xl mx-auto">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-2xl font-bold">{note.title}</CardTitle>
          <div className="space-x-2">
            <Link href={`/dashboard/note/${params.id}/edit`}>
              <Button variant="outline">
                <Pencil1Icon className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </Link>
            <form action={handleDelete} className="inline">
              <Button type="submit" variant="destructive">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </form>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">{note.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteInformation;
