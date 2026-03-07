export const CV_DATA = {
  name: 'TRAN QUOC DUNG',
  title: 'SENIOR / TECH LEAD JAVA DEVELOPER',
  dob: '1993',
  gender: 'Male',

  contact: {
    email: 'tranquocdung1402@gmail.com',
    phone: '+84 905 242 630',
    location: '06 Hung Hoa 6, Hoa Cuong, Da Nang, Vietnam',
    github: 'github.com/tranquocdung1402',
  },

  stats: [
    { value: '8+',      label: 'Years Experience' },
    { value: '6+',      label: 'Projects Delivered' },
    { value: '85%+',    label: 'Test Coverage' },
    { value: 'Tech Lead', label: 'Current Role' },
  ],

  summary: [
    '8+ years in backend development, microservices design, and cloud-native deployment on GCP.',
    'Expert in Java 21 (Virtual Threads, Records), Spring Boot 3.x, Armeria gRPC, MyBatis, and PostgreSQL/AlloyDB.',
    'Clean/Hexagonal Architecture, event-driven pipelines (Pub/Sub), async batch processing, and GCS Signed URL file management.',
    'Infrastructure as Code: Terraform, Kubernetes (GKE), ArgoCD GitOps; CI/CD with GitHub Actions and OPA/Rego security policies.',
    'Observability: OpenTelemetry distributed tracing, Datadog, SLO/burn-rate alerting. 85%+ test coverage across projects.',
  ],

  techCategories: [
    {
      category: 'Core Languages & Runtimes',
      color: 'blue',
      items: ['Java 21', 'Virtual Threads', 'Records', 'SQL'],
    },
    {
      category: 'Frameworks & APIs',
      color: 'violet',
      items: ['Spring Boot 3.x', 'Armeria (gRPC)', 'Protocol Buffers', 'MyBatis'],
    },
    {
      category: 'Cloud & Infrastructure',
      color: 'sky',
      items: ['GCP', 'Kubernetes (GKE)', 'Terraform', 'ArgoCD GitOps', 'Pub/Sub', 'AlloyDB'],
    },
    {
      category: 'CI/CD & DevOps',
      color: 'teal',
      items: ['GitHub Actions', 'OPA / Rego', 'SonarCloud', 'Docker'],
    },
    {
      category: 'Observability & Security',
      color: 'amber',
      items: ['OpenTelemetry', 'Datadog', 'Workload Identity', 'pgcrypto', 'SLO Alerting'],
    },
    {
      category: 'Databases',
      color: 'emerald',
      items: ['PostgreSQL', 'AlloyDB', 'MySQL'],
    },
    {
      category: 'Testing',
      color: 'rose',
      items: ['JUnit 5', 'Mockito', 'WireMock', 'Integration Testing'],
    },
    {
      category: 'AI & Productivity',
      color: 'purple',
      items: ['GitHub Copilot', 'Claude AI', 'Cursor AI', 'IntelliJ IDEA'],
    },
  ],

  experience: [
    {
      company: 'BAP IT JSC',
      role: 'Senior / Tech Lead Java Developer',
      period: '2022 – Present',
      projects: [
        {
          name: 'Marshall — Enterprise Contract Management Platform',
          period: '2022 – 2026',
          description:
            'Large-scale enterprise contract management platform for LegalOn Technologies (Japan). Core backend services handling file lifecycle management, async contract processing pipelines (12+ stages: virus scan, language detection, AI extraction, PDF generation), bulk Excel export/import, and due-date notifications — serving multi-tenant legal teams on GKE.',
          responsibilities: [
            'Designed Clean/Hexagonal Architecture across 8 modules (~1,500 Java files, 100+ UseCases, 15+ gRPC services); applied Strategy, Adapter, Factory, Composite, and Repository patterns for extensible async processing pipelines.',
            'Built event-driven contract processing pipeline (VirusCheck → MediaType → Parse → LanguageDetection → AI Extraction → File2Document) using Pub/Sub with sync/async adapter orchestration and deadlock-prevention logic.',
            'Implemented async Excel export and multi-threaded bulk CSV/Excel import APIs: GCS Pre-Signed URL (V4, 30s) for direct client upload, background workers with cancel support, and idempotent batch processing (~500 records/batch).',
            'Built data access layer with MyBatis + HikariCP on PostgreSQL/AlloyDB; applied pessimistic locking (SELECT FOR UPDATE) and manual SqlSession transaction management for concurrent contract modifications.',
            'Achieved 85%+ test coverage with JUnit 5, Mockito, TestContainers, WireMock, and ArchUnit; integrated OpenTelemetry distributed tracing and structured JSON logging (Logstash Encoder) across all services.',
          ],
          technologies: ['Java 21', 'Spring Boot 3.x', 'Armeria', 'gRPC', 'Protocol Buffers', 'MyBatis', 'HikariCP', 'PostgreSQL', 'AlloyDB', 'Google Cloud Pub/Sub', 'Google Cloud Storage', 'GKE', 'Kubernetes', 'Terraform', 'ArgoCD', 'OpenTelemetry', 'Datadog', 'JUnit 5', 'Mockito', 'TestContainers', 'WireMock', 'ArchUnit', 'GitHub Actions', 'OPA/Rego'],
        },
        {
          name: 'Freekey — Digital Car Key SDK',
          period: '2022',
          description:
            'SDK for encrypting and unlocking car doors via mobile app integration, including server-side key management and device communication.',
          responsibilities: [
            'Developed admin and user-facing APIs for digital key management.',
            'Ensured security, performance, and maintainability through code review and JUnit test suites.',
          ],
          technologies: ['Java Spring', 'MySQL'],
        },
      ],
    },
    {
      company: 'ARCH VIETNAM CO., LTD',
      role: 'Java Developer',
      period: '2018 – 2022',
      projects: [
        {
          name: 'TOPPAN — Printing Website',
          period: '2022',
          description: 'Full-featured printing website with admin and user-facing modules.',
          responsibilities: [
            'Built APIs and user-facing features; wrote test cases for functionality and performance.',
          ],
          technologies: ['Java', 'A2M5'],
        },
        {
          name: 'IBM — Database Migration',
          period: '2022',
          description: 'Migrated data from a legacy database to a new schema using SQL procedures and functions.',
          responsibilities: [
            'Wrote SQL transformation procedures; validated data parity between old and new schemas.',
          ],
          technologies: ['SQL', 'A2M5'],
        },
        {
          name: 'CR — Software Maintenance',
          period: 'Nov 2019',
          description: 'Maintenance and feature upgrades for an existing production system.',
          responsibilities: [
            'Added new features and modified existing ones per customer requirements.',
          ],
          technologies: ['Java', 'A2M5'],
        },
        {
          name: 'Corelearn — Learning Management System',
          period: 'May 2019',
          description: 'E-learning platform supporting courses, payments, comments, and user management.',
          responsibilities: [
            'Built APIs for courses, payments, and user features; optimized for security and cross-browser compatibility.',
          ],
          technologies: ['Java Servlet', 'MySQL', 'JUnit'],
        },
      ],
    },
  ],

  certifications: [
    {
      period: '2018',
      institution: 'Iviettech',
      subject: '',
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
      desc: 'OPA/Rego, SonarCloud, pgcrypto, Workload Identity, 85%+ test coverage.',
    },
    {
      icon: 'Activity',
      title: 'Observability',
      desc: 'OpenTelemetry tracing, Datadog monitoring, SLO/burn-rate alerting.',
    },
    {
      icon: 'Users',
      title: 'Technical Leadership',
      desc: 'Mentoring, code reviews, Agile/Scrum delivery, AI-assisted workflows.',
    },
    {
      icon: 'Zap',
      title: 'Performance Engineering',
      desc: 'Java 21 Virtual Threads, async I/O, HikariCP tuning, query optimization.',
    },
  ],
}
