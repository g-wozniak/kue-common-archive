import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import UserProfileToBackendPayload, {TUserProfileToBackendPayload} from './to_backend'
import {TUserProfileFromBackendPayload} from './from_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'



interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: UserProfileToBackendPayload
}

class UserProfileRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.UserProfile,
         uri: '/user',
         description: 'Obtain information about authenticated user',
         method: common_RequestMethods.GET,
         auth: true
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TUserProfileToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<TUserProfileFromBackendPayload> {
      return AnyBFFRoute.resolve(res)
   }
}

export default UserProfileRoute