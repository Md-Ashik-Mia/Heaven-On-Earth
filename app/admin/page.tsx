export default function AdminPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center gap-4 px-6">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <p className="text-sm text-neutral-600">
        Protected route. Only role=admin can access.
      </p>
    </main>
  );
}
