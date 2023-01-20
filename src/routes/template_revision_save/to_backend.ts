import {KeyAny} from '@intf/Common'

import ToBackendPayload from '@routes/to_backend'
import {TreeEdge, TreeNode, TreeRevision} from '@models/tree/schema'
import {common_RevisionID} from '@properties/revision'

/**
 * TTemplateTreeNodeSaveItem
 * @description This is the object which will be posted to the API from the builder
 */
export type TTemplateTreeNodeSaveItem = Omit<TreeNode, 'updated' | 'created'>

export type TTemplateRevisionSaveToBackendPayload = {
   templateId: string
   base: common_RevisionID
   revision: TreeRevision<TTemplateTreeNodeSaveItem, TreeEdge>
   saveAsNew: boolean
}

class TemplateRevisionSaveToBackendPayload extends ToBackendPayload {

   /*
   private rules: PayloadValidation<TTemplateRevisionSaveToBackendPayload> = {
      templateId: Schema.objectId.required(),
      revision: {
         ...
      }
   }
   */

   public constructor(payload: TTemplateRevisionSaveToBackendPayload, txt?: KeyAny) {
      super(payload)
      // super.setValidationRules(this.rules, txt)
   }

   public getPayload() {
      return super.getPayload() as TTemplateRevisionSaveToBackendPayload
   }
}

export default TemplateRevisionSaveToBackendPayload
