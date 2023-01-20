import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import TemplatePublishToBackendPayload, {TTemplatePublishToBackendPayload} from './to_backend'
import {TTemplatePublishFromBackendPayload} from './from_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'



interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: TemplatePublishToBackendPayload
}

class TemplatePublishRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.TemplatePublish,
         uri: '/template',
         description: 'Publish the new version of the template',
         method: common_RequestMethods.PATCH,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TTemplatePublishToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<TTemplatePublishFromBackendPayload> {
      return AnyBFFRoute.resolve(res)
   }
}

export default TemplatePublishRoute