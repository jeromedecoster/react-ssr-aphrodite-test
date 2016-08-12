const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup
const StyleSheetServer = require('aphrodite').StyleSheetServer
const writeFile = require('fs').writeFile

const Contact = require('./src/Contact3')

var obj = StyleSheetServer.renderStatic(function() {
  return renderToStaticMarkup(Contact)
})

const str = obj.html.replace('/* style */', obj.css.content)
writeFile('./contact3.html', str)
