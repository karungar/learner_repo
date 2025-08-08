import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[var(--color-background)] border border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 grid gap-8 items-center md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {brand.name}
          </h1>
          <p className="mt-3 text-lg text-black/75">{brand.tagline}</p>
          <p className="mt-6 max-w-[55ch] text-black/80">
            {brand.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/courses" className="rounded-full bg-[var(--color-accent)] text-white px-5 py-2.5 text-sm font-medium hover:opacity-90">
              View Courses & Pricing
            </Link>
            <Link href="/routes" className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:border-black/20">
              Study & Work Routes
            </Link>
            <Link href="/trial-classes" className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:border-black/20">
              Try a Free Lesson
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="size-44 sm:size-52 relative">
            <Image src="/logo.svg" alt="Nippon Bridge Academy" fill style={{objectFit:"contain"}} />
          </div>
        </div>
      </div>
    </section>
  );
}