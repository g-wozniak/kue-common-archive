import UserPasswordResetCompleteToBackendPayload from './to_backend'

describe('→ UserPasswordResetCompleteToBackendPayload', () => {

   const data = {
      username_alias: 'greg123',
      password: 'pass123',
      code: '123123'
   }

   test('→ payload construction', () => {
      expect(new UserPasswordResetCompleteToBackendPayload(data).getPayload()).toEqual(data)
   })

   test('→ payload validation', () => {
      expect(new UserPasswordResetCompleteToBackendPayload(data).validate()).toEqual([])
   })

   test('→ payload validation returns invalid', () => {
      expect(new UserPasswordResetCompleteToBackendPayload({
         ...data,
         code: '123456789'
      }).validate()).toEqual([
         {
            key: 'code',
            message: '"code" length must be 6 characters long'
         }
      ])
   })

   test('→ payload validation returns invalid field with custom text', () => {
      expect(new UserPasswordResetCompleteToBackendPayload({
         ...data,
         code: '123456789'
      }, {code: 'authentication code'}).validate()).toEqual([
         {
            key: 'code',
            message: '"authentication code" length must be 6 characters long'
         }
      ])
   })
})