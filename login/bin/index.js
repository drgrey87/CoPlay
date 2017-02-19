const app = require('../index');
const debug = require('debug')('coplay-login:server');

app.listen(2000, function(err) {
  if (err) {
    debug('error %O', err);
  } else {
    debug("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", 2000, 2000)
  }
});