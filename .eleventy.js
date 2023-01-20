const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "hi",
		errorMode: "allow-fallback"
	});

	eleventyConfig.addPassthroughCopy({ "public": "." });

	return {
		templateFormats: ["njk", "md"],
		markdownTemplateEngine: "njk",

		dir: {
			input: "src/pages",
			includes: "../components",
			layouts: "../layouts",
			data: "../data",
			output: "dist"
		}
	}
}
