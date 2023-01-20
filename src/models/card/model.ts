import assign from 'lodash/assign'
import randomWords from 'random-words'

import {CardItem, CardItemInsert} from './schema'
import AnyModel from '@models/model'
import {getDummyCardId, getDummyCardWidgetId, getDummyUserId} from '@helpers/dummy'
import {common_Difficulties} from '@properties/difficulties'
import {common_CardLayouts} from '@properties/card_layouts'
import {common_CardWidgets} from '@properties/card_widgets'
import {common_CardTypes} from '@properties/card_types'

export class CardModel extends AnyModel {
   constructor(data: CardItem) {
      super(data)
   }

   public getId() {
      return (this.item as CardItem)._id
   }

   public getMentor() {
      return (this.item as CardItem)._mentor
   }

   public getCardType() {
      return (this.item as CardItem).cardType
   }

   public getCustomCardType() {
      return (this.item as CardItem).customCardType
   }

   public getLabel() {
      return (this.item as CardItem).label
   }

   public getDescription() {
      return (this.item as CardItem).description
   }

   public getTime() {
      return (this.item as CardItem).time
   }

   public getCost() {
      return (this.item as CardItem).cost
   }

   public getDifficulty() {
      return (this.item as CardItem).difficulty
   }

   public getLayout() {
      return (this.item as CardItem).layout
   }

   public getWidgets() {
      return (this.item as CardItem).widgets
   }

   public getUpdated() {
      return (this.item as CardItem).updated
   }

   public getCreated() {
      return (this.item as CardItem).created
   }

   public toInsert() {
      return super.toJSON() as CardItemInsert
   }

   public toJSON() {
      return super.toJSON() as CardItem
   }
}

export class CardDummyModel extends CardModel {
   constructor(overwrite: Partial<CardItem> = {}, iterator: number = 0) {
      const index = iterator < 10 ? `0${iterator}` : iterator
      const defaultItem: CardItem = {
         _id: getDummyCardId(`10${index}`),
         _mentor: getDummyUserId('1000'),
         cardType: common_CardTypes.Task,
         customCardType: 'coding task',
         label: 'Write your own app',
         description: 'It is now the time when you need to write your own first program',
         time: 180,
         cost: 13.99,
         difficulty: common_Difficulties.Moderate,
         layout: common_CardLayouts.TwoEqualColumns,
         widgets: [
            {
               id: getDummyCardWidgetId(`f${iterator}-0`),
               widget: common_CardWidgets.Text,
               slot: 1,
               props: {
                  caption: 'Write your own app',
                  text: 'You are ready to build your own working app which displays Hello World text'
               }
            },
            {
               id: getDummyCardWidgetId(`f${iterator}-1`),
               widget: common_CardWidgets.Text,
               slot: 2,
               props: {
                  caption: 'How to start?',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl arcu, tincidunt in volutpat vitae, feugiat at tortor. Integer id felis nec purus elementum tempus. Fusce dapibus, risus vel condimentum congue, nisi nibh maximus nisl, sed facilisis nibh risus et lacus.'
               }
            },
            {
               id: getDummyCardWidgetId(`f${iterator}-2`),
               widget: common_CardWidgets.Text,
               slot: 3,
               props: {
                  caption: 'How do I know it works?',
                  text: 'Nullam molestie tristique libero, id commodo mauris vestibulum ut. Etiam rutrum tellus massa, quis ultricies urna vestibulum non. Praesent dictum ut enim eget congue.'
               }
            }
         ],
         updated: '2022-05-16T19:35:34.644Z',
         created: '2022-05-16T19:35:34.644Z'
      }
      super(assign(defaultItem, overwrite))
   }
}

export function getRandomisedCardDummyModels(quantity: number): CardDummyModel[] {
   let cards: CardDummyModel[] = []
   for (let i = 1; i < quantity + 1; i++) {
      const overwrite: Partial<CardItem> = {}
      overwrite.label = randomWords({exactly: 2, join: ' '})
      overwrite.description = randomWords({exactly: 12, join: ' '})
      overwrite.cost = 0
      if (i % 2 === 0) {
         overwrite.customCardType = ''
      }
      if (i % 3 === 0) {
         overwrite.cost = i + 0.99
         overwrite.difficulty = common_Difficulties.Hard
      }
      if (i % 4 === 0) {
         overwrite.cardType = common_CardTypes.Category
      }
      if (i % 6 === 0) {
         overwrite.cardType = common_CardTypes.Skill
      }
      overwrite.time = Math.floor(i / 2 * 10)
      cards.push(new CardDummyModel(overwrite, i))
   }
   return cards
}
