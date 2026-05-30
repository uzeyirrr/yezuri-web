import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// SEO-odaklı blog koleksiyonu. İçerik src/content/blog altında markdown olarak tutulur.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // <meta name="description"> ve kartlarda kullanılır. 150-160 karakter ideal.
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Yezuri'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    locale: z.enum(['tr', 'en']).default('tr'),
    // Aynı yazının TR/EN sürümlerini eşleştirir (hreflang alternates için).
    translationKey: z.string(),
    draft: z.boolean().default(false),
    // Kart/başlık degradesi için vurgu rengi (görsel gerektirmez).
    accent: z.string().default('#e11d2e'),
    // Kapak görseli (public/ altından, ör. /blog/process-automation.svg).
    // Verilmezse accent renkli degrade kapak kullanılır.
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
