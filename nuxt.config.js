export default {
  srcDir: "src/",
  buildModules: ["@nuxt/postcss8", "@nuxt/typescript-build", "@nuxtjs/svg"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  plugins: ["@/plugins/fontawesome.ts"],
  components: {
    dirs: ["@/components"],
  },
};
