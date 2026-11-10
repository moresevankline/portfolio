// Templates shown in the Projects section. Same shape as the template showcase's data file.
// Keep entries anonymous (no client names, logos, URLs or real records) and only list real work.
// demoUrl "#" means no public demo yet: the card says so instead of linking nowhere.
// A demoUrl starting with "/" is a static demo in public/.

export type Project = {
  slug: string;
  name: string;
  category: string;
  stack: string[];
  preview: { src: string; alt: string };
  demoUrl: string;
  features: string[]; // 3 to 5
  screens: number;
  updated: string; // YYYY-MM-DD
};

export const projects: Project[] = [
  {
    slug: 'coursebook-lms',
    name: 'Coursebook',
    category: 'LMS',
    stack: ['Node.js', 'Vanilla JS', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Vercel'],
    preview: {
      src: '/projects/coursebook.jpg',
      alt: 'Coursebook on a desktop browser, a tablet and a phone: the student overview, the course list and the training schedule',
    },
    demoUrl: '/demos/coursebook/index.html',
    features: [
      'Invite-only email-code sign-in with admin approval and roles',
      'Courses with modules, rich-text lessons, video, files, quizzes and per-student progress',
      'Homework hand-in with human review and optional AI-drafted feedback',
      'Live training schedule and recordings with searchable transcripts',
      'Optional AI assistant that answers only from approved course material',
    ],
    screens: 21,
    updated: '2026-11-10',
  },
];
