import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'
import {common_RevisionID} from '@properties/revision'
import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'



export type TTemplateRevisionDeleteToBackendPayload = {
   templateId: string
   revisionId: common_RevisionID
}

class TemplateRevisionDeleteToBackendPayload extends ToBackendPayload {

   private rules: PayloadValidation<TTemplateRevisionDeleteToBackendPayload> = {
      templateId: ValidationPatterns.objectId.required(),
      revisionId: ValidationPatterns.revision.required()
   }

   public constructor(payload: TTemplateRevisionDeleteToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TTemplateRevisionDeleteToBackendPayload
   }
}

export default TemplateRevisionDeleteToBackendPayload
