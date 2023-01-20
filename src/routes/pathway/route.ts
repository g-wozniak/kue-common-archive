import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import PathwayToBackendPayload, {TPathwayToBackendPayload} from './to_backend'
import {TPathwayFromBackendPayload} from './from_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'

interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: PathwayToBackendPayload
}

class PathwayRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.Pathway,
         uri: '/pathway',
         description: 'Get pathway details',
         method: common_RequestMethods.GET,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TPathwayToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<TPathwayFromBackendPayload> {
      return AnyBFFRoute.resolve(res)
   }
}

export default PathwayRoute