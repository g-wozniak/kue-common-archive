import assign from 'lodash/assign'
import {TemplateItem, TemplateItemInsert, TemplateItemVersion} from './schema'
import {TreeDummyModel} from '@models/tree/model'
import AnyModel from '@models/model'
import {getDummyRevisionId, getDummyTemplateId, getDummyUserId} from '@helpers/dummy'
import {common_RevisionID} from '@properties/revision'

export class TemplateModel extends AnyModel {

   constructor(data: TemplateItem) {
      super(data)
   }

   public getId() {
      return (this.item as TemplateItem)._id
   }

   public getName() {
      return (this.item as TemplateItem).name
   }

   public getSlug() {
      return (this.item as TemplateItem).slug
   }

   public getHeadline() {
      return (this.item as TemplateItem).headline
   }

   public getDescription() {
      return (this.item as TemplateItem).description
   }

   public getTree() {
      return (this.item as TemplateItem).tree
   }

   public getMentor() {
      return (this.item as TemplateItem)._mentor
   }

   public getVersion() {
      return (this.item as TemplateItem).version
   }

   public getCreated() {
      return (this.item as TemplateItem).created
   }

   public getTreeRevision(revision: common_RevisionID) {
      return (this.item as TemplateItem).tree.find(rev => rev.revision === revision)
   }

   public getPublishedRevision() {
      return (this.item as TemplateItem).tree.find(rev => rev.revision === this.getVersion().revision)
   }

   public setVersion(version: TemplateItemVersion) {
      this.setValue('version', version)
   }

   public setRevisionDescription(revision: common_RevisionID, {label, comment}: {label?: string, comment?: string}) {
      const item = this.item as TemplateItem
      const index = item.tree.findIndex(r => r.revision === revision)
      if (index !== -1) {
         if (label) {
            (this.item as TemplateItem).tree[index].label = label
         }
         if (comment) {
            (this.item as TemplateItem).tree[index].comment = comment
         }
      }
   }

   public deleteRevisionByIndex(index: number) {
      const tree = this.getTree()
      if (index > -1 && tree.length > index) {
         (this.item as TemplateItem).tree.splice(index, 1)
      }
   }

   public toInsert() {
      return super.toJSON() as TemplateItemInsert
   }

   public toJSON() {
      return super.toJSON() as TemplateItem
   }
}

export type TemplateDummyModelArgs = {
   published?: boolean
   revisions?: string[] | number
}

export type TemplateDummyModelWithGivenRevisions = {
   published?: boolean
   revisions?: string[]
}

export type TemplateDummyModelWithRandomRevisions = {
   published?: boolean
   revisions?: number
}

export class TemplateDummyModel extends TemplateModel {
   constructor({published, revisions}: TemplateDummyModelWithGivenRevisions, overwrite?: Partial<TemplateItem>)
   constructor({published, revisions}: TemplateDummyModelWithRandomRevisions, overwrite?: Partial<TemplateItem>)
   constructor({published, revisions}: TemplateDummyModelArgs = {}, overwrite: Partial<TemplateItem> = {}) {
      let revisionIDs: string[] = []
      if (Array.isArray(revisions)) {
         revisionIDs = revisions
      } else {
         if (!revisions) {
            revisions = 0
         }
         if (published && revisions === 0) {
            revisions = 1
         }
         for (let i = 0; i < revisions; i++) {
            revisionIDs.push(getDummyRevisionId('100' + i))
         }
      }

      const defaultItem: TemplateItem = {
         _id: getDummyTemplateId('1000'),
         _mentor: getDummyUserId('1000'),
         name: 'Become full-stack software engineer',
         slug: 'full-stack-dev-1',
         headline: 'Your consistent and proven way to changing the industry to IT development',
         description: 'Sharing more than a decade of experience in programming and software development coaching, I will lead you through the process of learning how to become a software developer using a modern stack. This will enable you to write and build web applications using NodeJS and ReactJS, understand the concept of IT cloud and serverless based on Amazon Web Services, learn how to test your software, practice and apply the programming principles, also understand basics of Agile methodologies and ways of working in teams.',
         version: !!published
            ? {
               major: 1,
               comment: 'initial release with the first pieces of blocks',
               revision: revisionIDs[0],
               published: '2022-05-16T19:35:34.644Z',
            }
            : {
               major: 0,
               comment: '',
               revision: null,
               published: null
            },
         tree: new TreeDummyModel(revisionIDs).toJSON(),
         created: '2022-05-16T19:35:34.644Z'
      }
      super(assign(defaultItem, overwrite))
   }
}