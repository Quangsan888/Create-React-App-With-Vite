import PropTypes from "prop-types";

function UserGreeting(props) {
  const welcome = <h2 className="welcome">Welcome {props.username}</h2>;
  const loginWarning = <h2 className="loginWarning">Please login</h2>;

  return props.isLoggedIn ? welcome : loginWarning;
}


UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username :PropTypes.string

}

UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest"
}
export default UserGreeting;
