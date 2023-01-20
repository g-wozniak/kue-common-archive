import {ResponseType} from 'axios'
import Joi from 'joi'
import {common_RequestMethods} from '@properties/request_methods'

import {KeyAny, Validation} from '@intf/Common'

/**
 * BFFRoute
 * @description Route defines the most important communication standard between all applications. Considering the scale of the projects, the vital part of scalability strategy is to keep validation and payloads consistent among the whole system.
 */
export interface BFFRoute {
   name: string
   method: common_RequestMethods
   uri: string
   auth: boolean
   description: string
}

export type PayloadValidation<SomeValidationSchema> = Joi.StrictSchemaMap<SomeValidationSchema>

/**
 * BFFRequest
 * @description Api request from React app to the BFF
 * @remarks BFF requests made by senders require their own promise resolution and have no access to webapp application state. To support full visibility of the request lifecycle (in both, internal component such as Builder or Viewer, and in the webapp) we need to fork the behaviour of the resolution of the request
 */
export interface BFFRequestExtras<SomeToBackendPayload> {
   validation?: Validation[]
   payload?: SomeToBackendPayload
   headers?: KeyAny
   resolver?: Awaited<Promise<any>>
}

export type BFFRequestExtrasArgs = Omit<BFFRequestExtras<any>, 'validation'>

export type BFFRequest<SomeToBackendPayload> = BFFRequestExtras<SomeToBackendPayload> & BFFRoute


/**
 * BFFResponse
 * @description Common format of the api JSON response
 */
export interface BFFResponse<SomeOutboundPayload> {
   data?: SomeOutboundPayload
   message?: string
}

/**
 * BFFErrorResponse
 * @description Format for error responses
 */
export type BFFErrorResponse = BFFResponse<Record<string, unknown>>

/**
 * BFFResolvedResponse
 * @description The request details resolved by the webapp to support its full lifecycle
 * @remarks Influences the builder as well
 */
export interface BFFResolvedResponse<SomeOutboundPayload> {
   status: number
   headers: KeyAny
   statusText?: string
   method?: string
   data: BFFResponse<SomeOutboundPayload>
   responseType?: ResponseType
   timeout?: number
   baseURL?: string
   url?: string
}
