import {UserDummyModel} from './model'
import {getDummyCognitoSubId, getDummyUserActivityId, getDummyUserId} from '@helpers/dummy'
import {common_UserAccountStatus} from '@properties/user_account_status'
import {common_UserAccountActivities} from '@properties/user_account_activities'
import {UserItem} from '@models/user/schema'

describe('→ UserDummyModel', () => {

   const oneItem = new UserDummyModel()

   const defaultItem: UserItem = {
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

   test('→ dummy model returns dummy data by default', () => {
      expect(oneItem.toJSON()).toEqual(defaultItem)
   })

   test('→ possibility to partially overwrite user data', () => {
      const oneItem = new UserDummyModel().toJSON()
      const anotherItem = {
         ...oneItem,
         nickname: 'adam777',
         givenName: 'John'
      }
      expect(new UserDummyModel(anotherItem).toJSON()).toEqual(anotherItem)
   })

})