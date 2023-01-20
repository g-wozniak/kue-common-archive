import isEmpty from 'lodash/isEmpty'
import FromBackendPayload from '@routes/from_backend'
import {BFFErrorResponse} from '@intf/Routes'
import {Validation} from '@intf/Common'

export type TErrorFromBackendPayloadData = {
   reason?: string
   list?: Validation[]
   message?: string
}

class ErrorFromBackendPayload extends FromBackendPayload {

   public constructor(err: TErrorFromBackendPayloadData = {}) {
      super(ErrorFromBackendPayload.mapping(err), err.message)
   }

   public getPayload() {
      return super.getPayload() as BFFErrorResponse
   }

   protected static mapping({reason, list}: TErrorFromBackendPayloadData): BFFErrorResponse | null {
      const _err: Record<string, any> = {}
      if (reason) {
         _err.reason = reason
      }
      if (list) {
         _err.list = list
      }
      return !isEmpty(_err) ? _err : null
   }
}

export default ErrorFromBackendPayload
