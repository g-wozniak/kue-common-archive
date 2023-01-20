import {TemplateDummyModel} from './model'
import {getDummyTemplateId, getDummyUserId} from '@helpers/dummy'
import {TemplateItem} from './schema'
import {TreeDummyModel} from '@models/tree/model'

describe('→ TemplateDummyModel', () => {

   const unpublishedPayload: TemplateItem = {
      _id: getDummyTemplateId('1000'),
      _mentor: getDummyUserId('1000'),
      name: 'Become full-stack software engineer',
      slug: 'full-stack-dev-1',
      headline: 'Your consistent and proven way to changing the industry to IT development',
      description: 'Sharing more than a decade of experience in programming and software development coaching, I will lead you through the process of learning how to become a software developer using a modern stack. This will enable you to write and build web applications using NodeJS and ReactJS, understand the concept of IT cloud and serverless based on Amazon Web Services, learn how to test your software, practice and apply the programming principles, also understand basics of Agile methodologies and ways of working in teams.',
      version: {
         major: 0,
         comment: '',
         revision: null,
         published: null
      },
      tree: new TreeDummyModel([]).toJSON(),
      created: '2022-05-16T19:35:34.644Z'
   }

   test('→ dummy model returns dummy, unpublished template by default', () => {
      const item = new TemplateDummyModel({})
      expect(item.toJSON()).toEqual(unpublishedPayload)
   })

   test('→ possibility to partially overwrite template data', () => {
      const payload = new TemplateDummyModel({}).toJSON()
      const anotherPayload = {
         ...payload,
         slug: 'this-is-happy-slug',
         headline: 'oh my! this is my new headline'
      }
      expect(new TemplateDummyModel({}, anotherPayload).toJSON()).toEqual(anotherPayload)
   })

   test('→ dummy model returns published template with a corresponding revision', () => {
      const item = new TemplateDummyModel({published: true, revisions: ['000-bbb']})
      expect(item.getVersion()).toEqual({
         major: 1,
         comment: 'initial release with the first pieces of blocks',
         revision: '000-bbb',
         published: '2022-05-16T19:35:34.644Z'
      })
      expect(item.getTree()[0].revision).toEqual('000-bbb')
   })

   test('→ dummy model returns published template with revisions', () => {
      const item = new TemplateDummyModel({published: true, revisions: 5})
      expect(item.getTree()).toHaveLength(5)
   })

   test('→ dummy model returns unpublished template with revisions', () => {
      const item = new TemplateDummyModel({published: false, revisions: 3})
      expect(item.getVersion()).toEqual({
         major: 0,
         comment: '',
         revision: null,
         published: null
      })
      expect(item.getTree()).toHaveLength(3)
   })

})