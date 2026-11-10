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
    // Placeholder entry: replace the name, stack, features, screen count and preview with the real template's.
    slug: 'coursebook-lms',
    name: 'Coursebook',
    category: 'LMS',
    stack: ['Node.js', 'Vanilla JS', 'PostgreSQL', 'Supabase Auth', 'Vercel'],
    preview: {
      src: '/projects/coursebook.jpg',
      alt: 'Coursebook on a desktop browser, a tablet and a phone: the student overview, the course list and the training schedule',
    },
    demoUrl: '/demos/coursebook/index.html',
    features: [
      'Invite-only sign-in with email codes and admin approval',
      'Courses, modules and lessons with video and files',
      'Per-student progress with Continue learning',
      'Homework hand-in with staff review and feedback',
      'Live session schedule and recordings with transcripts',
    ],
    screens: 14,
    updated: '2026-11-09',
  },
];
