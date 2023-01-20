import ErrorFromBackendPayload from './from_backend_error'

describe('→ ErrorFromBackendPayload', () => {


   test('→ calling without parameters gives empty object', () => {
      expect(new ErrorFromBackendPayload().getPayload()).toEqual({})
   })

   test('→ calling with `message` supplies the message but no data', () => {
      expect(new ErrorFromBackendPayload({message: '123'}).getPayload()).toEqual({message: '123'})
   })

   test('→ calling with `reason` supplies the reason', () => {
      expect(new ErrorFromBackendPayload({reason: '123'}).getPayload()).toEqual({data: {reason: '123'}})
   })

   test('→ calling with `list` supplies the list', () => {
      const list = [
         {key: 'name', message: 'invalid name'},
         {key: 'surname', message: 'invalid surname'},
      ]
      expect(new ErrorFromBackendPayload({list}).getPayload()).toEqual({data: {list}})
   })

})