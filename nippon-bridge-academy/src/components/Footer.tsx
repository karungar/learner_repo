import Link from "next/link";
import { brand } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white/50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold">{brand.name}</h3>
          <p className="text-sm text-black/70 mt-2">{brand.tagline}</p>
          <p className="text-sm text-black/70 mt-4">{brand.description}</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li><a href={`mailto:${brand.contact.email}`} className="hover:text-[var(--color-accent)]">{brand.contact.email}</a></li>
            <li><a href={`tel:${brand.contact.phone}`} className="hover:text-[var(--color-accent)]">{brand.contact.phone}</a></li>
            <li className="text-black/70">{brand.contact.address}</li>
            <li><a href={brand.contact.whatsapp} target="_blank" className="hover:text-[var(--color-accent)]">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li><Link href="/courses" className="hover:text-[var(--color-accent)]">Courses & Pricing</Link></li>
            <li><Link href="/routes" className="hover:text-[var(--color-accent)]">Study & Work Routes</Link></li>
            <li><Link href="/trial-classes" className="hover:text-[var(--color-accent)]">Trial Classes</Link></li>
          </ul>
          <div className="text-sm text-black/60 mt-4">© {new Date().getFullYear()} {brand.shortName}</div>
        </div>
      </div>
    </footer>
  );
}