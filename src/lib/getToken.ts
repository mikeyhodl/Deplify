"use server";
import { cookies } from "next/headers";

export async function TokenData() {
  const cookieStore = cookies();
  const theme = cookieStore.get("currentUser");
  if (theme) {
    const parsedCookie = JSON.parse(theme.value);
    const accessToken = parsedCookie.access_token;
    return accessToken;
  }
}
