import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TUserSignUpToBackendPayload = {
   username: string
   email: string
   password: string
}

class UserSignUpToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TUserSignUpToBackendPayload> = {
      username: ValidationPatterns.username.required(),
      email: ValidationPatterns.email.required(),
      password: ValidationPatterns.password.required()
   }

   public constructor(payload: TUserSignUpToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TUserSignUpToBackendPayload
   }
}

export default UserSignUpToBackendPayload
