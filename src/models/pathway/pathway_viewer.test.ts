import {PathwayDummyModel, PathwayViewerModel} from './model'
import {PathwayViewerItem} from './schema'

import {getDummyUserId} from '@helpers/dummy'
import {UserDummyModel} from '@models/user/model'
import {TemplateDummyModel} from '@models/template/model'

describe('→ PathwayViewerModel', () => {

   const dummyModel = new PathwayDummyModel()
   const dummyUser = new UserDummyModel()
   const dummyTemplate = new TemplateDummyModel({})
   const item: PathwayViewerItem = {
      _id: dummyModel.getId(),
      learner: {
         _id: getDummyUserId()
      },
      mentor: {
         _id: getDummyUserId('1001'),
         nickname: dummyUser.getNickname(),
         status: dummyUser.getStatus()
      },
      template: {
         _id: dummyTemplate.getId(),
         name: dummyTemplate.getName(),
         slug: dummyTemplate.getSlug(),
         version: dummyTemplate.getVersion().major,
         created: dummyTemplate.getCreated()
      },
      customName: dummyModel.getCustomName(),
      theme: dummyModel.getTheme(),
      version: dummyModel.getVersion(),
      progress: dummyModel.getProgress(),
      notes: dummyModel.getCardNotes(),
      nodes: dummyModel.getNodes(),
      edges: dummyModel.getEdges(),
      modified: dummyModel.getModified(),
      created: dummyModel.getCreated()
   }

   const model = new PathwayViewerModel(item)

   test('→ model returns JSON payload', () => {
      expect(model.toJSON()).toEqual(item)
   })

   test('→ get `learner`', () => {
      expect(model.getLearner()).toEqual(item.learner)
   })

   test('→ get `mentor`', () => {
      expect(model.getMentor()).toEqual(item.mentor)
   })

   test('→ get `template`', () => {
      expect(model.getTemplate()).toEqual(item.template)
   })

})