import React, { Component } from 'react';
import { connect } from 'react-redux';
import AsanasList from './asanasList';
import Pagination from './pagination/index';
import LoadingIndicator from './loading-indicator/index'
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
            {
              this.props.loading
              ? <LoadingIndicator />
              : this.props.error.isError 
                ?  <div>{this.props.error.message}</div>
                : <>
                    <AsanasList 
                      asanas={this.props.results}
                      onItemClick={this.onAddToFlowClick}
                      btnText="Add to flow"
                      showTitle={false}
                    />
                    {
                      this.props.results.length > 0 &&
                      <Pagination 
                        pageNumber={this.props.resultsPage}
                        textToSearch={this.state.search}
                        fetchPage={this.props.fetchSearchResults}
                      />
                    }
                </>
            }
          </div>
        );
    }
};

const mapStateToProps = (state) => {
  const {
    search : {loading, error, results, resultsPage}
  } = state;

  return {
    loading,
    error,
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