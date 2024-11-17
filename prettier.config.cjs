/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
module.exports = {
    printWidth: 130,
    tabWidth: 4,
    endOfLine: 'lf',
    trailingComma: 'es5',
    arrowParens: 'avoid',
    quoteProps: 'as-needed',
    semi: false,
    useTabs: false,
    singleQuote: true,
    jsxSingleQuote: false,
    bracketSpacing: true,
    bracketSameLine: false,
    requirePragma: false,
    singleAttributePerLine: false,
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '^(next/(.*)$)|^(next$)',
        '<THIRD_PARTY_MODULES>',
        '^types$',
        '^@/types/(.*)$',
        '^@/config/(.*)$',
        '^@/lib/(.*)$',
        '^@/hooks/(.*)$',
        '^@/components/ui/(.*)$',
        '^@/components/(.*)$',
        '^@/registry/(.*)$',
        '^@/styles/(.*)$',
        '^@/app/(.*)$',
        '^[./]',
    ],
    importOrderTypeScriptVersion: '4.4.0', // Last version that doesn't squash type and value imports
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
}
