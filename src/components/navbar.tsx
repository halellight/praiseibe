"use client";

import { motion } from "framer-motion";
import { SOCIALS } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 pointer-events-none">
            <div className="max-w-[1800px] mx-auto flex justify-between items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="pointer-events-auto"
                >
                    <a href="/" className="group flex items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground whitespace-nowrap">
                            Praise Ibe
                        </span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col items-end gap-6 pointer-events-auto pt-2"
                >
                    <div className="flex items-center gap-6">
                        <a
                            href={SOCIALS.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group"
                        >
                            <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
                            <FileText size={18} />
                        </a>
                        <div className="w-[1px] h-4 bg-border/50" />
                        <a href={SOCIALS.linkedin} className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"><Linkedin size={18} /></a>
                        <a href={SOCIALS.twitter} className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"><Twitter size={18} /></a>
                        <a href={`mailto:${SOCIALS.email}`} className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"><Mail size={18} /></a>
                    </div>
                    <DigitalClock />
                </motion.div>
            </div>
        </nav>
    );
}

function DigitalClock() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            // Abuja is UTC+1. The environment might be different, so let's use Intl.DateTimeFormat
            const formatter = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Africa/Lagos',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            setTime(formatter.format(now));
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-end gap-1">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/30 flex items-center gap-2">
                Abuja /
                <span>
                    {time || "00:00:00"}
                </span>
            </div>
        </div>
    );
}
