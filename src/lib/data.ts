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
    secondaryLink?: string;
    secondaryLinkLabel?: string;
};

export const COMPENDIUM_DATA: CompendiumItem[] = [
    {
        id: "fitc-2025",
        type: "work",
        year: "2025",
        category: "Professional",
        title: "Business Analyst Trainee",
        subtitle: "FITC",
        description: "Transforming complex datasets into actionable insights for institutions. Analyzing survey and behavioral data to identify participation trends and recommending evidence-based improvements.",
        meta: ["Abuja, Nigeria", "Current Record"],
        tags: ["Data Analytics", "Strategic Growth, Sales, Consulting and Advisory"],
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
        title: "Portfolio V1",
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
        id: "closet-codes",
        type: "project",
        year: "2025",
        category: "Design",
        title: "The Closet Codes",
        subtitle: "Design Journal for Justin UG",
        description: "A premium design journal exploring fashion, aesthetics, and minimalism through a curated visual narrative.",
        images: ["/artifacts/closet_codes.png"],
        link: "https://justinug.gumroad.com/l/TheClosetCodes",
        tags: ["Creative Direction", "Editorial Design"],
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
        id: "blockvote-project",
        type: "project",
        year: "2024",
        category: "Civic Tech",
        title: "Blockvote",
        subtitle: "Blockchain Voting System",
        description: "A decentralized, secure, and transparent platform for conducting elections. Built to ensure integrity and accessibility in democratic processes.",
        images: [
            "/artifacts/blockvote1.png",
            "/artifacts/blockvote3.png",
            "/artifacts/blockvote2.png"
        ],
        link: "https://blockvote-psi.vercel.app/",
        secondaryLink: "https://www.researchgate.net/publication/380806587_DESIGN_AND_IMPLEMENTATION_OF_A_BLOCKCHAIN_VOTING_SYSTEM",
        secondaryLinkLabel: "Read Research Paper",
        tags: ["Blockchain", "Security", "Web3"],
    },
    {
        id: "busa-app",
        type: "project",
        year: "2024",
        category: "Product Design",
        title: "Busa App",
        subtitle: "Babcock University Student App",
        description: "Co-led the entire design process for the official student application of Babcock University, focusing on user experience and institutional integration.",
        tags: ["UI/UX", "Product Leadership"],
    },
    {
        id: "ease-consumers",
        type: "project",
        year: "2024",
        category: "Marketplace",
        title: "Ease for Consumers",
        subtitle: "Marketplace Platform",
        description: "Designed the consumer-facing platform of the Ease application, a marketplace optimized for seamless transaction and discovery.",
        tags: ["E-commerce", "Marketplace Design"],
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
        description: "This is a piece on the systemic challenges of corruption and the critical necessity of accountability in the Nigerian democratic project.",
        fullBody: `Democracy Day in Nigeria is more than a public holiday; it is a profound marker of our transition to civilian rule in 1999 and a necessary moment of introspective pause. However, as we commemorate this milestone, we must confront the twin shadows that consistently threaten our progress: systemic corruption and the persistent erosion of public accountability.

Ranked **148th out of 180** on Transparency International’s Corruption Perception Index, Nigeria faces an existential challenge that undermines every pillar of its development.

## The Anatomy of Systemic Corruption

Corruption in the Nigerian context is not merely a series of isolated incidents; it is a pervasive architecture that permeates both the halls of governance and the corridors of commerce. From electoral fraud and nepotism to the high-level embezzlement of public funds, its impact is devastatingly tangible. 

The redirection of vital resources away from healthcare, education, and infrastructure into private pockets creates a vicious cycle of poverty and inequality. Perhaps most damaging is the psychological toll: the erosion of public trust in democratic institutions and the rule of law.

## Accountability: The Essential Safeguard

If democracy is the engine of a nation, accountability is its essential governing mechanism. Yet, in Nigeria, this link remains chronically weak. A pervasive culture of impunity—often driven by a lack of political will—allows high-profile corruption cases to stall or vanish entirely.

Furthermore, the very institutions designed to protect the integrity of the state—the judiciary and anti-corruption agencies—are frequently hamstrung by underfunding and political interference, leaving them incapable of acting as the robust checks they were meant to be.

## Watchdogs and Catalysts

Amidst these challenges, **Civil Society Organizations (CSOs)** and an independent media remain the most critical champions of transparency. Organizations like SERAP and NEITI have been instrumental in surfacing deep-seated malpractice and advocating for legislative reform.

Through investigative journalism, the media has the power to mobilize public opinion and demand justice. However, this role comes at a steep price, as journalists frequently face harassment and violence in their pursuit of the truth.

## A Roadmap for Renewal

Reversing this tide requires more than rhetoric; it demands comprehensive structural reform:

- **Institutional Independence**: Empowering anti-corruption agencies and the judiciary with genuine autonomy and adequate resources.
- **Legislative Enforcement**: Moving beyond the existence of laws to their actual enforcement, including the robust implementation of the Whistleblower Protection Act.
- **Leadership by Example**: Cultivating a new generation of political leaders committed to transparency as a fundamental principle, not a political slogan.
- **Citizen Engagement**: Fostering a culture of integrity through education and active public participation in governance.
- **Technological Innovation**: Utilizing e-governance and digital platforms to reduce human interface, automate public expenditure tracking, and increase transparency.

## Conclusion: Beyond the Ballot

True democracy extends far beyond the mere conduct of elections; it is defined by the resilience of its transparency and the strength of its accountability. While the journey toward a corruption-free Nigeria is steep, it remains attainable. Through collective commitment and the uncompromising pursuit of the rule of law, we can build a nation that reflects the true potential and well-being of all its citizens.`,
        meta: ["4 min read", "June 12th 2024"],
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
    linkedin: "https://www.linkedin.com/in/praise-ibe-3556a625b/",
    twitter: "https://x.com/_halel",
    email: "praiseibec@gmail.com",
    resume: "https://drive.google.com/file/d/1kJrLn1_aw1UqzWwf_g94rVMCXBteAtQW/view?usp=sharing",
};
