import Joi from 'joi'
import isEmpty from 'lodash/isEmpty'
import AnyPayload from './payload'

import {KeyAny} from '@intf/Common'
import {BFFResponse} from '@intf/Routes'

class FromBackendPayload extends AnyPayload {

   public constructor(data: KeyAny | null, message?: string) {
      super({
         ...(!isEmpty(data) && {data: data}),
         ...(message && {message: message})
      })
      super.setValidationRules({
         data: Joi.object().optional(),
         message: Joi.string().optional()
      })
   }

   public getPayload(): BFFResponse<any> {
      const payload = (super.getPayload() as BFFResponse<any>)
      return payload || {}
   }

   public getData(): KeyAny | undefined {
      const payload = super.getPayload()
      return payload ? payload.data : undefined
   }

   public getMessage(): string | undefined {
      const payload = super.getPayload()
      return payload ? payload.message : undefined
   }
}

export default FromBackendPayload
