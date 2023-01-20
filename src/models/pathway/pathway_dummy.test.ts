import {PathwayDummyModel} from './model'
import {getDummyPathwayId, getDummyTemplateId, getDummyUserId} from '@helpers/dummy'
import {PathwayItem} from './schema'
import {common_PathwayThemes} from '@properties/pathway_themes'
import {TreeRevisionDummyModel} from '@models/tree/model_revision'

describe('→ PathwayDummyModel', () => {

   const time = '2022-06-06T19:35:34.644Z'

   beforeAll(() => {
      jest.spyOn(global.Date.prototype, 'toISOString').mockReturnValue(time)
   })

   afterAll(() => {
      jest.resetAllMocks()
   })

   const payloadWithoutProgress: PathwayItem = {
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

   const payloadWithProgress: PathwayItem = {
      ...payloadWithoutProgress,
      progress: [
         payloadWithoutProgress.nodes[0]._id,
         payloadWithoutProgress.nodes[1]._id,
         payloadWithoutProgress.nodes[2]._id,
      ],
      notes: [
         {
            cardId: payloadWithoutProgress.nodes[0]._id,
            note: 'This is first note'
         },
         {
            cardId: payloadWithoutProgress.nodes[1]._id,
            note: 'This is second note'
         }
      ]
   }

   test('→ dummy model returns dummy payload by default', () => {
      const item = new PathwayDummyModel()
      expect(item.toJSON()).toEqual(payloadWithoutProgress)
   })

   test('→ possibility to partially overwrite pathway data', () => {
      const payload = new PathwayDummyModel().toJSON()
      const anotherPayload = {
         ...payload,
         customName: 'This is another name',
         version: 2
      }
      expect(new PathwayDummyModel(anotherPayload).toJSON()).toEqual(anotherPayload)
   })

   test('→ able to overwrite dummy data with progress and notes', () => {
      const item = new PathwayDummyModel(payloadWithoutProgress)
      expect(item.toJSON()).toEqual(payloadWithoutProgress)
   })

   test('→ able to read the progress details', () => {
      const item = new PathwayDummyModel(payloadWithProgress)
      expect(item.getProgress()).toEqual(payloadWithProgress.progress)
   })

   test('→ able to read the card notes', () => {
      const item = new PathwayDummyModel(payloadWithProgress)
      expect(item.getCardNotes()).toEqual(payloadWithProgress.notes)
   })

})