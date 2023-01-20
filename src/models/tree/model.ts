import {TreeItem} from './schema'
import {common_RevisionID} from '@properties/revision'
import {TreeRevisionDummyModel} from '@models/tree/model_revision'
import AnyModel from '@models/model'

type RevisionIDs = common_RevisionID[]

function resolve(revisions: RevisionIDs): TreeItem {
   const tree: TreeItem = []
   for (let i = 0; i < revisions.length; i++) {
      const revision = new TreeRevisionDummyModel({revision: revisions[i]})
      tree.push(revision.toJSON())
   }
   return tree
}

export class TreeDummyModel extends AnyModel {
   constructor(revisionIds: RevisionIDs = []) {
      super(resolve(revisionIds))
   }

   public toJSON() {
      return super.toJSON() as TreeItem
   }
}