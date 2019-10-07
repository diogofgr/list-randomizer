import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        list: [],
        isLoaded: false,
    };

    componentDidMount() {
        const list = window.localStorage.getItem('list')
            ? window.localStorage.getItem('list').split(';')
            : [];
        this.setState({
            list: this.randomize(list),
            isLoaded: true,
        });
    }

    handleRandomizeList = () => {
        const { isLoaded } = this.state;
        if (!isLoaded) return;
        this.setState(state => ({ list: this.randomize(state.list) }));
    }

    randomize = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render() {
        const { list, isLoaded } = this.state;

        return (
            <div className="windowframe">
                <div className="windowheader">
                    <h1>List Randomizer</h1>
                </div>
                <div className="windowbody">
                    <h2>Welcome to the List Randomizer</h2>
                    <div className="windowbody-content">
                        <div className="list-container">
                            <div className="list-container-content">
                                <p>
                                    To randomize your list click &apos;Randomize&apos;.
                                    To Edit click &apos;Edit List&apos;
                                </p>
                                { isLoaded && (
                                    <ul>
                                        {
                                            list.map(item => (
                                                <li key={item}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="buttons">
                            <Link to="/edit">
                                <button type="button">Edit List</button>
                            </Link>
                            <button type="button" onClick={this.handleRandomizeList}>
                                Randomize (
                                {list.length}
                                )
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Home;
