import FromBackendPayload from '@routes/from_backend'
import {TemplateItemVersion} from '@models/template/schema'
import {TreeItem} from '@models/tree/schema'
import {TemplateModel} from '@models/template/model'

import {BFFResponse} from '@intf/Routes'


export type TTemplateFromBackendPayload = {
   _id: string
   _mentor: string
   name: string
   slug: string
   version: TemplateItemVersion
   headline: string
   description: string
   tree: TreeItem
   created: string
}


class TemplateFromBackendPayload extends FromBackendPayload {

   // TODO: private rules: PayloadValidation<TTemplateFromBackendPayload> = {}

   constructor(data: TTemplateFromBackendPayload, message?: string)
   constructor(data: TemplateModel, message?: string)
   constructor(data: TTemplateFromBackendPayload | TemplateModel, message?: string) {
      if (data instanceof TemplateModel) {
         super(TemplateFromBackendPayload.mapping(data), message)
      } else {
         super(data, message)
      }
      // super.setValidationRules(this.rules)
   }

   protected static mapping(template: TemplateModel): TTemplateFromBackendPayload {
      return {
         _id: template.getId(),
         _mentor: template.getMentor(),
         name: template.getName(),
         slug: template.getSlug(),
         version: template.getVersion(),
         headline: template.getHeadline(),
         description: template.getDescription(),
         tree: template.getTree(),
         created: template.getCreated()
      }
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TTemplateFromBackendPayload>
   }

}

export default TemplateFromBackendPayload