import FromBackendPayload from '@routes/from_backend'
import {PathwayPopulatedModel} from '@models/pathway/model'
import {
   PathwayViewerItem
} from '@models/pathway/schema'
import {BFFResponse} from '@intf/Routes'
import {merge} from 'lodash'
import {PathwayMigrationListItem} from '@models/pathway_migration/schema'

export type TPathwayMigrationListFragment = PathwayMigrationListItem[]


export type TPathwayFromBackendPayload = PathwayViewerItem & {
   migrations: TPathwayMigrationListFragment
}

class PathwayFromBackendPayload extends FromBackendPayload {

   // TODO: private rules: PayloadValidation<TPathwayFromBackendPayload> = {}

   constructor(pathway: TPathwayFromBackendPayload, migrations: TPathwayMigrationListFragment)
   constructor(pathway: PathwayPopulatedModel, migrations: TPathwayMigrationListFragment)
   constructor(pathway: TPathwayFromBackendPayload | PathwayPopulatedModel, migrations: TPathwayMigrationListFragment = []) {
      if (pathway instanceof PathwayPopulatedModel) {
         super(PathwayFromBackendPayload.mapping(pathway, migrations))
      } else {
         super(merge(pathway, {migrations}))
      }
      // super.setValidationRules(this.rules)
   }

   protected static mapping(pathway: PathwayPopulatedModel, migrations: TPathwayMigrationListFragment): TPathwayFromBackendPayload {
      const mentor = pathway.getMentor()
      const template = pathway.getTemplate()
      const learner = pathway.getLearner()
      return {
         _id: pathway.getId(),
         learner: {
            _id: learner._id
         },
         mentor: {
            _id: mentor._id,
            nickname: mentor.nickname,
            status: mentor.status
         },
         template: {
            _id: template._id,
            name: template.name,
            version: template.version.major,
            slug: template.slug,
            created: template.created
         },
         migrations,
         customName: pathway.getCustomName(),
         theme: pathway.getTheme(),
         version: pathway.getVersion(),
         progress: pathway.getProgress(),
         notes: pathway.getCardNotes(),
         nodes: pathway.getNodes(),
         edges: pathway.getEdges(),
         modified: pathway.getModified(),
         created: pathway.getCreated()
      }
   }

   public getPayload() {
      return super.getPayload() as BFFResponse<TPathwayFromBackendPayload>
   }

}

export default PathwayFromBackendPayload