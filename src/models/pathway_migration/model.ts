import assign from 'lodash/assign'
import cloneDeep from 'lodash/merge'
import omit from 'lodash/omit'

import {PathwayMigrationItem, PathwayMigrationItemInsert, PathwayMigrationListItem} from './schema'
import AnyModel from '@models/model'
import {getDummyPathwayId, getDummyPathwaySyncId} from '@helpers/dummy'
import {PathwayDummyModel, PathwayModel} from '@models/pathway/model'
import {PathwayCardNoteDummyModel} from '@models/pathway/model_note'
import {PathwayItemSyncedUpdate} from '@models/pathway/schema'

const dummyPathway = new PathwayDummyModel()

export class PathwayMigrationModel extends AnyModel {

   constructor(pathway: PathwayModel)
   constructor(data: PathwayMigrationItem)
   constructor(input: PathwayMigrationItem | PathwayModel) {
      super(input instanceof PathwayModel ? PathwayMigrationModel.mapping(input) : input)
   }

   private static mapping(pathway: PathwayModel): PathwayMigrationItem {
      return {
         _id: 'auto',
         _pathway: pathway.getId(),
         version: pathway.getVersion(),
         progress: pathway.getProgress(),
         notes: pathway.getCardNotes(),
         nodes: pathway.getNodes(),
         edges: pathway.getEdges(),
         created: new Date().toISOString()
      }
   }

   public getId() {
      return (this.item as PathwayMigrationItem)._id
   }

   public getPathway() {
      return (this.item as PathwayMigrationItem)._pathway
   }

   public getVersion() {
      return (this.item as PathwayMigrationItem).version
   }

   public getProgress() {
      return (this.item as PathwayMigrationItem).progress
   }

   public getCardNotes() {
      return (this.item as PathwayMigrationItem).notes
   }

   public getNodes() {
      return (this.item as PathwayMigrationItem).nodes
   }

   public getEdges() {
      return (this.item as PathwayMigrationItem).edges
   }

   public getCreated() {
      return (this.item as PathwayMigrationItem).created
   }

   public toRollback(): PathwayItemSyncedUpdate {
      return {
         version: this.getVersion(),
         progress: this.getProgress(),
         notes: this.getCardNotes(),
         nodes: this.getNodes(),
         edges: this.getEdges(),
         modified: new Date().toISOString()
      }
   }

   public toMigrationListItem(): PathwayMigrationListItem {
      return {
         version: this.getVersion(),
         created: this.getCreated()
      }
   }

   public toInsert() {
      const item: PathwayMigrationItemInsert = cloneDeep(omit((this.item as PathwayMigrationItem), ['_id']))
      return item
   }

   public toJSON() {
      return super.toJSON() as PathwayMigrationItem
   }
}

export class PathwayMigrationDummyModel extends PathwayMigrationModel {
   constructor(overwrite: Partial<PathwayMigrationItem> = {}) {
      const defaultItem: PathwayMigrationItem = {
         _id: getDummyPathwaySyncId('1000'),
         _pathway: getDummyPathwayId('1000'),
         version: dummyPathway.getVersion(),
         progress: [
            dummyPathway.getNodes()[0]._id,
            dummyPathway.getNodes()[1]._id,
            dummyPathway.getNodes()[2]._id
         ],
         notes: [
            new PathwayCardNoteDummyModel().toJSON(),
            new PathwayCardNoteDummyModel({cardId: dummyPathway.getNodes()[1]._id, note: 'This is another great note'}).toJSON()
         ],
         nodes: dummyPathway.getNodes(),
         edges: dummyPathway.getEdges(),
         created: '2022-05-16T19:35:34.644Z'
      }
      super(assign(defaultItem, overwrite))
   }
}