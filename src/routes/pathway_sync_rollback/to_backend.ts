import * as Joi from 'joi'

import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TPathwaySyncRollbackToBackendPayload = {
   pathwayId: string
   version: number
}

class PathwaySyncRollbackToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TPathwaySyncRollbackToBackendPayload> = {
      pathwayId: ValidationPatterns.objectId.required(),
      version: Joi.number().required()
   }

   public constructor(payload: TPathwaySyncRollbackToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TPathwaySyncRollbackToBackendPayload
   }
}

export default PathwaySyncRollbackToBackendPayload
