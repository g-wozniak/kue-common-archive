import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import PathwaySaveNodesToBackendPayload, {TPathwaySaveNodesToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'

interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: PathwaySaveNodesToBackendPayload
}

class PathwaySaveNodesRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.PathwaySaveNodes,
         uri: '/pathway/nodes',
         description: 'Update the pathway nodes',
         method: common_RequestMethods.PATCH,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TPathwaySaveNodesToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default PathwaySaveNodesRoute