OpenUI5 Google Maps  
[![Build Status](https://travis-ci.org/jasper07/openui5-googlemaps.svg?branch=master)](https://travis-ci.org/jasper07/openui5-googlemaps)
[![Coverage Status](https://coveralls.io/repos/github/jasper07/openui5-googlemaps/badge.svg?branch=master)](https://coveralls.io/github/jasper07/openui5-googlemaps?branch=master)
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square

===================
A set of modules for [OpenUI5](http://openui5.org) that adds support for
using Google Maps.

Supported mapping functionality:
- Map display
- Markers and marker clusters
- Directions (including waypoints)
- Drawing polygons and polylines

Data binding is fully supported.

Author
------
John Patterson
https://github.com/jasper07

License
-------
MIT

Demos
----
Examples are in the `samples` directory and cover all of the core functionality.

See http://jasper07.github.io/openui5-googlemaps/ for online demos.

Contributing
------------
In order to contribute, you'll need to install node.js and npm, its package
manager. Once you've done that, you can install the build time dependencies
(gulp, etc).

    npm install

Once you've changed the source (in `src`), you can build the runtime version

    gulp

This regenerates the assets in `openui5/openui5-googlemaps`.

Create a topic branch for your changes and once they're ready to be merged
upstream, submit a pull request for review.
