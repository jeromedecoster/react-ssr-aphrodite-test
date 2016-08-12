const StyleSheet = require('aphrodite').StyleSheet
const css = require('aphrodite').css
const React = require('react')

const Base = require('./Base2')

class Contact extends React.Component {
  render() {
    return (<Base title="Page Contact !">
      <p className={css(styles.test)}>contact@example.com</p>
    </Base>)
  }
}

module.exports = <Contact />

const mq = '@media only screen and (max-width : 767px)'

var styles = StyleSheet.create({
  test: {
    color: '#f00',
    ':hover': {
      color: '#0f0'
    },
    [mq]: {
      color: '#00f',
    }
  }
})
