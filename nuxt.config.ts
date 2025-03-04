// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { typeCheck: true, strict: true },
  css: ['~/assets/styles/layout.scss', '~/assets/styles/misc.scss', '~/assets/styles/components.scss'],
  build: { transpile: ['@jsquash/png', '@jsquash/oxipng'] },

  vite: {
    optimizeDeps: { exclude: ['@jsquash/png', '@jsquash/oxipng'] },
    worker: { format: 'es' },
    css: { preprocessorOptions: { scss: { silenceDeprecations: ['mixed-decls'] } } },
  },

  app: {
    head: {
      title: 'CrunchPNG',
      link: [
        { rel: 'icon', href: '#' },
      ],
      meta: [
        { name: 'darkreader-lock' },
        { name: 'description', content: 'Bulk .png optimizer' },
        { name: 'keywords', content: '.png, optimize, small, lossless, optimise' },
        { name: 'author', content: 'Cassie' },
        { name: 'theme-color', content: '#004b4b' },
        // twitter stuff
        { property: 'og:title', content: 'CrunchPNG' },
        { property: 'og:description', content: 'Bulk .png optimizer' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@CodeF53' },
        { name: 'twitter:creator', content: '@CodeF53' },
      ],
    },
  },

  compatibilityDate: '2025-02-20',
})
