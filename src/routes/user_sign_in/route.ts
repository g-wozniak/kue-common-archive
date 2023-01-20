import {AxiosResponse} from 'axios'
import {BFFRoutes} from '../..'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import UserSignInToBackendPayload, {TUserSignInToBackendPayload} from './to_backend'
import {TUserSignInFromBackendPayload} from './from_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'


interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: UserSignInToBackendPayload
}

class UserSignInRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.UserSignIn,
         uri: '/user/auth',
         description: 'Authenticate user',
         method: common_RequestMethods.POST,
         auth: false
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TUserSignInToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<TUserSignInFromBackendPayload> {
      return AnyBFFRoute.resolve(res)
   }
}

export default UserSignInRoute