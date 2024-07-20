import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Walter Furrer",
  EMAIL: "hellothere@walterfurrer.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "All about me, myself, and I.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A place for me to talk about what I am studying, find interesting, or want to share.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/furrerw",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/FurrerW"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/furrerw/",
  }
];
