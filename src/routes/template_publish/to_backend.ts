import Joi from 'joi'
import ToBackendPayload from '@routes/to_backend'
import {common_RevisionID, ValidationPatterns} from '@root/index'
import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'


export type TTemplatePublishToBackendPayload = {
   templateId: string
   version: TTemplatePublishVersionFragment
}

export type TTemplatePublishVersionFragment = {
   revisionId: common_RevisionID
   comment: string
}


class TemplatePublishToBackendPayload extends ToBackendPayload {

   // TODO: improve validation
   private rules: PayloadValidation<TTemplatePublishToBackendPayload> = {
      templateId: ValidationPatterns.objectId.required(),
      version: Joi.object({
         revisionId: ValidationPatterns.revision.required(),
         comment: Joi.string().required()
      })
   }

   public constructor(payload: TTemplatePublishToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TTemplatePublishToBackendPayload
   }
}

export default TemplatePublishToBackendPayload
