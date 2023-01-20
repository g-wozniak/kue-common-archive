import {common_UserAccountStatus} from '@properties/user_account_status'
import {common_UserAccountActivities} from '@properties/user_account_activities'

export interface BaseUserItem {
   _subId: string
   nickname: string
   givenName?: string
   familyName?: string
   status: common_UserAccountStatus
}

export interface UserItem extends BaseUserItem {
   _id: string
   activities: UserActivityItem[]
}

export interface UserItemInsert extends BaseUserItem {
   activities: UserActivityItemInsert[]
}

export type UserItemUpdate = Partial<BaseUserItem>

export interface BaseUserActivityItem {
   description: common_UserAccountActivities
   scope?: string
   dateTime: string
   ip: string
}

export interface UserActivityItem extends BaseUserActivityItem {
   _id: string
}

export type UserActivityItemInsert = BaseUserActivityItem

