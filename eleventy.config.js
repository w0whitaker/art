export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("content/css/");
    eleventyConfig.addPassthroughCopy("public/");

    return {
        dir: {
            input: "content",
            output: "_site",
            data: "_data",
            includes: "../_includes", // relative to 'input' dir
        },
    };
}
