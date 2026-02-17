"use client";

import { COMPENDIUM_DATA, VENTURES, SOCIALS } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";

export default function WikiPage() {
    const work = COMPENDIUM_DATA.filter(i => i.type === "work");
    const projects = COMPENDIUM_DATA.filter(i => i.type === "project");
    const education = COMPENDIUM_DATA.filter(i => i.type === "education");
    const articles = COMPENDIUM_DATA.filter(i => i.type === "article");

    return (
        <main className="min-h-screen bg-white text-black font-sans pt-32 pb-20 px-6 md:px-0">
            <Navbar />

            <div className="max-w-4xl mx-auto">
                {/* Wiki Header */}
                <div className="border-b border-gray-300 pb-2 mb-6">
                    <h1 className="text-4xl font-serif leading-tight">Praise Ibe</h1>
                    <div className="text-sm text-gray-600 mt-1 italic">From Wikipedia, the free encyclopedia</div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1 order-2 md:order-1">
                        <p className="mb-4 text-[15px] leading-relaxed">
                            <span className="font-bold">Praise Ibe</span> is a Nigerian technology professional and business analyst specializing in
                            <span className="text-blue-700 hover:underline cursor-pointer ml-1">data analytics</span>,
                            <span className="text-blue-700 hover:underline cursor-pointer ml-1">civic technology</span>, and
                            <span className="text-blue-700 hover:underline cursor-pointer ml-1">digital design</span>.
                            He is currently a Business Analyst Trainee at <span className="font-bold">FITC</span> and has been involved in several
                            prominent civic tech initiatives in Nigeria, including <span className="text-blue-700 hover:underline cursor-pointer">Àwùjọ</span>
                            and <span className="text-blue-700 hover:underline cursor-pointer">Naija Elections</span>.
                        </p>

                        <p className="mb-6 text-[15px] leading-relaxed">
                            Ibe's work focuses on architecting digital systems that strengthen civic participation and provide data-grounded insights for institutions.
                            He has a background in Computer Science from Babcock University, with a specific research focus on blockchain-based voting systems.
                        </p>

                        {/* TOC */}
                        <div className="bg-[#f8f9fa] border border-[#a2a9b1] p-4 mb-8 inline-block min-w-[300px]">
                            <div className="font-bold text-center mb-2">Contents</div>
                            <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                                <li><a href="#early-life" className="hover:underline">Early life and education</a></li>
                                <li><a href="#career" className="hover:underline">Career</a></li>
                                <li><a href="#ventures" className="hover:underline">Ventures</a></li>
                                <li><a href="#selected-projects" className="hover:underline">Selected projects</a></li>
                                <li><a href="#external-links" className="hover:underline">External links</a></li>
                            </ol>
                        </div>

                        {/* Sections */}
                        <WikiSection title="Early life and education" id="early-life">
                            <p className="mb-4">
                                Ibe attended <span className="text-blue-700 hover:underline cursor-pointer">Babcock University</span> in Ogun State, Nigeria,
                                where he earned a B.Sc(Hons) in <span className="text-blue-700 hover:underline cursor-pointer">Computer Science</span> with Second Class Upper Honors (Class of 2024).
                                During his undergraduate studies, he conducted research into the <span className="italic">Design of A Blockchain-based Voting System</span>.
                            </p>
                        </WikiSection>

                        <WikiSection title="Career" id="career">
                            <p className="mb-4">
                                In 2025, Ibe joined <span className="font-bold">FITC</span> (Financial Institutions Training Centre) as a Business Analyst Trainee.
                                His role involves transforming complex datasets into actionable insights for institutions and analyzing survey data
                                to identify participation trends.
                            </p>
                            <p className="mb-4">
                                Prior to his role at FITC, he completed internships at several major Nigerian corporations, including:
                            </p>
                            <ul className="list-disc list-inside mb-4 space-y-1">
                                {work.filter(w => w.subtitle !== "FITC").map(w => (
                                    <li key={w.id}><span className="font-bold">{w.subtitle}</span> - {w.title} ({w.year})</li>
                                ))}
                            </ul>
                            <p className="mb-4">
                                He also served as the <span className="text-blue-700 hover:underline cursor-pointer">NYSC CDS President</span> for the
                                Safety and Emergency Response Ready Service (SAFERRS) in 2025, coordinating drills and community service activities.
                            </p>
                        </WikiSection>

                        <WikiSection title="Ventures" id="ventures">
                            <p className="mb-4">
                                Ibe has founded or co-founded several digital ventures:
                            </p>
                            <div className="space-y-4">
                                {VENTURES.map(v => (
                                    <div key={v.id}>
                                        <div className="font-bold text-blue-700 hover:underline cursor-pointer inline-block">{v.name}</div>
                                        <div className="text-sm text-gray-700">{v.tagline}</div>
                                        <div className="text-[14px] mt-1 italic">{v.description}</div>
                                    </div>
                                ))}
                            </div>
                        </WikiSection>

                        <WikiSection title="Selected projects" id="selected-projects">
                            <div className="space-y-4">
                                {projects.map(p => (
                                    <div key={p.id}>
                                        <div className="font-bold text-blue-700 hover:underline cursor-pointer inline-block">{p.title}</div>
                                        <div className="text-sm text-gray-700 inline ml-2">— {p.subtitle} ({p.year})</div>
                                        <p className="text-[14px] mt-1">{p.description}</p>
                                    </div>
                                ))}
                            </div>
                        </WikiSection>

                        <WikiSection title="External links" id="external-links">
                            <ul className="list-disc list-inside space-y-1 text-blue-700">
                                <li><a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">Official LinkedIn Profile</a></li>
                                <li><a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter/X (@_halel)</a></li>
                                <li><a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Workspace</a></li>
                            </ul>
                        </WikiSection>
                    </div>

                    {/* Wiki Infobox */}
                    <aside className="w-full md:w-[300px] order-1 md:order-2">
                        <div className="bg-[#f8f9fa] border border-[#a2a9b1] p-1 text-sm">
                            <div className="bg-[#cedff2] text-center font-bold py-2 text-base">Praise Ibe</div>
                            <div className="p-4 flex flex-col items-center border-b border-[#a2a9b1]">
                                <div className="relative w-full aspect-square bg-gray-200 mb-2 overflow-hidden border border-gray-300">
                                    <Image
                                        src="/praise.jpg"
                                        alt="Praise Ibe"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-[11px] text-gray-600 text-center">Ibe in 2025</div>
                            </div>

                            <table className="w-full text-[12px] border-collapse">
                                <tbody>
                                    <InfoboxRow label="Born" value="Abuja, Nigeria" />
                                    <InfoboxRow label="Nationality" value="Nigerian" />
                                    <InfoboxRow label="Education" value="Babcock University (B.Sc)" />
                                    <InfoboxRow label="Occupation" value="Business Analyst, Tech Consultant" />
                                    <InfoboxRow label="Known for" value="Àwùjọ, Civic Tech initiatives" />
                                    <InfoboxRow label="Ventures" value="Monisight, Consilo, Zowa Advisory" />
                                    <InfoboxRow label="Website" value={<a href="https://praiseibe.com" className="text-blue-700 hover:underline">praiseibe.me</a>} />
                                </tbody>
                            </table>
                        </div>
                    </aside>
                </div>
            </div>

            <style jsx global>{`
                body {
                    background-color: white !important;
                }
                nav {
                    background-color: white;
                    border-bottom: 1px solid #e5e7eb;
                }
                nav * {
                   color: black !important;
                }
            `}</style>
        </main>
    );
}

function WikiSection({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
    return (
        <section className="mb-8" id={id}>
            <h2 className="text-2xl font-serif border-b border-gray-300 mb-3 pb-1">{title}</h2>
            <div className="text-[15px] leading-relaxed">
                {children}
            </div>
        </section>
    );
}

function InfoboxRow({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <tr className="border-b border-gray-200 last:border-0">
            <th className="text-left py-2 px-2 font-bold w-1/3 align-top">{label}</th>
            <td className="py-2 px-2 align-top">{value}</td>
        </tr>
    );
}
