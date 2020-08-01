const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://gambiflix.herokuapp.com';

export default {
  URL,
};
