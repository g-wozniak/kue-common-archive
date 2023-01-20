import {AxiosResponse} from 'axios'
import {BFFRoutes} from '@root/index'
import {AnyBFFRoute} from '@routes/route'
import {common_RequestMethods} from '@properties/request_methods'
import UserEmailConfirmationToBackendPayload, {TUserEmailConfirmationToBackendPayload} from './to_backend'

import {BFFRequest, BFFRequestExtrasArgs, BFFResolvedResponse} from '@intf/Routes'



interface toApiRequestArgs extends BFFRequestExtrasArgs{
   payload: UserEmailConfirmationToBackendPayload
}

class UserEmailConfirmationRoute extends AnyBFFRoute {

   public constructor() {
      super({
         name: BFFRoutes.UserEmailConfirmation,
         uri: '/user/email',
         description: 'Confirm user e-mail address',
         method: common_RequestMethods.PATCH,
         auth: false
      })
   }

   public toBFFRequest({payload, headers, resolver}: toApiRequestArgs): BFFRequest<TUserEmailConfirmationToBackendPayload> {
      return super.toBFFRequest({payload, headers, resolver});
   }

   public resolve(res: AxiosResponse): BFFResolvedResponse<void> {
      return AnyBFFRoute.resolve(res)
   }
}

export default UserEmailConfirmationRoute