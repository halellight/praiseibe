import { COMPENDIUM_DATA } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Compendium() {
    return (
        <div className="divide-y divide-border border-t border-border">
            {COMPENDIUM_DATA.map((item) => (
                <div key={item.id} className="compendium-row group">
                    <div className="compendium-label">
                        {item.year}
                    </div>
                    <div className="compendium-content">
                        <div className="flex justify-between items-start gap-4">
                            <div className="space-y-1">
                                <h3 className="compendium-title">
                                    {item.title}
                                </h3>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                    {item.subtitle}
                                </p>
                            </div>
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="p-2 hover:bg-foreground hover:text-background rounded-full transition-all"
                                >
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        <p className="compendium-description">
                            {item.description}
                        </p>

                        {(item.meta || item.tags) && (
                            <div className="compendium-meta">
                                {item.meta?.map((m) => (
                                    <span key={m} className="flex items-center gap-2">
                                        <span className="w-1 h-1 bg-border rounded-full" />
                                        {m}
                                    </span>
                                ))}
                                {item.tags?.map((t) => (
                                    <span key={t} className="compendium-tag">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
