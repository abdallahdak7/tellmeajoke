import React from 'react'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            joke: '',

        }

        this.fetchJoke = this.fetchJoke.bind(this);

    }


    fetchJoke = () => {
        fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ joke: json.joke })

            });
    };

    componentDidMount = () => {
        this.fetchJoke();
    }

    render() {



        return (
            <div>
                <button onClick={this.fetchJoke}>tell me a joke</button>
                <p>{this.state.joke}</p>
            </div>
        )
    }
}


