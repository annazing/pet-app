import React from 'react';

class SearchService extends React.Component {
  constructor() {
    super();
    this.enablecors = 'https://cors-anywhere.herokuapp.com/';
    this.host = 'https://content.googleapis.com';
    this.cx='015708995729795073046:a6lqchqd__u';
    this.key ='AIzaSyCPf_rnItQABhVctkO59JGQbfX1dERmy6w';
    
    this.getHeaders = this.getHeaders.bind(this);
    this.getSearchURL = this.getSearchURL.bind(this);
    this.search = this.search.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  getHeaders() {
    return new Headers([
        ['X-Referer', this.host]
    ]);
  }

  getSearchURL(query, page) {
    return `${this.enablecors}${this.host}/customsearch/v1?q=${query}&cx=${this.cx}&key=${this.key}&start=${page}`
  }

  async search(query, page) {
    const url = this.getSearchURL(query, page);
    const searchResult = await fetch(url, {
        method: 'GET',
        headers: this.getHeaders()
      })
        .then(res => res.json())
        // .then(res => Promise.reject('Its an error'))
        .catch(error => Promise.reject(error));
    return searchResult;
  }

  async getImages(query, page = 1) {
    // try {
      const searchResult = await this.search(query, page);
    // } catch (error) {
    //   return error;
    // }

    if (!searchResult.items) {
      return [];
    }

    return searchResult.items.reduce((result, item) => {
      if (item.pagemap && item.pagemap.cse_image) {
          result.push({
            id: item.cacheId,
            asanaName: query,
            asanaSrc: item.pagemap.cse_image[0].src
          });
      }
      return result;
    }, []);
  }
};

export default new SearchService;