import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import TemplateToBackendPayload, {TTemplateToBackendPayload} from './to_backend'
import {TTemplateFromBackendPayload} from './from_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'

interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: TemplateToBackendPayload
}

class TemplateRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.Template,
         uri: '/template',
         description: 'Get a template details',
         method: common_RequestMethods.GET,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TTemplateToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<TTemplateFromBackendPayload> {
      return AnyBFFRoute.resolve(res)
   }
}

export default TemplateRoute