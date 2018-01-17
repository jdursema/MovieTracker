import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../../actions';
import PropTypes from 'prop-types';
import './LoginForm.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <form className="login-form">
        <fieldset>
          {this.props.isError && (
            <p className="error-msg">{this.props.errorMsg}</p>
          )}
          <input
            type="text"
            className="user-email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            type="password"
            className="user-password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button
            onClick={event => {
              event.preventDefault();
              this.props.handleLogin(this.state);
            }}>
            LOGIN
          </button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isError: state.errorStatus.isError,
  errorMsg: state.errorStatus.errorMsg
});

const mapDispatchToProps = dispatch => ({
  handleLogin: userObj => dispatch(logInUser(userObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  handleLogin: PropTypes.func,
  isError: PropTypes.bool,
  errorMsg: PropTypes.string
};
