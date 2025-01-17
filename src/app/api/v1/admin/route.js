import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  const auth = cookies().get("Authorization");

  const isLoggedIn = auth ? JSON.parse(auth.value) : false;

  if (isLoggedIn) {
    return Response.json({ message: "welcome" });
  } else {
    redirect("/api/v1/users");
  }
}
