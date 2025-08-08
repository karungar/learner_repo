import { stories } from "@/data/site";

export default function StoriesPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold">Success Stories</h1>
      <p className="mt-2 text-black/70">Real outcomes from learners who started at Nippon Bridge Academy.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {stories.map((s) => (
          <div key={s.id} className="rounded-xl border border-black/5 bg-white p-6">
            <div className="font-semibold">{s.name}</div>
            <div className="text-sm text-black/70">{s.levelAchieved} • {s.outcome}</div>
            <blockquote className="mt-3 text-black/80">“{s.quote}”</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}