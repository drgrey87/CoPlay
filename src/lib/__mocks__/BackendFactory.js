/**
 * # BackendFactory.js
 *
 * Mocked BackendFactory
 *
 *
 */


const Backend = require('./Backend').default;

export default function BackendFactory(token = null) {
  return new Backend();
}
