// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    rules: {
      // All text goes through the design system.
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react-native",
              importNames: ["Text"],
              message: "Use A_Text from @/components/text.",
            },
          ],
        },
      ],
      // No raw colors outside the tokens file.
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/^(#|rgb|hsl)/i]",
          message: "Use a color from @/theme/tokens.",
        },
      ],
    },
  },
  {
    // The two files allowed to break those rules.
    files: ["src/components/text.tsx", "src/theme/tokens.ts"],
    rules: {
      "no-restricted-imports": "off",
      "no-restricted-syntax": "off",
    },
  },
  {
    ignores: ["dist/*"],
  },
]);
