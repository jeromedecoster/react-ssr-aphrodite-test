const Base = require('./Base1')
const React = require('react')

class Contact extends React.Component {
  render() {
    return (<Base title='Page Contact !'>
        <p>contact@example.com</p>
      </Base>)
  }
}

module.exports = <Contact />
