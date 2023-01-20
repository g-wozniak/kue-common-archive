import {common_RevisionID} from '@properties/revision'
import {CardNode} from '@models/card/schema'

export type TreeItem = TreeRevisionItem[]

export type TreeRevisionItem = TreeRevision<TreeNode, TreeEdge>

export interface TreeRevision<Node, Edge> {
   revision: common_RevisionID
   label: string
   comment?: string
   timestamp: number
   nodes: Node[]
   edges: Edge[]
}

export type TreeNode = CardNode

export interface TreeEdge {
   _id: string
   source: string
   target: string
}
