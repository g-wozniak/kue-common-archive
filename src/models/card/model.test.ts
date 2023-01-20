import {CardDummyModel, CardModel, getRandomisedCardDummyModels} from './model'
import {CardItem} from './schema'
import {getDummyCardId, getDummyCardWidgetId, getDummyUserId} from '../../helpers/dummy'
import {common_CardTypes} from '../../properties/card_types'
import {common_Difficulties} from '../../properties/difficulties'
import {common_CardLayouts} from '../../properties/card_layouts'

describe('→ CardModel', () => {

   const item: CardItem = new CardDummyModel().toJSON()

   const Card = new CardModel(item)

   test('→ model returns JSON payload', () => {
      expect(Card.toJSON()).toEqual(item)
   })

   test('→ get `id`', () => {
      expect(Card.getId()).toEqual(item._id)
   })

   test('→ get `mentor`', () => {
      expect(Card.getMentor()).toEqual(item._mentor)
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

      const newItem: CardItem = {
         _id: getDummyCardId('1001'),
         _mentor: getDummyUserId('1000'),
         cardType: common_CardTypes.Task,
         customCardType: 'coding task',
         label: 'Write your own app',
         description: 'It is now the time when you need to write your own first program',
         time: 180,
         cost: 13.99,
         difficulty: common_Difficulties.Moderate,
         layout: common_CardLayouts.TwoEqualColumns,
         widgets: [],
         updated: '2022-05-16T19:35:34.644Z',
         created: '2022-05-16T19:35:34.644Z'
      }

      test('→ overwrites the default values in the true model', () => {
         expect(new CardModel(newItem).toJSON()).toEqual(newItem)
      })

      test('→ overwrites the default values in the dummy model', () => {
         expect(new CardDummyModel(newItem).toJSON()).toEqual(newItem)
      })

      test('→ overwrites the default values in the dummy model with iterator', () => {
         expect(new CardDummyModel(newItem, 2).toJSON()).toEqual(newItem)
      })

      test('→ overwrites date time', () => {
         const defaultItem = new CardDummyModel({}, 1).toJSON()
         const dates = {
            updated: '2022-03-03T21:35:34.644Z',
            created: '2022-03-03T20:35:34.644Z'
         }
         expect(new CardDummyModel(dates, 1).toJSON()).toEqual({...defaultItem, ...dates})
      })

   })

   describe('→ randomizer', () => {

      test('→ randomised cards are immutable', () => {
         const res = getRandomisedCardDummyModels(2)
         expect(res[0].toJSON()).toEqual({
            _id: '1000fafa0000999900001001',
            _mentor: '100011110000111100001000',
            cardType: 'CARD_TASK',
            cost: 0,
            created: '2022-05-16T19:35:34.644Z',
            customCardType: 'coding task',
            description: res[0].getDescription(),
            difficulty: '3',
            label: res[0].getLabel(),
            layout: 'CARD_LAYOUT_TWO_EQUAL_COLUMNS',
            time: 5,
            updated: '2022-05-16T19:35:34.644Z',
            widgets: [
               {
                  id: 'card-widget-0101-f1-0',
                  props: {
                     caption: 'Write your own app',
                     text: 'You are ready to build your own working app which displays Hello World text'
                  },
                  slot: 1,
                  widget: 'CW_TEXT'
               },
               {
                  id: 'card-widget-0101-f1-1',
                  props: {
                     caption: 'How to start?',
                     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl arcu, tincidunt in volutpat vitae, feugiat at tortor. Integer id felis nec purus elementum tempus. Fusce dapibus, risus vel condimentum congue, nisi nibh maximus nisl, sed facilisis nibh risus et lacus.'
                  },
                  slot: 2,
                  widget: 'CW_TEXT'
               },
               {
                  id: 'card-widget-0101-f1-2',
                  props: {
                     caption: 'How do I know it works?',
                     text: 'Nullam molestie tristique libero, id commodo mauris vestibulum ut. Etiam rutrum tellus massa, quis ultricies urna vestibulum non. Praesent dictum ut enim eget congue.'
                  },
                  slot: 3,
                  widget: 'CW_TEXT'
               }
            ]
         })
         expect(res[1].toJSON()).toEqual({
            _id: '1000fafa0000999900001002',
            _mentor: '100011110000111100001000',
            cardType: 'CARD_TASK',
            cost: 0,
            created: '2022-05-16T19:35:34.644Z',
            customCardType: "",
            description: res[1].getDescription(),
            difficulty: '3',
            label: res[1].getLabel(),
            layout: 'CARD_LAYOUT_TWO_EQUAL_COLUMNS',
            time: 10,
            updated: '2022-05-16T19:35:34.644Z',
            widgets: [
               {
                  id: 'card-widget-0101-f2-0',
                  props: {
                     caption: 'Write your own app',
                     text: 'You are ready to build your own working app which displays Hello World text'
                  },
                  slot: 1,
                  widget: 'CW_TEXT'
               },
               {
                  id: 'card-widget-0101-f2-1',
                  props: {
                     caption: 'How to start?',
                     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl arcu, tincidunt in volutpat vitae, feugiat at tortor. Integer id felis nec purus elementum tempus. Fusce dapibus, risus vel condimentum congue, nisi nibh maximus nisl, sed facilisis nibh risus et lacus.'
                  },
                  slot: 2,
                  widget: 'CW_TEXT'
               },
               {
                  id: 'card-widget-0101-f2-2',
                  props: {
                     caption: 'How do I know it works?',
                     text: 'Nullam molestie tristique libero, id commodo mauris vestibulum ut. Etiam rutrum tellus massa, quis ultricies urna vestibulum non. Praesent dictum ut enim eget congue.'
                  },
                  slot: 3,
                  widget: 'CW_TEXT'
               }
            ]
         })
      })
   })

})