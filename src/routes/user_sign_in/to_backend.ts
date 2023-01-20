import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TUserSignInToBackendPayload = {
   username_alias: string
   password: string
}

class UserSignInToBackendPayload extends ToBackendPayload {

   public constructor(payload: TUserSignInToBackendPayload, txt?: KeyAny) {
      super(payload)
      const rules: PayloadValidation<TUserSignInToBackendPayload> = {
         username_alias: ValidationPatterns.username_alias as any,
         password: ValidationPatterns.password.required()
      }
      super.setValidationRules(rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TUserSignInToBackendPayload
   }
}

export default UserSignInToBackendPayload
