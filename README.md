# Generic CSS

A CSS/Sass style for simple HTML documents. It has mainly been tested on
Org-mode exports. Contributions welcome.

- [Github](https://github.com/mattduck/generic-css)
- [Styled README](https://mattduck.github.io/generic-css/index.html)


## Examples

- [Demo elements](https://mattduck.github.io/generic-css/demo/index.html)
- [An exported Org-mode file](https://mattduck.github.io/generic-css/demo/org-demo.html)


## Features

Except for a few classes specific to Org-mode exports, elements
are styled directly. It uses the [Solarized colour
scheme](http://ethanschoonover.com/solarized), and includes both light and dark
versions. There are some media queries. __Google Fonts is used__, but you might
prefer to provide your own - the files are included for convenience.


### Theme selector

You can include `generic-css.js` to insert theme-selecting buttons at the
top of the page (as seen on the styled README page). It expects your stylesheet
links to have IDs `generic-css-dark` and `generic-css-light`, as in the below snippet:

    <link id="generic-css-dark"  rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/mattduck/generic-css/master/css/generic-dark.min.css">
    <link id="generic-css-light" rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/mattduck/generic-css/master/css/generic-light.min.css">
    <script type="text/javascript" src="https://raw.githubusercontent.com/mattduck/generic-css/master/js/generic-css.min.js"></script>


## Download

- [generic-light.css](https://raw.githubusercontent.com/mattduck/generic-css/master/css/generic-light.css)
- [generic-light.min.css](https://raw.githubusercontent.com/mattduck/generic-css/master/css/generic-light.min.css)
- [generic-dark.css](https://raw.githubusercontent.com/mattduck/generic-css/master/css/generic-dark.css)
- [generic-dark.min.css](https://raw.githubusercontent.com/mattduck/generic-css/master/css/generic-dark.min.css)
- [generic-css.js](https://raw.githubusercontent.com/mattduck/generic-css/master/js/generic-css.js)
- [generic-css.min.js](https://raw.githubusercontent.com/mattduck/generic-css/master/js/generic-css.min.js)

To try without downloading, use (light):

    <link href="https://raw.githubusercontent.com/mattduck/generic-css/master/css/generic-light.min.css" rel="stylesheet" type="text/css">

or (dark):

    <link href="https://raw.githubusercontent.com/mattduck/generic-css/master/css/generic-dark.min.css" rel="stylesheet" type="text/css">


## Development

Run `build.sh` to compile the Sass files to `./css`, compress the Javascript and
export `README.md` to `index.html`:

    cd $repository_root
    ./build.sh

This requires:

- `sass`
- `kramdown`
- `uglifyjs`


## Acknowledgements

- This turned out to share some similarities with [solarized-css by
  thomasf](https://github.com/thomasf/solarized-css).
- The demo Org-mode document comes from
  [http://orgmode.org/worg](http://orgmode.org/worg), and is licensed as
  described in the `.html` and `.org` files.
