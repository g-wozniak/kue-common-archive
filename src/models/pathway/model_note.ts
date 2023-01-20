import AnyModel from '@models/model'
import {PathwayCardNoteItem, PathwayCardNoteItemInsert} from '@models/pathway/schema'
import assign from 'lodash/assign'

export class PathwayCardNoteModel extends AnyModel {
   constructor(data: PathwayCardNoteItem) {
      super(data)
   }

   public getNote() {
      return (this.item as PathwayCardNoteItem).note
   }

   public getCardId() {
      return (this.item as PathwayCardNoteItem).cardId
   }

   public toInsert() {
      return this.item as PathwayCardNoteItemInsert
   }

   public toJSON() {
      return super.toJSON() as PathwayCardNoteItem
   }
}

export class PathwayCardNoteDummyModel extends PathwayCardNoteModel {
   constructor(overwrite: Partial<PathwayCardNoteItem> = {}) {
      super(assign({
         cardId: 'goal',
         note: 'This is an interesting user note about the goal card'
      }, overwrite))
   }
}