#!/bin/sh
#
# usage: ./build.sh
#
# Compile Sass, compress JS and convert README.md to index.html.
# MUST BE CALLED FROM REPOSITORY ROOT.

sass --scss scss/generic-light.scss css/generic-light.css
sass --scss --style compressed scss/generic-light.scss css/generic-light.min.css

sass --scss scss/generic-dark.scss css/generic-dark.css
sass --scss --style compressed scss/generic-dark.scss css/generic-dark.min.css

uglifyjs js/generic-css.js --compress --mangle --output=js/generic-css.min.js

echo '<html>
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0;">
<link id="generic-css-dark" rel="stylesheet" type="text/css" href="css/generic-dark.css" />
<link id="generic-css-light" rel="stylesheet" type="text/css" href="css/generic-light.css" />
<script type="text/javascript" src="js/generic-css.js"></script>
</head>
<body>' > index.html

kramdown README.md -i markdown >> index.html

echo '</body>
</html>' >> index.html
