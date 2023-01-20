import assign from 'lodash/assign'
import omit from 'lodash/omit'
import cloneDeep from 'lodash/merge'
import AnyModel from '@models/model'
import {common_UserAccountActivities} from '@properties/user_account_activities'
import {common_UserAccountStatus} from '@properties/user_account_status'
import {getDummyCognitoSubId, getDummyUserActivityId, getDummyUserId} from '@helpers/dummy'
import {UserActivityItem, UserItem, UserItemInsert} from './schema'

export class UserModel extends AnyModel {

   constructor(data: UserItem) {
      super(data)
   }

   public getId() {
      return (this.item as UserItem)._id
   }

   public getSubId() {
      return (this.item as UserItem)._subId
   }

   public getNickname() {
      return (this.item as UserItem).nickname
   }

   public getGivenName() {
      return (this.item as UserItem).givenName
   }

   public getFamilyName() {
      return (this.item as UserItem).familyName
   }

   public getActivities() {
      return (this.item as UserItem).activities
   }

   public getStatus() {
      return (this.item as UserItem).status
   }

   public toInsert(): UserItemInsert {
      const item: UserItemInsert = cloneDeep(omit((this.item as UserItem), ['_id']))
      item.activities = (this.item as UserItem).activities.map((a: UserActivityItem) => omit(a, '_id'))
      return item
   }

   public toJSON() {
      return super.toJSON() as UserItem
   }
}

export class UserDummyModel extends UserModel {
   constructor(overwrite: Partial<UserItem> = {}) {
      const defaultUserItem: UserItem = {
         _id: getDummyUserId('1000'),
         _subId: getDummyCognitoSubId('d01e'),
         nickname: 'greg737',
         givenName: 'Adam',
         familyName: 'Smith',
         activities: [
            {
               _id: getDummyUserActivityId('1000'),
               description: common_UserAccountActivities.AccountCreated,
               dateTime: '2022-05-16T19:35:34.644Z',
               ip: '127.0.0.1'
            }
         ],
         status: common_UserAccountStatus.Active
      }
      super(assign(defaultUserItem, overwrite))
   }
}