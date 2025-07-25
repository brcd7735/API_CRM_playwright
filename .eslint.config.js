
const globals = require('globals');

module.exports = [
    {
        files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es6
            }
        },
        rules: {
            'no-console': 'warn',
            'no-unused-vars': 'warn',
            'no-undef': 'error',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single']
        }
    }
];