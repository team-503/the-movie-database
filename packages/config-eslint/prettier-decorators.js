/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
    importOrderParserPlugins: ['typescript', 'decorators-legacy'],
}

module.exports = config
