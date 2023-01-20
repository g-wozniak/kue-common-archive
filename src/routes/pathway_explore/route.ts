import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import PathwayExploreToBackendPayload, {TPathwayExploreToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'

interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: PathwayExploreToBackendPayload
}

class PathwayExploreRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.PathwayExplore,
         uri: '/pathway/explore',
         description: 'Update the pathway progress',
         method: common_RequestMethods.PATCH,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TPathwayExploreToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default PathwayExploreRoute