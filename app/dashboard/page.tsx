export default function UserDashboardPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center gap-4 px-6">
      <h1 className="text-3xl font-semibold">User Dashboard</h1>
      <p className="text-sm text-neutral-600">
        Protected route. Only role=user can access.
      </p>
    </main>
  );
}
