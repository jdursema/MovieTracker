import React, { Component } from 'react';
import { apiFetch } from '../../helper/apiHelper';
import { storeMovies } from '../../actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    try {
      this.props.handleFetch();
    } catch (error) {
      console.log('error:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/createaccount" component={CreateAccountForm} />
        <Route exact path="/" component={CardContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: state.movies });
const mapDispatchToProps = dispatch => ({
  handleFetch: () => dispatch(storeMovies())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
