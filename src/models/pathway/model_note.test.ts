import {PathwayCardNoteItem} from './schema'
import {PathwayCardNoteModel} from './model_note'


describe('→ PathwayCardNoteModel', () => {

   const item: PathwayCardNoteItem = {
      cardId: 'goal',
      note: 'This is a note'
   }

   const model = new PathwayCardNoteModel(item)

   test('→ model returns JSON payload', () => {
      expect(model.toJSON()).toEqual(item)
   })

   test('→ get card id', () => {
      expect(model.getCardId()).toEqual(item.cardId)
   })

   test('→ get note', () => {
      expect(model.getNote()).toEqual(item.note)
   })

   test('→ get the insert to the database payload', () => {
      expect(model.toInsert()).toEqual(item)
   })

})