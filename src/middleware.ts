import { NextRequest } from "next/server";
import { updateSession } from "@/app/(auth)/login/CookieHandler";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
