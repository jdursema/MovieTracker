import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions';
import PropTypes from 'prop-types';
import './CreateAccountForm.css';

class CreateAccountForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleClick = event => {
    event.preventDefault();
    this.props.handleNewAccount(this.state);
  };

  render() {
    return (
      <form className="create-acct-form">
        <fieldset>
          {this.props.isError && (
            <p className="error-msg">{this.props.errorMsg}</p>
          )}
          <input
            type="text"
            className="user-name"
            onChange={event => this.setState({ name: event.target.value })}
          />
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
          <button onClick={this.handleClick}>Create Account</button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isError: state.errorStatus.isError,
  errorMsg: state.errorStatus.errorMsg,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  handleNewAccount: userObj => dispatch(createNewUser(userObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);

CreateAccountForm.propTypes = {
  isError: PropTypes.bool,
  errorMsg: PropTypes.string,
  user: PropTypes.object,
  handleNewAccount: PropTypes.func
};
