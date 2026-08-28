/**
 * User Configuration File
 *
 * Overrides/extends the core scms-core configuration in astro.config.mjs.
 */

export const userConfig = {
  site: 'https://borjekabotar.com',

  integrations: [],

  vite: {},

  markdown: {},
};

/**
 * Site Metadata
 *
 * Used throughout the site for SEO, social media cards, and general site
 * information. Ported from the previous Gatsby `siteMetadata` in gatsby-config.js.
 */
export const siteMetadata = {
  title: 'Borj-e Kabotar',
  titleTemplate: '%s | Borj-e Kabotar',
  description:
    'Borj-e Kabotar. Architecture and anthropology of the pigeon towers in the Isfahan province. A research project between Italy and Iran directed by Danilo Rosati and Fariba Saiedi Anaraki.',
  author: 'Danilo Rosati, Fariba Saiedi Anaraki <borjekabotar@gmail.com>',
  siteName: 'Borj-e Kabotar',
  defaultImage: '/images/survey_pigeon_towers.jpg',
  twitter: '@JulianBogdani',
};
