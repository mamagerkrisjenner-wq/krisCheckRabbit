import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      react.configs.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'max-lines': ['error', 100], 
      '@typescript-eslint/no-explicit-any': 'error', 
      '@typescript-eslint/typedef': ['error', { arrayDestructuring: true, arrowParameter: true }],
      'react/jsx-no-literals': 'off', 
      'quotes': ['error', 'single'],
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
      'react/no-array-index-key': 'error', 
      'no-magic-numbers': ['error', { ignore: [0,1], ignoreArrayIndexes: true }], 
    },
  },
])
