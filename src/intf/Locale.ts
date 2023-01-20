import {common_ResponseSlugs} from '@properties/response_slugs'
import {SemanticICONS} from 'semantic-ui-react'

export interface Locale {
   messages: {
      [slug in common_ResponseSlugs]: LocaleMessage
   }
   properties: {
      [enumName: string]: {
         [optionName: string]: string
      }
   }
}

/**
 * LocaleInput
 * @description translation of the form input field settings
 */
export interface LocaleInput {
   l: string   // input label name
   _: string   // placeholder
}

/**
 * LocaleMessage
 * @description translation of the API message response in format: h= header, b= body, i= icon
 */
export interface LocaleMessage {
   h: string // header
   b: string // body
   i?: SemanticICONS // icon
}
