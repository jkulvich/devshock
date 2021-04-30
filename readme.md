# 📱🔨 Device Shock Detector

The simple module to detect device shocks like side bump or knock. It uses
[Motion API](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)
and only works in browsers.

There is many use-cases to make your site/app more interactive and featured. Several cases for example:

- Knock to send feedback
- Bump to pair
- Knock to the back to make smth (open chat, move back and so on)

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

This project written with TypeScript and it better to use it in projects built with some assembly systems like Webpack
or Gulp.

Anyway, you can build it and use it as a single js file with:

```shell
yarn build
```

So you'll get a **dist** folder with **devshock.js** and **devshock.min.js**
file. Moreover, you can test they via **index.html**

Another way to play with it is running internal server via:

```shell
yarn serve
```

And navigate to **http://<internal_ip>:8080**  
For example: **http://192.168.43.188:8080**

# 📑 Usage

//TODO:
