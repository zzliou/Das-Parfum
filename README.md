## 官網預覽畫面 

![image］([https://github.com/zzliou/Das-Parfum/blob/157f52dc148514a4b755f56f547bb0d1d353d2cd/%E6%9C%AA%E5%91%BD%E5%90%8D.jpg])


## 專案介紹 

以 Vue3 框架為基礎開發，並利用 Firebase 資料庫和 Pinia 等工具串接後台 API 數據，實作了會員登入、登出、查看會員訂單、加入購物車等功能，同時，具備響應式設計（RWD）。
歡迎點擊連結查看我的作品： [香氛品牌電商網站](https://zzliou.github.io/Das-Parfum/#/home)

## 開發技術介紹

* 掌握 Vite 網頁打包工具，並完成網頁底層架構建置
* 使用 Vue.js 框架，並以Vue3 完成作品集網站開發
* 應用 Pinia 狀態管理器，有效管理網頁資料
* 建置 Firebase 專案，並用於串接網頁認證與資料庫存取等功能
* 運用 SCSS 預處理器進行開發，並利用 mixin、色碼管理等技巧優化專案架構
* 實作 RWD 於手機、平板、筆電與桌機各裝置，以提升使用者體驗
* 使用 ES6 語法進行開發，以提升程式碼品質與可讀性
* 使用Swiper輪播圖JS插件，增加網頁互動性
* 使用 Git 進行版本控制，熟悉相關操作
* 利用 npm 管理套件，進行專案所需的套件控管
* 整合 gh-pages 服務，可完成調整指令，讓專案能一鍵部署

## 專案下載與安裝 Project setup
---
# perfume

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

