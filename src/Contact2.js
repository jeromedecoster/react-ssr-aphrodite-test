const StyleSheet = require('aphrodite').StyleSheet
const css = require('aphrodite').css
const React = require('react')

const Base = require('./Base2')

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.styles = StyleSheet.create({
      test: {
        color: '#f00'
      }
    })
  }
  render() {
    return (<Base title="Page Contact !">
      <p className={css(this.styles.test)}>contact@example.com</p>
    </Base>)
  }
}

module.exports = <Contact />
