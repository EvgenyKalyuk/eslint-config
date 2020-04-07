const globals = require('./constants/globals');
const vars = require('./constants/vars');

module.exports = {
    globals,

    extends: [
        'airbnb'
    ],

    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true
    },

    settings: {
        react: {
            version: 'detect',
            flowVersion: '0.84.0'
        }
    },

    rules: {
        // https://eslint.org/docs/rules/indent
        indent: [vars.ERROR, vars.DEFAULT_SPACES, { SwitchCase: 1 }], // 4 spaces
        'comma-dangle': [vars.ERROR, vars.NEVER],
        'operator-linebreak': [vars.ERROR, vars.AFTER, { overrides: { '?': vars.BEFORE, ':': vars.BEFORE } }],
        'global-require': [vars.OFF],
        'import/extensions': [vars.OFF],
        'import/no-extraneous-dependencies': [vars.OFF],
        'import/prefer-default-export': [vars.OFF],
        'import/no-named-as-default': [vars.OFF],
        'react/jsx-indent': [vars.ERROR, vars.DEFAULT_SPACES],
        'react/jsx-indent-props': [vars.ERROR, vars.DEFAULT_SPACES],
        'react/require-default-props': [vars.OFF],
        'react/jsx-filename-extension': [vars.OFF],
        'react/jsx-props-no-spreading': [vars.OFF],
        'react/destructuring-assignment': [vars.OFF],
        'react/state-in-constructor': [vars.OFF],
        'react/static-property-placement': [vars.OFF],
        'react/jsx-one-expression-per-line': [vars.OFF],
        'react/no-danger': [vars.OFF],
        'react/no-array-index-key': [vars.OFF],
        'react/prefer-stateless-function': [vars.OFF],
        'react/sort-comp': [vars.OFF],
        'react/jsx-no-bind': [vars.OFF],
        'react/no-unused-prop-types': [vars.OFF],
        'react/default-props-match-prop-types': [vars.OFF],
        'react/no-access-state-in-setstate': [vars.OFF],
        'react/prop-types': [vars.OFF],
        'arrow-body-style': [vars.OFF],
        'class-methods-use-this': [vars.OFF],
        'consistent-return': [vars.OFF],
        'no-restricted-globals': [vars.OFF],
        'arrow-parens': [vars.OFF],
        'implicit-arrow-linebreak': [vars.OFF],
        camelcase: [vars.OFF],
        'max-len': [vars.ERROR, {
            code: vars.DEFAULT_MAX_LENGTH,
            ignoreComments: true,
            tabWidth: vars.DEFAULT_SPACES
        }],
        'no-plusplus': [vars.OFF],
        'prefer-destructuring': [vars.OFF],
        'lines-between-class-members': [vars.ERROR, vars.ALWAYS, { exceptAfterSingleLine: true }],
        'no-underscore-dangle': [vars.OFF],
        'no-param-reassign': [vars.OFF],
        'no-case-declarations': [vars.OFF],
        semi: [vars.ERROR, vars.ALWAYS],
        'no-prototype-builtins': vars.OFF,
        'jsx-a11y/no-static-element-interactions': vars.OFF,
        'jsx-a11y/no-noninteractive-element-interactions': vars.OFF,
        'jsx-a11y/click-events-have-key-events': vars.OFF,
        'jsx-a11y/label-has-associated-control': vars.OFF,
        'no-mixed-operators': vars.OFF,
        'object-curly-newline': vars.OFF
    }
};
