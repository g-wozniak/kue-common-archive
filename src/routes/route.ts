import {AxiosResponse} from 'axios'
import assign from 'lodash/assign'
import isEmpty from 'lodash/isEmpty'
import {common_RequestMethods} from '@properties/request_methods'

import {BFFRequest, BFFRequestExtras, BFFRequestExtrasArgs, BFFRoute, BFFResolvedResponse} from '@intf/Routes'

export abstract class AnyBFFRoute {

   private readonly route: BFFRoute

   protected constructor(route: BFFRoute) {
      this.route = route
   }

   /**
    * getName
    * @description Returns the BFF route name
    * @returns {string}
    */
   public getName() {
      return this.route.name
   }

   /**
    * getMethod
    * @description Returns the HTTP communication method
    * @returns {common_RequestMethods}
    */
   public getMethod() {
      return this.route.method
   }

   /**
    * getUri
    * @description Returns the route url segment of the route
    * @returns {string}
    */
   public getUri() {
      return this.route.uri
   }

   /**
    * hasAuth
    * @description Is the route restricted so that requires authentication?
    * @returns {boolean}
    */
   public hasAuth() {
      return this.route.auth
   }

   /**
    * getDescription
    * @description Internal route description
    * @returns {string}
    */
   public getDescription() {
      return this.route.description
   }

   /**
    * toBFFRequest
    * @param payload
    * @param headers
    * @param resolver
    * @description Converts the api route with payload to api request supported by the web app. Done in such shitty way because Redux does not support the complex objects storage hence everything needs to be converted to primitives beforehand.
    */
   public toBFFRequest({payload, headers, resolver}: BFFRequestExtrasArgs): BFFRequest<any> {
      const req: BFFRoute = {...this.route}
      let extras: BFFRequestExtras<any> = {}

      if (payload) {
         const _payload = payload.getPayload()
         if (_payload) {
            extras.validation = payload.validate()
            extras.payload = _payload
         } else {
            extras.validation = []
         }
      }

      extras.headers = headers || {}

      if (resolver) {
         extras.resolver = resolver
      }

      return {...req, ...extras}
   }

   public static resolve(res: AxiosResponse): BFFResolvedResponse<any> {

      const resolved: BFFResolvedResponse<any> = {
         status: res.status,
         headers: res.headers || {},
         data: {}
      }

      if (res.statusText) {
         resolved.statusText = res.statusText
      }

      if (!isEmpty(res.data)) {
         resolved.data = res.data
      }

      if (res.config.method) {
         resolved.method = res.config.method
      }

      if (res.config.responseType) {
         resolved.responseType = res.config.responseType
      }

      if (res.config.timeout) {
         resolved.timeout = res.config.timeout
      }

      if (res.config.baseURL) {
         resolved.baseURL = res.config.baseURL
      }

      if (res.config.url) {
         resolved.url = res.config.url
      }

      // extract more if you need...

      return resolved
   }
}

export class DummyBFFRoute extends AnyBFFRoute {
   public constructor(overwrite: Partial<BFFRoute> = {}) {
      super(assign({
         name: 'DummyTestRoute',
         description: 'dummy test route',
         method: common_RequestMethods.GET,
         uri: '/api/test',
         auth: false
      }, overwrite))
   }

   public toBFFRequest({payload, headers, resolver}: BFFRequestExtrasArgs): BFFRequest<any> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<any> {
      return AnyBFFRoute.resolve(res)
   }
}
