"use server";
import * as auth from "@/auth";
import { db } from "@/db";

export const signIn = async () => {
  return auth.signIn("github");
};
