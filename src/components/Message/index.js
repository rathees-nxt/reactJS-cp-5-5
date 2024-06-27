// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedin} = props
  console.log(isLoggedin)
  const message = isLoggedin ? 'Welcome User' : 'Please Login'

  return <h1 className="message">{message}</h1>
}

export default Message
