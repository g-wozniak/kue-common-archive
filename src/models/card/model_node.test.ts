import {CardNodeDummyModel, CardNodeModel} from './model_node'
import {CardNode} from './schema'
import {getDummyCardId} from '@helpers/dummy'
import {common_CardTypes} from '../../properties/card_types'
import {common_Difficulties} from '../../properties/difficulties'
import {common_CardLayouts} from '../../properties/card_layouts'

describe('→ CardNodeModel', () => {

   const item = new CardNodeDummyModel().toJSON()

   const Card = new CardNodeModel(item)

   test('→ model returns JSON payload', () => {
      expect(Card.toJSON()).toEqual(item)
   })

   test('→ get `id`', () => {
      expect(Card.getId()).toEqual(item._id)
   })

   test('→ get `position`', () => {
      expect(Card.getPosition()).toEqual(item.position)
   })

   test('→ get `x` position', () => {
      expect(Card.getPosX()).toEqual(item.position.x)
   })

   test('→ get `y` position', () => {
      expect(Card.getPosY()).toEqual(item.position.y)
   })

   test('→ get `card type`', () => {
      expect(Card.getCardType()).toEqual(item.cardType)
   })

   test('→ get custom card type', () => {
      expect(Card.getCustomCardType()).toEqual(item.customCardType)
   })

   test('→ get `label`', () => {
      expect(Card.getLabel()).toEqual(item.label)
   })

   test('→ get description', () => {
      expect(Card.getDescription()).toEqual(item.description)
   })

   test('→ get time', () => {
      expect(Card.getTime()).toEqual(item.time)
   })

   test('→ get cost', () => {
      expect(Card.getCost()).toEqual(item.cost)
   })

   test('→ get difficulty', () => {
      expect(Card.getDifficulty()).toEqual(item.difficulty)
   })

   test('→ get layout', () => {
      expect(Card.getLayout()).toEqual(item.layout)
   })

   test('→ get widgets', () => {
      expect(Card.getWidgets()).toEqual(item.widgets)
   })

   test('→ get `updated`', () => {
      expect(Card.getUpdated()).toEqual(item.updated)
   })

   test('→ get `updated`', () => {
      expect(Card.getCreated()).toEqual(item.created)
   })

   describe('→ overwrite', () => {

      const newItem: CardNode = {
         _id: getDummyCardId('1000'),
         cardType: common_CardTypes.Task,
         customCardType: 'coding task',
         label: 'Write your own app',
         description: 'It is now the time when you need to write your own first program',
         time: 180,
         cost: 13.99,
         position: {
            x: 300,
            y: 102
         },
         difficulty: common_Difficulties.Moderate,
         layout: common_CardLayouts.TwoEqualColumns,
         widgets: [],
         updated: '2022-05-16T19:35:34.644Z',
         created: '2022-05-16T19:35:34.644Z'
      }

      test('→ overwrites the default values in the true model', () => {
         expect(new CardNodeModel(newItem).toJSON()).toEqual(newItem)
      })

      test('→ overwrites the default values in the dummy model', () => {
         expect(new CardNodeDummyModel(newItem).toJSON()).toEqual(newItem)
      })

      test('→ overwrites the default values in the dummy model with iterator', () => {
         expect(new CardNodeDummyModel(newItem, 2).toJSON()).toEqual(newItem)
      })

      test('→ overwrites partial in created and updated fields', () => {
         const partial = {
            position: {
               x: 203,
               y: 102
            },
            created: '2022-10-01T20:35:34.644Z',
            updated: '2022-10-01T19:35:34.644Z'
         }
         const defaultItem = new CardNodeDummyModel({}, 2).toJSON()
         expect(new CardNodeDummyModel(partial, 2).toJSON()).toEqual({...defaultItem, ...partial})
      })
   })
})