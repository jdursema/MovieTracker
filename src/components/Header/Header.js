import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut, getFavorites } from '../../actions';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {

  componentWillUpdate(nextProps) {
    // console.log(this.props)
    // console.log(this.props.history)
    if (nextProps.loggedIn && !this.props.loggedIn) {
      this.props.history.push('/');

    }
  }

  handleFavoritesClick = () => {
    //if a user is not signed in, prompt them to sign in/create account

    if (this.props.loggedIn){
      console.log('displayfavorites moo')
      this.props.displayFavorites(this.props.username.id)
    }
  }


  render() {
    const username = this.props.username.name ? this.props.username.name : 'Guest';

    const signOutBtn = 
      <button onClick={(event)=> {
        event.preventDefault();
        this.props.handleLogOut(this.state);
      }}>
        LogOut
      </button>;

    const newUserBtns = 
      <div>
        <Link to='/createaccount' className='createaccount'>
          Create Account
        </Link>
        <Link to='/login' className='login'>
          Login
        </Link>
        
      </div>;
    
    const userButtons = this.props.username.name ? signOutBtn : newUserBtns;

    return (
      <header className="header">
        <Link to='/' className='home-link'>
          <h1>MovieTracker</h1>
        </Link>
        <h3>Hello, {username}!</h3>
        {userButtons}
        <Link to= '/favorites'>
          <button onClick={this.handleFavoritesClick}>Favorites</button>
        </Link>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user,
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  handleLogOut: () => dispatch(logOut()),
  displayFavorites: (userId) => dispatch(getFavorites(userId))
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  username: PropTypes.object,
  loggedIn: PropTypes.bool,
  handleLogOut: PropTypes.func
};