module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/**/*.css");
    eleventyConfig.addPassthroughCopy("public/");

    return {
        dir: {
            input: "src"
        }
    }
};