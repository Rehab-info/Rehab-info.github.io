import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 記事は src/content/articles/ に Markdown で置く
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // 記事一覧や検索結果に出る1〜2文の要約
    description: z.string(),
    // 公開日
    pubDate: z.coerce.date(),
    // 内容を更新した日(任意)
    updatedDate: z.coerce.date().optional(),
    // 「○年○月時点の情報」の基準日
    asOf: z.coerce.date(),
    // 制度解説 / 都道府県調査 / お知らせ
    category: z.enum(['制度解説', '都道府県調査', 'お知らせ']),
    tags: z.array(z.string()).default([]),
    // 一次資料などの出典(記事末尾に一覧表示)
    sources: z
      .array(z.object({ title: z.string(), url: z.url() }))
      .default([]),
    // true の記事はサイトに出ない(下書き)
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
