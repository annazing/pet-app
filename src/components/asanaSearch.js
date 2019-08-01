import React, { Component } from 'react';
import { connect } from 'react-redux';
import AsanasList from './asanasList';
import Pagination from './pagination/index';
import Notification from './notification/index'
import { addAsana, fetchSearchResults } from '../actions/actions';
import '../scss/app.scss';

class AsanaSearch extends Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchInput = this.onSearchInput.bind(this);
        this.onAddToFlowClick = this.onAddToFlowClick.bind(this);
        this.store = this.context;
        this.state = {
          search: ''
        };
    }

    onSearchSubmit(event) {
      event.preventDefault();

      this.props.fetchSearchResults(this.state.search);
    };

    onSearchInput(event) {
      this.setState({ search: event.target.value });
    };

    onAddToFlowClick (asana) {
      this.props.addAsana({
        id: asana.id,
        asanaName: asana.asanaName,
        asanaSrc: asana.asanaSrc
      });
    };

    isNothingFound () {
      return (this.props.phrase.length > 0 && this.props.results.length === 0);
    }

    render() {
        return (
          <div className="asanas">
            <form className="asanas__search-form" onSubmit={this.onSearchSubmit}>
              <input
                placeholder={'Search asana'}
                className="asanas__search-input"
                onChange={this.onSearchInput}
              />
            </form>
            <Notification 
              loading={this.props.loading} 
              error={this.props.error} 
              isShowInfo={this.isNothingFound()}
              infoText={'Nothing was found'}
            />
            {
              this.props.results.length > 0 &&
              <>
                <h1>{this.props.phrase}</h1>
                <AsanasList 
                  asanas={this.props.results}
                  onItemClick={this.onAddToFlowClick}
                  btnText="Add to flow"
                  showTitle={false}
                />
                <Pagination 
                  pageNumber={this.props.resultsPage}
                  textToSearch={this.state.search}
                  fetchPage={this.props.fetchSearchResults}
                />
              </>
            }
          </div>
        );
    }
};

const mapStateToProps = (state) => {
  const {
    search : {loading, error, phrase, results, resultsPage}
  } = state;

  return {
    loading,
    error,
    phrase,
    resultsPage,
    results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAsana: asana => {
      dispatch(addAsana(asana))
    },
    fetchSearchResults: (phrase, page) => {
       dispatch(fetchSearchResults(phrase, page));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsanaSearch);;