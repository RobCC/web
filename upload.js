const ghpages = require('gh-pages');

ghpages.publish('build', () => {
  /* eslint-disable no-console */
  console.log('Build uploaded to gh-pages');
});
