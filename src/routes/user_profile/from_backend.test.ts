import UserProfileFromBackendDummyPayload from './from_backend_dummy'
import UserProfileFromBackendPayload from './from_backend'
import {UserDummyModel} from '@models/user/model'
import {TemplateDummyModel} from '@models/template/model'
import {PathwayPopulatedDummyModel} from '@models/pathway/model'
import {getDummyPathwayId, getDummyTemplateId} from '@helpers/dummy'

describe('→ UserProfileFromBackendPayload', () => {

   const user = new UserProfileFromBackendDummyPayload()

   test('→ payload construction using the direct input', () => {
      expect(new UserProfileFromBackendPayload(user.getData()).getPayload()).toEqual(user.getPayload())
   })

   test('→ payload construction using models', () => {
      const payload = new UserProfileFromBackendPayload(
         new UserDummyModel({nickname: 'greg112'}),
         [
            new TemplateDummyModel({published: true, revisions: 2}),
            new TemplateDummyModel({}, {_id: getDummyTemplateId('1001')})
         ], [
            new PathwayPopulatedDummyModel(),
            new PathwayPopulatedDummyModel({_id: getDummyPathwayId('1001')})
         ],
         'greg123')

      const data = payload.getData()
      expect(data.templates[0].version.published).toBeDefined()
      expect(data.templates[0].revisions.length).toEqual(2)
      expect(data.templates[1]._id).toEqual(getDummyTemplateId('1001'))
      expect(data.pathways[1]._id).toEqual(getDummyPathwayId('1001'))
      expect(data.nickname).toEqual('greg112')
      expect(data.username).toEqual('greg123')
   })

})