import { Hero } from "@/components/Hero";
import Link from "next/link";
import { courses, routes, stories } from "@/data/site";

export default function Home() {
  return (
    <div className="py-10">
      <Hero />

      <section className="mt-14 grid gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-black/5 bg-white p-6">
          <h3 className="font-semibold text-lg">Courses & Pricing</h3>
          <p className="text-sm text-black/70 mt-2">Beginner to lower-intermediate (N5–N4) with flexible schedules.</p>
          <ul className="mt-3 text-sm list-disc list-inside text-black/80">
            {courses.map((c) => (
              <li key={c.id}>{c.title} — KES {c.priceKES.toLocaleString()}</li>
            ))}
          </ul>
          <Link href="/courses" className="inline-block mt-4 text-[var(--color-accent)] font-medium">See details →</Link>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6">
          <h3 className="font-semibold text-lg">Study & Work Routes</h3>
          <ul className="mt-3 text-sm space-y-1">
            {routes.slice(0,3).map((r) => (
              <li key={r.id} className="text-black/80">{r.title}</li>
            ))}
          </ul>
          <Link href="/routes" className="inline-block mt-4 text-[var(--color-accent)] font-medium">Explore pathways →</Link>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6">
          <h3 className="font-semibold text-lg">Success Stories</h3>
          <ul className="mt-3 text-sm space-y-2">
            {stories.slice(0,2).map((s) => (
              <li key={s.id} className="text-black/80">“{s.quote}” — {s.name}</li>
            ))}
          </ul>
          <Link href="/stories" className="inline-block mt-4 text-[var(--color-accent)] font-medium">Read more →</Link>
        </div>
      </section>

      <section className="mt-14 rounded-xl border border-black/5 bg-white p-6">
        <h3 className="font-semibold text-lg">Free Trial Classes</h3>
        <p className="text-sm text-black/70 mt-2">Watch short video lessons to experience our teaching style, then join the next intake.</p>
        <Link href="/trial-classes" className="inline-block mt-4 text-[var(--color-accent)] font-medium">Start a trial →</Link>
      </section>
    </div>
  );
}
