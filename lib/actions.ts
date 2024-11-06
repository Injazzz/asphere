/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { object, string } from "zod";
import { compareSync, hashSync } from "bcrypt";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";
import { createSession } from "./session";

const SignUpSchema = object({
  username: string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .trim(),
  email: string().email("Invalid email address").trim(),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
  confirmPassword: string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password does not match",
  path: ["confirmPassword"],
});

const SignInSchema = object({
  email: string().email("Invalid email address").trim(),
  password: string().trim(),
});

export async function SignUpCredential(prevState: unknown, formData: FormData) {
  const formDataObj = Object.fromEntries(formData.entries());

  // Filter hanya field yang relevan untuk SignUpSchema
  const filteredData = {
    username: formDataObj.username,
    email: formDataObj.email,
    password: formDataObj.password,
    confirmPassword: formDataObj.confirmPassword,
  };

  const resultFields = SignUpSchema.safeParse(filteredData);

  if (!resultFields.success) {
    return {
      message: "Invalid data",
      errors: resultFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, password } = resultFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.log("Failed to create user", error);
    return {
      message: "Failed to create user",
    };
  }

  return redirect("/sign-in"); // Memastikan redirect dieksekusi dengan benar
}

export async function SignInCredential(prevState: any, formData: FormData) {
  const resultFields = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!resultFields.success) {
    return {
      message: "Invalid data",
      errors: resultFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = resultFields.data;

  const user = await prisma.users.findUnique({
    where: { email },
  });

  if (!user || !user.password) {
    return; // Berhenti jika pengguna tidak ditemukan
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    return; // Berhenti jika password salah
  }

  await createSession(user.id);

  redirect("/dashboard");
}
