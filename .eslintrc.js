module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'func-names': ['error', 'as-needed'],
        'react/forbid-prop-types': ['off'],
        'default-param-last': ['off'],
        'no-unused-expressions': ['error', { allowTernary: true }],
        'no-shadow': [
            'error',
            { allow: ['requestTrendingFeed', 'requestUsersInfo'] },
        ],
    },
};
