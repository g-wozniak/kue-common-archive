import assign from 'lodash/assign'
import {BFFResponse} from '@intf/Routes'

import {getDummyPathwayId, getDummyTemplateId} from '@helpers/dummy'
import {UserDummyModel, UserModel} from '@models/user/model'
import {TemplateDummyModel, TemplateModel} from '@models/template/model'
import {PathwayPopulatedDummyModel, PathwayPopulatedModel} from '@models/pathway/model'

import UserProfileFromBackendPayload, {
   TUserProfileFromBackendPayload
} from './from_backend'
import {common_UserAccountStatus} from '@properties/user_account_status'

type SimplePayloadFragment = {
   nickname: string
   givenName: string | undefined
   familyName: string | undefined
   status: common_UserAccountStatus
}

type MappedPayloadFragment = {
   username: string
   user: UserModel
   templates: TemplateModel[]
   pathways: PathwayPopulatedModel[]
}

class UserProfileFromBackendDummyPayload extends UserProfileFromBackendPayload {

   public constructor(simple: Partial<SimplePayloadFragment> = {}, mapped: Partial<MappedPayloadFragment> = {}) {
      const mappedDummyModel = UserProfileFromBackendPayload.mapping(
         mapped.username || 'greg',
         mapped.user || new UserDummyModel(),
         mapped.templates || [
            new TemplateDummyModel({published: true, revisions: 2}, {_id: getDummyTemplateId('1000')}),
            new TemplateDummyModel({revisions: 3}, {_id: getDummyTemplateId('1001')})
         ],
         mapped.pathways || [
            new PathwayPopulatedDummyModel({_id: getDummyPathwayId('1000')}),
            new PathwayPopulatedDummyModel({_id: getDummyPathwayId('1001')})
         ]
      )
      super(assign(mappedDummyModel, simple))
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TUserProfileFromBackendPayload>
   }

}

export default UserProfileFromBackendDummyPayload

