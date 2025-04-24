const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
      "tall-md": { raw: "(min-height: 768px)" },
      "tall-lg": { raw: "(min-height: 900px)" },
      "short-sm": { raw: "(max-height: 600px)" },
    },
  },
};
