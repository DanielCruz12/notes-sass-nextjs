"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateNote } from "@/app/actions/noteActions";
import { useRouter } from "next/navigation";

interface Note {
  id: string;
  title: string;
  description: string;
}

interface EditNoteModalProps {
  note: Note;
  user: any;
  children: React.ReactNode;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({
  note,
  children,
  user,
}) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await updateNote(note.id, user.id, {
      title,
      content: description,
    });
    if (result.success) {
      setOpen(false);
      router.refresh();
    } else {
      console.error("Failed to update note");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle></DialogTitle>
      <DialogDescription></DialogDescription>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <div className="w-full mx-auto mt-8 relative">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="mt-1 block w-full pr-10"
                rows={5}
              />
            </div>
            <Button className="w-full" variant={"secondary"} type="submit">
              Save Changes
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditNoteModal;
