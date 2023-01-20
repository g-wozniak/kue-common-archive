import Joi from 'joi'
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'
import {joiToKeyValue} from '@helpers/utils'

import {KeyAny, Validation} from '@intf/Common'

class AnyPayload {

   private validation: Joi.StrictSchemaMap = {}

   private txt: KeyAny = {}

   protected payload: KeyAny | null

   public constructor(payload: KeyAny | null) {
      this.payload = isEmpty(payload) || isNull(payload) ? null : payload
   }

   public getPayload() {
      return this.payload
   }

   public validate = (): Validation[] => {
      if (!isEmpty(this.validation)) {
         // Joi.object because it's all inside data: {}
         const validation = Joi.object(this.validation).validate(this.payload, {abortEarly: false})
         if (validation.error) {
            return joiToKeyValue(validation.error.details, this.txt)
         }
      }
      return []
   }

   protected setValidationRules(validation: Joi.StrictSchemaMap, txt?: KeyAny) {
      this.txt = txt || {}
      this.validation = validation
   }
}

export default AnyPayload
