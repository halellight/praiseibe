"use client";

import { motion, AnimatePresence } from "framer-motion";
import { COMPENDIUM_DATA, SOCIALS, COMPANIES, VENTURES, CompendiumItem } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { ArrowUpRight, Plus, Minus, LayoutGrid, FileText, Briefcase, GraduationCap, Heart, Calendar, ShieldCheck, Zap } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  // { id: "all", label: "All Records", icon: LayoutGrid },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "project", label: "Projects", icon: LayoutGrid },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "volunteer", label: "Volunteering", icon: Heart },
  { id: "article", label: "Articles", icon: FileText },
  { id: "event", label: "Events", icon: Calendar },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("work");

  const filteredData = useMemo(() => {
    if (activeCategory === "all") return COMPENDIUM_DATA;
    return COMPENDIUM_DATA.filter((item) => item.type === activeCategory);
  }, [activeCategory]);

  return (
    <main className="relative bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-32">
        <div className="max-w-[1800px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >


            <h1 className="text-[12vw] md:text-[8vw] font-heading font-black tracking-tighter leading-[0.85] uppercase -ml-[0.5vw]">
              Design.<br />
              Data.<br />
              <span className="text-muted-foreground/20">Governance.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 items-end">
              <div className="md:col-span-12 lg:col-span-6 space-y-8">
                <p className="text-xl md:text-3xl font-medium tracking-tight leading-tight">
                  I build digital systems at the intersection of data, and design — improving access, participation, and decision-making.
                  <br />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ventures In Progress - "Building" */}
      <section className="px-6 md:px-12 py-24 border-t border-border overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">

              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Building</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
              {VENTURES.map((venture) => (
                <Link
                  key={venture.id}
                  href={`/building/${venture.id}`}
                  className="bg-background p-12 space-y-4 group hover:bg-muted/50 transition-colors"
                >
                  <p className="text-[9px] font-black uppercase tracking-widest opacity-30">Building_{venture.id.toUpperCase()}</p>
                  <h3 className="text-4xl font-heading font-black tracking-tighter uppercase leading-none group-hover:italic transition-all">
                    {venture.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium max-w-[200px] leading-tight">
                    {venture.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Network / Strategic Partners */}
      <section className="px-6 md:px-12 py-24 border-t border-border bg-muted/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="space-y-2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Collaborations & Experience</h2>
              <p className="text-sm text-muted-foreground max-w-xs uppercase leading-tight">Organizations I&apos;ve worked in, or collaborated with.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full md:w-auto">
              {COMPANIES.map((company) => (
                <div key={company.id} className="flex flex-col gap-2 group cursor-default">
                  <span className="text-xl md:text-2xl font-heading font-black tracking-tighter uppercase opacity-30 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {company.name}
                  </span>
                  <div className="h-[1px] w-0 group-hover:w-full bg-foreground transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Ledger with Filtering */}
      <section className="px-6 md:px-12 py-32 border-t border-border">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
            <div className="space-y-6">
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground">The Timeline</h2>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all clip-path-slant ${activeCategory === cat.id
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:bg-border"
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="divide-y divide-border border-t border-border">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredData.map((record) => (
                <ArchiveRow key={record.id} item={record} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="px-6 md:px-12 py-48 bg-muted/30">
        <div className="max-w-[1800px] mx-auto text-center space-y-24">
          <div className="space-y-4">
            <h3 className="text-[10vw] font-heading font-black tracking-tighter uppercase leading-none opacity-8">
              Contact me.
            </h3>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="text-2xl md:text-5xl font-heading font-black tracking-tight hover:italic transition-all duration-300"
            >
              {SOCIALS.email}
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-24 border-t border-border/50">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
              PRAISEIBE © {new Date().getFullYear()}
            </div>
            <div className="flex gap-12">
              <Link href="/wiki" className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity flex items-center gap-1 italic underline decoration-dotted">Wiki Profile</Link>
              <a href={SOCIALS.github} className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity">GitHub</a>
              <a href={SOCIALS.twitter} className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity">Twitter</a>
              <a href={SOCIALS.linkedin} className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ArchiveRow({ item }: { item: CompendiumItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  const handleInteraction = () => {
    if (item.type === "article") {
      router.push(`/archive/${item.id}`);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleInteraction}
      className="archive-row group relative cursor-pointer overflow-hidden"
    >
      <div className="md:grid md:grid-cols-12 md:gap-12 flex flex-col gap-6 py-12">
        <div className="md:col-span-1 hidden md:flex items-start pt-2">
          <span className="archive-year">{item.year}</span>
        </div>

        <div className="md:col-span-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border border-border bg-background/50 group-hover:border-foreground transition-colors">
                REF: {item.id.slice(0, 8)}
              </span>
              {item.category && (
                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground bg-muted/30 px-2 py-0.5 rounded">
                  {item.category}
                </span>
              )}
            </div>
            <h3 className="archive-title group-hover:italic group-hover:translate-x-4 transition-all duration-500">
              {item.title}
            </h3>
          </div>

          <div className="archive-meta">
            <span className="text-foreground font-bold">{item.subtitle}</span>
            {item.meta?.[0] && (
              <>
                <div className="w-1 h-1 rounded-full bg-border" />
                <span>{item.meta[0]}</span>
              </>
            )}
          </div>
        </div>

        <div className="md:col-span-3 flex md:justify-end items-center gap-6">
          <div className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-500 ${isOpen ? "rotate-45 bg-foreground text-background" : "group-hover:border-foreground"}`}>
            {item.type === "article" ? <ArrowUpRight size={20} /> : <Plus size={20} />}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && item.type !== "article" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-muted/5 border-t border-border/50"
          >
            <div className="relative md:grid md:grid-cols-12 md:gap-12 py-16 px-6 md:px-0">

              <div className="md:col-start-2 md:col-span-8 space-y-12">
                <div className="p-8 md:p-12 border border-border bg-background shadow-2xl relative">

                  <p className="text-xl md:text-3xl font-medium tracking-tight text-foreground leading-relaxed italic mb-12">
                    &quot;{item.description}&quot;
                  </p>

                  {item.images && item.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                      {item.images.map((img, idx) => (
                        <div key={idx} className="aspect-[4/3] relative overflow-hidden bg-muted group/img">
                          <Image
                            src={img}
                            alt={`Gallery image ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-12">
                      {item.tags.map((tag: string) => (
                        <span key={tag} className="archive-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="mt-16 flex flex-wrap gap-4 justify-between items-end">
                    <div className="flex flex-wrap gap-4">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-3 px-8 py-4 bg-foreground text-background font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform"
                        >
                          Visit Project <ArrowUpRight size={16} />
                        </a>
                      )}
                      {item.secondaryLink && (
                        <a
                          href={item.secondaryLink}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-3 px-8 py-4 border border-foreground text-foreground font-black uppercase text-[10px] tracking-widest hover:bg-foreground hover:text-background transition-all"
                        >
                          {item.secondaryLinkLabel || "External Link"} <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
