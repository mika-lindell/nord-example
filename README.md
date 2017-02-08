# React webpack starter template

Based on [https://github.com/krasimir/react-webpack-starter]

Requires NodeJS & npm.

**To install:**
```
– npm install
```
<del>
Make copies of following files:
* *config/webpack.dev.default.ts*
* *config/webpack.prod.default.ts*
* *config/webpack.test.default.ts*

And rename copied files to:
* *config/webpack.dev.ts*
* *config/webpack.prod.ts*
* *config/webpack.test.ts*

Profit: Change local config without messing it in repo.
</del>

**Run with:**
```
– npm start
```

Dev server defaults at: [http://192.168.0.100:8080/]
* For one to access it with other devices in same LAN.
* If it doesn't work for you, change it to *http://localhost* or something else at *config/helpers.js*.

 
**Build with:**
```
– npm run build
```

<del>
* Copy *public/* and its contents to your server root
* Copy *dist/index.html* to your server
* Copy everything else in *dist/* to the *public/* you copied to your server

Profit: Open *index.html*
</del>


Test with:
```
– npm test
```
