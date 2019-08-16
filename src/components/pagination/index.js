import React from 'react';
import PropTypes from 'prop-types';
import lotusSrc from '../../static/lotus.png';
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
      <button className='pagination__btn' onClick={() => onChangePage(-1)}>
        <img className='pagination__btn pagination__btn-img  pagination__btn-left'src={lotusSrc}/>
        <p className='pagination__btn-text'>Previous</p>
      </button>
      <div className='pagination__page'>
        <p className='pagination__page-number'>
          {pageNumberToShow}
        </p>
      </div>
      <button className='pagination__btn' onClick={() => onChangePage(1)}>
        <p className='pagination__btn-text'>Next</p>
        <img className='pagination__btn pagination__btn-img  pagination__btn-right'src={lotusSrc}/>
      </button>
    </div>
  );
};

Pagination.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    fetchPage: PropTypes.func.isRequired
  }

export default Pagination;