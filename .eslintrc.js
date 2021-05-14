module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['plugin:react/recommended', 'eslint:recommended', 'airbnb'],

	plugins: ['prettier', 'react'],

	rules: {
		indent: 0,
		'no-tabs': 0,
		'comma-dangle': 0,
		'arrow-parens': 0,
		'react/jsx-indent': 0,
		'react/prop-types': 0,
		'operator-linebreak': 0,
		'object-curly-newline': 0,
		'function-paren-newline': 0,
		'react/jsx-indent-props': 0,
		'prettier/prettier': 'error',
		'implicit-arrow-linebreak': 0,
		'react/jsx-wrap-multilines': 0,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx'],
			},
		},
	},
};
