const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup
const writeFile = require('fs').writeFile

const Contact = require('./src/Contact1')

var str = renderToStaticMarkup(Contact)
writeFile('./contact1.html', str)
