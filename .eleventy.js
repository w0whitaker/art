module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("main.css");
    eleventyConfig.addPassthroughCopy("public/");
}