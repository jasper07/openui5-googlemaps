# OpenUI5 Google Maps

[![travis build](https://img.shields.io/travis/jasper07/openui5-googlemaps.svg?style=flat-square)](https://travis-ci.org/jasper07/openui5-googlemaps)
[![coverage](https://img.shields.io/coveralls/jasper07/openui5-googlemaps.svg?style=flat-square)](https://coveralls.io/github/jasper07/openui5-googlemaps?branch=master)
[![MIT Licence](https://img.shields.io/github/license/jasper07/openui5-googlemaps.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/prs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

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

See https://jasper07.github.io/openui5-googlemaps/ for online demos.

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
