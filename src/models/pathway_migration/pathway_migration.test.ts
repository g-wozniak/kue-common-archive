import omit from 'lodash/omit'

import {PathwayMigrationDummyModel, PathwayMigrationModel} from './model'
import {PathwayMigrationItem} from './schema'
import {PathwayDummyModel} from '@models/pathway/model'
import {TemplateDummyModel} from '@models/template/model'

describe('→ PathwayMigrationModel', () => {

   describe('→ direct data input', () => {
      // TODO: can be improved to a manual payload since the dummy model inherits from sync model, it's not fully logical to test using it
      const pathway: PathwayMigrationItem = new PathwayMigrationDummyModel().toJSON()

      const model = new PathwayMigrationModel(pathway)

      test('→ model returns JSON payload', () => {
         expect(model.toJSON()).toEqual(pathway)
      })

      test('→ get `id`', () => {
         expect(model.getId()).toEqual(pathway._id)
      })

      test('→ get `pathway`', () => {
         expect(model.getPathway()).toEqual(pathway._pathway)
      })

      test('→ get `version`', () => {
         expect(model.getVersion()).toEqual(pathway.version)
      })

      test('→ get `progress`', () => {
         expect(model.getProgress()).toEqual(pathway.progress)
      })

      test('→ get card notes', () => {
         expect(model.getCardNotes()).toEqual(pathway.notes)
      })

      test('→ get pathway nodes', () => {
         expect(model.getNodes()).toEqual(pathway.nodes)
      })

      test('→ get pathway edges', () => {
         expect(model.getEdges()).toEqual(pathway.edges)
      })

      test('→ get migration list item', () => {
         expect(model.toMigrationListItem()).toEqual({
            version: pathway.version,
            created: pathway.created
         })
      })

      test('→ get `created`', () => {
         expect(model.getCreated()).toEqual(pathway.created)
      })

      test('→ get the insert to the database payload', () => {
         expect(model.toInsert()).toEqual(omit(pathway, '_id'))
      })
   })

   describe('→ input via pathway model', () => {

      jest.spyOn(global.Date.prototype, 'toISOString').mockReturnValue('01/01/2021 00:00:00')

      afterAll(() => {
         jest.clearAllMocks()
      })

      const pathway = new PathwayDummyModel({
         nodes: []
      })

      const model = new PathwayMigrationModel(pathway)

      test('→ get `id`', () => {
         expect(model.getId()).toEqual('auto')
      })

      test('→ get `pathway`', () => {
         expect(model.getPathway()).toEqual(pathway.getId())
      })

      test('→ get `version`', () => {
         expect(model.getVersion()).toEqual(pathway.getVersion())
      })

      test('→ get `progress`', () => {
         expect(model.getProgress()).toEqual(pathway.getProgress())
      })

      test('→ get card notes', () => {
         expect(model.getCardNotes()).toEqual(pathway.getCardNotes())
      })

      test('→ get pathway nodes', () => {
         expect(model.getNodes()).toEqual(pathway.getNodes())
      })

      test('→ get pathway edges', () => {
         expect(model.getEdges()).toEqual(pathway.getEdges())
      })

      test('→ get `created`', () => {
         expect(model.getCreated()).toEqual('01/01/2021 00:00:00')
      })

      test('→ get the insert to the database payload', () => {
         expect(model.toInsert()).toEqual(omit(model.toJSON(), '_id'))
      })

      test('→ get migration list item', () => {
         expect(model.toMigrationListItem()).toEqual({
            version: model.getVersion(),
            created: '01/01/2021 00:00:00'
         })
      })

      test('→ get the rollback payload', () => {
         expect(model.toRollback()).toEqual({
            version: model.getVersion(),
            progress: model.getProgress(),
            notes: model.getCardNotes(),
            nodes: model.getNodes(),
            edges: model.getEdges(),
            modified: '01/01/2021 00:00:00'
         })
      })

      test('→ model is immutable', function () {
         const nodes = model.getNodes()
         const template = new TemplateDummyModel({published: true, revisions: 2})
         pathway.synchronise(template)
         expect(model.getNodes()).toEqual(nodes)
      });

   })


})