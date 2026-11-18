export const programs = [
  {
    id: "fde-core",
    slug: "forward-deployed-engineering",
    number: "01",
    title: "Forward Deployed Engineering",
    tagline: "The flagship 32-week immersive bridging client discovery, applied AI, and production deployment.",
    category: "FLAGSHIP IMMERSIVE",
    status: "Confirmed Offering",
    duration: "32 Weeks",
    format: "In-Person (Pune) / Hybrid",
    level: "Advanced / Practitioner",
    image: "/images/fde-main-lecture-space.webp",
    description: "Train at the intersection of business strategy and high-impact systems engineering. Learn how Palantir-style Forward Deployed Engineers identify the real operational problem, design scalable agentic & RAG pipelines, and ship production code into messy enterprise environments.",
    keyTopics: [
      "Enterprise Problem Scoping & Boundary Setting",
      "LLM Application Engineering & Context Design",
      "Retrieval-Augmented Generation (RAG) at Scale",
      "Agentic AI & Multi-Agent Orchestration (LangGraph, CrewAI)",
      "Model Context Protocol (MCP) & Tool Integration",
      "Production Deployments, IAM, Guardrails & Evaluation"
    ],
    targetRoles: [
      "Forward Deployed Engineer (FDE)",
      "Applied AI Solutions Architect",
      "AI Systems Engineer"
    ],
    highlights: [
      "1 Live Enterprise Capstone Defense in front of Industry Panel",
      "Dual-Track format: 50% High-Code Systems + 50% Consulting Scoping",
      "Direct code reviews from practicing Forward Deployed Engineers",
      "Access to FDE Labs GPU compute clusters and evaluation harnesses"
    ],
    outcomes: "Graduates possess a verifiable, hiring-grade portfolio of production AI deployments running on live cloud infrastructure with full observability."
  },
  {
    id: "applied-ai",
    slug: "applied-ai-engineering",
    number: "02",
    title: "Applied AI Engineering",
    tagline: "Deep technical mastery of foundation models, fine-tuning, and scalable inference infrastructure.",
    category: "TECHNICAL TRACK",
    status: "Confirmed Offering",
    duration: "24 Weeks",
    format: "Hybrid / In-Person",
    level: "Intermediate to Advanced",
    image: "/images/fde-ai-systems-class.webp",
    description: "Move past toy API wrappers. Build enterprise-grade AI backends using FastAPI, asynchronous streaming, vector databases, and custom SLM fine-tuning tailored for domain-specific business operations.",
    keyTopics: [
      "Foundation Model Internals & Prompt Optimization",
      "Vector Search & Hybrid Retrieval (Pinecone, Qdrant)",
      "Custom Embeddings & Re-ranking Architectures",
      "Evaluation Harnesses (RAGAS, DeepEval, LangSmith)",
      "Dockerized Microservices & Cloud GPU Orchestration",
      "Streaming APIs & Webhook Automation"
    ],
    targetRoles: [
      "Applied AI Engineer",
      "GenAI Backend Engineer",
      "Machine Learning Systems Engineer"
    ],
    highlights: [
      "Hands-on optimization of latency, tokens, and inference cost",
      "Production telemetry with Helicone, Arize, and OpenTelemetry",
      "Building high-concurrency enterprise pipelines"
    ],
    outcomes: "Architect and scale resilient AI applications capable of processing thousands of queries per minute with strict SLOs."
  },
  {
    id: "agentic-ai",
    slug: "agentic-ai-systems",
    number: "03",
    title: "Agentic AI & Multi-Agent Systems",
    tagline: "Building autonomous, self-correcting agent teams with LangGraph, CrewAI, and MCP.",
    category: "SPECIALIZED POD",
    status: "Confirmed Offering",
    duration: "16 Weeks",
    format: "Intensive Studio",
    level: "Advanced",
    image: "/images/fde-collaborative-learning.webp",
    description: "Design multi-agent systems that autonomously reason, invoke external APIs via Model Context Protocol (MCP), coordinate across specialized roles, and self-correct when code or planning fails.",
    keyTopics: [
      "State Machines & Cyclic Workflows with LangGraph",
      "Role-Based Agent Orchestration with CrewAI & Agno",
      "Model Context Protocol (MCP) Server & Client Construction",
      "Deterministic Guardrails & Human-in-the-Loop Interventions",
      "Multi-Agent Memory Architecture & Context Compaction",
      "Benchmarking & Stress-Testing Autonomous Execution"
    ],
    targetRoles: [
      "Agentic AI Engineer",
      "Autonomous Systems Architect",
      "AI Automation Specialist"
    ],
    highlights: [
      "Build self-healing code debugging and SQL generation agents",
      "Deploy custom MCP servers connecting internal enterprise APIs",
      "Run multi-agent simulations with dynamic task allocation"
    ],
    outcomes: "Deploy production-grade autonomous agent clusters with deterministic guardrails and zero hallucinated runaway loops."
  },
  {
    id: "enterprise-rag",
    slug: "enterprise-rag-knowledge-systems",
    number: "04",
    title: "Enterprise RAG & Knowledge Systems",
    tagline: "Production-grade retrieval across millions of multi-modal unstructured enterprise documents.",
    category: "SPECIALIZED POD",
    status: "Confirmed Offering",
    duration: "16 Weeks",
    format: "Intensive Studio",
    level: "Intermediate to Advanced",
    image: "/images/fde-lobby-reception.webp",
    description: "Master the nuances of production RAG. Go beyond naive chunking to implement hierarchical indexing, metadata filtering, hybrid semantic-lexical search, re-ranking, and strict data security compliance.",
    keyTopics: [
      "Advanced Chunking & Multi-Modal Document Parsing",
      "Hybrid Search (Dense Vectors + BM25 Sparse Lexical)",
      "Cross-Encoder Re-Ranking & Context Window Pruning",
      "Role-Based Access Control (RBAC) in Vector Databases",
      "Synthetic Query Generation & Hypothetical Document Embeddings (HyDE)",
      "Continuous RAG Metric Tracking (Context Relevance, Faithfulness)"
    ],
    targetRoles: [
      "RAG Solutions Engineer",
      "Knowledge Systems Architect",
      "Enterprise Search Engineer"
    ],
    highlights: [
      "Process complex PDFs, financial tables, and internal Wikis",
      "Benchmark retrieval accuracy against ground truth datasets",
      "Prevent data leakage across enterprise tenant boundaries"
    ],
    outcomes: "Deliver enterprise knowledge systems with sub-second retrieval times, zero cross-tenant contamination, and 95%+ faithfulness."
  },
  {
    id: "ai-architecture",
    slug: "ai-solutions-architecture",
    number: "05",
    title: "AI Solutions Architecture",
    tagline: "Enterprise system design, governance, cloud infrastructure, and total cost of ownership modeling.",
    category: "PROPOSED OFFERING",
    status: "Proposed / Upcoming",
    duration: "12 Weeks Executive",
    format: "Weekend Executive / Online",
    level: "Architect / Tech Lead",
    image: "/images/fde-dubai-office.webp",
    description: "Designed for engineering managers and senior architects transitioning their organizations to AI. Focuses on system trade-offs, private cloud deployment (AWS/GCP/Azure), compliance (GDPR/DPDP), and cost management.",
    keyTopics: [
      "High-Level System Design for Enterprise GenAI",
      "Cost-Performance-Latency Optimization Curves",
      "Private VPC & On-Premises Model Hosting (vLLM, Ollama)",
      "Enterprise Governance, Security & Compliance",
      "Vendor Evaluation & Build vs. Buy Strategy",
      "Architectural Trade-Off Documentation (ADRs)"
    ],
    targetRoles: [
      "GenAI Solutions Architect",
      "Director of AI Engineering",
      "Principal Systems Architect"
    ],
    highlights: [
      "Executive architecture case defenses",
      "Budget modeling for enterprise LLM workloads",
      "Secure sovereign AI deployment architectures"
    ],
    outcomes: "Lead organizational AI technical strategy, write rigorous ADRs, and optimize infrastructure spend across enterprise scale."
  },
  {
    id: "ai-software-dev",
    slug: "ai-driven-software-development",
    number: "06",
    title: "AI-Driven Software Development",
    tagline: "Empowering full-stack engineers with autonomous agentic copilots and modern AI toolchains.",
    category: "PROPOSED OFFERING",
    status: "Proposed / Upcoming",
    duration: "10 Weeks",
    format: "Hands-on Bootcamp",
    level: "All Engineering Levels",
    image: "/images/fde-singapore-office.webp",
    description: "Accelerate your software engineering throughput 5x. Master AI-assisted architecture design, synthetic test generation, automated refactoring, and CI/CD integration with specialized developer agents.",
    keyTopics: [
      "Next-Gen Coding Copilots & CLI Agents",
      "Automated Test Generation & Regression Suites",
      "Agentic Codebase Refactoring & Migration",
      "AI-Assisted API Contract Generation",
      "Continuous Integration with LLM Verification Gates",
      "Engineering Ergonomics & Productive Developer Workflows"
    ],
    targetRoles: [
      "AI-Augmented Full-Stack Engineer",
      "Senior Software Engineer",
      "Technical Lead"
    ],
    highlights: [
      "Integrate AI agents into real GitHub/GitLab repositories",
      "Achieve 90%+ automated test coverage with LLM verification",
      "Build bespoke internal developer productivity tools"
    ],
    outcomes: "Modernize legacy codebases and ship reliable enterprise software at unprecedented speed using AI developer tooling."
  }
];
