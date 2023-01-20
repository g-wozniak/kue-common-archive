import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import TemplateRevisionDeleteToBackendPayload, {TTemplateRevisionDeleteToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'



interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: TemplateRevisionDeleteToBackendPayload
}

class TemplateRevisionDeleteRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.TemplateRevisionDelete,
         uri: '/template/revision',
         description: 'Delete the existing revision from the template',
         method: common_RequestMethods.DELETE,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TTemplateRevisionDeleteToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default TemplateRevisionDeleteRoute