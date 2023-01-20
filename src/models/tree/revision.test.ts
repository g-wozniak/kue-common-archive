import {TreeRevisionModel} from './model_revision'
import {getRandomRevisionID} from '@helpers/dummy'
import {timestamp} from '@helpers/utils'
import {TreeRevisionItem} from '@models/tree/schema'

describe('→ TreeRevisionModel', () => {

   const dummyItem: TreeRevisionItem = {
      revision: getRandomRevisionID(),
      label: 'initial version',
      comment: 'The main version of the template',
      timestamp: timestamp(),
      nodes: [],
      edges: []
   }

   const revision = new TreeRevisionModel(dummyItem)

   test('→ providing data to model', () => {
      expect(revision.toJSON()).toEqual(dummyItem)
   })

   test('→ get `revision`', () => {
      expect(revision.getRevision()).toEqual(dummyItem.revision)
   })

   test('→ get `label`', () => {
      expect(revision.getLabel()).toEqual(dummyItem.label)
   })

   test('→ get comment', () => {
      expect(revision.getComment()).toEqual(dummyItem.comment)
   })

   test('→ get timestamp', () => {
      expect(revision.getTimestamp()).toEqual(dummyItem.timestamp)
   })

   test('→ get pathway nodes', () => {
      expect(revision.getNodes()).toEqual(dummyItem.nodes)
   })

   test('→ get pathway edges', () => {
      expect(revision.getEdges()).toEqual(dummyItem.edges)
   })

   test('→ toJSON returns model data', () => {
      expect(revision.toJSON()).toEqual(dummyItem)
   })

})