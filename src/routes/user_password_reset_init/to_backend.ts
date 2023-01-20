import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'
import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TUserPasswordResetInitToBackendPayload = {
   username_alias: string
}

class UserPasswordResetInitToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TUserPasswordResetInitToBackendPayload> = {
      username_alias: ValidationPatterns.username_alias as any
   }

   public constructor(payload: TUserPasswordResetInitToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TUserPasswordResetInitToBackendPayload
   }
}

export default UserPasswordResetInitToBackendPayload
