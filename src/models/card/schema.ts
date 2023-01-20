import {common_CardTypes} from '@properties/card_types'
import {common_Difficulties} from '@properties/difficulties'
import {common_CardLayouts} from '@properties/card_layouts'
import {CardWidgets} from '@intf/Blocks'

/**
 * CardItem
 * @description Model of a single card that a mentor can build in the template
 */

export interface BaseCardItem {
   cardType: common_CardTypes
   customCardType?: string
   label: string
   description: string
   time: number
   cost: number
   difficulty: common_Difficulties
   layout: common_CardLayouts
   widgets: CardWidgets
   updated: string
   created: string
}

/**
 * CardItem
 * @description Corresponds to the item from `cards` collection
 */
export interface CardItem extends BaseCardItem {
   _id: string // this is shared id
   _mentor: string
}

/**
 * CardNode
 * @description Corresponds to the card as node tree element.
 * @remarks Go to tree/schema.ts, note that TreeNode = CardNode!
 */
export interface CardNode extends BaseCardItem {
   _id: string // it is either newly generated id if the card isn't shared, or it's a shared id value
   position: {
      x: number
      y: number
   }
}

export type CardItemInsert = CardItem

export type CardItemUpdate = BaseCardItem
