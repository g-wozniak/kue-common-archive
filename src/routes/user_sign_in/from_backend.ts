import Joi from 'joi'
import FromBackendPayload from '@routes/from_backend'
import {BFFResponse, PayloadValidation} from '@intf/Routes'

export type TUserSignInFromBackendPayload = {
   validity: number
}

class UserSignInFromBackendPayload extends FromBackendPayload {

   private rules: PayloadValidation<TUserSignInFromBackendPayload> = {
      validity: Joi.number().required()
   }

   public constructor(payload: TUserSignInFromBackendPayload) {
      super(payload)
      super.setValidationRules(this.rules)
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TUserSignInFromBackendPayload>
   }

}

export default UserSignInFromBackendPayload
