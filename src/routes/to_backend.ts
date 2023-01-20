import AnyPayload from './payload'
import {KeyAny} from '@intf/Common'

class ToBackendPayload extends AnyPayload {
   public constructor(payload: KeyAny | null) {
      super(payload)
   }
}

export default ToBackendPayload
