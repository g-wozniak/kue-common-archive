import {DummyBFFRoute} from './route'
import AnyPayload from './payload'
import {common_RequestMethods} from '../properties/request_methods'
import {getDummyAxiosResponse, getDummyBFFResponse} from '../helpers/dummy'

describe('→ AnyRoute', () => {

   const route = new DummyBFFRoute()

   test('→ get route name', () => {
      expect(route.getName()).toEqual('DummyTestRoute')
   })

   test('→ get route description', () => {
      expect(route.getDescription()).toEqual('dummy test route')
   })

   test('→ get route method', () => {
      expect(route.getMethod()).toEqual(common_RequestMethods.GET)
   })

   test('→ get route uri', () => {
      expect(route.getUri()).toEqual('/api/test')
   })

   test('→ get authentication', () => {
      expect(route.hasAuth()).toEqual(false)
   })

   describe('→ dummy bff route ', () => {

      test('→ allows for overwriting the route parameters', () => {
         const data = {
            name: 'AnotherRouteName',
            description: 'some description',
            method: common_RequestMethods.POST,
            uri: '/api',
            auth: true
         }
         const aRoute = new DummyBFFRoute(data)
         expect(aRoute.getName()).toEqual(data.name)
         expect(aRoute.getDescription()).toEqual(data.description)
         expect(aRoute.getMethod()).toEqual(data.method)
         expect(aRoute.getUri()).toEqual(data.uri)
         expect(aRoute.hasAuth()).toEqual(data.auth)
      })

      test('→ conversion to BFFRequest', () => {
         expect(route.toBFFRequest({
            payload: new AnyPayload({
               name: 'Greg'
            }),
            headers: {'x-header-dummy': '123'}
         })).toEqual({
            name: 'DummyTestRoute',
            description: 'dummy test route',
            method: 'get',
            uri: '/api/test',
            auth: false,
            validation: [],
            payload: { name: 'Greg' },
            headers: { 'x-header-dummy': '123' }
         })
      })
   })

   test('→ route resolution with dummy backend data', () => {
      expect(route.resolve(getDummyAxiosResponse(200, {}))).toEqual(getDummyBFFResponse(200, {}))
   })
})