export type Project = {
  title: string;
  description: string;
  github: string;
  liveDemo?: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'Service Order Management API',
    description:
      'Help desk REST API with JWT auth and role-based access (ADMIN, USER, VIEWER), managing clients, technicians, and service orders through their full lifecycle.',
    github: 'https://github.com/otaldoneto/Project-Help-Desk',
    liveDemo: 'https://service-order-management-nxil.onrender.com',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL'],
  },
  {
    title: 'notification-service',
    description:
      'Event-driven notification service — consumes events asynchronously via RabbitMQ and dispatches notifications, decoupled from whoever produces those events.',
    github: 'https://github.com/otaldoneto/notification-service',
    tech: ['Java', 'Spring Boot', 'RabbitMQ'],
  },
  {
    title: 'url-shortener',
    description:
      'URL shortener with a Redis cache-aside layer, click tracking, and an atomic Redis/Lua token-bucket rate limiter. Includes Prometheus/Grafana dashboards and k6 load test results.',
    github: 'https://github.com/otaldoneto/url-shortener',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Prometheus', 'Grafana'],
  },
  {
    title: 'support-chat',
    description:
      'Real-time support chat over WebSocket/STOMP — a customer and an agent exchange messages instantly, with presence tracking and full message history persisted in PostgreSQL.',
    github: 'https://github.com/otaldoneto/support-chat',
    tech: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'PostgreSQL'],
  },
  {
    title: 'job-tracker',
    description:
      'Kanban-style job application tracker — drag-and-drop between and within columns, inline editing, and a stats page with charts, backed by a Next.js full-stack app with Prisma and Postgres.',
    github: 'https://github.com/otaldoneto/job-tracker',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'job-tracker-mobile',
    description:
      'React Native (Expo) client for job-tracker — same backend, running natively on iOS and Android from one codebase.',
    github: 'https://github.com/otaldoneto/job-tracker-mobile',
    tech: ['React Native', 'Expo', 'TypeScript'],
  },
];
