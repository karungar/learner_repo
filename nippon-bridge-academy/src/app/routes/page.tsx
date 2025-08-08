import { routes } from "@/data/site";

export default function RoutesPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold">Study & Work Routes</h1>
      <p className="mt-2 text-black/70">Clear pathways to Japan based on your goals and language level.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {routes.map((r) => (
          <div key={r.id} className="rounded-xl border border-black/5 bg-white p-6">
            <h2 className="text-lg font-semibold">{r.title}</h2>
            <p className="mt-2 text-sm text-black/80">{r.summary}</p>
            <ol className="mt-3 text-sm list-decimal list-inside space-y-1">
              {r.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            {r.notes && <p className="mt-3 text-xs text-black/60">Note: {r.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}