module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("public/");
    
    return {
        dir:{
            input: "src",
            output: "_site",
            data: "_data",
            includes: "_includes"
        },
    };
};