'use strict'
/**
 * ## Import
 */
import {Record, List} from 'immutable'

/**
 * Write item to immutable Record.
 * @param {Array}
 * @returns {Array}
 */
export function wrapToRecord (data) {
  return List(data.map(item => new Record(item)()));
}