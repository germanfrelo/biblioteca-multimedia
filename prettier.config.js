// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	quoteProps: "consistent",
	overrides: [
		{
			files: ["*.css", "*.html"],
			options: {
				printWidth: Number.POSITIVE_INFINITY,
			},
		},
		{
			files: ["*.js", "*.jsx", "*.vue"],
			options: {
				singleAttributePerLine: true,
			},
		},
		{
			files: ["*.jsonc"],
			options: {
				trailingComma: "none",
			},
		},
	],
};

export default config;
