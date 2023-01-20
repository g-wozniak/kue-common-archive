import {TemplateDummyModel, TemplateModel} from './model'
import {TemplateItem, TemplateItemVersion} from './schema'

import {getDummyTemplateId, getDummyUserId} from '@helpers/dummy'
import {TreeDummyModel} from '@models/tree/model'

describe('→ TemplateModel', () => {

   beforeAll(() => {
      jest.spyOn(global.Date.prototype, 'toISOString').mockReturnValue('2022-05-16T19:35:34.644Z')
   })

   afterAll(() => {
      jest.resetAllMocks()
   })

   const item: TemplateItem = {
      _id: getDummyTemplateId('1000'),
      _mentor: getDummyUserId('1000'),
      name: 'Become full-stack software engineer',
      slug: 'full-stack-dev-1',
      headline: 'Your consistent and proven way to changing the industry to IT development',
      description: 'Sharing more than a decade of experience in programming and software development coaching, I will lead you through the process of learning how to become a software developer using a modern stack. This will enable you to write and build web applications using NodeJS and ReactJS, understand the concept of IT cloud and serverless based on Amazon Web Services, learn how to test your software, practice and apply the programming principles, also understand basics of Agile methodologies and ways of working in teams.',
      version: {
         major: 1,
         comment: 'initial release with the first pieces of blocks',
         revision: 'aaa-fff', // 'aaa-fff'
         published: '2022-05-16T19:35:34.644Z'
      },
      tree: new TreeDummyModel(['aaa-fff']).toJSON(),
      created: '2022-05-16T19:35:34.644Z'
   }
   const template = new TemplateModel(item)

   test('→ model returns JSON payload', () => {
      expect(template.toJSON()).toEqual(item)
   })

   test('→ get `id`', () => {
      expect(template.getId()).toEqual(item._id)
   })

   test('→ get `name`', () => {
      expect(template.getName()).toEqual(item.name)
   })

   test('→ get `slug`', () => {
      expect(template.getSlug()).toEqual(item.slug)
   })

   test('→ get headline', () => {
      expect(template.getHeadline()).toEqual(item.headline)
   })

   test('→ get description', () => {
      expect(template.getDescription()).toEqual(item.description)
   })

   test('→ get pathway tree', () => {
      expect(template.getTree()).toEqual(item.tree)
   })

   test('→ get template author = mentor', () => {
      expect(template.getMentor()).toEqual(item._mentor)
   })

   test('→ get pathway template release version', () => {
      expect(template.getVersion()).toEqual(item.version)
   })

   test('→ get `created`', () => {
      expect(template.getCreated()).toEqual(item.created)
   })

   test('→ get the insert to the database payload', () => {
      expect(template.toInsert()).toEqual(item)
   })

   test('→  get revision', () => {
      const payload = new TemplateDummyModel({published: false, revisions: ['010-dd3', '929-dd9']}).toJSON()
      const template = new TemplateModel(payload)
      const revision = template.getTreeRevision('010-dd3')
      expect(revision).toBeDefined()
      expect(revision!.revision).toEqual('010-dd3')
   })

   test('→ get published revision', () => {
      const published = new TemplateDummyModel({published: true, revisions: ['aaa-fff', 'bbb-ddd']})
      expect(published.getPublishedRevision()).toEqual(template.getTree()[0])
   })

   test('→ set version', () => {
      const unpublishedPayload = new TemplateDummyModel({published: false, revisions: 2}).toJSON()
      const unpublished = new TemplateModel(unpublishedPayload)
      const newVersion: TemplateItemVersion = {
         major: unpublished.getVersion().major++,
         comment: 'this is some comment',
         published: '01-01-2020',
         revision: unpublishedPayload.tree[0].revision
      }
      unpublished.setVersion(newVersion)
      expect(unpublished.getVersion()).toEqual(newVersion)
   })

   test('→ set revision description, only label', () => {
      const comment = 'This is my first amazing version'
      const payload = new TemplateDummyModel({published: false, revisions: ['010-dd3', '929-dd9']}).toJSON()
      const template = new TemplateModel(payload)
      template.setRevisionDescription('010-dd3', {label: 'annamaria'})
      expect(template.getTreeRevision('010-dd3')!.label).toEqual('annamaria')
   })

   test('→ set revision description, only comment', () => {
      const comment = 'This is my first amazing version'
      const payload = new TemplateDummyModel({published: false, revisions: ['010-dd3', '929-dd9']}).toJSON()
      const template = new TemplateModel(payload)
      template.setRevisionDescription('010-dd3', {comment})
      expect(template.getTreeRevision('010-dd3')!.comment).toEqual(comment)
   })

   test('→ set revision description, both values', () => {
      const label = 'Released version'
      const comment = 'This is my first amazing version'
      const payload = new TemplateDummyModel({published: false, revisions: ['010-dd3', '929-dd9']}).toJSON()
      const template = new TemplateModel(payload)
      template.setRevisionDescription('010-dd3', {label, comment})
      expect(template.getTreeRevision('010-dd3')!.label).toEqual(label)
      expect(template.getTreeRevision('010-dd3')!.comment).toEqual(comment)
   })

   test('→ delete revision by index', () => {
      const publishedPayload = new TemplateDummyModel({published: true, revisions: 2}).toJSON()
      const published = new TemplateModel(publishedPayload)
      const treeBeforeDeletion = [...published.getTree()]
      expect(treeBeforeDeletion).toHaveLength(2)
      published.deleteRevisionByIndex(0)
      expect(published.getTree()).toHaveLength(1)
      expect(published.getTree()[0].revision).not.toEqual(treeBeforeDeletion[0].revision)
   })
})