import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://aindriú.ie",
    title: "Andrew dot ie",
    description: "My Writings - https://aindriú.ie - https://andrew.ie",
    author: "andrew",
    profile: "",
    ogImage: "",
    lang: "en-ie",
    timezone: "Europe/Ireland",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      url: "https://github.com/andrew-carton/andrew-blog/",
    },
    search: "pagefind",
  },
  socials: [
   
  ],
  shareLinks: [
   
  ],
});