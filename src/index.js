import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import makeGridItem from './makeGridItem';
import './styles.css';

const masonryInstance = new Masonry('#gallery', {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  transitionDuration: '0.3s',
  // stagger: 30,
});

imagesLoaded('#gallery').on('progress', () => {
    masonryInstance.layout();
  });

fetch(
  'https://pixabay.com/api/?key=13631456-c9d9ce7db3701f221793ce82d&q=dog&image_type=photo',
)
  .then(res => res.json())
  .then(({ hits }) => {
    const elements = hits.map(hit => makeGridItem(hit.webformatURL));
    // добавити в DOM
    document.querySelector('#gallery').append(...elements);
    // добавити в Masonry для відслідковування
    masonryInstance.addItems(elements);

    imagesLoaded('#gallery').on(
      'progress',
      masonryInstance.layout.bind(masonryInstance),
    );
  });






