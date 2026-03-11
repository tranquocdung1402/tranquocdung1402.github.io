export const CV_DATA = {
  name: 'TRAN QUOC DUNG',
  title: 'SENIOR SOFTWARE DEVELOPER & TEAM LEAD',
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
      role: 'Senior Software Developer & Team Lead',
      period: '2022 – Present',
      projects: [
        {
          name: 'Marshall — Enterprise Contract Management Platform',
          period: '2022 – 2026',
          description:
            'Enterprise contract management platform for LegalOn Technologies (Japan). Multi-tenant legal document processing system serving Japanese legal teams on GKE.',
          responsibilities: [
            'Team size: 20  ·  Role: Team Lead',
            'Environment: Armeria (Java 21), Spring Boot, gRPC, REST API, PostgreSQL, AlloyDB, GCP, GKE, Pub/Sub, Kubernetes, Terraform',
            'Responsibilities: Create DD, Implement Source, JUnit, Batch, Manage Team, Tech Lead',
            'Project scope: Design, CRUD, Manage team, Fix performance, Fix bug production. Renovate lib, Migration data, Migration proto (BSR → self-host)',
          ],
          technologies: ['Java 21', 'Spring Boot 3.x', 'Armeria', 'gRPC', 'Protocol Buffers', 'MyBatis', 'PostgreSQL', 'AlloyDB', 'Pub/Sub', 'GCS', 'GKE', 'Kubernetes', 'Terraform', 'ArgoCD', 'OpenTelemetry', 'Datadog', 'GitHub Actions', 'OPA/Rego'],
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
