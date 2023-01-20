import FromBackendPayload from './from_backend'
// @ts-ignore
import Joi from 'joi'

describe('→ FromBackendPayload', () => {

   test('get payload with data', () => {
      const data = {nickname: 'Greg'}
      const payload = new FromBackendPayload(data)
      expect(payload.getPayload()).toEqual({data})
   })

   test('get empty payload', () => {
      const payload = new FromBackendPayload(null)
      expect(payload.getPayload()).toEqual({})
   })

   test('get payload with data and message', () => {
      const payload = new FromBackendPayload({name: 'Greg'}, 'some_message')
      expect(payload.getPayload()).toEqual({
         data: {
            name: 'Greg'
         },
         message: 'some_message'
      })
   })

   test('get payload with message only', () => {
      const payload = new FromBackendPayload(null, 'some_message')
      expect(payload.getPayload()).toEqual({
         message: 'some_message'
      })
   })

   test('get message from payload', () => {
      const payload = new FromBackendPayload(null, 'some_message')
      expect(payload.getMessage()).toEqual('some_message')
   })

   test('get undefined data if message is not defined', () => {
      const payload = new FromBackendPayload(null)
      expect(payload.getMessage()).not.toBeDefined()
   })

   test('get undefined data if data object is not defined', () => {
      const payload = new FromBackendPayload(null)
      expect(payload.getData()).not.toBeDefined()
   })

   test('get data from payload', () => {
      const data = {nickname: 'Greg'}
      const payload = new FromBackendPayload(data)
      expect(payload.getData()).toEqual(data)
   })

   test('validation is not returning an error if not defined', () => {
      const data = {nickname: 'Greg'}
      const payload = new FromBackendPayload(data)
      expect(payload.validate()).toEqual([])
   })

   test('validation marks invalid payload', () => {
      class SomePayload extends FromBackendPayload {
         constructor(data: any) {
            super(data)
            super.setValidationRules({
               data: Joi.object({
                  nickname: Joi.number().required()
               }).optional(),
               message: Joi.string().optional()
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

})