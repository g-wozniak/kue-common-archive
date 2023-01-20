import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'

export type TPathwaySyncToBackendPayload = {
   pathwayId: string
}

class PathwaySyncToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TPathwaySyncToBackendPayload> = {
      pathwayId: ValidationPatterns.objectId.required()
   }

   public constructor(payload: TPathwaySyncToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TPathwaySyncToBackendPayload
   }
}

export default PathwaySyncToBackendPayload
