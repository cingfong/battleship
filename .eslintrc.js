module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    //   插件位置
    "plugin:vue/essential",
    "standard",
  ],
  parserOptions: {
    //   觀測副檔名
    ecmaVersion: "latest",
    sourceType: "module",
  },
  //   eslint 插件
  plugins: ["vue"],
  //   設定值
  parserOption: {},
  rules: {
    //   檢查錯誤規則，若有多餘錯誤可以直接將錯誤訊息複製 設定0關閉
  },
};
