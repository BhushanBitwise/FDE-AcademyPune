export const curriculumPhases = [
  {
    phase: "PHASE 01",
    title: "Foundations & Scoping",
    weeks: "Weeks 1–4",
    tagline: "Establishing systems engineering discipline, baseline AI tooling, and business problem framing.",
    summary: "Build an ironclad foundation in Python, Git, and modern AI engineering environments, while simultaneously learning how to sit with stakeholders, dissect noisy business requirements, and frame solvable AI use cases.",
    technicalTrack: [
      {
        week: "Week 01",
        title: "Python for Systems Engineering & Modern Git Workflows",
        details: "Asynchronous programming (asyncio), typing, poetry, packaging, Git branching strategies, and CI/CD basics."
      },
      {
        week: "Week 02",
        title: "LLM Fundamentals & Foundation Model APIs",
        details: "Tokenization, context windows, temperature/top-p mechanics, latency benchmarking, and structured JSON output generation."
      },
      {
        week: "Week 03",
        title: "Prompt Engineering & Context Design",
        details: "Chain-of-thought, few-shot prompting, system message constraints, dynamic context packing, and anti-jailbreak defenses."
      },
      {
        week: "Week 04",
        title: "Tool Calling & Function Execution",
        details: "Function definitions, parameter validation with Pydantic, error recovery, and executing deterministic code snippets."
      }
    ],
    consultingTrack: [
      {
        week: "Week 01",
        title: "The Forward Deployed Engineer Mindset",
        details: "Understanding the bridge between business strategy and high-code delivery. Navigating customer politics and high-ambiguity environments."
      },
      {
        week: "Week 02",
        title: "Client Discovery & Problem Framing",
        details: "Interviewing operational stakeholders, mapping business workflows, and identifying genuine friction points versus vanity AI ideas."
      },
      {
        week: "Week 03",
        title: "Feasibility Analysis & Boundary Setting",
        details: "Evaluating whether an AI solution is technically and economically viable. Explicitly defining what will NOT be built in MVP scope."
      },
      {
        week: "Week 04",
        title: "The Technical Discovery Document",
        details: "Writing structured discovery artifacts, defining success metrics (latency, accuracy, ROI), and getting stakeholder sign-off."
      }
    ],
    milestone: "Delivery of a validated Technical Discovery Document and working CLI prototype evaluated against real messy customer data."
  },
  {
    phase: "PHASE 02",
    title: "Core Build & Architecture",
    weeks: "Weeks 5–12",
    tagline: "Constructing advanced RAG systems, microservices, and stateful agentic workflows.",
    summary: "Dive deep into the engineering core. Master vector databases, hybrid lexical/semantic retrieval, state graphs with LangGraph, and build high-throughput FastAPI backends.",
    technicalTrack: [
      {
        week: "Weeks 05–06",
        title: "Enterprise RAG Foundations & Advanced Chunking",
        details: "Hierarchical chunking, multi-modal document extraction, embedding model benchmarks, and vector indexing (Pinecone, Qdrant)."
      },
      {
        week: "Weeks 07–08",
        title: "Hybrid Retrieval & Cross-Encoder Re-Ranking",
        details: "BM25 sparse search combined with dense vector retrieval, reciprocal rank fusion (RRF), and Cohere/bge re-rankers."
      },
      {
        week: "Weeks 09–10",
        title: "Agentic Workflows with LangGraph & CrewAI",
        details: "State machines, cyclic reasoning loops, human-in-the-loop approval checkpoints, and multi-agent role distribution."
      },
      {
        week: "Weeks 11–12",
        title: "Model Context Protocol (MCP) & Custom Connectors",
        details: "Building production MCP servers and clients to securely expose SQL databases, Salesforce, and internal ERPs to LLMs."
      }
    ],
    consultingTrack: [
      {
        week: "Weeks 05–06",
        title: "Translating Architecture to Executive Stakeholders",
        details: "Creating intuitive architecture diagrams, explaining probabilistic systems to non-technical executives, and managing expectations."
      },
      {
        week: "Weeks 07–08",
        title: "Sprint Scoping & Agile Delivery Pods",
        details: "Running agile sprints within client constraints, handling requirement drift, and conducting bi-weekly progress demonstrations."
      },
      {
        week: "Weeks 09–10",
        title: "Risk Assessment & Ethical Guardrails",
        details: "Documenting safety risks, compliance checkpoints (DPDP, GDPR), brand safety guardrails, and customer consent flows."
      },
      {
        week: "Weeks 11–12",
        title: "ROI Modeling & Unit Economics",
        details: "Calculating cost-per-query, token burn rate projections, human labor offset value, and justifying enterprise technology investment."
      }
    ],
    milestone: "Fully functional multi-agent or RAG prototype running in a containerized environment with documented API contracts."
  },
  {
    phase: "PHASE 03",
    title: "Deployment Depth & Governance",
    weeks: "Weeks 13–20",
    tagline: "Deploying to production, implementing telemetry, guardrails, and hardening infrastructure.",
    summary: "Take systems out of local notebooks and into production clouds. Implement comprehensive evaluation harnesses, real-time guardrails, low-latency streaming, and strict IAM security.",
    technicalTrack: [
      {
        week: "Weeks 13–14",
        title: "Production Infrastructure (Docker, Kubernetes & AWS/GCP)",
        details: "Containerizing services, secrets management, GPU instance provisioning, and automated CI/CD deployment pipelines."
      },
      {
        week: "Weeks 15–16",
        title: "Evaluation Harnesses & Continuous Benchmarking",
        details: "Implementing RAGAS, DeepEval, and LangSmith. Creating gold standard test suites and measuring faithfulness, relevancy, and recall."
      },
      {
        week: "Weeks 17–18",
        title: "Real-Time Guardrails & Security Policies",
        details: "NeMo Guardrails, Amazon Bedrock Guardrails, PII masking, SQL injection protection, and defense against prompt injection."
      },
      {
        week: "Weeks 19–20",
        title: "Observability, Tracing & Cost Telemetry",
        details: "OpenTelemetry, Helicone, Arize AX, tracking token spend, tracing distributed multi-agent spans, and automated latency alerts."
      }
    ],
    consultingTrack: [
      {
        week: "Weeks 13–14",
        title: "Enterprise IT Security & Procurement Navigation",
        details: "Working with InfoSec teams, navigating SOC2, ISO27001 requirements, data residency constraints, and VPC peering."
      },
      {
        week: "Weeks 15–16",
        title: "User Acceptance Testing (UAT) Design",
        details: "Designing UAT protocols for probabilistic AI systems, measuring real user adoption, and gathering structured feedback."
      },
      {
        week: "Weeks 17–18",
        title: "Change Management & User Training",
        details: "Training client operators, creating self-serve documentation, and driving organizational shift from legacy processes to AI workflows."
      },
      {
        week: "Weeks 19–20",
        title: "Production Handover & SLA Documentation",
        details: "Authoring runbooks, defining incident escalation paths, and establishing maintenance and fine-tuning schedules."
      }
    ],
    milestone: "Live deployment on cloud infrastructure with zero critical vulnerabilities, automated observability dashboard, and passing evaluation scores."
  },
  {
    phase: "PHASE 04",
    title: "Capstone & Industry Mastery",
    weeks: "Weeks 21–32",
    tagline: "Simulated end-to-end enterprise engagement defended live in front of industry leaders.",
    summary: "Operate as a lead Forward Deployed Engineer on a complex enterprise client scenario. From initial messy brief to production cloud deployment, followed by an intensive defense in front of an expert panel.",
    technicalTrack: [
      {
        week: "Weeks 21–24",
        title: "Capstone Build: Architecture & Sprint 1-2",
        details: "End-to-end architecture implementation: complex vector indexing, custom tool-calling agents, and real-time streaming interfaces."
      },
      {
        week: "Weeks 25–28",
        title: "Capstone Build: Stress Testing, SLMs & Fine-Tuning",
        details: "High-concurrency load testing, domain-specific Small Language Model (SLM) adaptation, latency optimization, and automated failover."
      },
      {
        week: "Weeks 29–30",
        title: "Security Audit, Final Packaging & Documentation",
        details: "Penetration testing, complete API specifications, comprehensive codebase documentation, and reproduction scripts."
      },
      {
        week: "Weeks 31–32",
        title: "Live Production Defense & Demo Day",
        details: "Live demonstration of the production system under live chaos injection and technical interrogation by veteran FDE practitioners."
      }
    ],
    consultingTrack: [
      {
        week: "Weeks 21–24",
        title: "Steering Committee Management",
        details: "Managing weekly client steering meetings, handling shifting business priorities, and managing scope trade-offs."
      },
      {
        week: "Weeks 25–28",
        title: "Executive Business Case & Financial Impact Defense",
        details: "Presenting comprehensive ROI metrics, productivity uplift models, and business risk mitigation analyses."
      },
      {
        week: "Weeks 29–30",
        title: "Portfolio Packaging & Architecture Whitepapers",
        details: "Publishing hiring-grade technical case studies and architectural whitepapers designed for top enterprise hiring managers."
      },
      {
        week: "Weeks 31–32",
        title: "Career Transition & Industry Technical Interviews",
        details: "System design mock interviews, consulting case decompositions, and direct introductions to the FDE hiring network."
      }
    ],
    milestone: "Full Capstone Graduation Certification, verified GitHub repository with live deployed URL, and completed FDE Academy Portfolio Defense."
  }
];
