"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { MagicWandIcon } from "@radix-ui/react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createNote } from "@/app/actions/noteActions";
import { chatSession } from "@/utils/aiModel";

export default function FormNote() {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [generatedContent, setGeneratedContent] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await createNote(data);
      window.location.reload();
    } catch (error) {
      console.error("Error creating note:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateWithAI = async () => {
    setIsLoading(true);
    try {
      const titleElement = document.getElementById("title") as HTMLInputElement;
      const title = titleElement?.value || "";
      const result = await chatSession.sendMessage(
        `Generate a note based on the title: "${title}"`
      );
      const content = result.response.text();
      setGeneratedContent(content);
      setValue("content", content);
    } catch (error) {
      console.error("Error generating with AI:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto mt-8 relative">
      <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <Input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter note title"
            className="mt-1 block w-full"
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">
              {errors.title.message?.toString()}
            </p>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <Textarea
            id="content"
            {...register("content")}
            rows={5}
            placeholder="Enter note content"
            className="mt-1 block w-full pr-10"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  onClick={generateWithAI}
                  className="absolute bottom-2 right-2"
                  size="icon"
                  variant="ghost"
                  disabled={isLoading}
                >
                  <MagicWandIcon className="mr-2 h-4 w-4 text-emerald-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Generate with AI</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <Button
            variant="secondary"
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Create Note"}
          </Button>
        </div>
      </form>
    </div>
  );
}
