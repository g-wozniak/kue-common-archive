import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TUserEmailConfirmationToBackendPayload = {
   username_alias: string
   code: string
}

class UserEmailConfirmationToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TUserEmailConfirmationToBackendPayload> = {
      username_alias: ValidationPatterns.username_alias as any,
      code: ValidationPatterns.cognitoConfirmationCode.required()
   }

   public constructor(payload: TUserEmailConfirmationToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TUserEmailConfirmationToBackendPayload
   }
}

export default UserEmailConfirmationToBackendPayload
