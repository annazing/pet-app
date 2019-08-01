import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ textToSearch, pageNumber, fetchPage }) => {

  const numberOfPicsOnPage = 10;
  let pageNumberToShow = Math.floor(pageNumber/numberOfPicsOnPage + 1); 

  const onChangePage = (numberToChange) => {
    pageNumberToShow = Math.floor(pageNumber/numberOfPicsOnPage + 1);

    let pageNumberToFetch = (pageNumberToShow + numberToChange) * numberOfPicsOnPage + 1 - numberOfPicsOnPage;
    fetchPage(textToSearch, pageNumberToFetch);
  };

  return (
    <div>
      <button onClick={() => onChangePage(-1)}>Previous</button>
      <p>{pageNumberToShow}</p>
      <button onClick={() => onChangePage(1)}>Next</button>
    </div>
  );
};

Pagination.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    fetchPage: PropTypes.func.isRequired
  }

export default Pagination;