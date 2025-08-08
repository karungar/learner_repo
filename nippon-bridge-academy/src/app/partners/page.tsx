import { partners } from "@/data/site";

export default function PartnersPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold">Partners</h1>
      <p className="mt-2 text-black/70">Institutions and organizations supporting learning, placement and relocation.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {partners.map((p) => (
          <div key={p.id} className="rounded-xl border border-black/5 bg-white p-5">
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-black/70">{p.category} • {p.country}</div>
            {p.website && (
              <a href={p.website} target="_blank" className="mt-3 inline-block text-[var(--color-accent)] text-sm">Visit website →</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}