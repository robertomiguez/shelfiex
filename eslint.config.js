import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactNativePlugin from 'eslint-plugin-react-native';

export default [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  prettier,
  {
    plugins: {
      prettier: prettierPlugin,
      'react-native': reactNativePlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/', '.expo/', 'android/', 'ios/'],
  },
];
