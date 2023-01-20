import {ValidationPatterns} from '@root/index'
import ToBackendPayload from '@routes/to_backend'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'


export type TUserEmailResendToBackendPayload = {
   username_alias: string
}

class UserEmailResendToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TUserEmailResendToBackendPayload> = {
      username_alias: ValidationPatterns.username_alias as any
   }

   public constructor(payload: TUserEmailResendToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TUserEmailResendToBackendPayload
   }
}

export default UserEmailResendToBackendPayload
