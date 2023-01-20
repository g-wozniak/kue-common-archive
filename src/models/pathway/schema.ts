import {TreeNode, TreeEdge} from '@models/tree/schema'
import {UserItem} from '@models/user/schema'
import {TemplateItem} from '@models/template/schema'
import {common_UserAccountStatus} from '@properties/user_account_status'

/**
 * PathwayItem
 * @description Structure of the learning pathway
 */
export interface BasePathwayItem {
   customName: string
   theme: string
   version: number
   progress: string[]
   notes: PathwayCardNoteItem[]
   nodes: TreeNode[]
   edges: TreeEdge[]
   modified: string
   created: string
}

export interface PathwayItem extends BasePathwayItem {
   _id: string
   _learner: string
   _mentor: string
   _template: string
}

export type PathwayItemInsert = PathwayItem

export type PathwayItemSyncedUpdate = {
   version: number
   progress: string[]
   notes: PathwayCardNoteItem[]
   nodes: TreeNode[]
   edges: TreeEdge[]
   modified: string
}

/**
 * PathwayNote
 * @description User note to a card
 */
export interface PathwayCardNoteItem {
   cardId: string
   note: string
}

export type PathwayCardNoteItemInsert = PathwayCardNoteItem

// ---

/* Object that gets populated directly from the database. It needs to go through mapping in the populated model and then reach the payload */
export interface PathwayPopulatedItem extends BasePathwayItem {
   _id: string
   _learner: UserItem
   _mentor: UserItem
   _template: TemplateItem
}

/* Object that arrives to the Viewer or any front-end with omitted sensitive fields */
export type PathwayViewerItem = BasePathwayItem & {
   _id: string
   learner: PathwayViewerLearnerFragment
   mentor: PathwayViewerMentorFragment
   template: PathwayViewerTemplateFragment
}

export type PathwayViewerTemplateFragment = {
   _id: string
   name: string
   slug: string
   version: number
   created: string
}

export type PathwayViewerMentorFragment = {
   _id: string
   nickname: string
   status: common_UserAccountStatus
}

export type PathwayViewerLearnerFragment = {
   _id: string
}