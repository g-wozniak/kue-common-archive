import * as Joi from 'joi'
import { v4 as uuidv4 } from 'uuid';
import _moment from 'moment'
import {DropdownItemProps} from 'semantic-ui-react'
import {KeyAny, KeyString, Validation} from '@intf/Common'
import floor from 'lodash/floor'
import {common_RevisionID} from '@properties/revision'
import {toUpper} from 'lodash'

/**
 * uid
 * @param {number} length length of the `id`
 * @returns {string} unique `id`
 * @description Returns a unique id
 * @returns {string}
 */
export const uid = (length?: number): string => {
   const id = uuidv4()
   return length ? id.substring(0, length) : id
}

/**
 * toMoney
 * @description Transforms value to a money amount
 * @param {number} value
 * @return {string}
 */
export const toMoney = (value: number): string => {
   let val = floor(value, 2).toString()
   const part = val.split('.')[1]
   if (!part || part.length === 0) {
      val = val + '.00'
   } else if (part.length === 1) {
      val = val + '0'
   }
   return val
}

/**
 * enumToValues
 * @param {string} _enum an enum element
 * @returns {string[]} array of values from enum
 * @description Mongoose `enum` field takes an array of values as a property. This function adapts a TS enum to it
 */
export const enumToValues = (_enum: KeyAny): string[] => {
   return Object.values(_enum)
}

/**
 * enumToSemanticUIOptions
 * @param {string} id some unique name for keys generation
 * @param {KeyAny} _enum an enum element
 * @param {KeyString} txt an JS object with translation where key is the same as enum property name
 */
export const enumToSemanticUIOptions = (id: string, _enum: KeyAny, txt: KeyString): DropdownItemProps[] | undefined => {
   return Object.values(_enum).map((key, index) => ({
      key: `${id}_option_${index}`,
      text: txt.hasOwnProperty(key) ? txt[key] : '?',
      value: key
   }))
}

/**
 * joiToKeyValue
 * @param {ValidationErrorItem[]} errors errors returned by Joi in its format
 * @param {KeyAny} txt (optional) translation object for `inputs`
 * @returns {Validation[]} validation array as key/message relevant to the app
 * @description Validation adapter between Joi response and our apps
 */
export const joiToKeyValue = (errors: Joi.ValidationErrorItem[], txt?: KeyAny): Validation[] => {
   return errors.map((error: Joi.ValidationErrorItem) => {
      let errorMessage = error.message
      let key = error.context && error.context.key || '?'
      key = key.replace('data.', '')
      if (error.context && error.context.label && txt && txt.hasOwnProperty(key)) {
         error.context.label = txt[key].hasOwnProperty('l') ? txt[key].l : txt[key]
         errorMessage = errorMessage.replace(key, error.context.label || '?')
         /* Remark:
            The translation cannot be done with Joi as .label() because state of locale is evolving.
            If user changes the language in flight, should be able to see the correctly translated labels.
         */
      }
      errorMessage = errorMessage.replace('data.', '')
      return {
         key,
         message: errorMessage
      }
   })
}

/**
 * versionIndicator
 * @param {number} version
 * @description used to generate a version string from a number
 */
export const versionIndicator = (version: number): string => {
   return `v.${version}`
}

/**
 * createRevisionId
 * @description generate new, random revisionId
 */
export const createRevisionId = (): common_RevisionID => {
   return toUpper(`${uid(3)}-${uid(3)}`)
}

/**
 * timestamp
 * @description used to retrieve the current timestamp
 */
export const timestamp = (): number => {
   return _moment().unix()
}

/**
 * isoToDateTime
 * @param {string} isoDate
 * @param {boolean} withSeconds optional
 * @description used to convert ISO date format into date and time string
 */
export const isoToDateTime = (isoDate: string, withSeconds?: boolean): string => {
   return _moment(isoDate).format(`DD/MM/YYYY HH:mm${!!withSeconds ? ':ss' : ''}`)
}

/**
 * timestampToDateTime
 * @param {number} timestamp
 * @param {boolean} withSeconds optional
 * @description used to convert the given timestamp into date and time string
 */
export const timestampToDateTime = (timestamp: number, withSeconds?: boolean): string => {
   return _moment.unix(timestamp).format(`DD/MM/YYYY HH:mm${!!withSeconds ? ':ss' : ''}`)
}

/**
 * timePassedTillNow
 * @description returns how much time passed from the date provided in the parameter
 * @param dateFrom
 */
export const timePassedTillNow = (dateFrom: string): string => {
   return _moment().from(dateFrom, true)
}