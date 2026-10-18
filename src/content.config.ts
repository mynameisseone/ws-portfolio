import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // Каждый кейс — отдельный markdown-файл; id = имя файла (slug).
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    customer: z.object({
      name: z.string(),
      url: z.string().url().optional(),
    }),
    years: z.string(),
    role: z.string(),
    summary: z.string(),
    goal: z.string().optional(),
    stack: z.array(z.string()).default([]),
    elements: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    /** Имя файла обложки внутри папки скриншотов проекта. */
    cover: z.string().optional(),
  }),
});

export const collections = { projects };
