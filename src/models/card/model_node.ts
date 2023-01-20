import assign from 'lodash/assign'
import omit from 'lodash/omit'
import {CardItem, CardNode} from './schema'
import AnyModel from '@models/model'

import {CardDummyModel} from '@models/card/model'

export class CardNodeModel extends AnyModel {
   constructor(data: CardNode) {
      super(data)
   }

   public getId() {
      return (this.item as CardNode)._id
   }

   public getCardType() {
      return (this.item as CardNode).cardType
   }

   public getCustomCardType() {
      return (this.item as CardNode).customCardType
   }

   public getLabel() {
      return (this.item as CardNode).label
   }

   public getDescription() {
      return (this.item as CardNode).description
   }

   public getTime() {
      return (this.item as CardNode).time
   }

   public getCost() {
      return (this.item as CardNode).cost
   }

   public getDifficulty() {
      return (this.item as CardNode).difficulty
   }

   public getLayout() {
      return (this.item as CardNode).layout
   }

   public getWidgets() {
      return (this.item as CardNode).widgets
   }
   
   public getPosX() {
      return (this.item as CardNode).position.x
   }
   
   public getPosY() {
      return (this.item as CardNode).position.y
   }
   
   public getPosition() {
      return (this.item as CardNode).position
   }

   public getUpdated() {
      return (this.item as CardNode).updated
   }

   public getCreated() {
      return (this.item as CardNode).created
   }

   public toJSON() {
      return super.toJSON() as CardNode
   }
}

export class CardNodeDummyModel extends CardNodeModel {
   constructor(overwrite: Partial<CardNode> = {}, iterator: number = 0) {
      const cardItem: Partial<CardItem> = omit(overwrite, 'position')
      const dummyCardItem = omit(new CardDummyModel(cardItem, iterator).toJSON(), '_mentor')
      const cardNode: CardNode = {
         ...dummyCardItem,
         position: {
            x: overwrite.position?.x || 500,
            y: overwrite.position?.y || 700
         }
      }
      super(cardNode)
   }
}