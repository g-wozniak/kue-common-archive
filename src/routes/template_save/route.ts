import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import TemplateSaveToBackendPayload, {TTemplateSaveToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'



interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: TemplateSaveToBackendPayload
}

class TemplateSaveRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.TemplateSave,
         uri: '/template',
         description: 'Save the template settings changes',
         method: common_RequestMethods.PUT,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TTemplateSaveToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default TemplateSaveRoute