import FromBackendPayload from '@routes/from_backend'
import {BFFResponse} from '@intf/Routes'


export type TTemplatePublishFromBackendPayload = {
   version: number
   published: string | null
}

class TemplatePublishFromBackendPayload extends FromBackendPayload {

   public constructor(payload: TTemplatePublishFromBackendPayload, message?: string) {
      super(payload, message)
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TTemplatePublishFromBackendPayload>
   }
}

export default TemplatePublishFromBackendPayload
