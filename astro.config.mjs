import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://carpentryandcrafts.org.uk",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: squooshImageService(),
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const excludePaths = [
          "/gallery-cy",
          "/blog",
          "/blog/",
          "/blog/page",
          "/blog/page/",
          "/blog/page/1",
          "/blog/page/2",
          "/blog/page/3",
          "/authors",
          "/authors/",
          "/categories",
          "/categories/",
          "/tags",
          "/tags/",
          "/blog/post-1",
          "/blog/post-2",
          "/blog/post-3",
          "/blog/post-4",
          "/authors/john-doe",
          "/authors/sam-wilson",
          "/authors/william-jacob",
          "/categories/application",
          "/categories/architecture",
          "/categories/data",
          "/categories/software",
          "/categories/technology",
          "/tags/nextjs",
          "/tags/silicon",
          "/tags/software",
          "/tags/tailwind",
          "/tags/technology",
          "/about",
          "/en/about",
        ];
        // Extract the path from full URL
        const { pathname } = new URL(page);
        return !excludePaths.includes(pathname);
      },
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
