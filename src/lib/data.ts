export type CompendiumItem = {
    id: string;
    type: "work" | "project" | "education" | "volunteer" | "article" | "event";
    category?: string;
    year: string;
    title: string;
    subtitle: string;
    description: string;
    fullBody?: string;
    meta?: string[];
    link?: string;
    tags?: string[];
    image?: string;
    images?: string[];
};

export const COMPENDIUM_DATA: CompendiumItem[] = [
    {
        id: "fitc-2025",
        type: "work",
        year: "2025",
        category: "Professional",
        title: "Business Analyst Intern",
        subtitle: "FITC",
        description: "Transforming complex datasets into actionable insights for financial institutions. Analyzing survey and behavioral data to identify participation trends and recommending evidence-based improvements.",
        meta: ["Abuja, Nigeria", "Current Record"],
        tags: ["Data Analytics", "Strategic Growth"],
    },
    {
        id: "netco-2025",
        type: "work",
        year: "2025",
        category: "Operations",
        title: "Intern",
        subtitle: "NetcoDiestmann Nigeria",
        description: "Gained hands-on experience in engineering operations and project support during a one-month internship (January 2025).",
    },
    {
        id: "ivote-fct",
        type: "volunteer",
        year: "2025",
        category: "Financial Leadership",
        title: "Financial Lead",
        subtitle: "IVoteFCT (Yiaga Africa)",
        description: "Spearheading financial operations for the primary youth voter education initiative for the 2026 Abuja elections. Managing a portfolio of ₦4,000,000 ($3,000+) to drive democratic participation.",
        meta: ["Budget Oversight", "4M NGN Portfolio"],
        tags: ["Civic Education", "Finance"],
    },
    {
        id: "awujo-2026",
        type: "project",
        year: "2026",
        category: "Civic Tech",
        title: "Àwùjọ",
        subtitle: "Governance Transparency Platform",
        description: "A digital infrastructure for monitoring Nigerian governance. Built as a durable record of budget performance and policy execution.",
        link: "https://awujo-ng.online",
        tags: ["Next.js", "Supabase", "Open Data"],
    },
    {
        id: "naija-elections",
        type: "project",
        year: "2026",
        category: "Ecosystem",
        title: "Naija Elections",
        subtitle: "Voter Information Portal",
        description: "A centralized hub optimized for voter education and real-time election tracking across the Nigerian federation.",
        link: "https://naijaelections.netlify.app",
        tags: ["React", "Civic Education"],
    },
    {
        id: "ngtrak",
        type: "project",
        year: "2024",
        category: "Civic Tech",
        title: "NGTrak",
        subtitle: "Governance Tracking",
        description: "A platform for tracking governance and public projects in Nigeria.",
        link: "https://ngtrak.netlify.app/",
        tags: ["Civic Tech", "Governance"],
    },
    {
        id: "portfolio-v1",
        type: "project",
        year: "2024",
        category: "Legacy",
        title: "Previous Portfolio",
        subtitle: "Archived Version",
        description: "An archived version of my digital portfolio, documenting previous projects and aesthetic explorations.",
        link: "https://praiseibe.vercel.app/",
        tags: ["UI/UX", "Archive"],
    },
    {
        id: "onyeakuko-2025",
        type: "project",
        year: "2025",
        category: "Media Tech",
        title: "OnyeAkụkọ",
        subtitle: "AI-Powered News Index",
        description: "Filtering and contextualizing national narratives to combat information overload and surface meaningful civic insights.",
        link: "https://onyeakuko.online",
        tags: ["AI", "Narrative Analysis"],
    },
    {
        id: "stoj-2024",
        type: "work",
        year: "2024",
        category: "Infrastructure",
        title: "IT Officer",
        subtitle: "Stoj Group",
        description: "Architected and maintained enterprise IT systems with 99.9% uptime. Optimized technical workflows for organizational efficiency.",
        meta: ["Enterprise Systems", "Operations"],
    },
    {
        id: "nnpc-2024",
        type: "work",
        year: "2024",
        category: "IT Support",
        title: "IT Support Intern",
        subtitle: "NNPC",
        description: "Provided technical support and maintained IT infrastructure during a two-month internship (January - February 2024).",
    },
    {
        id: "article-democracy-day",
        type: "article",
        year: "2024",
        category: "Thought Leadership",
        title: "Corruption and Accountability in Governance",
        subtitle: "A Reflection on Nigerian Democracy Day",
        description: "An archival reflection on the systemic challenges of corruption and the critical necessity of accountability in the Nigerian democratic project.",
        fullBody: `### The Shadow of Systemic Decay
This archival reflection, "Corruption and Accountability in Governance: A Reflection on Nigerian Democracy Day," delves into the pressing issues of corruption and accountability in Nigeria. On Democracy Day, it becomes crucial to confront the pervasive corruption that threatens to derail Nigeria's progress.

This piece examines the deep-seated corruption in both public and private sectors, the weak mechanisms of accountability, and the critical roles that civil society and the media play in fostering transparency.

### The Pervasiveness of Corruption
Nigerian corruption is a complex issue that permeates both the public and commercial sectors. It can take many forms, such as electoral fraud, nepotism, embezzlement, and bribery. Transparency International's Corruption Perceptions Index has continuously ranked Nigeria among the most corrupt countries, indicating how pervasive this problem is.

### Accountability: The Missing Link
Accountability is the cornerstone of good governance. It ensures that public officials are held responsible for their actions and decisions, promoting transparency and integrity. In Nigeria, however, accountability mechanisms have often been weak or ineffective.

### Path Towards Reform
To combat corruption and enhance accountability, Nigeria needs:

1. **Strengthened Institutions**: Oversight bodies must be empowered with adequate resources and authority.
2. **Legal and Regulatory Frameworks**: Enforcing anti-corruption laws and the Whistleblower Protection Act.
3. **Political Will and Leadership**: Genuine commitment from leaders to lead by example.
4. **Public Engagement**: Engaging citizens through awareness and education.
5. **Technological Innovations**: Leveraging e-governance to automate processes and increase transparency.

### A Call to Action
The journey toward a transparent Nigeria begins with individual and collective resolve. It is not merely a policy goal but a moral imperative for the survival of the democratic project.`,
        meta: ["8 min read", "June 12th Archive"],
    },
    {
        id: "gallery-1",
        type: "event",
        year: "2024",
        category: "Events",
        title: "Yiaga Africa Voter Awareness",
        subtitle: "Political Participation Campaign",
        description: "Led grassroots awareness campaigns for the FCT area council elections, driving record youth engagement across various Abuja districts.",
        meta: ["FCT, Abuja", "Ground Coordination"],
        images: [
            "/artifacts/image_1.jpeg",
            "/artifacts/image_2.jpeg",
            "/artifacts/image_3.jpeg",
            "/artifacts/image_4.jpeg"
        ]
    },
    {
        id: "babcock-2024",
        type: "education",
        year: "2024",
        category: "Academic",
        title: "B.Sc(Hons). Computer Science",
        subtitle: "Babcock University",
        description: "Second Class Upper Honors. Research Focus: Design of A Blockchain-based Voting System",
        meta: ["Class of 2024", "Ogun State"],
    },
    {
        id: "saferrs-2025",
        type: "volunteer",
        year: "2025",
        category: "Leadership",
        title: "NYSC CDS President",
        subtitle: "Safety and Emergency Response Ready Service (SAFERRS)",
        description: "Leading strategic initiatives for national safety and emergency preparedness. Coordinating community service activities and emergency response drills for the NYSC cohort.",
        meta: ["NYSC CDS", "Emergency Response"],
        tags: ["Leadership", "Safety", "Public Service"]
    },
    {
        id: "babcock-photographer",
        type: "volunteer",
        year: "2024",
        category: "Creative",
        title: "Campus Photographer",
        subtitle: "Campus Lifestyle | Babcock University",
        description: "Capturing the essence of campus culture and documenting lifestyle moments through high-end photography. Contributing to the visual narrative of the institutional legacy.",
        meta: ["Babcock University", "Visual Arts"],
        tags: ["Photography", "Creative Direction"]
    },
    {
        id: "huawei-2023",
        type: "work",
        year: "2023",
        category: "Telecommunications",
        title: "Network Engineer Intern",
        subtitle: "Huawei Technologies",
        description: "Managed data communication operations and 5G topology configuration for enterprise clients.",
    },
];

