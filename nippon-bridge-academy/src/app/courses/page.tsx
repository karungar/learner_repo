import { courses } from "@/data/site";

export default function CoursesPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold">Courses & Pricing (JLPT N5–N4)</h1>
      <p className="mt-2 text-black/70">Choose a schedule that fits your life. Fees shown are in Kenyan Shillings (KES).</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {courses.map((c) => (
          <div key={c.id} className="rounded-xl border border-black/5 bg-white p-6">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <div className="mt-1 text-sm text-black/70">Duration: {c.durationWeeks} weeks</div>
            <div className="mt-1 text-sm text-black/70">Schedules: {c.schedule.join(", ")}</div>
            <div className="mt-3 text-2xl font-bold">KES {c.priceKES.toLocaleString()}</div>
            <p className="mt-3 text-sm text-black/80">{c.description}</p>
            <ul className="mt-4 text-sm list-disc list-inside space-y-1">
              {c.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <button className="mt-5 rounded-full bg-[var(--color-accent)] text-white px-5 py-2 text-sm font-medium">Enroll / Ask about intakes</button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-black/60">
        Exam fees (JLPT/EJU/skills tests) are paid to external bodies and are not included. Scholarships and installment plans may be available — contact us.
      </div>
    </div>
  );
}