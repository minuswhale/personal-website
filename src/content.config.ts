import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Simplified Chinese title (falls back to title) */
    titleCN: z.string().optional(),
    /** Traditional Chinese title (falls back to title) */
    titleTW: z.string().optional(),
    description: z.string(),
    descriptionCN: z.string().optional(),
    descriptionTW: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    /** Reading time in minutes (manual while posts are placeholders) */
    minutes: z.number().int().positive().default(5),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
