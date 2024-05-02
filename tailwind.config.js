/** @type {import('tailwindcss').Config} */
const srcDir = ".";
export default {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
  ],
  theme: {
    colors: {
      green: "#008200",
      "stone-700": "rgb(68 64 60)",
      "stone-900": "rgb(28 25 23)",
    },
    width: {
      600: "600px",
      400: "400px",
      300: "300px",
      200: "200px",
      screen: "100%",
      max: "max-content",
    },
    height: {
      400: "400px",
      max: "max-content",
      screen: "100%",
    },
  },
  plugins: [],
};
