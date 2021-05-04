module.exports = {
  plugins: {
    autoprefixer: {},// 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 要转化的单位
      viewportWidth: 375, //视窗宽度，对应设计稿宽度
      viewportHeight: 667, //视窗高度，对应设计稿高度
      unitPrecision: 5, //指定‘px’转换为视窗单位值的小数数位（很多时候无法整除）
      viewportUnit: 'vw', //转换成单位
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], //指定不需要的类
      minPixelValue: 1, //小于或等于‘1px’不转换为视窗单位
      mediaQuery: false, //允许在媒体查询中转换‘px’
      exclude: [/node_modules/,/TabBar/], //必须是正则表达式，忽略文件
      landscape: false // 是否处理横屏情况
    }
  }
}
