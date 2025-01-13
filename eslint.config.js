import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
    {
        languageOptions: {
            globals: globals.node,
        },
    },
    pluginJs.configs.recommended,
    {
        plugins: {
            jest: pluginJest,
        },
        rules: {
            // "no-disabled-tests": "off",
            // "no-focused-tests": "off",
            // "expect-expect": "warn",
            "no-unused-vars": "error",
            "no-undef": "off",
        },
    },
];
