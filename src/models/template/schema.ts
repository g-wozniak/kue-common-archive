import {common_WantToBeRevisionID} from '@properties/revision'
import {TreeItem} from '@models/tree/schema'

/**
 * TemplateItem
 * @description Structure full pathway template obtainable in builder pull template. Must correspond with the DB schema
 */
export interface BaseTemplateItem {
   name: string
   slug: string
   headline: string
   description: string
   tree: TreeItem
}

/**
 * TemplateItemVersion
 * @description Separated interface describing template version
 */
export interface TemplateItemVersion {
   major: number
   comment: string
   revision: common_WantToBeRevisionID
   published: string | null
}

export interface TemplateItem extends BaseTemplateItem {
   _id: string
   _mentor: string
   version: TemplateItemVersion
   created: string
}

export type TemplateItemInsert = TemplateItem

export type TemplateItemUpdate = BaseTemplateItem
