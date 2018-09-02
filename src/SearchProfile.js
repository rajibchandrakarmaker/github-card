import React, { Component } from 'react';

class SearchProfile extends Component {
  render() {
    return (
      <div className="search--box">
        <form onSubmit={this.handleForm.bind(this)}>
          <label>
            <input
              type="search"
              ref="username"
              placeholder="Enter your username"
            />
          </label>
        </form>
      </div>
    );
  }
  handleForm(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    this.props.fetchProfile(username);
    this.refs.username.value = '';
  }
}

export default SearchProfile;
