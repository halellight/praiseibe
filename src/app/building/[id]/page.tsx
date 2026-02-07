"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { VENTURES, SOCIALS } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe, Zap } from "lucide-react";

export default function VenturePage() {
    const { id } = useParams();

    const venture = useMemo(() => {
        return VENTURES.find((v) => v.id === id);
    }, [id]);

    if (!venture) return null;

    return (
        <main className="relative bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background">
            <Navbar />

            <div className="max-w-[1200px] mx-auto px-6 pt-48 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-24"
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-12">
                        <Link
                            href="/"
                            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                            Back to Portfolio
                        </Link>

                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-muted rounded">
                                Status: Active
                            </span>
                        </div>
                    </div>

                    {/* Identity */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <Zap size={20} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Building</span>
                            </div>
                            <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter leading-[0.8] uppercase">
                                {venture.name}
                            </h1>
                        </div>

                        <p className="text-2xl md:text-4xl font-medium tracking-tight text-muted-foreground leading-none lowercase italic">
                            {venture.tagline}
                        </p>
                    </div>

                    {/* Description & Details */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12">
                        <div className="md:col-span-8 space-y-12">
                            <p className="text-2xl md:text-3xl leading-relaxed font-medium tracking-tight text-foreground/80">
                                {venture.description}
                            </p>

                            {venture.link && (
                                <a
                                    href={venture.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 px-12 py-6 bg-foreground text-background text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform"
                                >
                                    Visit {venture.name} <ArrowUpRight size={20} />
                                </a>
                            )}
                        </div>

                        <div className="md:col-span-4 space-y-12 md:pl-12 border-l border-border">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Focus Areas</h4>
                                <div className="flex flex-wrap gap-2">
                                    {venture.tags?.map((tag) => (
                                        <span key={tag} className="px-4 py-2 border border-border text-[10px] font-black uppercase tracking-widest hover:border-foreground transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Reference</h4>
                                <p className="text-[10px] font-mono opacity-40 uppercase">V-REF: {venture.id.toUpperCase()}-2026</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Footer Branding */}
                    <div className="pt-32 border-t border-border flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Interested in {venture.name}?</p>
                            <div className="h-[1px] w-12 bg-border" />
                        </div>
                        <a href={`mailto:${SOCIALS.email}`} className="px-8 py-4 border border-foreground text-[10px] font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
                            Initiate Inquiry
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
