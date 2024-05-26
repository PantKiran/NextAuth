"use server";

import { db } from "@/db";
import { promises } from "dns";
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
interface createTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}
export async function createTopic(
  formstate: createTopicFormState,
  formData: FormData
): Promise<createTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }
  return {
    errors: {},
  };
}
