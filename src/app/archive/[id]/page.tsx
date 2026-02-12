"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { COMPENDIUM_DATA } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { ArrowLeft, Share2, Calendar, Clock, ArrowUp, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

export default function ArticlePage() {
    const { id } = useParams();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const article = useMemo(() => {
        return COMPENDIUM_DATA.find((item) => item.id === id);
    }, [id]);

    if (!article) return null;

    return (
        <main className="relative bg-background text-foreground min-h-screen selection:bg-foreground selection:text-background font-sans">
            <Navbar />

            {/* Reading Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-foreground origin-left z-[60]"
                style={{ scaleX }}
            />

            <div className="max-w-[900px] mx-auto px-6 pt-48 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-16"
                >
                    {/* Minimalist Navigation */}
                    <div className="flex justify-between items-center pb-12 border-b border-border/50">
                        <Link
                            href="/"
                            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
                        >
                            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Esc_Home
                        </Link>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">
                                <Calendar size={12} />
                                {article.year}
                            </div>
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">
                                <Clock size={12} />
                                {article.meta?.[0] || "5 min read"}
                            </div>
                        </div>
                    </div>

                    {/* Article Identity */}
                    <article className="space-y-12">
                        <header className="space-y-8">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 border border-border bg-muted/5 inline-block">
                                    {article.category}
                                </span>
                                <div className="h-[1px] flex-grow bg-border/30" />
                            </div>

                            <h1 className="text-5xl md:text-8xl font-heading font-black tracking-tighter uppercase leading-[0.85] text-balance">
                                {article.title}
                            </h1>

                            <p className="text-xl md:text-3xl font-medium tracking-tight text-muted-foreground/80 leading-snug italic max-w-2xl border-l-4 border-foreground/10 pl-8 ml-2">
                                &quot;{article.subtitle}&quot;
                            </p>
                        </header>

                        {/* Reading Content */}
                        <div className="pt-24 prose prose-invert max-w-none">
                            <div className="space-y-10 text-xl md:text-2xl leading-[1.7] font-medium tracking-tight text-foreground/90">
                                {article.fullBody ? (
                                    article.fullBody.split('\n\n').map((paragraph, i) => {
                                        // Handle Main Headers (##)
                                        if (paragraph.startsWith('## ')) {
                                            const [header, ...rest] = paragraph.split('\n');
                                            return (
                                                <div key={i} className="space-y-6">
                                                    <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tight text-foreground pt-16 pb-4 border-b border-border/30">
                                                        {header.replace('## ', '')}
                                                    </h2>
                                                    {rest.length > 0 && (
                                                        <p className="text-xl md:text-2xl leading-[1.7] font-medium tracking-tight text-foreground/90">
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: rest.join(' ').replace(/\*\*(.*?)\*\*/g, '<b class="text-foreground">$1</b>')
                                                            }} />
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        }

                                        // Handle Sub-Headers (###)
                                        if (paragraph.startsWith('### ')) {
                                            const [header, ...rest] = paragraph.split('\n');
                                            return (
                                                <div key={i} className="space-y-6">
                                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-foreground pt-12 pb-2">
                                                        {header.replace('### ', '')}
                                                    </h3>
                                                    {rest.length > 0 && (
                                                        <p className="text-xl md:text-2xl leading-[1.7] font-medium tracking-tight text-foreground/90">
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: rest.join(' ').replace(/\*\*(.*?)\*\*/g, '<b class="text-foreground">$1</b>')
                                                            }} />
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        }

                                        // Handle Numbered lists
                                        if (paragraph.match(/^\d\./m)) {
                                            return (
                                                <div key={i} className="space-y-6 pt-4">
                                                    {paragraph.split('\n').filter(line => line.trim()).map((line, j) => (
                                                        <p key={j} className="pl-8 relative border-l border-border/50">
                                                            <span className="absolute -left-4 top-0 font-black text-xs opacity-20">{j < 9 ? `0${j + 1}` : j + 1}</span>
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: line.replace(/\*\*(.*?)\*\*/g, '<b class="text-foreground">$1</b>').replace(/^\d\.\s?/, '')
                                                            }} />
                                                        </p>
                                                    ))}
                                                </div>
                                            );
                                        }

                                        // Handle Bullet points
                                        if (paragraph.startsWith('- ')) {
                                            return (
                                                <ul key={i} className="space-y-4 pt-4 ml-2">
                                                    {paragraph.split('\n').filter(line => line.trim()).map((line, j) => (
                                                        <li key={j} className="flex gap-4">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-3 flex-shrink-0" />
                                                            <span dangerouslySetInnerHTML={{
                                                                __html: line.replace(/\*\*(.*?)\*\*/g, '<b class="text-foreground">$1</b>').replace(/^- \s?/, '')
                                                            }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }

                                        // Regular paragraphs with selective drop-cap
                                        // Only drop-cap the very first paragraph
                                        const isFirstPara = i === 0;
                                        return (
                                            <p key={i} className={isFirstPara ? "first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:leading-none" : ""}>
                                                <span dangerouslySetInnerHTML={{
                                                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<b class="text-foreground">$1</b>')
                                                }} />
                                            </p>
                                        );
                                    })
                                ) : (
                                    <p>{article.description}</p>
                                )}
                            </div>
                        </div>
                    </article>

                    {/* Footer Metadata */}
                    <div className="pt-32 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-12 group/footer">
                        <div className="flex flex-col gap-2">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 transition-colors group-hover/footer:text-muted-foreground">Original Published 2024</p>
                            <p className="text-[9px] font-mono opacity-20 uppercase tracking-widest">ARCHIVE_ID: {article.id.toUpperCase()}</p>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: article.title,
                                            url: window.location.href
                                        });
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert("Link copied to clipboard");
                                    }
                                }}
                                className="flex items-center gap-4 px-10 py-5 bg-foreground text-background text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all"
                            >
                                Share <Share2 size={16} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Back to Top */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: showBackToTop ? 1 : 0 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-12 right-12 w-12 h-12 border border-border bg-background/80 backdrop-blur flex items-center justify-center hover:bg-foreground hover:text-background transition-colors z-50"
            >
                <ArrowUp size={20} />
            </motion.button>
        </main>
    );
}
