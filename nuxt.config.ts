// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@morev/vue-transitions/nuxt",
        "nuxt-icon",
        "@nuxt/image-edge",
        "@pinia/nuxt",
        "@vueuse/nuxt",
    ],
    css: ["~/assets/css/style.scss"],
    vueTransitions: {},
    app: {
        head: {
            htmlAttrs: {
                lang: "ko",
            },
            link: [
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "//db.onlinewebfonts.com/c/67680f2eb947c5cbd58b40961b4a61e9?family=Apple+SD+Gothic+Neo",
                },
            ],
            meta: [
                {
                    "http-equiv": "content-security-policy",
                    content: "upgrade-insecure-requests",
                },
            ],
        },
    },
    pinia: {
        autoImports: [["defineStore", "definePiniaStore"]],
    },
    imports: {
        dirs: ["stores"],
    },
});
