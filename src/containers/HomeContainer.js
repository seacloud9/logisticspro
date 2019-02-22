import React from 'react'
import MaterialNavBar from '../components/MaterialNavBar'
class HomeContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { ...props }
  }

  componentDidMount () {
    document.querySelector('#loader').hidden = true
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps)
  }

  render () {
    return (
      <div>
        <MaterialNavBar title='Home' onHash={() => {}} />
        hello world
      </div>
    )
  }
}

export default HomeContainer
