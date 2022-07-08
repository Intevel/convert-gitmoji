# convert-gitmoji

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![License][license-src]][license-href]

Simple way to replace strings with gitmojis ♻️

## Install

```sh

# Using npm
npm install convert-gitmoji

# Using yarn
yarn add convert-gitmoji
```

## Usage

### `convert(content: string, withSpace?: boolean | "leading" | "trailing" | "both")`

Convert all gitmojis in a string
`withSpace` is default `false`, if `true` its sets a trailing (at the end of the string) whitespace after the converted gitmoji.

For more control, `withSpace` can also be set to `leading` for a whitespace *before the string*, `trailing` for a whitespace *at the end of the string* (same as `true`) or `both` to have the string surrounded by whitespaces.

```js
// CommonJS
const { convert } = require("convert-gitmoji");

// ESM
import { convert } from "convert-gitmoji";

convert(':arrow_up: bump qs from 6.10.3 to 6.10.4 (xxx) - **helper:** :pencil:  Updated TSDoc (xxx)', true);

--> "⬆️ bump qs from 6.10.3 to 6.10.4 (xxx) - **helper:** ✏️ Updated TSDoc (xxx)"

convert("This:art:is on:fire:!")

--> "This🎨is on🔥!"

convert("This:art:is on:fire:!", "both")

--> "This 🎨 is on 🔥 !"
```

## License

Published under MIT - Made with ❤️ by Conner Luka Bachmann

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/convert-gitmoji/latest.svg
[npm-version-href]: https://npmjs.com/package/convert-gitmoji
[npm-downloads-src]: https://img.shields.io/npm/dt/convert-gitmoji.svg
[npm-downloads-href]: https://npmjs.com/package/convert-gitmoji
[github-actions-ci-src]: https://github.com/intevel/convert-gitmoji/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/intevel/convert-gitmoji/actions?query=workflow%3Aci
[license-src]: https://img.shields.io/npm/l/convert-gitmoji.svg
[license-href]: https://npmjs.com/package/convert-gitmoji
