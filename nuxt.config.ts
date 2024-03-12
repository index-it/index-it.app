const title = "Index - The essential app for any kind of list";
const description =
    "Index is the perfect app for any kind of list. It's minimal and yet complete, made to simplify your life.";

export default defineNuxtConfig({
  app: {
      head: {
          charset: "utf-8",
          viewport: "width=device-width, initial-scale=1",
          title,
          meta: [
              { name: "title", content: title },
              {
                  name: "keywords",
                  content:
                      "todo list, to-do, list, task, to-do list, todo app, index, todolist",
              },
              { name: "theme-color", content: "#FFFFFF" },
              {
                  name: "author",
                  content:
                      "Giulio Pimenoff Verdolin (https://giuliopime.dev)",
              },
              { name: "description", content: description },
              { name: "og:type", content: "website" },
              { name: "og:site_name", content: "Index" },
              { name: "og:title", content: title },
              { name: "og:url", content: "https://index-it.app" },
              { name: "og:image", content: "https://index-it.app/logo.png" },
              { name: "twitter:site", content: "@app_index" },
              { name: "twitter:creator", content: "@app_index" },
              { name: "twitter:title", content: title },
              { name: "twitter:description", content: description },
              {
                  name: "twitter:image",
                  content: "https://index-it.app/logo.png",
              },
              { name: "twitter:image:alt", content: "Index logo" },
          ],
          link: [
              { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
              { rel: "favicon", href: "/favicon.ico" },
          ],
          htmlAttrs: {
              lang: "en",
          },
      },
  },

  css: ['~/assets/css/tailwind.css'],

  runtimeConfig: {
      public: {
          apiBase: "https://api-beta.index-it.app",
      },
  },

  devtools: {
    enabled: true
  },
  
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content'
  ]
});
