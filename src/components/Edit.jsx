import React, { Component } from 'react';

class Edit extends Component {
    state = {
        list: [],
        isLoaded: false,
    };

    componentDidMount() {
        const list = window.localStorage.getItem('list').split(';');
        this.setState({
            list,
            isLoaded: true,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        let list = e.target.list.value.split('\n').join(';');
        // delete the last if it's empty
        if(list[list.length - 1] === ';') {
            list = list.substring(0, list.length - 1);
        }
        window.localStorage.setItem('list', list);
        history.push('/');
    }

    render () {
        const { list } = this.state;
        return (
            <div className="windowframe">
                <div className="windowheader">
                    <h1>List Randomizer Editor</h1>
                </div>
                <div className="windowbody">
                    <p>Edit your list below. Each item must be in it&apos;s own line.</p>
                    <form className="windowbody-content" action="" onSubmit={this.handleSubmit}>
                        <div className="list-container list-container-white">
                            <div className="list-container-content">
                                <textarea
                                    autoFocus
                                    name="list"
                                    id=""
                                    rows="10"
                                    defaultValue={list.join('\n')}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <input type="submit" value="Save and Exit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}

export default Edit;
