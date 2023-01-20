import {
   createRevisionId,
   enumToSemanticUIOptions,
   enumToValues,
   isoToDateTime,
   timestamp,
   toMoney,
   uid,
   versionIndicator
} from './utils'


describe('→ utils', () => {

   describe('→ uid', () => {
      it('generates random uuid', () => {
         const id = uid()
         expect(id).toHaveLength(36)
         expect(id).toMatch(/[0-9a-f-]{36}/)
      })

      it('generates fixed length uuid', () => {
         expect(uid(6)).toHaveLength(6)
      })
   })

   describe('→ toMoney', () => {
      it('from not rounded amount', () => {
         expect(toMoney(10)).toEqual('10.00')
      })

      it('from exact amount', () => {
         expect(toMoney(10.12)).toEqual('10.12')
      })

      it('from rounded amount', () => {
         expect(toMoney(13.122934278)).toEqual('13.12')
      })

      it('from almost exact amount', () => {
         expect(toMoney(13.1)).toEqual('13.10')
      })
   })

   describe('→ enumToValues', () => {
      it('returns values from enum', () => {
         enum Test {
            One = '1',
            Two = '2',
            Three = '3'
         }

         expect(enumToValues(Test)).toEqual(['1', '2', '3'])
      })
   })

   describe('→ enumToSemanticUIOptions', () => {
      it('returns translated values ready to be used by Semantic UI React dropdown component', () => {
         enum Colors {
            Black = 'BLA',
            Yellow = 'YEL',
            Blue = 'BLU'
         }

         const humanTranslation = {
            BLA: 'damn black',
            YEL: 'stunning yellow',
            BLU: 'nice blue'
         }

         expect(enumToSemanticUIOptions('colors', Colors, humanTranslation)).toEqual([
            {
               'key': 'colors_option_0',
               'text': humanTranslation.BLA,
               'value': Colors.Black
            },
            {
               'key': 'colors_option_1',
               'text': humanTranslation.YEL,
               'value': Colors.Yellow
            },
            {
               'key': 'colors_option_2',
               'text': humanTranslation.BLU,
               'value': Colors.Blue
            }
         ])
      })
   })

   describe('→ joiToKeyValue', () => {
      it.todo('testing validation')
   })

   describe('→ versionIndicator', () => {
      it('returns version number in friendly way', () => {
         expect(versionIndicator(12)).toEqual('v.12')
      })
   })

   describe('→ createRevisionId', () => {
      it('returns random revision ID', () => {
         const aRevisionId = createRevisionId()
         const bRevisionId = createRevisionId()
         expect(aRevisionId).toHaveLength(7)
         expect(bRevisionId).toHaveLength(7)
         expect(aRevisionId).not.toEqual(bRevisionId)
      })
   })

   describe('→ timestamp', () => {
      it('returns timestamp value', () => {
         expect(timestamp()).toBeGreaterThan(1665128916)
      })
   })

   describe('→ isoToDateTime', () => {
      it('returns date without seconds from ISO format', () => {
         expect(isoToDateTime('2022-05-16T19:35:34.644Z')).toEqual('16/05/2022 20:35')
      })

      it('returns date with seconds from ISO format', () => {
         expect(isoToDateTime('2022-05-16T19:35:34.644Z', true)).toEqual('16/05/2022 20:35:34')
      })

      it('returns error message if ISO date is invalid', () => {
         expect(isoToDateTime('2022-05-16ZZZ000-39023')).toEqual('Invalid date')
      })
   })

   it.todo('timePassedTillNow')

})
