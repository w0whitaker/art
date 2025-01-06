# williamwhitaker.art
The art portfolio site of William Whitaker.

## About this site's codebase.

This site is built with [11ty](https://11ty.dev) (version 3), and uses the [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) as a starter.

### Organization.

The source code is located in the `content` directory, and is compiled to the `_site` directory. The `_config`, `_data`, and `_includes` directories contain code that supplements that found in `contnt`. Each directory has (or will have) its own `README.md` file explaining its contents in more depth.

The `public` directory is set to be ignored by git and should be used for large files that don't need to be committed to version conrtol, such as images.

### Configuration.

The `eleventy.config.js` file contains the main configuration options, or sources them from elsewhere. (For example, the various template filters are collected in the `filtersPlugin`, which is sourced from `./_config/filters.js`.)

The `return` block specifies the various directories and their roles. As mentioned above, the output directory is set to `_site`. This can be overridden by setting the `OUTDIR` environment variable (in a `.env` file.) If no `.env` file is present, or `OUTDIR` is not set, `_site` is provided as a fallback. Also note that the `data` and `includes` options are relative to the `input` directory, not the config file.