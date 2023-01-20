import random from 'lodash/random'
import {AxiosResponse} from 'axios'
import {common_RevisionID} from '@properties/revision'
import {BFFResolvedResponse} from '@intf/Routes'

/**
 * Dummy generator
 */

const adjectives = ['interesting', 'nice', 'funny', 'thorough', 'amazing', 'dazzling', 'stunning', 'superb', 'effective']
const titles = ['software engineer', 'decorator', 'architect', 'artist', 'painter', 'coach', 'lawyer', 'doctor']
const slogans = ['tomorrow starts today', 'today is the first day of the rest of your life', 'never give up and explore this pathway', 'all good things never end']

function checkObjectId(func: string, str: string): string {
   if (str.length !== 12 && str.length !== 24) {
      throw new Error(`Function ${func} must return ObjectId which has to be a single String of 12 bytes or a string of 24 hex characters. Returned: ${str}`)
   }
   return str
}

/**
 * getDummyTemplateName
 */
export const getDummyTemplateName = () => {
   return `${adjectives[random(0, adjectives.length - 1)].toUpperCase()} ${titles[random(0, titles.length - 1)].toUpperCase()} learning pathway`
}

/**
 * getDummyTemplateSlug
 */
export const getDummyTemplateSlug = () => {
   return `template-slug-${random(10000, 99999)}`
}

/**
 * getDummyTemplateHeadline
 */
export const getDummyTemplateHeadline = () => {
   return slogans[random(0, slogans.length-1)].toUpperCase()
}

/**
 * getDummyDescription
 */
export const getDummyTemplateDescription = () => {
   return `Become the best ${titles[random(0, titles.length - 1)].toUpperCase()} the world have ever seen...`
}

/**
 * getDummyUserId
 * @param lastFourChars {string}
 * @returns {string}
 */
export const getDummyUserId = (lastFourChars?: string) => checkObjectId('getDummyUserId', `10001111000011110000${lastFourChars || random(1000, 1999)}`)

/**
 * getDummyTemplateId
 * @param lastFourChars {string}
 * @returns {string}
 */
export const getDummyTemplateId = (lastFourChars?: string) => checkObjectId('getDummyTemplateId', `f0002222000022220000${lastFourChars || random(1000, 1999)}`)

/**
 * getDummyCardId
 * @param lastFourChars {string}
 * @returns {string}
 */
export const getDummyCardId = (lastFourChars?: string) => checkObjectId('getDummyCardId', `1000fafa000099990000${lastFourChars || random(1000, 1999)}`)

/**
 * getDummyCardWidgetId
 * @param lastFourChars {string}
 * @description Note: this is string in the database, not ObjectId
 * @returns {string}
 */
export const getDummyCardWidgetId = (lastFourChars?: string) => `card-widget-0101-${lastFourChars || random(1000, 1999)}`


/**
 * getDummyPathwaySyncId
 * @param lastFourChars {string}
 * @returns {string}
 */
export const getDummyPathwaySyncId = (lastFourChars?: string) => checkObjectId('getDummyPathwaySyncId', `f4440404040000444400${lastFourChars || random(1000, 1999)}`)


/**
 * getDummyPathwayId
 * @param lastFourChars {string}
 * @returns {string}
 */
export const getDummyPathwayId = (lastFourChars?: string) => checkObjectId('getDummyPathwayId', `aabb2222666622220000${lastFourChars || random(1000, 1999)}`)


/**
 * getDummyUserActivityId
 * @param lastFourChars {string}
 * @returns {string}
 */
export const getDummyUserActivityId = (lastFourChars?: string) => checkObjectId('getDummyUserActivityId', `10004444000022220000${lastFourChars || random(1000, 1999)}`)

/**
 * getDummyCognitoSubId
 * @param lastFourChars {string}
 * @returns {string}
 */
export const getDummyCognitoSubId = (lastFourChars?: string) => `b554db63-be56-4bd2-867a-9cf966a3${lastFourChars || random(1000, 1999)}`

/**
 * getDummyRevisionId
 * @param lastFourChars {string}
 * @returns {string}
 */
export const getDummyRevisionId = (lastFourChars?: string) => `1060-${lastFourChars || random(1000, 1999)}`


/**
 * getRandomRevisionID
 * @returns {common_RevisionID}
 */
export const getRandomRevisionID = (): common_RevisionID => `${random(1000, 9999)}-${random(1000, 9999)}`

/**
 * getDummyAxiosResponse
 * @returns {AxiosResponse}
 */
export const getDummyAxiosResponse = (status: number = 200, data: any = {}): AxiosResponse<any> => {
   return {
      status,
      headers: {},
      statusText: 'ok',
      config: {
         responseType: 'json',
         timeout: 3000,
         baseURL: 'localhost:3000',
         method: 'POST',
         url: 'http://localhost:3000/api/endpoint/url'
      },
      data: {
         data: data || {}
      }
   }
}

/**
 * getDummyBFFResponse
 * @returns {BFFResolvedResponse}
 */
export const getDummyBFFResponse = (status: number = 200, data: any = {}): BFFResolvedResponse<any> => ({
   status,
   headers: {},
   statusText: 'ok',
   method: 'POST',
   responseType: 'json',
   timeout: 3000,
   baseURL: 'localhost:3000',
   data: {data},
   url: 'http://localhost:3000/api/endpoint/url'
})