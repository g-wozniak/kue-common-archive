import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import UserPasswordResetInitToBackendPayload, {TUserPasswordResetInitToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'



interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: UserPasswordResetInitToBackendPayload
}

class UserPasswordResetInitRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.UserPasswordResetInitiate,
         uri: '/user/password',
         description: 'Initiate password reset process for unauthenticated user',
         method: common_RequestMethods.POST,
         auth: false
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TUserPasswordResetInitToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default UserPasswordResetInitRoute