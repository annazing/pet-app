import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Pagination = ({ textToSearch, pageNumber, fetchPage }) => {

  const numberOfPicsOnPage = 10;
  let pageNumberToShow = Math.floor(pageNumber/numberOfPicsOnPage + 1); 

  const onChangePage = (numberToChange) => {
    pageNumberToShow = Math.floor(pageNumber/numberOfPicsOnPage + 1);

    let pageNumberToFetch = (pageNumberToShow + numberToChange) * numberOfPicsOnPage + 1 - numberOfPicsOnPage;
    fetchPage(textToSearch, pageNumberToFetch);
  };

  return (
    <div className='pagination'>
      <button className='pagination__btn' onClick={() => onChangePage(-1)}>Previous</button>
      <p className='pagination__number'>{pageNumberToShow}</p>
      <button className='pagination__btn' onClick={() => onChangePage(1)}>Next</button>
    </div>
  );
};

Pagination.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    fetchPage: PropTypes.func.isRequired
  }

export default Pagination;