import React, { Component } from 'react';
import './App.css';

import SearchProfile from './SearchProfile.js';
import Profile from './Profile.js';

const API = 'https://api.github.com/users';

class App extends Component{
    constructor(props){
        super (props);
        this.state = {
            username : 'rajibchandrakarmaker',
            name : '',
            avatar : '',
            location : '',
            repos : '',
            followers : '',
            following : '',
            homeUrl : '',
            notFound: '',
        }
    }
    fetchProfile(username) {
        let url = `${API}/${username}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    username : data.login,
                    name: data.name,
                    avatar : data.avatar_url,
                    location : data.location,
                    repos : data.public_repos,
                    followers : data.followers,
                    following : data.following,
                    homeUrl : data.html_url,
                    notFound: data.message
                })
            })
            .catch((error) => console.log('Oops! . There Is A Problem'))
    }

    componentDidMount(){
        this.fetchProfile(this.state.username);
    }
    render(){
        return(
            <div>
                <section id="card">
                    <SearchProfile fetchProfile={this.fetchProfile.bind(this)}/>
                    <Profile data = {this.state}/>
                </section>
            </div>
        )
    }
}

export default App
