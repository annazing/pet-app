import React, { Component } from 'react';
import search from '../services/search'
import '../app.scss';

class AsanaSearch extends Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchInput = this.onSearchInput.bind(this);
        this.state = {
          search: '',
          imgs: [] 
        };
    }

    async onSearchSubmit(event) {
        event.preventDefault();

        const result = await search(this.state.search);
        this.setState({ imgs: result })
    };

    onSearchInput(event) {
      this.setState({ search: event.target.value });
    };

    render() {
        return (
            <div className="search">
                <form className="search__form" onSubmit={this.onSearchSubmit}>
                    <label> Search asana: </label>
                    <input className="search__input"onChange={this.onSearchInput} />
                </form>
                {this.state.imgs.length &&
                    <div className="search__results">
                        {this.state.imgs.map((imgSrc, index) => (
                            <img src={imgSrc} className="search__pic" key={index}></img>
                        ))}
                    </div>
                }
            </div>
        );
    }
};

export default AsanaSearch;