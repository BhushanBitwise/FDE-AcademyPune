export const caseStudies = [
  {
    id: "payment-fraud",
    title: "Real-Time Payment Fraud Anomaly Detection",
    inspiredBy: "Fintech & Payment Gateways (e.g., Stripe / Razorpay pattern)",
    badge: "FINTECH ARCHITECTURE",
    challenge: "Traditional rule-based fraud engines suffer from high false-positive rates during peak sales spikes, causing legitimate customer transaction drops and millions in lost revenue.",
    solution: "A Forward Deployed AI system combining sub-50ms lightweight feature extraction with hybrid graph neural networks and LLM reasoning for high-ambiguity edge cases.",
    architecture: [
      "FastAPI + Redis Streams for low-latency ingest",
      "Qdrant Vector DB for behavioral transaction embeddings",
      "Fine-tuned Small Language Model (SLM) for explainable fraud audits",
      "Human-in-the-loop escalation dashboard for compliance teams"
    ],
    expectedOutcome: "Reduced false-positive transaction declines by 38% while identifying zero-day fraud patterns within 120 seconds of emergence."
  },
  {
    id: "crm-enrichment",
    title: "Autonomous CRM Pipeline Intelligence & Auto-Enrichment",
    inspiredBy: "Enterprise SaaS (e.g., Salesforce / HubSpot pattern)",
    badge: "ENTERPRISE SAAS",
    challenge: "Enterprise account executives spend 15+ hours weekly manually researching prospects, resulting in stale lead data, missed buying signals, and slow outbound response times.",
    solution: "An agentic multi-agent workflow that monitors SEC filings, job boards, and tech stack telemetry to autonomously synthesize executive dossiers and enrich CRM records.",
    architecture: [
      "CrewAI multi-agent pod (Researcher, Synthesizer, CRM Integrator)",
      "Model Context Protocol (MCP) server for Salesforce REST API",
      "Serper & Firecrawl for web scraping & citation verification",
      "LangSmith evaluation harness for contact accuracy verification"
    ],
    expectedOutcome: "Saved 12+ hours per representative per week and improved outbound email conversion rates by 42% through hyper-personalized account intelligence."
  },
  {
    id: "ticket-intelligence",
    title: "Enterprise IT & Support Ticket Resolution Engine",
    inspiredBy: "ITSM Platforms (e.g., Freshworks / Zendesk pattern)",
    badge: "ITSM & DEVOPS",
    challenge: "Tier-1 enterprise support queues face crippling backlogs of repetitive technical tickets, slowing down engineering teams and breaching critical customer SLAs.",
    solution: "A production RAG and agentic triage system that validates customer environment logs, retrieves relevant knowledge base articles, generates code patches, and submits test PRs.",
    architecture: [
      "Pinecone Vector Database with hybrid lexical BM25 indexing",
      "LangGraph cyclic workflow with deterministic linting validation",
      "Amazon Bedrock Guardrails for PII & credential scrubbing",
      "GitHub & Jira webhooks with bidirectional sync"
    ],
    expectedOutcome: "Automated resolution of 47% of tier-1 tickets with zero human intervention and reduced average resolution time from 4.2 hours to 6 minutes."
  },
  {
    id: "api-doc-gen",
    title: "Automated API Contract & Documentation Synchronizer",
    inspiredBy: "Developer Platforms (e.g., Postman pattern)",
    badge: "DEVELOPER TOOLING",
    challenge: "Rapidly evolving backend microservices result in outdated OpenAPI specs, broken developer documentation, and costly integration bugs across distributed teams.",
    solution: "An autonomous developer agent that analyzes Git diffs and AST representations, tests endpoints against staging servers, and automatically publishes verified interactive documentation.",
    architecture: [
      "Tree-sitter AST parser for multi-language code analysis",
      "Claude 3.5 Sonnet with tool calling for schema validation",
      "Automated Postman collection generator via CI/CD hooks",
      "Helicone telemetry for monitoring documentation accuracy"
    ],
    expectedOutcome: "100% synchronization between live code releases and public API docs, reducing developer onboarding time from weeks to hours."
  },
  {
    id: "transaction-reconciliation",
    title: "Automated High-Volume Multi-Bank Reconciliation",
    inspiredBy: "Digital Banking (e.g., Razorpay / Plaid pattern)",
    badge: "BANKING & AUDIT",
    challenge: "Finance teams manually reconcile millions of ledger entries across varying bank statement formats, CSVs, and PDF invoices with high risk of manual error.",
    solution: "A multi-modal document parser combined with deterministic rule validation that matches transaction hashes, flags discrepancies, and generates audit-ready financial reports.",
    architecture: [
      "Unstructured.io & OCR pipeline for multi-format document ingestion",
      "PostgreSQL with pgvector for historical mismatch matching",
      "Deterministic reconciliation logic with LLM exception explanation",
      "SOC-2 compliant encrypted audit logging"
    ],
    expectedOutcome: "Cut end-of-month financial closing cycle from 9 business days to 4 hours with 99.98% automated reconciliation accuracy."
  },
  {
    id: "knowledge-management",
    title: "Enterprise Multi-Department Knowledge Assistant",
    inspiredBy: "Productivity Platforms (e.g., Notion / Confluence pattern)",
    badge: "KNOWLEDGE PLATFORM",
    challenge: "Organizational institutional knowledge is scattered across Google Docs, Slack threads, Jira tickets, and Confluence, making discovery painful and inconsistent.",
    solution: "A unified enterprise RAG system with strict Role-Based Access Control (RBAC), multi-hop reasoning, and real-time document syncing across all enterprise SaaS tools.",
    architecture: [
      "Hierarchical semantic chunking with cross-encoder re-ranking",
      "Qdrant vector engine with tenant and permission namespace isolation",
      "OpenTelemetry tracing for latency and retrieval relevancy audits",
      "Slack & Microsoft Teams bot integrations with verified citations"
    ],
    expectedOutcome: "Sub-second answer retrieval across 2M+ internal documents with zero unauthorized cross-department data leakage."
  }
];
