import { defineConfig } from 'eslint/config'
import { createConfigForNuxt } from '@nuxt/eslint-config'

export default defineConfig([
  await createConfigForNuxt({
    features: {
      standalone: true,
      import: true,
      stylistic: {
        indent: 2,
        quotes: 'single',
        commaDangle: 'never',
        braceStyle: '1tbs',
        quoteProps: 'as-needed'
      },
      typescript: true
    }
  }),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/object-curly-newline': ['error', {
        consistent: true
      }]
    }
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
])
