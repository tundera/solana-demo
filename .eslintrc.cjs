/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.eslint.json', 'app/tsconfig.json', 'packages/*/tsconfig.json'],
    extraFileExtensions: ['.mjs', '.cjs', '.md', '.mdx'],
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-empty-function': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.eslint.json', 'app/tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
    imports: [
      'error',
      {
        groups: [
          ['^\\u0000'], // Side effect imports.
          ['^.*\\u0000$'], // Type imports
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          ['^(react|remix)', '^@?\\w'],
          ['^(src|db)(/.*|$)'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports. Put `..` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Other relative imports. Put same-folder imports and `.` last.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.cjs', '**/*.js', '**/*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/test/**', '**/__tests__/**'],
      env: {
        'jest/globals': true,
      },
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.eslint.json', 'app/tsconfig.json', 'packages/*/tsconfig.test.json'],
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: ['tsconfig.eslint.json', 'app/tsconfig.json', 'packages/*/tsconfig.test.json'],
          },
        },
      },
    },
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx', '**/cypress/**'],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended', 'plugin:prettier/recommended'],
      parserOptions: {
        project: '**/cypress/tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: ['**/cypress/tsconfig.json'],
          },
        },
      },
    },
    {
      files: ['scripts/**/*'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
