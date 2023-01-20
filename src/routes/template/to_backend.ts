import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'



export type TTemplateToBackendPayload = {
   templateId: string
}

class TemplateToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TTemplateToBackendPayload> = {
      templateId: ValidationPatterns.objectId.required()
   }

   public constructor(payload: TTemplateToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TTemplateToBackendPayload
   }
}

export default TemplateToBackendPayload
