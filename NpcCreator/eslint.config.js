import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginImport from "eslint-plugin-import/configs/recommended.js";
import pluginJsxA11y from "eslint-plugin-jsx-a11y/recommended.js";
import pluginReactHooks from "eslint-plugin-react-hooks/recommended.js";

export default [
  // Basic language options and globals
  {
    languageOptions: {
      globals: globals.browser,
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
      ecmaVersion: 12, // Use the latest ECMAScript version
      sourceType: "module", // Use ECMAScript modules
    },
  },
  // Base ESLint recommended configuration
  pluginJs.configs.recommended,
  // React recommended configuration
  pluginReactConfig,
  // Import plugin recommended configuration
  pluginImport,
  // JSX a11y plugin recommended configuration
  pluginJsxA11y,
  // React hooks plugin recommended configuration
  pluginReactHooks,
  // Custom settings and rules
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolve these extensions
        },
      },
    },
    rules: {
      // Customize your rules here
      "react/prop-types": "off", // Example: Disable prop-types as we use TypeScript
      "react/react-in-jsx-scope": "off", // Not needed for React 17+
      "jsx-a11y/no-noninteractive-element-interactions": "off", // Customize based on your needs
      // Add other rules as needed
    },
  },
];
