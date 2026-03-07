// ─────────────────────────────────────────────────────────────────────────────
//  CV_DATA  — update this object to keep all personal info in one place
// ─────────────────────────────────────────────────────────────────────────────
export const CV_DATA = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'TRAN QUOC DUNG',
  title: 'SENIOR / TECH LEAD JAVA DEVELOPER',
  dob: '1993',
  gender: 'Male',

  // ── Contact — fill in your real values ───────────────────────────────────
  contact: {
    email: 'tranquocdung1402@gmail.com',
    phone: '+84 905 242 630',
    location: '06 Hung Hoa 6, Hoa Cuong, Da Nang, Vietnam',
    github: 'github.com/tranquocdung1402',
  },

  // ── Stats shown in hero cards ─────────────────────────────────────────────
  stats: [
    { value: '8+', label: 'Years Experience' },
    { value: '6+', label: 'Projects Delivered' },
    { value: '85%+', label: 'Test Coverage' },
    { value: 'Tech Lead', label: 'Current Role' },
  ],

  // ── Professional summary bullets ──────────────────────────────────────────
  summary: [
    'Over 8 years of experience in software development, system architecture design, microservices implementation, and cloud-native deployment on Google Cloud Platform.',
    'Strong expertise in Java 21 (Virtual Threads, Records), Spring Boot 3.x, Armeria gRPC framework, and MyBatis with PostgreSQL/AlloyDB.',
    'Proficient in system design with Clean Architecture (Hexagonal), event-driven patterns (Google Cloud Pub/Sub), and Infrastructure-as-Code (Terraform, Kubernetes, ArgoCD GitOps).',
    'Experienced in CI/CD pipelines with GitHub Actions, OPA/Rego policy enforcement, SonarCloud code quality, and automated deployment workflows.',
    'Distributed observability: OpenTelemetry tracing, Datadog monitoring, structured logging (Logstash Encoder), and SLO/burn-rate alerting.',
    'Passionate about mentoring junior/mid developers, conducting rigorous code reviews, and driving Agile/Scrum delivery.',
    'Knowledge of security best practices: Workload Identity Federation, pgcrypto encryption, OPA container security policies, and GCS Signed URL access control.',
    'Proficient in IntelliJ IDEA (primary), Visual Studio Code, and NetBeans IDE with deep knowledge of debugging & refactoring tools.',
    'Experienced with AI-assisted development: GitHub Copilot, Claude AI, ChatGPT, and Cursor AI Editor for code generation, architecture review, test scaffolding, and documentation.',
  ],

  // ── Technology categories (web grid + print skills) ───────────────────────
  techCategories: [
    {
      category: 'Core Languages & Runtimes',
      color: 'blue',
      items: ['Java 21', 'Virtual Threads', 'Records', 'SQL'],
    },
    {
      category: 'Frameworks & APIs',
      color: 'violet',
      items: ['Spring Boot 3.x', 'Armeria (gRPC)', 'Protocol Buffers', 'YAVI Validation', 'MyBatis'],
    },
    {
      category: 'Cloud & Infrastructure',
      color: 'sky',
      items: ['Google Cloud Platform', 'Kubernetes (GKE)', 'Terraform', 'ArgoCD GitOps', 'Google Pub/Sub', 'AlloyDB'],
    },
    {
      category: 'CI/CD & DevOps',
      color: 'teal',
      items: ['GitHub Actions', 'OPA / Rego', 'SonarCloud', 'Docker', 'HikariCP'],
    },
    {
      category: 'Observability & Security',
      color: 'amber',
      items: ['OpenTelemetry', 'Datadog', 'Logstash Encoder', 'SLO Alerting', 'Workload Identity', 'pgcrypto', 'GCS Signed URL'],
    },
    {
      category: 'Databases',
      color: 'emerald',
      items: ['PostgreSQL', 'AlloyDB', 'MySQL'],
    },
    {
      category: 'Testing',
      color: 'rose',
      items: ['JUnit 5', 'Mockito', 'WireMock', 'Integration Testing', 'E2E Testing'],
    },
    {
      category: 'AI & Productivity Tools',
      color: 'purple',
      items: ['GitHub Copilot', 'Claude AI', 'ChatGPT', 'Cursor AI', 'IntelliJ IDEA'],
    },
  ],

  // ── Professional experience ───────────────────────────────────────────────
  experience: [
    {
      company: 'BAP IT JSC',
      role: 'Senior / Tech Lead Java Developer',
      period: '2022 – Present',
      projects: [
        {
          name: 'Marshall — Enterprise Contract Management',
          period: '2022 – 2026',
          description:
            'Architected and delivered an enterprise contract management system that performs clause-by-clause comparison between legal documents and provides AI-driven editing recommendations to legal professionals. Originally built in TypeScript, underwent a full backend migration to Java Armeria to unify with LegalOn Technologies\' microservice ecosystem, leveraging gRPC for high-performance inter-service communication.',
          responsibilities: [
            'Architected the contract comparison engine using Java Armeria\'s async-first, non-blocking I/O model with gRPC and Protocol Buffers, achieving significantly faster serialization vs. traditional REST/JSON.',
            'Designed the service data flow following Clean Architecture: gRPC Request → YAVI Validation → DTO Conversion → UseCase Orchestration → MyBatis Repository → gRPC Response.',
            'Engineered the database access layer with MyBatis SQL Mapper and HikariCP connection pooling on MySQL, leveraging full SQL control for complex queries and eliminating N+1 issues.',
            'Established comprehensive JUnit 5 + Mockito test suites achieving 85%+ code coverage on critical business modules.',
            'Executed end-to-end functional testing across all features — contract comparison workflows, editing advice generation, and API response consistency in sandbox and staging environments.',
          ],
          technologies: ['Java Armeria', 'gRPC', 'Protocol Buffers', 'MyBatis', 'HikariCP', 'MySQL', 'YAVI', 'JUnit 5', 'Mockito', 'WireMock', 'Gradle', 'Git'],
        },
        {
          name: 'Freekey Crypto — Digital Car Key SDK',
          period: '2022',
          description:
            'Developed an SDK for encrypting and unlocking car doors. The SDK can be integrated into existing mobile apps to obtain a digital key and unlock the car. Includes both an app-side SDK and a server component for managing digital keys and SDK communication.',
          responsibilities: [
            'Developed APIs for both admin and user roles.',
            'Optimized source code ensuring security, performance, and scalability of the application.',
            'Performed self-review before every push to minimize production bugs.',
            'Wrote JUnit tests to verify code logic and ensure coverage.',
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
          name: 'TOPPAN — Printing Website Application',
          period: '2022',
          description: 'Creating a full-featured printing website application with admin and user-facing modules.',
          responsibilities: [
            'Constructed APIs, interfaces, and user-related features.',
            'Performed self-review before pushing to minimize production bugs.',
            'Wrote test cases to examine functionality and performance.',
          ],
          technologies: ['Java', 'A2M5'],
        },
        {
          name: 'IBM — Database Migration',
          period: '2022',
          description:
            'Wrote SQL procedures and functions to migrate data from a legacy database to a new schema.',
          responsibilities: [
            'Created SQL functions and procedures to transform data between old and new schemas.',
            'Self-reviewed 100% of the code to ensure data safety.',
            'Wrote test cases to validate data parity between old and new databases.',
          ],
          technologies: ['SQL', 'A2M5'],
        },
        {
          name: 'CR — Software Maintenance & Upgrade',
          period: 'Nov 2019',
          description: 'Maintenance and feature upgrade for an existing production software system.',
          responsibilities: [
            'Created new features and modified existing ones to meet customer requirements.',
            'Performed self-review before every push, wrote and executed test cases.',
          ],
          technologies: ['Java', 'A2M5'],
        },
        {
          name: 'Corelearn — Learning Management System',
          period: 'May 2019',
          description:
            'Built a full-featured e-learning website supporting users, courses, lectures, comments, reviews, and payments.',
          responsibilities: [
            'Built APIs, interfaces, and features for users, courses, lectures, comments, reviews, and payments.',
            'Optimized source code for security, performance, and scalability.',
            'Verified cross-browser and cross-device stability, performance, and compatibility.',
          ],
          technologies: ['Java Servlet', 'MySQL', 'JUnit'],
        },
      ],
    },
  ],

  // ── Certifications ────────────────────────────────────────────────────────
  certifications: [
    {
      period: '2018',
      institution: 'Iviettech',
      subject: '',
    },
  ],

  // ── Key competencies (shown as feature cards in Expertise section) ─────────
  competencies: [
    {
      icon: 'Server',
      title: 'Backend Architecture',
      desc: 'Microservices, Clean/Hexagonal Architecture, gRPC, REST, event-driven systems with Pub/Sub.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud Native & DevOps',
      desc: 'GCP, Kubernetes, Terraform IaC, ArgoCD GitOps, GitHub Actions CI/CD pipelines.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Quality & Security',
      desc: 'OPA/Rego policies, SonarCloud, pgcrypto, Workload Identity, 85%+ test coverage.',
    },
    {
      icon: 'Activity',
      title: 'Observability',
      desc: 'OpenTelemetry distributed tracing, Datadog monitoring, SLO/burn-rate alerting.',
    },
    {
      icon: 'Users',
      title: 'Technical Leadership',
      desc: 'Mentoring, code reviews, Agile/Scrum delivery, AI-augmented developer workflows.',
    },
    {
      icon: 'Zap',
      title: 'Performance Engineering',
      desc: 'Virtual Threads (Java 21), async I/O, HikariCP tuning, N+1 elimination, query optimization.',
    },
  ],
}
