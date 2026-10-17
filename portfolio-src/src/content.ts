export const profile = {
  name: "Vinay Jain",
  email: "rvinayjain@icloud.com",
  linkedin: "https://www.linkedin.com/in/rvinayjain07/",
  location: "Hyderabad, India",
};
export interface Project {
  id: string;
  name: string;
  category: string;
  type: string;
  image: string;
  summary: string;
  detail: string;
  tags: string[];
  href: string;
}
const archive = "https://itsvinay.me/home/";
const sp = "https://mahindraecolecentrale-my.sharepoint.com/";
export const projects: Project[] = [
  {
    id: "vinai",
    name: "VinAI Technologies",
    category: "AI & Systems",
    type: "Venture / intelligent automation",
    image: "vinai",
    summary:
      "Business automation, intelligent outreach, and connected operations.",
    detail:
      "VinAI Technologies is where I explore the infrastructure a lean business needs: outreach, lead qualification, workflow orchestration, and the handoffs between tools. The ambition is to give one operator the execution capacity of a much larger team.",
    tags: ["Automation", "GTM systems", "Venture building"],
    href: "https://vinai.framer.website",
  },
  {
    id: "navkar",
    name: "Navkar Poly Print",
    category: "Products",
    type: "Commercial website / digital growth",
    image: "navkar",
    summary:
      "A digital front door for a packaging business, connected to the way it markets and sells.",
    detail:
      "Website, SEO, CRM integration, and digital marketing work for the family packaging business. My contribution covered the digital experience, brand positioning, lead management, and client coordination. My previous portfolio records a 25% improvement in digital sales during this work.",
    tags: ["Website", "SEO & CRM", "Digital growth"],
    href: "https://navkarpolyprint.framer.website/",
  },
  {
    id: "ceat",
    name: "CEATOps",
    category: "AI & Systems",
    type: "ERP system design / team case study",
    image: "ceat-erp",
    summary:
      "Connecting production, inventory, supply chain, and finance in one operating model.",
    detail:
      "A team ERP design project for a CEAT manufacturing scenario. The work models how information should move across production planning, supply chain, inventory, and finance. This is a system design case study, rather than a production deployment at CEAT.",
    tags: ["ERP", "Process design", "Operations"],
    href:
      sp +
      ":i:/g/personal/sm23ubef008_mahindrauniversity_edu_in/EbMn-ndPEphCluuqsJ4FK0EBuKBJI_gcbpxXI5a-GwIN1g?e=tmbgb8",
  },
  {
    id: "fynix",
    name: "Fynix",
    category: "Products",
    type: "Fintech / team product concept",
    image: "fynix",
    summary:
      "Smart payments, allocation, and gamified money management for Gen Z.",
    detail:
      "A team product case study exploring student finance: payments, budget allocation, and gamified money management. Prepared with MU-Prodigies for a product management case competition, connecting user needs, product decisions, and business-model thinking.",
    tags: ["Fintech", "Product strategy", "Team concept"],
    href:
      sp +
      ":b:/g/personal/sm23ubef008_mahindrauniversity_edu_in/EcOK4QxwvDhBpEj1wMdILVIBz32fk44pW9vUMnIkQWVYXw?e=UYBk97",
  },
  {
    id: "polymer",
    name: "Polymer Simulation Lab",
    category: "Products",
    type: "Interactive software / prototype",
    image: "polymer",
    summary: "Turning material behaviour into an interface you can explore.",
    detail:
      "An interactive polymer stress visualization and simulation project. Molecular structures, blend ratios, temperature inputs, and property comparisons are brought into an explorable interface. An educational prototype rather than a validated industrial materials model.",
    tags: ["Interactive tools", "Simulation", "Data visualization"],
    href: "https://vinayjain-07.github.io/polymer-stress-visualization/",
  },
  {
    id: "markets",
    name: "Market Modulations",
    category: "Research & Strategy",
    type: "Team research / Indian equities",
    image: "market-modulations",
    summary:
      "Investigating how corporate actions change the behaviour of equity prices.",
    detail:
      "Team research into the effects of corporate actions on Indian equities. Event-study methods, regression, and statistical testing connect market events with observed returns. The work informs how I think about evidence, risk, and measurable results.",
    tags: ["Equity research", "Econometrics", "R / EViews"],
    href:
      sp +
      ":b:/g/personal/sm23ubef008_mahindrauniversity_edu_in/ERg891Bbbv9Jope7zLSD0K0ByQnmuAtWmhS3ly1t00L22w?e=xLC2N9",
  },
  {
    id: "maharaja",
    name: "Forging a New Maharaja",
    category: "Research & Strategy",
    type: "M&A / team strategy case",
    image: "maharaja",
    summary:
      "The Air India–Vistara merger through integration, stakeholders, and value creation.",
    detail:
      "An M&A case study covering industry structure, strategic rationale, stakeholder effects, integration choices, and projected synergies for Air India and Vistara. Financial values in the presentation are case-study projections, not personal earnings.",
    tags: ["M&A", "Financial strategy", "Integration"],
    href:
      sp +
      ":b:/g/personal/sm23ubef008_mahindrauniversity_edu_in/EQOo0BIY35ZPh3h8LU5qAtEB9vzKUWhj4OF8eKxCG2bcoA?e=6dpfFU",
  },
  {
    id: "pytrack",
    name: "PyTrack",
    category: "Products",
    type: "Python / team software project",
    image: "pytrack",
    summary:
      "Records, grades, and attendance brought into one repeatable workflow.",
    detail:
      "A team Python application for student records, attendance, grades, and related workflows. Structured data and application logic turn recurring administration into a repeatable system.",
    tags: ["Python", "Data handling", "Workflow software"],
    href:
      sp +
      ":b:/g/personal/sm23ubef008_mahindrauniversity_edu_in/EXMysKs32vZItVhOTxAVKqcB9wdkwkWQ0HOWCmwahIcafQ?e=Xccvdt",
  },
  {
    id: "lowcode",
    name: "The End of Traditional Development",
    category: "AI & Systems",
    type: "Whitepaper / team research",
    image: "lowcode",
    summary:
      "A business case for building useful systems with low-code and no-code tools.",
    detail:
      "A team whitepaper examining low-code and no-code development through business innovation, workflow design, delivery constraints, and implementation economics. Part of the thinking behind making execution accessible to smaller teams.",
    tags: ["Low-code", "Automation", "Research"],
    href: archive,
  },
  {
    id: "cricklytics",
    name: "Cricklytics",
    category: "Research & Strategy",
    type: "SQL / data analysis",
    image: "cricklytics",
    summary: "From match records to structured queries and useful answers.",
    detail:
      "A SQL-led analysis of cricket league data, exploring how a structured database and focused queries uncover patterns in player and match performance.",
    tags: ["SQL", "Data analysis", "Reporting"],
    href:
      sp +
      ":b:/g/personal/sm23ubef008_mahindrauniversity_edu_in/EfgojE1wehtPsvAoMb3tY0cBqbvUKubSGFCM838gqbBpmA?e=B8g9ND",
  },
  {
    id: "storytelling",
    name: "Data Storytelling",
    category: "Research & Strategy",
    type: "Business analysis / communication",
    image: "data-storytelling",
    summary: "Making platform economics and audience data easier to act on.",
    detail:
      "A business storytelling project translating platform economics and data into a clear narrative, connecting analytical findings to business decisions.",
    tags: ["Business intelligence", "Storytelling", "Analysis"],
    href:
      sp +
      ":b:/g/personal/sm23ubef008_mahindrauniversity_edu_in/ER3k3uJq8kdCpos4ne1J9y8BeVnR7xZrjZQypLIzo26c-Q?e=flslsz",
  },
  {
    id: "census",
    name: "Census Data Analysis",
    category: "Research & Strategy",
    type: "Team research / population data",
    image: "census",
    summary:
      "Finding patterns in population data and turning them into a structured story.",
    detail:
      "Team research combining demographic data preparation, exploration, interpretation, and presentation to investigate population patterns.",
    tags: ["Data analysis", "Research", "Visualization"],
    href: archive,
  },
  {
    id: "gcube",
    name: "Green Groove Gourmet",
    category: "Products",
    type: "Team venture concept / business model",
    image: "gcube",
    summary:
      "The operating and commercial model for a sustainable restaurant concept.",
    detail:
      "A team venture concept spanning positioning, sustainability, operating choices, and restaurant economics. The work connects a concept with a proposed operating model.",
    tags: ["Business models", "Venture design", "Operations"],
    href: "https://sites.google.com/view/g-cube/home",
  },
  {
    id: "ceat-strategy",
    name: "CEAT: The Business Behind the Tyre",
    category: "Research & Strategy",
    type: "Industry / business strategy case",
    image: "ceat-strategy",
    summary: "Connecting manufacturing choices with competitive strategy.",
    detail:
      "A strategy study of the tyre industry and CEAT, exploring market structure, competitive positioning, manufacturing, and operating considerations. Analytical case work, rather than a client relationship.",
    tags: ["Industry research", "Strategy", "Manufacturing"],
    href: archive,
  },
  {
    id: "in-the-now",
    name: "In the Now",
    category: "Products",
    type: "Media / digital experience",
    image: "in-the-now",
    summary: "A digital home for conversations and future-facing stories.",
    detail:
      "A media and web design project exploring how ideas and conversations can be packaged into a coherent digital experience.",
    tags: ["Media", "Web design", "Content"],
    href: archive,
  },
  {
    id: "tissue-talks",
    name: "Tissue Talks",
    category: "Products",
    type: "Content / campaign",
    image: "tissue-talks",
    summary: "Making an everyday space a place for discovery.",
    detail:
      "A creative communication project making a library more inviting through stories and a campaign concept. Part of an exploration of narrative, distribution, and audience behaviour.",
    tags: ["Campaigns", "Storytelling", "Distribution"],
    href: "https://youtu.be/ojrYYWzUgco",
  },
];
export const reelImages = [
  "vinai",
  "navkar",
  "ceat-erp",
  "fynix",
  "polymer",
  "market-modulations",
  "maharaja",
  "pytrack",
  "lowcode",
  "cricklytics",
].map((image) => ({
  src: `/images/projects/${image}.webp`,
  alt: projects.find((p) => p.image === image)?.name ?? "",
}));
export const commercialResults = [
  {
    value: "$585K",
    label: "Qualified sales pipeline",
    detail: "Single-day agentic outbound · Aug 2026",
  },
  {
    value: "95%",
    label: "Lower token consumption",
    detail: "4M → approximately 200K tokens · ABM automation",
  },
  {
    value: "230",
    label: "Qualified prospects",
    detail: "Nasscom Future Forge + DevSparks campaigns",
  },
];
