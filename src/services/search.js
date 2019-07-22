import React from 'react';

class SearchService extends React.Component {
  constructor(text) {
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

  getSearchURL(query) {
    return `${this.enablecors}${this.host}/customsearch/v1?q=${query}&cx=${this.cx}&key=${this.key}&start=11`
  }

  async search(query) {
    const url = this.getSearchURL(query);
    const searchResult = await fetch(url, {
        method: 'GET',
        headers: this.getHeaders()
      })
        .then(res => res.json())
        .catch(error => Promise.reject(error));
    return searchResult;
  }

  async getImages(query) {
    const searchResult = await this.search(query);

    return searchResult.items.reduce((result, item) => {
      if (item.pagemap.cse_image) {
          result.push(item.pagemap.cse_image[0].src);
      }
      return result;
    }, []);
  }
};

export default new SearchService;