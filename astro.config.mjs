// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages(ユーザーサイト)用の設定
// 公開URL: https://rehab-info.github.io/
export default defineConfig({
  site: 'https://rehab-info.github.io',
  trailingSlash: 'always',
});
