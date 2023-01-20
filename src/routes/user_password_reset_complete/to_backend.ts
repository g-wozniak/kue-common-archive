import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'
import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TUserPasswordResetCompleteToBackendPayload = {
   username_alias: string
   password: string
   code: string
}

class UserPasswordResetCompleteToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TUserPasswordResetCompleteToBackendPayload> = {
      username_alias: ValidationPatterns.username_alias as any,
      password: ValidationPatterns.password.required(),
      code: ValidationPatterns.cognitoConfirmationCode.required()
   }

   public constructor(payload: TUserPasswordResetCompleteToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TUserPasswordResetCompleteToBackendPayload
   }
}

export default UserPasswordResetCompleteToBackendPayload
