import assign from 'lodash/assign'
import {
   TemplateDummyModel
} from '@models/template/model'
import TemplateFromBackendPayload, {TTemplateFromBackendPayload} from './from_backend'

import {BFFResponse} from '@intf/Routes'

// Note: This does not support `{} (empty payload)` as it would be silly! You can use normal payload for that.
// So, beware. `{}` here means `nothing to merge` whilst in the true payload it means empty payload `{}`

class TemplateFromBackendDummyPayload extends TemplateFromBackendPayload {
   public constructor(payload: Partial<TTemplateFromBackendPayload> = {}, template: TemplateDummyModel) {
      const mappedDummyPayload = TemplateFromBackendPayload.mapping(template)
      super(assign(mappedDummyPayload, payload))
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TTemplateFromBackendPayload>
   }

}

export default TemplateFromBackendDummyPayload
