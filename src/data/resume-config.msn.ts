import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Martial Séron',
    photo: '/images/msn.png', // Place your photo in public/images/
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Senior Fullstack Developer',
      fr: 'Développeur Fullstack Sénior',
    },
    subtitle: {
      en: 'Tech Lead | Conception | Security | UX/UI | Autonomy | 18 years of experience',
      fr: "Tech Lead | Conception | Sécurité | UX/UI | Autonomie | 18 ans d'expérience",
    },
    location: 'Durtal, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Martial Séron — Fullstack Developer',
    description: 'Interactive resume of Martial Séron, Fullstack Developer specializing in React and TypeScript.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'mrtl-srn', href: 'https://github.com/mrtl-srn' },
    { type: 'linkedin', label: 'Martial Séron', href: 'https://www.linkedin.com/in/martial-seron' },
    { type: 'email', label: 'martial.seron@gmail.com' },
    { type: 'phone', label: '+33 6 75 86 11 30' },
    { type: 'location', label: 'Durtal (49), France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'C1' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Vite' },
        { name: 'UI/UX' },
        { name: 'Figma' },
        { name: 'TailwindCSS' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Fastify' },
        { name: 'Laravel' },
        { name: 'Python' },
        { name: 'REST' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'MariaDB' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'Redis' },
        { name: 'Elasticsearch' },
        { name: 'QlikView' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'CI/CD' },
        { name: 'GitHub Actions' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD, SOLID', fr: 'Agile/Scrum, TDD, Code Review, CI/CD, SOLID' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'alturing',
      company: { en: 'Alturing', fr: 'Alturing' },
      role: { en: 'Technical Lead', fr: 'Responsable Développement' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2017 - Present', fr: '2017 - Présent' },
      description: {
        en: 'Head of internal tools development, maintenance and process automation',
        fr: "Responsable du développement et de la maintenance des applications internes et de l'automatisation des processus",
      },
      techs: ['React', 'TypeScript', 'Node.js', 'Docker', 'GLPI'],
      isHighlighted: true,
      details: {
        context: {
          en: "Team of 4 developers within a 50-person service center.",
          fr: "Équipe de 4 développeurs au sein d'un centre de services de 50 personnes.",
        },
        tasks: {
          en: [
            'Designed and implemented the frontend architecture (monorepo, shared component library)',
            'Built a real-time notification system using WebSockets and Redis pub/sub',
            'Migrated legacy codebase from JavaScript to TypeScript (200+ files)',
            'Implemented role-based access control (RBAC) across the entire platform',
            'Set up automated testing with 85% code coverage (unit, integration, E2E)',
            'Led the migration from REST to GraphQL for the main API',
            'Built a dashboard analytics module with interactive charts and export features',
            'Mentored 3 junior developers through pair programming and weekly 1-on-1s',
          ],  
          fr: [
            "Conception et mise en œuvre d'une base de connaissances interne (Next.js/Fastify/Elasticsearch) pour centraliser et rechercher rapidement les documents techniques et procédures.",
            "Conception et développement d'une API RESTful Nest.js pour automatiser et standardiser les communications email et SMS vers les clients",
            "Création d'un wallboard React/Node.js pour le suivi en temps réel des appels clients et du statut des techniciens",
            "Développement d'un tableau de bord de supervision (Next.js/NestJS) pour le suivi en temps réel de la disponibilité des services critiques.",
            "Encadrement et montée en compétence de 3 développeurs juniors",
          ],
        },
        training: {
          en: [
            'AWS Solutions Architect certification',
            'Internal training on Kubernetes orchestration',
          ],
          fr: [
            'Certification AWS Solutions Architect',
            'Formation interne sur l\'orchestration Kubernetes',
          ],
        },
        env: {
          en: 'React / TypeScript / Node.js / PostgreSQL / MariaDB / Redis / Docker / Elasticsearch / Redis',
          fr: 'React / TypeScript / Node.js / PostgreSQL / MariaDB / Redis / Docker / Elasticsearch / Redis',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'WebAgency', fr: 'WebAgency' },
      role: { en: 'Frontend Developer', fr: 'Développeuse Frontend' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2019 - 2022', fr: '2019 - 2022' },
      description: {
        en: 'Developed responsive web applications for various clients. Specialized in React and Angular projects.',
        fr: 'Développement d\'applications web responsives pour divers clients. Spécialisée en projets React et Angular.',
      },
      techs: ['React', 'Angular', 'TypeScript', 'SCSS'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          en: [
            'Built 15+ client-facing web applications from scratch',
            'Created and maintained a shared design system used across all agency projects',
            'Implemented complex form workflows with multi-step validation',
            'Optimized web performance achieving 90+ scores on Core Web Vitals',
            'Integrated third-party APIs (payment, CRM, analytics)',
            'Set up Storybook documentation for reusable components',
            'Collaborated closely with UX designers to translate Figma mockups into pixel-perfect UIs',
          ],
          fr: [
            'Développement de 15+ applications web clients from scratch',
            'Création et maintenance d\'un design system partagé utilisé sur tous les projets de l\'agence',
            'Implémentation de workflows de formulaires complexes avec validation multi-étapes',
            'Optimisation des performances web avec scores 90+ sur les Core Web Vitals',
            'Intégration d\'APIs tierces (paiement, CRM, analytics)',
            'Mise en place de la documentation Storybook pour les composants réutilisables',
            'Collaboration étroite avec les designers UX pour traduire les maquettes Figma en interfaces pixel-perfect',
          ],
        },
        training: {
          en: [
            'Angular Advanced workshop (2 days)',
            'Accessibility (WCAG 2.1) certification',
          ],
          fr: [
            'Workshop Angular Avancé (2 jours)',
            'Certification Accessibilité (WCAG 2.1)',
          ],
        },
        env: {
          en: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
          fr: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
        },
      },
    },
    {
      id: 'internship',
      company: { en: 'StartupXYZ', fr: 'StartupXYZ' },
      role: { en: 'Fullstack Developer Intern', fr: 'Stagiaire Développeuse Fullstack' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2018 - 2019', fr: '2018 - 2019' },
      description: {
        en: 'Contributed to the development of an e-commerce platform. Gained experience in fullstack development.',
        fr: 'Contribution au développement d\'une plateforme e-commerce. Acquisition d\'expérience en développement fullstack.',
      },
      techs: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
      details: {
        context: {
          en: 'Early-stage startup (seed round), small team of 5 developers building an e-commerce platform from the ground up. Fast-paced environment with weekly releases.',
          fr: 'Startup en phase de démarrage (seed round), petite équipe de 5 développeurs construisant une plateforme e-commerce from scratch. Environnement rapide avec des releases hebdomadaires.',
        },
        tasks: {
          en: [
            'Developed the product catalog with advanced filtering and search',
            'Built the shopping cart with real-time inventory checking',
            'Integrated Stripe payment gateway with 3D Secure support',
            'Implemented user authentication with JWT and OAuth (Google, Facebook)',
            'Created an admin dashboard for order management and analytics',
            'Wrote API documentation with Swagger/OpenAPI',
          ],
          fr: [
            'Développement du catalogue produits avec filtrage avancé et recherche',
            'Création du panier d\'achat avec vérification de stock en temps réel',
            'Intégration de la passerelle de paiement Stripe avec support 3D Secure',
            'Implémentation de l\'authentification utilisateur avec JWT et OAuth (Google, Facebook)',
            'Création d\'un tableau de bord admin pour la gestion des commandes et les analytics',
            'Rédaction de la documentation API avec Swagger/OpenAPI',
          ],
        },
        env: {
          en: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
          fr: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'WeatherApp', fr: 'WeatherApp' },
      description: {
        en: 'A real-time weather dashboard built with React and OpenWeather API.',
        fr: 'Un tableau de bord météo en temps réel construit avec React et l\'API OpenWeather.',
      },
      techs: ['React', 'TypeScript'],
      url: 'https://weather-app.example.com',
      github: 'https://github.com/janedoe/weather-app',
    },
    {
      id: 'project-b',
      title: { en: 'TaskManager', fr: 'TaskManager' },
      description: {
        en: 'A Kanban-style task management tool with drag-and-drop.',
        fr: 'Un outil de gestion de tâches style Kanban avec glisser-déposer.',
      },
      techs: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/janedoe/task-manager',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'University of Paris', fr: 'Université de Paris' },
      degree: { en: 'Master in Computer Science', fr: 'Master Informatique' },
      specialty: { en: 'Web & Mobile Development', fr: 'Développement Web & Mobile' },
      period: '2017 - 2019',
    },
    {
      school: { en: 'University of Paris', fr: 'Université de Paris' },
      degree: { en: 'Bachelor in Computer Science', fr: 'Licence Informatique' },
      period: '2014 - 2017',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography', fr: 'Photographie' },
      details: [
        { en: 'Street photography', fr: 'Photo de rue' },
        { en: '5 years', fr: '5 ans' },
      ],
    },
    {
      title: { en: 'Hiking', fr: 'Randonnée' },
      details: [
        { en: 'Mountain trails', fr: 'Sentiers de montagne' },
      ],
    },
    {
      title: { en: 'Open Source', fr: 'Open Source' },
    },
    {
      title: { en: 'Guitar', fr: 'Guitare' },
      details: [
        { en: '3 years', fr: '3 ans' },
      ],
    },
  ],

  // ===== PDF (optional — place your PDF in public/cv/) =====
  // Use a string for the same PDF in all languages,
  // or a LocalizedString for one PDF per language (button is hidden if no PDF for the current language).
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/resume-en.pdf', fr: '/cv/resume-fr.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
