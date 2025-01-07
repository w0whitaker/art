# The content directory.

This directory contains everything that will be compiled at build time (except for what is in the `public` directory.)

_A note on terminology: I use "content template" to refer to files that provide the markup (OH! MARKDOWN IS A PLAY ON MARKUP! ONLY TOOK ME, LIKE, 15 YEARS TO GET THAT.) for a page's content, and "layout templates" to refer to files that provide the general page markup._

## Directory data files.

The `content.11tydata.js` file is for adding data to the content templates in this directory. Currently, it is only used to set the default layout template for each page.

## Content templates.

### `index.njk`

This is the homepage. It uses the `home.njk` template, located in `_includes/layouts`.

### `paintings/all-paintings.njk`

This is the content template for paginating the data in `_data/artworks.json`.

### `paintings/paintings.njk`

This is the content template for the "index" page showing thumbnails of artworks, with links to the individual artwork's page.

