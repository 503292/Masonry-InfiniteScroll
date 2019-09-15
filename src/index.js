import './styles.css';
import InfiniteScroll from 'infinite-scroll';
import photoTemplate from './templates/photo.hbs';

// console.log(InfiniteScroll);

//================
// infinite scroll
const feedContainer = document.querySelector('#feed');
const infScrollInstance = new InfiniteScroll(feedContainer, {
  // options
  path() {
    return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=13631456-c9d9ce7db3701f221793ce82d&q=cat&image_type=photo&page=${this.pageIndex}`;
  },
  responseType: 'text',
  // append: '.post',
  history: false,
});
// console.log(infScrollInstance.pageIndex);

infScrollInstance.on('load', (response, url) => {
  const images = JSON.parse(response);

  // console.group(url);
  // console.log(images);
  // console.groupEnd(url);

  console.log(images);

  const markup = images.hits.map(hit => photoTemplate(hit)).join('');

  console.log(markup);
  const proxyEl = document.createElement('div');
  proxyEl.innerHTML = markup;

  // // через map #1
  // const markup = posts.map(post => postTemplate(post)).join('');
  // // через reduce #2
  // // const markup2 = posts.reduce((acc, post) => acc + postTemplate(post), '');
  // // console.log(markup);


  const parseItems = proxyEl.querySelectorAll('.item-photo');

  console.log(proxyEl);
  console.log(parseItems);

  infScrollInstance.appendItems(parseItems);
});

infScrollInstance.loadNextPage();
