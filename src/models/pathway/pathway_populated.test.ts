import {PathwayDummyModel, PathwayPopulatedModel} from './model'
import {PathwayPopulatedItem} from './schema'

import {getDummyUserId} from '@helpers/dummy'
import {UserDummyModel} from '@models/user/model'
import {TemplateDummyModel} from '@models/template/model'


describe('→ PathwayPopulatedModel', () => {

   const dummyModel = new PathwayDummyModel()

   const item: PathwayPopulatedItem = {
      _id: dummyModel.getId(),
      _learner: new UserDummyModel({_id: getDummyUserId('1001')}).toJSON(),
      _mentor: new UserDummyModel().toJSON(),
      _template: new TemplateDummyModel({}).toJSON(),
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

   const model = new PathwayPopulatedModel(item)

   test('→ model returns JSON payload', () => {
      expect(model.toJSON()).toEqual(item)
   })

   test('→ get `id`', () => {
      expect(model.getId()).toEqual(item._id)
   })

   test('→ get `learner`', () => {
      expect(model.getLearner()).toEqual(item._learner)
   })

   test('→ get `mentor`', () => {
      expect(model.getMentor()).toEqual(item._mentor)
   })

   test('→ get `template`', () => {
      expect(model.getTemplate()).toEqual(item._template)
   })

})