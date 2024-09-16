"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { cookies } from "next/headers";

export async function AuthSignOut() {
  cookies().delete("currentUser");
  cookies().delete("loggedIn");

  revalidatePath("/auth/login");
  redirect(`/auth/login`);
}
