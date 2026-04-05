import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const explainers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/explainers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    pillar: z.enum(['Granularity', 'Privacy', 'Trust']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { explainers };