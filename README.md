# NHSUK's ESLint config

[![GitHub Release](https://img.shields.io/github/release/nhsuk/eslint-config-nhsuk.svg)](https://github.com/nhsuk/eslint-config-nhsuk/releases/latest/)
[![npm version](https://badge.fury.io/js/eslint-config-nhsuk.svg)](https://badge.fury.io/js/eslint-config-nhsuk)
[![Greenkeeper badge](https://badges.greenkeeper.io/nhsuk/eslint-config-nhsuk.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/nhsuk/eslint-config-nhsuk.svg?branch=master)](https://travis-ci.org/nhsuk/eslint-config-nhsuk)
[![Known Vulnerabilities](https://snyk.io/test/github/nhsuk/eslint-config-nhsuk/badge.svg)](https://snyk.io/test/github/nhsuk/eslint-config-nhsuk)

> This repo provides NHSUK's `.eslintrc` as a [shareable config](http://eslint.org/docs/developer-guide/shareable-configs).

The config is an extension of
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).
Details of the changes can be seen in the exported config defined in
[index.js](index.js). The main changes are the addition of `node` and `mocha`
environments along with a few small tweaks to the rules. The rule changes
better meet the personal preferences of the repo maintainers.

## Installation

To install the package run:

* npm - `npm install eslint-config-nhsuk --save-dev`
* yarn - `yarn add eslint-config-nhsuk --dev`

The config relies upon several other packages. These are the
[Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/).
To get a list of the peerDependencies run the following command:

```
npm info eslint-config-nhsuk peerDependencies
```

All peerDependencies need to be installed.

## Usage

Once the `eslint-config-nhsuk` package has been installed it is ready to be
used. This is achieved by specifying `nhsuk` in the
[extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
section of your
[eslint config file](http://eslint.org/docs/user-guide/configuring#using-configuration-files).
If there is no existing eslint config file it could be as simple as creating a
file named `.eslintrc` with the following content:

```
{
  "extends": "nhsuk"
}
```
