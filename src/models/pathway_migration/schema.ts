import {TreeEdge, TreeNode} from '@models/tree/schema'
import {PathwayCardNoteItem} from '@models/pathway/schema'

/**
 * PathwayMigration
 * @description Pathway migration over to the up-to-date template backup
 */

export interface BasePathwayMigrationItem {
   _pathway: string
   version: number
   progress: string[]
   notes: PathwayCardNoteItem[]
   nodes: TreeNode[]
   edges: TreeEdge[]
   created: string
}

export interface PathwayMigrationItem extends BasePathwayMigrationItem {
   _id: string
}

export type PathwayMigrationItemInsert = BasePathwayMigrationItem

export type PathwayMigrationListItem = {
   version: number
   created: string
}
