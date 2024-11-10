/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
    printWidth: 130,
    tabWidth: 4,
    semi: false,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'all',
    jsxSingleQuote: false,
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'avoid',
    requirePragma: false,
    singleAttributePerLine: false,
    quoteProps: 'as-needed',
    endOfLine: 'auto',
    // other properties
    plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
    // Last version that doesn't squash type and value imports
    importOrderTypeScriptVersion: '4.4.0',
    importOrder: ['^(react/(.*)$)|^(react$)', '^(next/(.*)$)|^(next$)', '<THIRD_PARTY_MODULES>', '^~/(.*)$', '^[./]'],
}

module.exports = config
