# Rehab-info

リハビリ専門職(理学療法士・作業療法士・言語聴覚士)に向けて、制度の動きと都道府県のリハビリテーション事業を整理する情報サイトです。

- 公開URL: https://rehab-info.github.io/
- 作り: [Astro](https://astro.build/)(静的サイト)+ GitHub Pages

## 運用の流れ

1. AIエージェントが記事を書き、プルリクエスト(公開待ち)として提出する
2. 運営者が一次資料と照合し、必要なら加筆する
3. 運営者が「Merge」を押すと、数分でサイトに反映される

記事のルールは [CLAUDE.md](./CLAUDE.md) にまとめています。

## よく使う変更

| やりたいこと | 直すファイル |
| --- | --- |
| サイト名・説明文を変える | `src/site.ts` |
| 運営者情報を書き換える | `src/pages/about.astro` |
| 記事を非公開に戻す | 記事ファイルの `draft: true` |
| 色や文字の大きさを変える | `src/styles/global.css` |
