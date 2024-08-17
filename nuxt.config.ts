import { resolvePath } from "nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "nuxt-aos",
    "@pinia/nuxt",
    "nuxt-file-storage",
  ],
  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "ar",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  googleFonts: {
    families: {
      "Readex Pro": true,
    },
  },
  css: ["~/style/rules&variables.scss"],
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  },
  nitro: {
    plugins: ["~/server/config/connectDb"],
  },
  runtimeConfig: {
    mongodbUri: process.env.NUXT_MONGODB_URI,
  },
  fileStorage: {
    mount: __dirname + process.env.NUXT_UPLOAD_DIR,
  },
});
