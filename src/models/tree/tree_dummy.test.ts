import {TreeDummyModel} from '@models/tree/model'

describe('→ TreeDummyModel', () => {

   test('→ returning no revisions by default', () => {
      const tree = new TreeDummyModel()
      expect(tree.toJSON().length).toEqual(0)
   })

   test('→ returns one revision', () => {
      const tree = new TreeDummyModel(['aaa-bbb'])
      const revs = tree.toJSON()
      expect(revs).toHaveLength(1)
   })

   test('→ returns two revisions', () => {
      const tree = new TreeDummyModel(['000-111', '111-222'])
      const revs = tree.toJSON()
      expect(revs).toHaveLength(2)
   })
})