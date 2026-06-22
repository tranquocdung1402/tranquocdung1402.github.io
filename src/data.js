export const CV_DATA = {
  name: 'TRAN QUOC DUNG',
  title: 'SENIOR SOFTWARE ENGINEER & ENGINEERING TEAM LEAD',
  dob: '14/02/1993',
  gender: 'Male',
  status: 'Open to Work',

  contact: {
    email: 'tranquocdung1402@gmail.com',
    phone: '+84 905 242 630',
    location: '06 Hung Hoa 6, Hoa Cuong, Da Nang, Vietnam',
  },

  stats: [
    { value: '8+',      label: 'Years Experience' },
    { value: '10',      label: 'Engineers Led' },
    { value: '85%+',    label: 'Test Coverage' },
    { value: '~40%',    label: 'Latency Reduced' },
  ],

  summary: [
    '8+ years of backend engineering experience designing microservices, cloud-native systems, and distributed event-driven architectures on GCP.',
    'Expert in Java 21 (Virtual Threads, Records), Spring Boot 3.x, Armeria gRPC, MyBatis, PostgreSQL/AlloyDB, Redis, Elasticsearch, and multi-tenant SaaS architecture.',
    'Led a 10-engineer team delivering a mission-critical enterprise contract management platform for a Japanese legal-tech company (LegalOn Technologies), consistently hitting 85%+ test coverage across all services.',
    'Hands-on with Infrastructure as Code (Terraform, GKE, ArgoCD GitOps), CI/CD pipelines (GitHub Actions), OPA/Rego policy enforcement, and OpenTelemetry observability with Datadog SLO alerting.',
  ],

  coreTech: [
    'Java', 'Golang', 'Python', 'ReactJS', 'VueJS',
    'Spring Boot', 'SQL / NoSQL', 'GCP & Firebase',
    'AI-Native Coding', 'Microservices & gRPC',
  ],

  // Full categorized technical skills (from CV)
  skillGroups: [
    {
      category: 'Core Languages & Runtimes',
      skills: ['Java 21', 'Golang', 'Python', 'SQL', 'JavaScript / TypeScript'],
    },
    {
      category: 'Frameworks & APIs',
      skills: ['Spring Boot 3.x', 'Spring Security', 'Spring Data', 'Spring Cloud', 'Armeria', 'gRPC', 'MyBatis', 'ReactJS', 'VueJS'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'AlloyDB', 'MySQL', 'Redis', 'Elasticsearch', 'NoSQL'],
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['GCP (GKE, Pub/Sub, GCS, Firebase)', 'Kubernetes', 'Terraform', 'ArgoCD', 'Docker', 'AWS (familiar)'],
    },
    {
      category: 'Messaging & Architecture',
      skills: ['GCP Pub/Sub', 'RabbitMQ', 'Microservices', 'Hexagonal / Clean Architecture', 'Domain-Driven Design', 'BFF', 'Event-Driven'],
    },
    {
      category: 'Observability & Security',
      skills: ['OpenTelemetry', 'Datadog', 'SLO / Burn-rate Alerting', 'OAuth2', 'OPA/Rego', 'OWASP'],
    },
    {
      category: 'CI/CD & DevOps',
      skills: ['GitHub Actions', 'ArgoCD GitOps', 'Zero-downtime Deployment'],
    },
    {
      category: 'AI & Productivity Tools',
      skills: ['Claude Code', 'Codex', 'Gemini CLI', 'Custom AI Agents & MCP', 'Multi-agent Orchestration'],
    },
    {
      category: 'Practices',
      skills: ['Agile / Scrum', 'TDD (85%+ coverage)', 'Code Review', 'API Design', 'System Scalability'],
    },
  ],

  experience: [
    {
      company: 'BAP IT JSC',
      role: 'Engineering Team Lead & Senior Software Engineer',
      period: 'Nov 2022 – Present',
      location: 'Da Nang, Vietnam  ·  Client: LegalOn Technologies, Japan',
      projects: [
        {
          name: 'Marshall — Enterprise Contract Management Platform',
          period: 'Mar 2023 – Present',
          description:
            'Multi-tenant legal document processing system on GKE for LegalOn Technologies (Japan). Led a 10-engineer team from design to production as Team Lead.',
          responsibilities: [
            'Architected and delivered a multi-tenant contract management platform on GKE; led a 10-engineer team from design to production.',
            'Built event-driven pipelines with GCP Pub/Sub, OAuth2/Spring Security auth, Redis caching, and Elasticsearch full-text search — reduced processing latency by ~40%.',
            'Maintained 85%+ JUnit test coverage; enforced CI/CD quality gates via GitHub Actions; set up OpenTelemetry + Datadog SLO alerting across 10+ microservices.',
            'Mentored engineers on hexagonal architecture; migrated stack to Java 21 Virtual Threads + Spring Boot 3.x, cutting thread contention under peak load.',
          ],
          technologies: ['Java 21', 'Spring Boot 3.x', 'Armeria', 'gRPC', 'MyBatis', 'PostgreSQL', 'AlloyDB', 'Redis', 'Elasticsearch', 'Pub/Sub', 'GKE', 'Terraform', 'ArgoCD', 'Datadog', 'GitHub Actions'],
        },
        {
          name: 'Freekey — Digital Car Key SDK',
          period: 'Nov 2022 – Mar 2023',
          description:
            'Server-side key management SDK for mobile car-door encryption, covering the digital key lifecycle and device communication.',
          responsibilities: [
            'Developed RESTful APIs for digital key lifecycle (provisioning, revocation, management).',
            'Enforced security-by-design with JUnit test suites and code review gates.',
          ],
          technologies: ['Java', 'Spring Boot', 'MySQL', 'JUnit'],
        },
      ],
    },
    {
      company: 'ARCH Vietnam Co., Ltd',
      role: 'Java Backend Developer',
      period: 'Jun 2018 – Oct 2022',
      location: 'Da Nang, Vietnam',
      projects: [
        {
          name: 'TOPPAN — Enterprise Printing Platform',
          period: '2022',
          description: 'B2B printing platform with admin and user-facing modules.',
          responsibilities: [
            'Built admin and user APIs for a B2B printing platform.',
            'Wrote performance test suites to validate throughput under load.',
          ],
          technologies: ['Java', 'SQL'],
        },
        {
          name: 'IBM — Legacy Database Migration',
          period: '2022',
          description: 'Migration of a legacy database schema to a new target schema using SQL procedures.',
          responsibilities: [
            'Wrote SQL transformation procedures to migrate legacy schema.',
            'Validated 100% data parity between source and target.',
          ],
          technologies: ['SQL'],
        },
        {
          name: 'CR — Software Maintenance',
          period: 'Nov 2019',
          description: 'Maintenance and feature upgrades for an existing production system.',
          responsibilities: [
            'Added new features and modified existing ones per customer requirements.',
          ],
          technologies: ['Java', 'SQL'],
        },
        {
          name: 'Corelearn — Learning Management System',
          period: 'May 2019',
          description: 'E-learning platform supporting courses, payments, comments, and user management.',
          responsibilities: [
            'Developed course, payment, and user management APIs with Java Servlet.',
            'Applied security best practices and ensured cross-browser compatibility.',
          ],
          technologies: ['Java Servlet', 'MySQL', 'JUnit'],
        },
      ],
    },
  ],

  certifications: [
    {
      period: '2018',
      title: 'Java Professional Development Certificate',
      institution: 'Iviettech Training Institute',
      subject: 'Comprehensive Java programming curriculum covering OOP, data structures, design patterns, and enterprise development.',
    },
  ],

  honors: [
    {
      year: '2025',
      title: 'High Performance Leader Award',
      issuer: 'BAP IT JSC',
      desc: 'Recognized for outstanding leadership across a 10-engineer team, on-time delivery of the Marshall platform, and cross-functional collaboration with Japanese stakeholders.',
    },
    {
      year: '2025',
      title: 'High Performance Project Award',
      issuer: 'BAP IT JSC',
      desc: 'Awarded to the Marshall project team for exceptional delivery quality, technical innovation, and measurable client satisfaction improvement.',
    },
  ],

  competencies: [
    {
      icon: 'Server',
      title: 'Backend Architecture',
      desc: 'Microservices, Clean/Hexagonal Architecture, gRPC, REST, event-driven with Pub/Sub.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud Native & DevOps',
      desc: 'GCP, Kubernetes, Terraform, ArgoCD GitOps, GitHub Actions CI/CD.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Quality & Security',
      desc: 'OAuth2, OPA/Rego policy enforcement, OWASP best practices, 85%+ test coverage.',
    },
    {
      icon: 'Activity',
      title: 'Observability',
      desc: 'OpenTelemetry tracing, Datadog monitoring, SLO/burn-rate alerting.',
    },
    {
      icon: 'Users',
      title: 'Technical Leadership',
      desc: 'Mentoring a 10-engineer team, code reviews, Agile/Scrum delivery, AI-assisted workflows.',
    },
    {
      icon: 'Zap',
      title: 'Performance Engineering',
      desc: 'Java 21 Virtual Threads, async I/O, Redis caching, Elasticsearch search, ~40% latency reduction.',
    },
  ],
}
