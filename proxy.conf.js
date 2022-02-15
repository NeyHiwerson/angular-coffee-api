const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://coffeeapi01.herokuapp.com/',
    secure: false,
    loglevel:'debug'
  }
];

module.exports = PROXY_CONFIG;
