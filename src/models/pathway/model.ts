import assign from 'lodash/assign'

import {
   PathwayItem,
   PathwayItemInsert, PathwayItemSyncedUpdate,
   PathwayPopulatedItem,
   PathwayViewerItem
} from './schema'
import {common_PathwayThemes} from '@properties/pathway_themes'

import AnyModel from '@models/model'
import {TreeRevisionDummyModel} from '@models/tree/model_revision'
import {UserDummyModel} from '@models/user/model'
import {TemplateDummyModel, TemplateModel} from '@models/template/model'
import {getDummyPathwayId, getDummyTemplateId, getDummyUserId} from '@helpers/dummy'

class PathwayBaseModel extends AnyModel {

   constructor(data: PathwayPopulatedItem)
   constructor(data: PathwayItem)
   constructor(data: PathwayViewerItem)
   constructor(data: PathwayPopulatedItem | PathwayItem | PathwayViewerItem) {
      super(data)
   }

   public getId() {
      return (this.item as PathwayItem)._id
   }

   public getCustomName() {
      return (this.item as PathwayItem).customName
   }

   public getTheme() {
      return (this.item as PathwayItem).theme
   }

   public getVersion() {
      return (this.item as PathwayItem).version
   }

   public getProgress() {
      return (this.item as PathwayItem).progress
   }

   public getCardNotes() {
      return (this.item as PathwayItem).notes
   }

   public getNodes() {
      return (this.item as PathwayItem).nodes
   }

   public getEdges() {
      return (this.item as PathwayItem).edges
   }

   public getModified() {
      return (this.item as PathwayItem).modified
   }

   public getCreated() {
      return (this.item as PathwayItem).created
   }
}

/* Used before operating on the database */
export class PathwayModel extends PathwayBaseModel {
   constructor(data: PathwayItem) {
      super(data)
   }

   protected setValue(key: keyof PathwayItem, value: any) {
      super.setValue(key, value)
   }

   public getLearner() {
      return (this.item as PathwayItem)._learner
   }

   public getMentor() {
      return (this.item as PathwayItem)._mentor
   }

   public getTemplate() {
      return (this.item as PathwayItem)._template
   }

   public toInsert() {
      return super.toJSON() as PathwayItemInsert
   }

   public synchronise(template: TemplateModel) {
      this.setValue('version', template.getVersion().major)
      this.setValue('modified', new Date().toISOString())

      const published = template.getPublishedRevision()
      this.setValue('nodes', published!.nodes)
      this.setValue('edges', published!.edges)

      // TODO: remove notes for nodes that no longer exist
      // TODO: remove progress for nodes that no longer exist
   }

   public toSyncedUpdate(): PathwayItemSyncedUpdate {
      return {
         version: this.getVersion(),
         progress: this.getProgress(),
         notes: this.getCardNotes(),
         nodes: this.getNodes(),
         edges: this.getEdges(),
         modified: this.getModified()
      }
   }

   public toJSON() {
      return super.toJSON() as PathwayItem
   }
}

/* Used after the populated query results from pathway are obtained */
export class PathwayPopulatedModel extends PathwayBaseModel {
   constructor(data: PathwayPopulatedItem) {
      super(data)
   }

   public getLearner() {
      return (this.item as PathwayPopulatedItem)._learner
   }

   public getMentor() {
      return (this.item as PathwayPopulatedItem)._mentor
   }

   public getTemplate() {
      return (this.item as PathwayPopulatedItem)._template
   }

   public toJSON() {
      return super.toJSON() as PathwayPopulatedItem
   }
}

/* Used by Viewer to operate on the data delivered by PathwayFromBackendPayload as we do not return sensitive information from the backend */
export class PathwayViewerModel extends PathwayBaseModel {
   constructor(data: PathwayViewerItem) {
      super(data)
   }

   public getMentor() {
      return (this.item as PathwayViewerItem).mentor
   }

   public getLearner() {
      return (this.item as PathwayViewerItem).learner
   }

   public getTemplate() {
      return (this.item as PathwayViewerItem).template
   }

   public toJSON() {
      return super.toJSON() as PathwayViewerItem
   }
}

export class PathwayDummyModel extends PathwayModel {
   constructor(overwrite: Partial<PathwayItem> = {}) {
      const defaultItem: PathwayItem = {
         _id: getDummyPathwayId('1000'),
         _learner: getDummyUserId('1001'),
         _mentor: getDummyUserId('1000'),
         _template: getDummyTemplateId('1000'),
         customName: 'Become full-stack software engineer',
         theme: common_PathwayThemes.Vanilla,
         version: 1,
         progress: [],
         notes: [],
         nodes: new TreeRevisionDummyModel().getNodes(),
         edges: new TreeRevisionDummyModel().getEdges(),
         modified: '2022-05-16T21:36:33.233Z',
         created: '2022-05-15T19:35:34.644Z'
      }
      super(assign(defaultItem, overwrite))
   }
}

export class PathwayPopulatedDummyModel extends PathwayPopulatedModel {
   constructor(overwrite: Partial<PathwayPopulatedItem> = {}) {
      const dummyModel = new PathwayDummyModel()
      const defaultItem: PathwayPopulatedItem = {
         _id: dummyModel.getId(),
         _learner: new UserDummyModel({_id: getDummyUserId('1001')}).toJSON(),
         _mentor: new UserDummyModel().toJSON(),
         _template: new TemplateDummyModel({published: true}).toJSON(),
         customName: dummyModel.getCustomName(),
         theme: dummyModel.getTheme(),
         version: dummyModel.getVersion(),
         progress: dummyModel.getProgress(),
         notes: dummyModel.getCardNotes(),
         nodes: dummyModel.getNodes(),
         edges: dummyModel.getEdges(),
         modified: dummyModel.getModified(),
         created: dummyModel.getCreated()
      }
      super(assign(defaultItem, overwrite))
   }
}