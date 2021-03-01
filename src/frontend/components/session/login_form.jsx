import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">This field is required!</div>
    );
  }
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { history, login } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      login(this.state.username, this.state.password)
        .then(() => {
          history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default LoginForm;
