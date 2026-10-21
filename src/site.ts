// サイト全体の設定。サイト名を変えるときはここだけ直す
export const SITE = {
  name: 'Rehab-info',
  tagline: 'リハビリ専門職のための、制度と地域の最新情報',
  description:
    '理学療法士・作業療法士・言語聴覚士に向けて、診療報酬・介護報酬などの制度の動きと、都道府県のリハビリテーション事業をわかりやすく整理する情報サイトです。',
};

// base を付けた内部リンクを作る
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

// 記事の日付は "2026-10-21" のように書くので、UTC で読めば日付がずれない
export const formatDate = (d: Date) =>
  `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;

export const formatMonth = (d: Date) =>
  `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月`;
