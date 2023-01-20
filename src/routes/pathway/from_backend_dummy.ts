import assign from 'lodash/assign'
import {PathwayPopulatedDummyModel} from '@models/pathway/model'
import PathwayFromBackendPayload, {TPathwayFromBackendPayload} from './from_backend'
import {BFFResponse} from '@intf/Routes'

const otherDummyPathway = new PathwayPopulatedDummyModel()

class PathwayFromBackendDummyPayload extends PathwayFromBackendPayload {

   public constructor(payload: Partial<TPathwayFromBackendPayload> = {}, withMigrations: boolean = false) {
      const pathway = withMigrations
         ? new PathwayPopulatedDummyModel({
            version: 3,
            _template: {
               ...otherDummyPathway.getTemplate(),
               version: {
                  ...otherDummyPathway.getTemplate().version,
                  major: 7
               }
            }
         })
         : otherDummyPathway
      const migrations = withMigrations
         ? [{version: 1, created: new Date().toISOString()}, {version: 2, created: new Date().toISOString()}]
         : []
      const mappedDummyPayload = PathwayFromBackendPayload.mapping(pathway, migrations)
      super(assign(mappedDummyPayload, payload), migrations)
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TPathwayFromBackendPayload>
   }

}

export default PathwayFromBackendDummyPayload
