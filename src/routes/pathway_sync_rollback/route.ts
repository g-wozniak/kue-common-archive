import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import PathwaySyncRollbackToBackendPayload, {TPathwaySyncRollbackToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'

interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: PathwaySyncRollbackToBackendPayload
}

class PathwaySyncRollbackRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.PathwaySyncRollback,
         uri: '/pathway/rollback',
         description: 'Rollback the synchronisation of the pathway to the original state',
         method: common_RequestMethods.PATCH,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TPathwaySyncRollbackToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default PathwaySyncRollbackRoute