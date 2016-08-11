const React = require('react')

class Base extends React.Component {
  render() {
    return (<html>
        <head>
          <title>{this.props.title}</title>
          <style>{'/* style */'}</style>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>)
  }
}

module.exports = Base
