# NHSUK's ESLint config

[![Greenkeeper badge](https://badges.greenkeeper.io/nhsuk/eslint-config-nhsuk.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/nhsuk/eslint-config-nhsuk.svg?branch=master)](https://travis-ci.org/nhsuk/eslint-config-nhsuk)

This repo provides NHSUK's `.eslintrc` as a [shareable config](http://eslint.org/docs/developer-guide/shareable-configs).

## Config info

The config is an extension of
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). The
changes can be seen in the exported config defined in [index.js](index.js).

The main changes are the addition of `node` and `mocha` environments along with
a few small tweaks to the rules that better meet the personal preferences of
the repo maintainers.

## Installation

To install the package (with npm) run:

```
npm install eslint-config-nhsuk --save-dev
```

This package relies upon several other packages. These are the
[Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/).
To get a list of the peerDependencies run the following command:

```
npm info eslint-config-nhsuk peerDependencies
```
