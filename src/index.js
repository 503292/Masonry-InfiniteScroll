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

//=====================================
// add  PNptyfy
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import 'pnotify/dist/PNotifyBrightTheme.css';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'material-design-icons/iconfont/material-icons.css';

// Set default styling.
PNotify.defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
PNotify.defaults.icons = 'material';

PNotify.alert('4а 4а 4а');
