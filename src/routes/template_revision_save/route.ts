import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import TemplateRevisionSaveToBackendPayload, {TTemplateRevisionSaveToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'

interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: TemplateRevisionSaveToBackendPayload
}

class TemplateRevisionSaveRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.TemplateRevisionSave,
         uri: '/template/revision',
         description: 'Save the existing or a new revision into the template',
         method: common_RequestMethods.PUT,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TTemplateRevisionSaveToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default TemplateRevisionSaveRoute