module.exports = {
	source: ["src/foundation/tokens/**/*.json"],
	platforms: {
		scss: {
			transformGroup: "scss",
			buildPath: "src/foundation/lib/tokens/scss/",
			files: [
				{
					destination: "tokens.scss",
					format: "scss/variables",
				},
			],
		},
		css: {
			transformGroup: "css",
			buildPath: "src/foundation/lib/tokens/css/",
			files: [
				{
					destination: "tokens.css",
					format: "css/variables",
				},
			],
		},
		js: {
			transformGroup: "js",
			buildPath: "src/foundation/tokens/js/",
			files: [
				{
					destination: "tokens.js",
					format: "javascript/module",
				},
			],
		},
	},
};
