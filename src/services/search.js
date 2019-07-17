const search = async (query) => {
    const enablecors = 'https://cors-anywhere.herokuapp.com/';
    const host = 'https://content.googleapis.com';
    const cx='015708995729795073046:a6lqchqd__u';
    const key ='AIzaSyCPf_rnItQABhVctkO59JGQbfX1dERmy6w';
    const googlesearch = `${enablecors}${host}/customsearch/v1?q=${query}&cx=${cx}&key=${key}`;

    const headers =  new Headers([
        ['X-Referer', 'https://content.googleapis.com']
    ]);

    const init = { 
        headers
    };

    const request  = new Request(googlesearch, init);

    let searchResult;

    const fetchResponsePromise = fetch(request)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        searchResult = response;
    });

    await fetchResponsePromise;

    const imagesLinks = searchResult.items.reduce((result, item) => {
      if (item.pagemap.cse_image) {
        result.push(item.pagemap.cse_image[0].src);
      }
      return result; 
    }, []);

    return imagesLinks;
};

export default search;