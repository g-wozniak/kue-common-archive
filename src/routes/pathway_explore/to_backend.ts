import Joi from 'joi'
import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TPathwayExploreToBackendPayload = {
   pathwayId: string
   cardId: string
}

class PathwayExploreToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TPathwayExploreToBackendPayload> = {
      pathwayId: ValidationPatterns.objectId.required(),
      cardId: Joi.string().required()
   }

   public constructor(payload: TPathwayExploreToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TPathwayExploreToBackendPayload
   }
}

export default PathwayExploreToBackendPayload
