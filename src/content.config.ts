// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const albums = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/albums" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    releaseDate: z.number(),
    albumArt: z.object({
      src: image(),
      alt: z.string(),
      artist: z.string()
    }),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = { albums };