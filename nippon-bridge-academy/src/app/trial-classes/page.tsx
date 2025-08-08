import { trialVideos } from "@/data/site";

export default function TrialClassesPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold">Trial Classes</h1>
      <p className="mt-2 text-black/70">Watch a short lesson. Replace the video files in <code>public/videos/</code> to publish your own trials.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {trialVideos.map((v) => (
          <div key={v.id} className="rounded-xl border border-black/5 bg-white p-4">
            <div className="font-semibold mb-2">{v.title}</div>
            <video controls className="w-full rounded-lg bg-black/5" src={v.src} />
          </div>
        ))}
      </div>
    </div>
  );
}