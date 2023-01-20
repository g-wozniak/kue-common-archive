import {PathwayModel} from './model'
import {PathwayItem} from './schema'
import {getDummyPathwayId, getDummyTemplateId, getDummyUserId} from '@helpers/dummy'
import {common_PathwayThemes} from '@properties/pathway_themes'
import {TreeRevisionDummyModel} from '@models/tree/model_revision'


describe('→ PathwayModel', () => {

   const item: PathwayItem = {
      _id: getDummyPathwayId('1000'),
      _learner: getDummyUserId('1001'),
      _mentor: getDummyUserId('1000'),
      _template: getDummyTemplateId('1000'),
      customName: 'Become full-stack software engineer',
      theme: common_PathwayThemes.Vanilla,
      version: 1,
      progress: [],
      notes: [],
      nodes: new TreeRevisionDummyModel().getNodes(),
      edges: new TreeRevisionDummyModel().getEdges(),
      modified: '2022-05-16T21:36:33.233Z',
      created: '2022-05-15T19:35:34.644Z'
   }

   const model = new PathwayModel(item)

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

   test('→ get pathway custom name', () => {
      expect(model.getCustomName()).toEqual(item.customName)
   })

   test('→ get current theme name', () => {
      expect(model.getTheme()).toEqual(item.theme)
   })

   test('→ get current version of the pathway', () => {
      expect(model.getVersion()).toEqual(item.version)
   })

   test('→ get progress information', () => {
      expect(model.getProgress()).toEqual(item.progress)
   })

   test('→ get card notes', () => {
      expect(model.getCardNotes()).toEqual(item.notes)
   })

   test('→ get pathway nodes', () => {
      expect(model.getNodes()).toEqual(item.nodes)
   })

   test('→ get pathway edges', () => {
      expect(model.getEdges()).toEqual(item.edges)
   })

   test('→ get `modified`', () => {
      expect(model.getModified()).toEqual(item.modified)
   })

   test('→ get `created`', () => {
      expect(model.getCreated()).toEqual(item.created)
   })

   test('→ get the insert to the database payload', () => {
      expect(model.toInsert()).toEqual(item)
   })
})