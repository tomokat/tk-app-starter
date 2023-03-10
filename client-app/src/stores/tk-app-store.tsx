import { createStore } from '@stencil/store';

function getBaseUrl() {
  if(location.hostname === 'localhost' && location.port === '3333') {
    return 'http://localhost:3000/';
  }
  return '';
}

function getBookmarkApiPerEnvironment() {
  return `${getBaseUrl()}bookmark-api`;
}

const { state, onChange } = createStore({
  baseUrl: getBaseUrl(),
  bookmarkApi: getBookmarkApiPerEnvironment(),
  user: {
    email: ''
  }
});

onChange('user', value => {
  console.log(`user change detected [${value}]`);
});

export default state;