import "dotenv/config";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        extensions: "html",
        formats: ["webp", "jpg"],
        widths: [200],
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
            sizes: "auto",
        },
    });

    // Filters
    eleventyConfig.addFilter("titleCase", function (str) {
        let strOut =
            str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + ".";
        return strOut;
    });

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
