import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'



export type TPathwayToBackendPayload = {
   pathwayId: string
}

class PathwayToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TPathwayToBackendPayload> = {
      pathwayId: ValidationPatterns.objectId.required()
   }

   public constructor(payload: TPathwayToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TPathwayToBackendPayload
   }
}

export default PathwayToBackendPayload
