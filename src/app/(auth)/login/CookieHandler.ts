"use server";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { users } from "@/database/schemas/users";

const secretKey = process.env.COOKIE_KEY;
const key = new TextEncoder().encode(secretKey);
type NewUser = typeof users.$inferInsert;

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1000 years from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(loginuser: NewUser) {
  // Verify credentials && get the user
  const user = {
    email: loginuser.email,
    username: loginuser.username,
    id: loginuser.id,
    uuid: loginuser.uuid,
  };
  // Create the session
  const expires = new Date(Date.now() + 100000 * 100000000);
  const session = await encrypt({ user, expires });
  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout(e: object) {
  e = e;
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
