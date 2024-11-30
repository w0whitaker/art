import "dotenv/config";
import pluginNavigation from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginNavigation);

    eleventyConfig.addPassthroughCopy("public/");

    return {
        dir: {
            input: "content",
            output: process.env.OUTDIR || "_site",
            data: "../_data",
            includes: "../_includes", // relative to 'input' dir
        },
    };
}
