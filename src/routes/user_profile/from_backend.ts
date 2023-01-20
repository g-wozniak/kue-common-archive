import {BFFResponse} from '@intf/Routes'

import FromBackendPayload from '@routes/from_backend'
import {common_UserAccountStatus} from '@properties/user_account_status'
import {TemplateItemVersion} from '@models/template/schema'
import {UserModel} from '@models/user/model'
import {TemplateModel} from '@models/template/model'
import {PathwayPopulatedModel} from '@models/pathway/model'

export type TUserProfileTemplateFragment = {
   _id: string
   name: string
   slug: string
   version: TemplateItemVersion
   headline: string
   description: string
   revisions: TUserProfileTreeRevisionFragment[]
   created: string
}

export type TUserProfileTreeRevisionFragment = {
   revision: string
   label: string
   comment?: string
   timestamp: number
   nodes: number // !
}

export type TUserProfilePathwayFragment = {
   _id: string
   mentor: {
      _id: string
      nickname: string
      status: common_UserAccountStatus
   }
   template: {
      _id: string
      name: string
      slug: string
      version: number
      created: string
   }
   customName: string
   version: number
   progress: any[] // todo
   nodes: number
   modified: string
   created: string
}

export type TUserProfileFromBackendPayload = {
   username: string
   nickname: string
   givenName: string | undefined
   familyName: string | undefined
   pathways: TUserProfilePathwayFragment[],
   templates: TUserProfileTemplateFragment[]
   status: common_UserAccountStatus
}

class UserProfileFromBackendPayload extends FromBackendPayload {

   // TODO: private rules: PayloadValidation<TUserProfileFromBackendPayload> = {}

   constructor(user: TUserProfileFromBackendPayload)
   constructor(user: UserModel, templates: TemplateModel[], pathways: PathwayPopulatedModel[])
   constructor(user: UserModel, templates: TemplateModel[], pathways: PathwayPopulatedModel[], username: string)
   constructor(user: TUserProfileFromBackendPayload | UserModel, templates: TemplateModel[] = [], pathways: PathwayPopulatedModel[] = [], username?: string) {
      if (user instanceof UserModel) {
         if (!username) {
            throw new Error('Username is required as it is coming from Cognito, not from UserModel')
         }
         super(UserProfileFromBackendPayload.mapping(username, user, templates, pathways))
      } else {
         super(user)
      }
      // super.setValidationRules(this.rules)
   }

   protected static mapping(username: string, user: UserModel, templates: TemplateModel[], pathways: PathwayPopulatedModel[]): TUserProfileFromBackendPayload {
      return {
         username,
         nickname: user.getNickname(),
         givenName: user.getGivenName(),
         familyName: user.getFamilyName(),
         pathways: pathways.map(ppdm => ({
            _id: ppdm.getId(),
            mentor: {
               _id: ppdm.getMentor()._id,
               nickname: ppdm.getMentor().nickname,
               status: ppdm.getMentor().status
            },
            template: {
               _id: ppdm.getTemplate()._id,
               name: ppdm.getTemplate().name,
               slug: ppdm.getTemplate().slug,
               version: ppdm.getTemplate().version.major,
               created: ppdm.getTemplate().created
            },
            customName: ppdm.getCustomName(),
            version: ppdm.getVersion(),
            progress: ppdm.getProgress(),
            nodes: ppdm.getNodes().length,
            modified: ppdm.getModified(),
            created: ppdm.getCreated()
         })),
         templates: templates.map(tdm => ({
            _id: tdm.getId(),
            name: tdm.getName(),
            slug: tdm.getSlug(),
            version: tdm.getVersion(),
            headline: tdm.getHeadline(),
            description: tdm.getDescription(),
            revisions: tdm.getTree().map(trdm => ({
               revision: trdm.revision,
               label: trdm.label,
               comment: trdm.comment,
               timestamp: trdm.timestamp,
               nodes: trdm.nodes.length
            })),
            created: tdm.getCreated()
         })),
         status: common_UserAccountStatus.Active
      }
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TUserProfileFromBackendPayload>
   }

   public getData() {
      return super.getData() as TUserProfileFromBackendPayload
   }

}

export default UserProfileFromBackendPayload
