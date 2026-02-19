import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function signIn(formData: FormData) {
  "use server";
  const role = formData.get("role");

  if (role !== "admin" && role !== "user") {
    redirect("/login");
  }

  const cookieStore = await cookies();
  cookieStore.set("role", String(role), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });

  redirect(role === "admin" ? "/admin" : "/dashboard");
}

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <p className="text-sm text-neutral-600">
        Choose a role to simulate authentication. Public pages remain accessible
        without login.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <form action={signIn}>
          <input type="hidden" name="role" value="user" />
          <button className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white">
            Continue as User
          </button>
        </form>
        <form action={signIn}>
          <input type="hidden" name="role" value="admin" />
          <button className="rounded-md border border-black px-5 py-3 text-sm font-semibold">
            Continue as Admin
          </button>
        </form>
      </div>
    </main>
  );
}
