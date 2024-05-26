"use server";

import { db } from "@/db";
import { z } from "zod";
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z.string().min(10),
});
export const createTopic = async (formData: FormData) => {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }

  //TODO:revalidate the homepage
};