export type Venture = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    link?: string;
    tags?: string[];
};

export const VENTURES: Venture[] = [
    {
        id: "monisight",
        name: "Monisight",
        tagline: "Data-driven perception monitoring.",
        description: "Building financial education by monitoring transactions and giving data-grounded insights on it to empower informed financial decisions.",
        tags: ["FinTech", "Data Analytics", "Financial Literacy"]
    },
    {
        id: "consilo",
        name: "Consilo",
        tagline: "Strategic digital design agency.",
        description: "Consilo is a boutique design agency specializing in architecting premium digital experiences. We blend high-end aesthetics with functional engineering to build products that stand out in the modern digital landscape.",
        link: "https://consilo.agency",
        tags: ["Design", "UI/UX", "Branding"]
    },
    {
        id: "zowa",
        name: "Zowa Advisory",
        tagline: "Policy and governance consulting.",
        description: "Zowa Advisory provides strategic consulting at the intersection of technology, policy, and governance. We help institutions navigate complex regulatory environments and implement technology-driven transparency solutions.",
        link: "https://zowa.framer.website/",
        tags: ["Strategy", "Policy", "Governance"]
    },
];

export const COMPANIES = [
    { name: "FITC", id: "fitc" },
    { name: "Huawei", id: "huawei" },
    { name: "NNPC", id: "nnpc" },
    { name: "Stoj Group", id: "stoj" },
    { name: "Yiaga Africa", id: "yiaga" },
    { name: "NetcoDiestmann", id: "netco" },
];

export const SOCIALS = {
    linkedin: "https://linkedin.com/in/praiseibe",
    twitter: "https://x.com/_halel",
    email: "praiseibec@gmail.com",
    resume: "/resume.pdf",
};
