export default function (eleventyConfig) {
  eleventyConfig.addFilter("titleCase", function (str) {
    let strOut = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + ".";
    return strOut;
  });
}
