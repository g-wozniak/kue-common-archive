import {locale} from '@root/index'
import translation from '@root/locale/en_GB'

describe('→ locale', () => {

   test('→ locale returns english translation', () => {
      expect(locale()).toEqual(translation)
   })

})
