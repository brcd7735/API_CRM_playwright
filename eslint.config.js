const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
    js.configs.recommended,
    {
        ignores: [
            'node_modules/',
            'playwright-report/',
            '.github/',
            'test-results/',
            '.idea/'
        ]
    },
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
            'no-unsafe-optional-chaining': 'off',
            'no-undef': 'error',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'semi-spacing': 'error',
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'block-spacing': 'error',
            'no-trailing-spaces': 'error',
            'no-multi-spaces': 'error',
            'space-before-blocks': 'error',
        }
    }
];
