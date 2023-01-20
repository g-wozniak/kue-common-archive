import Joi from 'joi'
import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TPathwayNodePositionFragment = {
   id: string
   x: number
   y: number
}

export type TPathwaySaveNodesToBackendPayload = {
   pathwayId: string
   nodes: TPathwayNodePositionFragment[]
}

class PathwaySaveNodesToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TPathwaySaveNodesToBackendPayload> = {
      pathwayId: ValidationPatterns.objectId.required(),
      nodes: Joi.array().items(
         Joi.object({
            id: Joi.string(),
            x: Joi.number().max(100000),
            y: Joi.number().max(10000)
         })
      )
   }

   public constructor(payload: TPathwaySaveNodesToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TPathwaySaveNodesToBackendPayload
   }
}

export default PathwaySaveNodesToBackendPayload
