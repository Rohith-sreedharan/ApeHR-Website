"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function TextGenerator({ text }: { text: string }) {
  return <TextGenerateEffect words={text}></TextGenerateEffect>;
}
