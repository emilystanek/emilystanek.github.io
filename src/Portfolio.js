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
        fetch('/api/shots')
            .then(response => {
                console.log(response);
                response.json()
            })
        .then(state => this.setState(state));
    }
    render() {
        return (
            <div id="shots">
                {
                    this.state.shots.map(shot => {
                        return (
                            <a class="shot" target="_blank" rel="noopener noreferrer" href={shot.html_url} title={shot.title}><div class="title">{shot.title}</div><img src={shot.images.hidpi} alt={ shot.title }/></a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Portfolio