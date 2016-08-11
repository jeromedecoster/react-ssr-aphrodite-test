const StyleSheetServer = require('aphrodite').StyleSheetServer
const StyleSheet = require('aphrodite').StyleSheet
const css = require('aphrodite').css

var styles = StyleSheet.create({
  test: {
    color: '#f00'
  }
})

console.log('styles:', styles)
console.log('---')

var obj = StyleSheetServer.renderStatic(function() {
  return '<p class="' + css(styles.test) + '">cool</p>'
})
console.log('obj:', obj)
console.log('---')

var body = '<body>'  +
           '<style>' + obj.css.content + '</style>' +
           obj.html  +
           '</body>'

console.log('body:', body)
