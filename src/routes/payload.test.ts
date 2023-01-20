import AnyPayload from './payload'
// @ts-ignore
import Joi from 'joi'

describe('→ AnyPayload', () => {

   test('get payload with data', () => {
      const data = {nickname: 'Greg'}
      const payload = new AnyPayload(data)
      expect(payload.getPayload()).toEqual({
         nickname: 'Greg'
      })
   })

   test('get null payload', () => {
      const payload = new AnyPayload(null)
      expect(payload.getPayload()).toEqual(null)
   })

   test('validation is not returning an error if not defined', () => {
      const data = {nickname: 'Greg'}
      const payload = new AnyPayload(data)
      expect(payload.validate()).toEqual([])
   })

   test('validation marks invalid payload', () => {
      class SomePayload extends AnyPayload {
         constructor(data: any) {
            super(data)
            super.setValidationRules({
               nickname: Joi.number().required()
            })
         }
      }
      const data = {nickname: 'Greg'}
      const payload = new SomePayload(data)
      expect(payload.validate()).toEqual([{
         key: 'nickname',
         message: '"nickname" must be a number'
      }])
   })

   test('validation returns custom error message if provided', () => {
      class SomePayload extends AnyPayload {
         constructor(data: any) {
            super(data)
            super.setValidationRules({
               nickname: Joi.number().required()
            }, {
               nickname: 'Nickname field'
            })
         }
      }
      const data = {nickname: 'Greg'}
      const payload = new SomePayload(data)
      expect(payload.validate()).toEqual([{
         key: 'nickname',
         message: '"Nickname field" must be a number'
      }])
   })

   test('validation returns custom error message if provided into `l` property', () => {
      class SomePayload extends AnyPayload {
         constructor(data: any) {
            super(data)
            super.setValidationRules({
               nickname: Joi.number().required()
            }, {
               nickname: {
                  l: 'User nickname'
               }
            })
         }
      }
      const data = {nickname: 'Greg'}
      const payload = new SomePayload(data)
      expect(payload.validate()).toEqual([{
         key: 'nickname',
         message: '"User nickname" must be a number'
      }])
   })

})