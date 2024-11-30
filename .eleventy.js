import "dotenv/config";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("public/");

    return {
        dir: {
            input: "src",
            output: process.env.OUTDIR || "_site",
            data: "_data",
            includes: "_includes",
        },
    };
}
