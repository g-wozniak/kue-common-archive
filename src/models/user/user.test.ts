import {UserModel} from './model'
import {getDummyCognitoSubId, getDummyUserActivityId, getDummyUserId} from '@helpers/dummy'
import {common_UserAccountStatus} from '@properties/user_account_status'
import {common_UserAccountActivities} from '@properties/user_account_activities'

describe('→ UserModel', () => {

   const dummyUserItem = {
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

   const anotherUserItem = {
      _id: getDummyUserId('1010'),
      _subId: getDummyCognitoSubId('ffaa'),
      nickname: 'greg111',
      givenName: 'John',
      familyName: 'Doe',
      activities: [
         {
            _id: getDummyUserActivityId('3030'),
            description: common_UserAccountActivities.AccountCreated,
            dateTime: '2022-05-16T19:35:34.644Z',
            ip: '127.2.1.1'
         }
      ],
      status: common_UserAccountStatus.Blocked
   }

   const user = new UserModel(dummyUserItem)

   test('→ model returns JSON payload', () => {
      expect(user.toJSON()).toEqual(dummyUserItem)
   })

   test('→ get `id`', () => {
      expect(user.getId()).toEqual(dummyUserItem._id)
   })

   test('→ get `subId`', () => {
      expect(user.getSubId()).toEqual(dummyUserItem._subId)
   })

   test('→ get nickname', () => {
      expect(user.getNickname()).toEqual(dummyUserItem.nickname)
   })

   test('→ get given name', () => {
      expect(user.getGivenName()).toEqual(dummyUserItem.givenName)
   })

   test('→ get family name', () => {
      expect(user.getFamilyName()).toEqual(dummyUserItem.familyName)
   })

   test('→ get status', () => {
      expect(user.getStatus()).toEqual(dummyUserItem.status)
   })

   test('→ get activities', () => {
      expect(user.getActivities()).toEqual(dummyUserItem.activities)
   })

   test('→ toInsert returns dataset corresponding to UserItemInsert interface', () => {
      expect(user.toInsert()).toEqual({
         _subId: dummyUserItem._subId,
         nickname: dummyUserItem.nickname,
         givenName: dummyUserItem.givenName,
         familyName: dummyUserItem.familyName,
         activities: [
            {
               description: dummyUserItem.activities[0].description,
               dateTime: dummyUserItem.activities[0].dateTime,
               ip: dummyUserItem.activities[0].ip
            }
         ],
         status: common_UserAccountStatus.Active
      })
   })

})