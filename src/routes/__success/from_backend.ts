import FromBackendPayload from '@routes/from_backend'
import {common_ResponseSlugs} from '@properties/response_slugs'

type MessageOnlyPayload = {
   message: string
}

class MessageOnlyFromBackendPayload extends FromBackendPayload {

   public constructor(message: common_ResponseSlugs) {
      super(null, message)
   }

   public getPayload() {
      return super.getPayload() as MessageOnlyPayload
   }
}

export default MessageOnlyFromBackendPayload
