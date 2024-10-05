import { NextRequest } from "next/server";
import { updateSession } from "@/app/login/CookieHandler";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
