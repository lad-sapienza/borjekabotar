import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import rehypeSlug from 'rehype-slug';
import { unified } from '@astrojs/markdown-remark';
import { userConfig } from './src/user.config.mjs';
import { scms } from '@lad-sapienza/scms-core/scms';

const coreAlias = {
  '@user': fileURLToPath(new URL('./src', import.meta.url)),
  '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
  '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
  '@content': fileURLToPath(new URL('./src/content-pages', import.meta.url)),
};

const {
  rehypePlugins: userRehypePlugins,
  remarkPlugins: userRemarkPlugins,
  remarkRehype: userRemarkRehype,
  ...userMarkdownConfig
} = userConfig.markdown || {};

// Old Gatsby URL (kept for continuity — the bibliography page moved to the
// correctly-spelled /publications/).
const redirects = {
  '/pubblications/': '/publications/',
};

export default defineConfig({
  site: userConfig.site ?? 'https://borjekabotar.com',
  output: 'static',
  trailingSlash: 'always',
  redirects,

  markdown: {
    ...userMarkdownConfig,
    processor: unified({
      remarkPlugins: [...(userRemarkPlugins || [])],
      rehypePlugins: [rehypeSlug, ...(userRehypePlugins || [])],
      ...(userRemarkRehype ? { remarkRehype: userRemarkRehype } : {}),
    }),
  },

  integrations: [
    ...scms(),
    ...(userConfig.integrations || []),
  ],

  vite: {
    ...(userConfig.vite || {}),
    esbuild: {
      target: 'es2022',
      ...(userConfig.vite?.esbuild || {}),
    },
    resolve: {
      ...(userConfig.vite?.resolve || {}),
      alias: {
        ...coreAlias,
        ...(userConfig.vite?.resolve?.alias || {}),
      },
    },
  },
});
