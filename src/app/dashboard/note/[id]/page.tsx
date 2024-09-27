import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";

const NoteInformation = async ({ params }: { params: { id: string } }) => {
  const note = await prisma.note.findUnique({
    where: { id: params.id },
  });

  if (!note) {
    return <div className="flex justify-center items-center">Note not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{note.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{note.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteInformation;
