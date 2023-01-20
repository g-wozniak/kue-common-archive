import FromBackendPayload from '@routes/from_backend'
import {PathwayItemSyncedUpdate} from '@models/pathway/schema'
import {PathwayModel} from '@models/pathway/model'
import {BFFResponse} from '@intf/Routes'

export type TPathwaySyncFromBackendPayload = PathwayItemSyncedUpdate

class PathwaySyncFromBackendPayload extends FromBackendPayload {

   constructor(pathway: PathwayModel, message?: string)
   constructor(data: TPathwaySyncFromBackendPayload, message?: string)
   constructor(input: TPathwaySyncFromBackendPayload | PathwayModel, message?: string) {
      super(input instanceof PathwayModel ? input.toSyncedUpdate() : input, message)
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TPathwaySyncFromBackendPayload>
   }

   public getData() {
      return super.getData() as TPathwaySyncFromBackendPayload
   }

}

export default PathwaySyncFromBackendPayload