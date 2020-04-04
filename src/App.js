import React from 'react';

import Search from './Search';
import './styles.css';



export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            searchTerm: '',
            jokes: [],
            isFetchingJokes: false
        }

        this.onSearchChange = this.onSearchChange.bind(this);

    }


    fetchJoke = (limit = 20) => {
        this.setState({ isFetchingJokes: true });

        fetch(`https://icanhazdadjoke.com/search?term=${
            this.state.searchTerm}
&limit=${limit}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            })
            .then(res => res.json())
            .then(json => {
                const jokes = json.results;
                this.setState({
                    jokes,
                    isFetchingJokes: false
                })

            });
    };

    onSearchChange = (value) => {
        this.setState({ searchTerm: value })
    };

    renderJokes = () => {
        return (
            <ul className="list-style">
                {this.state.jokes.map(item => <li className="each-list" key={item.id}>{item.joke}</li>)}
            </ul>
        );
    };

    render() {

        return (
            <div className="App ">


                <Search
                    isFetching={this.isFetchingJokes}
                    onSubmitting={this.fetchJoke}
                    onSearching={this.onSearchChange}
                    onFetching={() => this.fetchJoke(1)}

                />
                {this.state.isFetchingJokes
                    ? <span className="load">Loading ...</span>
                    : this.renderJokes()
                }

            </div>
        )
    }
}


