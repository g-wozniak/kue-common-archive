import ToBackendPayload from '@routes/to_backend'

export type TUserProfileToBackendPayload = null

class UserProfileToBackendPayload extends ToBackendPayload {
   public constructor() {
      super(null)
   }
}

export default UserProfileToBackendPayload
