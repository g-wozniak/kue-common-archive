import {AxiosResponse} from 'axios'
import {BFFRoutes} from '../..'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'

import UserSignUpToBackendPayload, {TUserSignUpToBackendPayload} from './to_backend'
import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'


interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: UserSignUpToBackendPayload
}

class UserSignUpRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.UserSignUp,
         uri: '/user',
         description: 'Create an user account',
         method: common_RequestMethods.POST,
         auth: false
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TUserSignUpToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default UserSignUpRoute