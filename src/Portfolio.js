import React, { Component } from "react";
import './assets/stylesheets/portfolio.scss';
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shots: []
        }
    }

    componentDidMount() {
        // Set the Access Token
        var accessToken = '7cf6c6076e0bb7cf08bb13a2ed8b0bacb4cfa28cd418498c3a68b2584c555ac2';
        var url = "https://api.dribbble.com/v2/user/shots?access_token="
        // Call Dribble v2 API
        fetch(url + accessToken, {
            crossDomain: true,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then(responseJson => {
                this.setState({ shots: responseJson });
                console.log(responseJson);
            });
    }
    render() {
        return (
            <div id="shots">
                {
                    this.state.shots.map(shot => {
                        return (
                            <a class="shot" target="_blank" href={shot.html_url} title={shot.title}><div class="title">{shot.title}</div><img src={shot.images.hidpi} /></a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Portfolio