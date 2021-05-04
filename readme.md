![GitHub package.json version](https://img.shields.io/github/package-json/v/jkulvich/devshock?style=flat-square)
[![CircleCI](https://img.shields.io/circleci/build/gh/jkulvich/devshock?style=flat-square)](https://github.com/jkulvich/devshock)
[![GitHub](https://img.shields.io/github/license/jkulvich/devshock?style=flat-square)](https://github.com/jkulvich/devshock)
[![GitHub last commit](https://img.shields.io/github/last-commit/jkulvich/devshock?style=flat-square)](https://github.com/jkulvich/devshock/commit/main)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/jkulvich/devshock?style=flat-square)](https://github.com/jkulvich/devshock)

# 📱🔨 Device Shock Detector

The simple module to detect device shocks like side bump or knock. It uses
[Motion API](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)
and only works in browsers.

There is many use-cases to make your site/app more interactive and featured. Several cases for example:

- Knock to send feedback
- Bump to pair
- Knock to the back to make smth (open chat, move back and so on)

[![DevShock Mobile Example](https://raw.githubusercontent.com/jkulvich/devshock/main/assets/mobile_2.jpg)](https://jkulvich.github.io/devshock)

# 📦 Installation

🐈 With **yarn**:

```shell
yarn add devshock
```

🛠 With **npm**:

```shell
npm install devshock
```

# 🏗 Build & Try

Navigate to [GitHub Pages hosted example](https://jkulvich.github.io/devshock).  
It's better to use your smartphone, so it has accelerometer.

This project written with TypeScript and it better to use it in projects
built with some assembly systems like Webpack or Gulp.

Anyway, you can build it and use it as a single js file with:

```shell
yarn build
```

So you'll get a **dist** folder with **devshock.js** which can be integrated
in your project as raw js lib.

To test the lib use next command and follow to **https://<internal_ip>:8080**
from your mobile device:

```shell
yarn serve
```

# 📑 Usage

TypeScript:
```typescript
import DevShock, { ShockEventData } from 'devshock'

const dshock = new DevShock()
if (dshock.available())
    dshock.addListener('shock', (ev: ShockEventData) => {
        console.log(ev)
        // { timeStamp: 1620159608431, side: 'left', force: 23 }
    })
```

JavaScript:
```html
<script src="https://cdn.jsdelivr.net/npm/devshock/docs/devshock.js"></script>
```

```javascript
const dshock = new DevShock()
if (dshock.available())
    dshock.addListener('shock', ev => {
        console.log(ev)
        // { timeStamp: 1620159608431, side: 'left', force: 23 }
    })
```
