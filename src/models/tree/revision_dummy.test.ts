import {TreeRevisionDummyModel} from './model_revision'
import {getRandomRevisionID} from '@helpers/dummy'

describe('→ TreeRevisionDummyModel', () => {

   const oneItem = new TreeRevisionDummyModel()

   test('→ dummy model returns nodes and edges by default', () => {
      expect(oneItem.toJSON().nodes.length).toBeGreaterThan(0)
      expect(oneItem.toJSON().edges.length).toBeGreaterThan(0)
   })

   test('→ dummy model returns fresh nodes and edges', () => {
      const otherItem = new TreeRevisionDummyModel({}, {emptyNodesEdges: true})
      expect(otherItem.toJSON().revision).toEqual(oneItem.getRevision())
      expect(otherItem.toJSON().nodes).toHaveLength(0)
      expect(otherItem.toJSON().edges).toHaveLength(0)
   })

   test('→ possibility to partially overwrite revision data', () => {
      const oneItem = new TreeRevisionDummyModel().toJSON()
      const anotherItem = {
         ...oneItem,
         label: 'This is another label',
         comment: 'This is another comment'
      }
      expect(new TreeRevisionDummyModel(anotherItem).toJSON()).toEqual(anotherItem)
   })

   test('→ possibility to fully overwrite the model data', () => {
      const anotherItem = {
         revision: getRandomRevisionID(),
         label: 'things are great',
         comment: 'and comments are brilliant',
         timestamp: 1612792949,
         nodes: [],
         edges: []
      }
      expect(new TreeRevisionDummyModel(anotherItem).toJSON()).toEqual(anotherItem)
   })

})