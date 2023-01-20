import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import UserPasswordResetCompleteToBackendPayload, {TUserPasswordResetCompleteToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'



interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: UserPasswordResetCompleteToBackendPayload
}

class UserPasswordResetCompleteRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.UserPasswordResetComplete,
         uri: '/user/password',
         description: 'Complete password reset process for unauthenticated user',
         method: common_RequestMethods.PATCH,
         auth: false
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TUserPasswordResetCompleteToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default UserPasswordResetCompleteRoute