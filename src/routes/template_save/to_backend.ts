import Joi from 'joi'
import ToBackendPayload from '@routes/to_backend'
import {ValidationPatterns} from '@root/index'
import {BaseTemplateItem} from '@models/template/schema'

import {PayloadValidation} from '@intf/Routes'
import {KeyAny} from '@intf/Common'




/**
 * TTemplateAmendablePayload
 * @description Data that can be amended by the builder (settings form)
 */
export type TTemplateAmendablePayload = Omit<BaseTemplateItem, 'tree'>

export type TTemplateSaveToBackendPayload = {
   templateId: string
   amendedTemplate: TTemplateAmendablePayload
}

class TemplateSaveToBackendPayload extends ToBackendPayload {

   // TODO: improve validation
   private rules: PayloadValidation<TTemplateSaveToBackendPayload> = {
      templateId: ValidationPatterns.objectId.required(),
      amendedTemplate: Joi.object({
         name: Joi.string().required(),
         slug: Joi.string().required(),
         headline: Joi.string().required(),
         description: Joi.string().required()
      })
   }

   public constructor(payload: TTemplateSaveToBackendPayload, txt?: KeyAny) {
      super(payload)
      super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TTemplateSaveToBackendPayload
   }
}

export default TemplateSaveToBackendPayload
