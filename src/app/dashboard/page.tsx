import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import FormNote from "./note/form/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import moment from "moment";
import { getRandomLavaColor } from "@/utils/colors";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { DialogTitle } from "@radix-ui/react-dialog";
import { getNotes } from "@/app/actions/noteActions";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    redirect("/");
  }

  const notes = await getNotes(user.id);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Your notes</h1>
        <Dialog>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>Add note</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <FormNote />
          </DialogContent>
        </Dialog>
      </div>
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <Link href={`/dashboard/note/${note.id}`} key={note.id}>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <CardHeader
                  className={`bg-gradient-to-r ${getRandomLavaColor()} text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <CardTitle className="relative z-10">{note.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 pt-5">
                    {note.description.length > 100
                      ? `${note.description.substring(0, 100)}...`
                      : note.description}
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500 flex justify-between items-center">
                  <span>{moment(note.createdAt).fromNow()}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card className="text-center p-6">
          <CardContent>
            <p className="text-xl font-semibold mb-2">No notes yet</p>
            <p className="text-gray-600">
              Click the &ldquo;Add note&rdquo; button to create your first note!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
