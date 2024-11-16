import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		rules: {
			'no-unused-vars': 'error',
			'no-undef': 'error',
			'@typescript-eslint/no-unused-expressions': [
				'error',
				{
					allowShortCircuit: true, // 允许短路表达式
					allowTernary: true // 允许三元表达式
				}
			]
		}
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended
];
