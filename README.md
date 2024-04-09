# 官網預覽畫面 
---
![image]([https://github.com/zzliou/Das-Parfum/blob/157f52dc148514a4b755f56f547bb0d1d353d2cd/%E6%9C%AA%E5%91%BD%E5%90%8D.jpg])

---

# 專案介紹 

以 Vue3 框架為基礎開發，並利用 Firebase 資料庫和 Pinia 等工具串接後台 API 數據，實作了會員登入、登出、查看會員訂單、加入購物車等功能，同時，具備響應式設計（RWD）。
歡迎點擊連結查看我的作品： [香氛品牌電商網站](https://zzliou.github.io/Das-Parfum/#/home)
--- 


串接了會員登入、購物車、查看訂單明細功能

**透過此專案，我學習到以下開發技能：**

* 熟悉Vite等網頁打包工具，並完成網頁底層架構建置
* 熟悉Vue.js框架，並用Vue3開發作品集網站
* 於專案中使用Pinia狀態管理器，共同管理網頁資料流
* 建置firebase專案，並用於串接網頁認證與資料庫存取等功能
* 使用SCSS 預處理器進行開發，並使用mixin,色碼管理等技巧優化專案架構
* 實作RWD於手機、平板、筆電與桌機各裝置，以優化使用者體驗
* 使用ES6語法開發，提升程式碼品質與可讀性
* 串接第三方Library如Swiper，並客製化功能與樣式以達成特定功能
* 使用 Git 進行版本操控，並熟稔相關用法
* 使用npm 管理包進行套件控管
* 串接gh-pages服務，並實作客製化指令，讓專案能一鍵部署
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

