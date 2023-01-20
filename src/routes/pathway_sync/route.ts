import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import PathwaySyncToBackendPayload, {TPathwaySyncToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'

interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: PathwaySyncToBackendPayload
}

class PathwaySyncRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.PathwaySync,
         uri: '/pathway/sync',
         description: 'Synchronise the pathway with its template',
         method: common_RequestMethods.PATCH,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TPathwaySyncToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default PathwaySyncRoute