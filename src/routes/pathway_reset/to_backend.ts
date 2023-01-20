import Joi from 'joi'
import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TPathwayResetToBackendPayload = {
   pathwayId: string
}

class PathwayResetToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TPathwayResetToBackendPayload> = {
      pathwayId: ValidationPatterns.objectId.required()
   }

   public constructor(payload: TPathwayResetToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TPathwayResetToBackendPayload
   }
}

export default PathwayResetToBackendPayload
