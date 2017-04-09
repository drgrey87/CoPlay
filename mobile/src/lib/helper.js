'use strict'
/**
 * ## Import
 */
import {Record} from 'immutable'

/**
 * Write item to immutable Record.
 * @param {Array}
 * @returns {Array}
 */
export function wrapToRecord (data) {
  return data.map(item => new Record(item)());
}