import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchService from '../services/search';
import AsanaPicture from './asanaPicture';
import { addAsana } from '../actions/actions';
import '../app.scss';

class AsanaSearch extends Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchInput = this.onSearchInput.bind(this);
        this.onAddToFlowClick = this.onAddToFlowClick.bind(this);
        this.store = this.context;
        this.state = {
          search: '',
          imgs: [] 
        };
    }

    async onSearchSubmit(event) {
        event.preventDefault();

        const result = await SearchService.getImages(this.state.search);
        this.setState({ imgs: result })
    };

    onSearchInput(event) {
      this.setState({ search: event.target.value });
    };

    onAddToFlowClick (imgSrc) { 
      this.props.addAsana({
        asanaName: this.state.search,
        asanaSrc: imgSrc
      });
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
                    <AsanaPicture 
                      imgSrc={imgSrc}
                      onClick = {() => this.onAddToFlowClick(imgSrc) }
                      btnText = 'Add to flow'
                      key={index}
                    />
                  ))}
              </div>
            }
          </div>
        );
    }
};

export default connect(
  null,
  {addAsana}
)(AsanaSearch);;