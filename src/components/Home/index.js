// Write your code here
import {Component} from 'react'
import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedin: !prevState.isLoggedin}))
  }

  render() {
    const {isLoggedin} = this.state
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedin={isLoggedin} />
          {isLoggedin ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
