import { getCollection } from 'astro:content';

// 公開済み(draft でない)記事を新しい順に返す
export async function getPublishedArticles() {
  const all = await getCollection('articles', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
