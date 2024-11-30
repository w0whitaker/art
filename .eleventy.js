import "dotenv/config";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("public/");

    return {
        dir: {
            input: "src",
            output: process.env.OUTDIR,
            data: "_data",
            includes: "_includes",
        },
    };
}
