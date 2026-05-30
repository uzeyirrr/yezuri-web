import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '~/i18n/ui';

export type BlogPost = CollectionEntry<'blog'>;

/** Yayınlanmış (draft olmayan) yazıları, dile göre, tarihe göre yeniden eskiye sıralı döndürür. */
export async function getPublishedPosts(locale: Locale = 'tr'): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.locale === locale);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Bir yazının diğer dildeki karşılığını (translationKey eşleşmesiyle) döndürür. */
export async function getTranslation(post: BlogPost): Promise<BlogPost | undefined> {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  return all.find(
    (p) => p.data.locale !== post.data.locale && p.data.translationKey === post.data.translationKey,
  );
}

export function formatDate(date: Date, locale: Locale = 'tr'): string {
  return new Intl.DateTimeFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** Markdown gövdesinden tahmini okuma süresi (~200 kelime/dk). */
export function readingTime(body: string, locale: Locale = 'tr'): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return locale === 'tr' ? `${mins} dk okuma` : `${mins} min read`;
}

/** Dile göre yazı URL'i: tr → /blog/slug, en → /en/blog/slug */
export function blogPath(locale: Locale, slug: string): string {
  return locale === 'tr' ? `/blog/${slug}` : `/en/blog/${slug}`;
}

export function blogIndexPath(locale: Locale): string {
  return locale === 'tr' ? '/blog' : '/en/blog';
}

/** Blog arayüz metinleri (sayfa başlıkları, CTA, breadcrumb vb.). */
export const blogUi = {
  tr: {
    eyebrow: 'Yezuri Blog',
    heroTitle: 'İşinizi büyüten rehberler',
    heroSub:
      'Dijital dönüşüm, süreç otomasyonu, bulut ve veri analitiği üzerine pratik, derinlemesine içerikler. Teori değil; uygulayabileceğiniz yöntemler.',
    empty: 'Çok yakında ilk yazılarımızı yayınlıyoruz.',
    seoTitle: 'Blog | Dijital Dönüşüm, Otomasyon ve Veri Rehberleri | Yezuri',
    seoDescription:
      'Süreç otomasyonu, bulut göçü ve veri analitiği üzerine pratik, uzun ve bilgilendirici rehberler. İşinizi veriyle ve yazılımla büyütmek için Yezuri Blog.',
    home: 'Ana Sayfa',
    blog: 'Blog',
    back: 'Tüm yazılar',
    ctaTitle: 'Bu konuda yardıma mı ihtiyacınız var?',
    ctaText: 'Yezuri ekibi olarak süreçlerinizi analiz edip size özel bir yol haritası çıkaralım.',
    ctaButton: 'Projeyi konuşalım',
    waMessage: (title: string) =>
      `Merhaba, "${title}" yazınızı okudum. Bu konuda bir proje konuşmak istiyorum.`,
  },
  en: {
    eyebrow: 'Yezuri Blog',
    heroTitle: 'Guides that grow your business',
    heroSub:
      'Practical, in-depth content on digital transformation, process automation, cloud and data analytics. Not theory — methods you can apply.',
    empty: 'Our first articles are coming very soon.',
    seoTitle: 'Blog | Digital Transformation, Automation & Data Guides | Yezuri',
    seoDescription:
      'Practical, long-form guides on process automation, cloud migration and data analytics. Grow your business with data and software — the Yezuri Blog.',
    home: 'Home',
    blog: 'Blog',
    back: 'All articles',
    ctaTitle: 'Need help with this?',
    ctaText: "Let the Yezuri team analyse your processes and build a roadmap tailored to you.",
    ctaButton: "Let's talk about your project",
    waMessage: (title: string) =>
      `Hi, I just read your article "${title}". I'd like to discuss a project on this.`,
  },
} satisfies Record<Locale, Record<string, unknown>>;
