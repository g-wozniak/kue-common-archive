import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import PathwayResetToBackendPayload, {TPathwayResetToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'

interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: PathwayResetToBackendPayload
}

class PathwayResetRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.PathwayReset,
         uri: '/pathway/reset',
         description: 'Reset the pathway progress',
         method: common_RequestMethods.PATCH,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TPathwayResetToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default PathwayResetRoute