let config = {
  startegies: {
    VK: {
      clientID:     5660240,
      clientSecret: 'Zp1MTLEbRtEBUkexjZH7',
      callbackURL:  "http://localhost:3000/auth/vkontakte/callback",
      scope: ['audio'],
      profileFields: ['audio']
    },
    FB: {
      clientID:     130122957461075,
      clientSecret: '7e3c8cf3cf1cee8f6af3e1837de91e1b',
      callbackURL:  "http://localhost:3000/auth/facebook/callback"
    }
  }
};

module.exports = config;