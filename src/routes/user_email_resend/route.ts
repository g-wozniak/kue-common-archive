import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import UserEmailResendToBackendPayload, {TUserEmailResendToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'



interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: UserEmailResendToBackendPayload
}

class UserEmailResendRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.UserEmailResend,
         uri: '/user/email/resend',
         description: 'Resend user e-mail confirmation with code',
         method: common_RequestMethods.POST,
         auth: false
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TUserEmailResendToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default UserEmailResendRoute