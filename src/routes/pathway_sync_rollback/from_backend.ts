import {PathwayItemSyncedUpdate} from '@models/pathway/schema'
import FromBackendPayload from '@routes/from_backend'
import {BFFResponse} from '@intf/Routes'

export type TPathwaySyncRollbackFromBackendPayload = PathwayItemSyncedUpdate

class PathwaySyncRollbackFromBackendPayload extends FromBackendPayload {

   constructor(data: TPathwaySyncRollbackFromBackendPayload, message?: string) {
      super(data, message)
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TPathwaySyncRollbackFromBackendPayload>
   }

   public getData() {
      return super.getData() as TPathwaySyncRollbackFromBackendPayload
   }
}

export default PathwaySyncRollbackFromBackendPayload