import userSignUp from '@routes/user_sign_up/route'
import userSignIn from '@routes/user_sign_in/route'
import userEmailConfirmation from '@routes/user_email_confirmation/route'
import userEmailResend from '@routes/user_email_resend/route'
import userPasswordResetInit from '@routes/user_password_reset_init/route'
import userPasswordResetComplete from '@routes/user_password_reset_complete/route'
import userProfile from '@routes/user_profile/route'
import template from '@routes/template/route'
import templateSave from '@routes/template_save/route'
import templatePublish from '@routes/template_publish/route'
import templateRevisionSave from '@routes/template_revision_save/route'
import templateRevisionDelete from '@routes/template_revision_delete/route'
import pathway from '@routes/pathway/route'
import pathwayExplore from '@routes/pathway_explore/route'
import pathwaySync from '@routes/pathway_sync/route'
import pathwaySyncRollback from '@routes/pathway_sync_rollback/route'
import pathwayReset from '@routes/pathway_reset/route'
import pathwaySaveNodes from '@routes/pathway_save_nodes/route'

import {
   enumToValues,
   enumToSemanticUIOptions,
   isoToDateTime,
   joiToKeyValue,
   timestamp,
   timestampToDateTime,
   uid,
   toMoney,
   versionIndicator, timePassedTillNow, createRevisionId
} from '@helpers/utils'
import {
   getDummyUserId,
   getDummyCardId,
   getDummyCardWidgetId,
   getDummyTemplateId,
   getDummyUserActivityId,
   getDummyCognitoSubId,
   getDummyTemplateName, getDummyTemplateSlug, getDummyTemplateHeadline, getDummyTemplateDescription, getDummyPathwayId, getDummyPathwaySyncId
} from '@helpers/dummy'

import {
   TreeItem as _TreeItem,
   TreeEdge as _TreeEdge,
   TreeNode as _TreeNode,
   TreeRevisionItem as _TreeRevisionItem,
   TreeRevision as _TreeRevision,
} from '@models/tree/schema'

import {
   BaseCardItem as _BaseCardItem,
   CardItem as _CardItem,
   CardNode as _CardNode,
   CardItemInsert as _CardItemInsert,
   CardItemUpdate as _CardItemUpdate,
} from '@models/card/schema'

import {
   BaseTemplateItem as _BaseTemplateItem,
   TemplateItem as _TemplateItem,
   TemplateItemInsert as _TemplateItemInsert,
   TemplateItemUpdate as _TemplateItemUpdate,
   TemplateItemVersion as _TemplateItemVersion
} from '@models/template/schema'

import {
   BasePathwayItem as _BasePathwayItem,
   PathwayItem as _PathwayItem,
   PathwayItemInsert as _PathwayItemInsert,
   PathwayItemSyncedUpdate as _PathwayItemSyncedUpdate,
   PathwayPopulatedItem as _PathwayPopulatedItem,
   PathwayViewerItem as _PathwayViewerItem,
   PathwayViewerMentorFragment as _PathwayViewerMentorFragment,
   PathwayViewerTemplateFragment as _PathwayViewerTemplateFragment,
   PathwayViewerLearnerFragment as _PathwayViewerLearnerFragment,
   PathwayCardNoteItem as _PathwayCardNoteItem,
   PathwayCardNoteItemInsert as _PathwayCardNoteItemInsert
} from '@models/pathway/schema'

import {
   BasePathwayMigrationItem as _BasePathwayMigrationItem,
   PathwayMigrationItemInsert as _PathwayMigrationItemInsert,
   PathwayMigrationItem as _PathwayMigrationItem,
   PathwayMigrationListItem as _PathwayMigrationListItem
} from '@models/pathway_migration/schema'

import {
   BaseUserItem as _BaseUserItem,
   BaseUserActivityItem as _BaseUserActivityItem,
   UserActivityItem as _UserActivityItem,
   UserActivityItemInsert as _UserActivityItemInsert,
   UserItem as _UserItem,
   UserItemInsert as _UserItemInsert,
   UserItemUpdate as _UserItemUpdate
} from '@models/user/schema'

import {TTemplateFromBackendPayload as _TTemplateFromBackendPayload} from '@routes/template/from_backend'
import {TTemplateToBackendPayload as _TTemplateToBackendPayload} from '@routes/template/to_backend'
import {TTemplatePublishFromBackendPayload as _TTemplatePublishFromBackendPayload} from '@routes/template_publish/from_backend'
import {
   TTemplatePublishToBackendPayload as _TTemplatePublishToBackendPayload,
   TTemplatePublishVersionFragment as _TTemplatePublishVersionFragment
} from '@routes/template_publish/to_backend'
import {TTemplateRevisionDeleteToBackendPayload as _TTemplateRevisionDeleteToBackendPayload} from '@routes/template_revision_delete/to_backend'
import {
   TTemplateRevisionSaveToBackendPayload as _TTemplateRevisionSaveToBackendPayload,
   TTemplateTreeNodeSaveItem as _TTemplateTreeNodeSaveItem
} from '@routes/template_revision_save/to_backend'
import {TTemplateAmendablePayload as _TTemplateAmendablePayload, TTemplateSaveToBackendPayload as _TTemplateSaveToBackendPayload} from '@routes/template_save/to_backend'
import {TUserEmailConfirmationToBackendPayload as _TUserEmailConfirmationToBackendPayload} from '@routes/user_email_confirmation/to_backend'
import {TUserEmailResendToBackendPayload as _TUserEmailResendToBackendPayload} from '@routes/user_email_resend/to_backend'
import {TUserPasswordResetCompleteToBackendPayload as _TUserPasswordResetCompleteToBackendPayload} from '@routes/user_password_reset_complete/to_backend'
import {TUserPasswordResetInitToBackendPayload as _TUserPasswordResetInitToBackendPayload} from '@routes/user_password_reset_init/to_backend'
import {
   TUserProfileFromBackendPayload as _TUserProfileFromBackendPayload,
   TUserProfileTreeRevisionFragment as _TUserProfileTreeRevisionFragment,
   TUserProfilePathwayFragment as _TUserProfilePathwayFragment,
   TUserProfileTemplateFragment as _TUserProfileTemplateFragment
} from '@routes/user_profile/from_backend'
import {TUserProfileToBackendPayload as _TUserProfileToBackendPayload} from '@routes/user_profile/to_backend'
import {TUserSignInFromBackendPayload as _TUserSignInFromBackendPayload} from '@routes/user_sign_in/from_backend'
import {TUserSignInToBackendPayload as _TUserSignInToBackendPayload} from '@routes/user_sign_in/to_backend'
import {TUserSignUpToBackendPayload as _TUserSignUpToBackendPayload} from '@routes/user_sign_up/to_backend'
import {
   TPathwayFromBackendPayload as _TPathwayFromBackendPayload,
   TPathwayMigrationListFragment as _TPathwayMigrationListFragment
} from '@routes/pathway/from_backend'
import {TPathwayToBackendPayload as _TPathwayToBackendPayload} from '@routes/pathway/to_backend'
import {TPathwayResetToBackendPayload as _TPathwayResetToBackendPayload} from '@routes/pathway_reset/to_backend'
import {TPathwayExploreToBackendPayload as _TPathwayExploreToBackendPayload} from '@routes/pathway_explore/to_backend'
import {
   TPathwaySaveNodesToBackendPayload as _TPathwaySaveNodesToBackendPayload,
   TPathwayNodePositionFragment as _TPathwayNodePositionFragment
} from '@routes/pathway_save_nodes/to_backend'
import {TPathwaySyncToBackendPayload as _TPathwaySyncToBackendPayload} from '@routes/pathway_sync/to_backend'
import {
   TPathwaySyncRollbackToBackendPayload as _TPathwaySyncRollbackToBackendPayload
} from '@routes/pathway_sync_rollback/to_backend'
import {TPathwaySyncFromBackendPayload as _TPathwaySyncFromBackendPayload} from '@routes/pathway_sync/from_backend'
import {
   TPathwaySyncRollbackFromBackendPayload as _TPathwaySyncRollbackFromBackendPayload
} from '@routes/pathway_sync_rollback/from_backend'

import {TErrorFromBackendPayloadData as _TErrorFromBackendPayloadData} from '@routes/__error/from_backend_error'

/* Properties */
export {common_Headers} from './properties/headers'
export {common_RequestMethods} from './properties/request_methods'
export {common_ResponseSlugs} from './properties/response_slugs'
export {common_UserAccountStatus} from './properties/user_account_status'
export {common_UserAccountActivities} from './properties/user_account_activities'
export {common_CardTypes} from './properties/card_types'
export {common_CardWidgets} from './properties/card_widgets'
export {common_CardLayouts} from './properties/card_layouts'
export {common_PathwayThemes} from './properties/pathway_themes'
export {common_RevisionID} from './properties/revision'
export {common_WantToBeRevisionID} from './properties/revision'
export {common_Difficulties} from './properties/difficulties'
export {common_Translations} from './properties/translations'

/* Interfaces */
export {KeyAny, KeyString, Validation} from './intf/Common'
export {CardConfig, CardWidgetConfig} from './intf/Config'
export {BlockDataProps, CardWidgets, CardWidget, CardWidgetProps, CardWidgetCommonProps} from './intf/Blocks'
export {CardWidgetTextProps} from './intf/widgets/Text'
export {Locale, LocaleInput, LocaleMessage} from './intf/Locale'
export {BFFRoute, BFFRequest, BFFRequestExtras, BFFRequestExtrasArgs, BFFResponse, BFFErrorResponse, BFFResolvedResponse} from './intf/Routes'
export {onSemanticDropdownChangeEvent, onSemanticInputEvent, SemanticPane} from './intf/Semantic'
export {RecursivePartial, TupleToObject, Modify} from './intf/Utils'

/* Parent classes */
export {AnyBFFRoute, DummyBFFRoute} from './routes/route'
export {default as AnyPayload} from './routes/payload'
export {default as FromBackendPayload} from './routes/from_backend'
export {default as ToBackendPayload} from './routes/to_backend'

/* Utils */
export const Utils = {
   uid,
   joiToKeyValue,
   enumToValues,
   enumToSemanticUIOptions,
   versionIndicator,
   timestamp,
   isoToDateTime,
   createRevisionId,
   timePassedTillNow,
   timestampToDateTime,
   getDummyTemplateName,
   getDummyTemplateSlug,
   getDummyTemplateHeadline,
   getDummyTemplateDescription,
   getDummyTemplateId,
   getDummyUserId,
   getDummyUserActivityId,
   getDummyPathwayId,
   getDummyPathwaySyncId,
   getDummyCognitoSubId
}

/* Configs */
import cards from './config/cards'
import widgets from './config/widgets'
import {TUserProfileTreeRevisionFragment} from '@routes/user_profile/from_backend'

/* Locale */
export {default as locale} from './locale'

export const Configs = {
   cards,
   widgets
}

/**
 * BFFRoutes
 * @description this property serves as the id-name for the routes
 */
export enum BFFRoutes {
   UserSignUp = 'UserSignUp',
   UserSignIn = 'UserSignIn',
   UserEmailConfirmation = 'UserEmailConfirmation',
   UserEmailResend = 'UserEmailResend',
   UserPasswordResetInitiate = 'UserPasswordResetInitiate',
   UserPasswordResetComplete = 'UserPasswordResetComplete',
   UserProfile = 'UserProfile',
   Template = 'Template',
   TemplateSave = 'TemplateSave',
   TemplatePublish = 'TemplatePublish',
   TemplateRevisionSave = 'TemplateRevisionSave',
   TemplateRevisionDelete = 'TemplateRevisionDelete',
   Pathway = 'Pathway',
   PathwayExplore = 'PathwayExplore',
   PathwayReset = 'PathwayReset',
   PathwaySync = 'PathwaySync',
   PathwaySyncRollback = 'PathwaySyncRollback',
   PathwaySaveNodes = 'PathwaySaveNodes'
}

/**
 * List of all the backend BFF routes available
 */
export const Routes = {
   [BFFRoutes.UserSignUp]: userSignUp,
   [BFFRoutes.UserSignIn]: userSignIn,
   [BFFRoutes.UserEmailConfirmation]: userEmailConfirmation,
   [BFFRoutes.UserEmailResend]: userEmailResend,
   [BFFRoutes.UserPasswordResetInitiate]: userPasswordResetInit,
   [BFFRoutes.UserPasswordResetComplete]: userPasswordResetComplete,
   [BFFRoutes.UserProfile]: userProfile,
   [BFFRoutes.Template]: template,
   [BFFRoutes.TemplateSave]: templateSave,
   [BFFRoutes.TemplatePublish]: templatePublish,
   [BFFRoutes.TemplateRevisionSave]: templateRevisionSave,
   [BFFRoutes.TemplateRevisionDelete]: templateRevisionDelete,
   [BFFRoutes.Pathway]: pathway,
   [BFFRoutes.PathwayExplore]: pathwayExplore,
   [BFFRoutes.PathwayReset]: pathwayReset,
   [BFFRoutes.PathwaySync]: pathwaySync,
   [BFFRoutes.PathwaySyncRollback]: pathwaySyncRollback,
   [BFFRoutes.PathwaySaveNodes]: pathwaySaveNodes
}

/**
 * Route payloads
 */
export {default as PathwayFromBackendPayload} from '@routes/pathway/from_backend'
export {default as PathwayFromBackendDummyPayload} from '@routes/pathway/from_backend_dummy'
export {default as PathwayToBackendPayload} from '@routes/pathway/to_backend'
export {default as PathwayExploreToBackendPayload} from '@routes/pathway_explore/to_backend'
export {default as PathwayResetToBackendPayload} from '@routes/pathway_reset/to_backend'
export {default as PathwaySaveNodesToBackendPayload} from '@routes/pathway_save_nodes/to_backend'
export {default as PathwaySyncToBackendPayload} from '@routes/pathway_sync/to_backend'
export {default as PathwaySyncRollbackToBackendPayload} from '@routes/pathway_sync_rollback/to_backend'
export {default as PathwaySyncFromBackendPayload} from '@routes/pathway_sync/from_backend'
export {default as PathwaySyncRollbackFromBackendPayload} from '@routes/pathway_sync_rollback/from_backend'
export {default as TemplateFromBackendPayload} from '@routes/template/from_backend'
export {default as TemplateToBackendPayload} from '@routes/template/to_backend'
export {default as TemplateFromBackendDummyPayload} from '@routes/template/from_backend_dummy'
export {default as TemplatePublishFromBackendPayload} from '@routes/template_publish/from_backend'
export {default as TemplatePublishToBackendPayload} from '@routes/template_publish/to_backend'
export {default as TemplateRevisionDeleteToBackendPayload} from '@routes/template_revision_delete/to_backend'
export {default as TemplateRevisionSaveToBackendPayload} from '@routes/template_revision_save/to_backend'
export {default as TemplateSaveToBackendPayload} from '@routes/template_save/to_backend'
export {default as UserEmailConfirmationToBackendPayload} from '@routes/user_email_confirmation/to_backend'
export {default as UserEmailResendToBackendPayload} from '@routes/user_email_resend/to_backend'
export {default as UserPasswordResetCompleteToBackendPayload} from '@routes/user_password_reset_complete/to_backend'
export {default as UserPasswordResetInitToBackendPayload} from '@routes/user_password_reset_init/to_backend'
export {default as UserProfileFromBackendPayload} from '@routes/user_profile/from_backend'
export {default as UserProfileToBackendPayload} from '@routes/user_profile/to_backend'
export {default as UserProfileFromBackendDummyPayload} from '@routes/user_profile/from_backend_dummy'
export {default as UserSignInFromBackendPayload} from '@routes/user_sign_in/from_backend'
export {default as UserSignInToBackendPayload} from '@routes/user_sign_in/to_backend'
export {default as UserSignUpToBackendPayload} from '@routes/user_sign_up/to_backend'
export {default as ErrorFromBackendPayload} from '@routes/__error/from_backend_error'
export {default as MessageOnlyFromBackendPayload} from '@routes/__success/from_backend'


export namespace TPayloads {
   export type TPathwayFromBackendPayload = _TPathwayFromBackendPayload
   export type TPathwayMigrationListFragment = _TPathwayMigrationListFragment
   export type TPathwayToBackendPayload = _TPathwayToBackendPayload
   export type TPathwayResetToBackendPayload = _TPathwayResetToBackendPayload
   export type TPathwayExploreToBackendPayload = _TPathwayExploreToBackendPayload
   export type TPathwaySaveNodesToBackendPayload = _TPathwaySaveNodesToBackendPayload
   export type TPathwayNodePositionFragment = _TPathwayNodePositionFragment
   export type TPathwaySyncToBackendPayload = _TPathwaySyncToBackendPayload
   export type TPathwaySyncRollbackToBackendPayload = _TPathwaySyncRollbackToBackendPayload
   export type TPathwaySyncFromBackendPayload = _TPathwaySyncFromBackendPayload
   export type TPathwaySyncRollbackFromBackendPayload = _TPathwaySyncRollbackFromBackendPayload
   export type TTemplateFromBackendPayload = _TTemplateFromBackendPayload
   export type TTemplateToBackendPayload = _TTemplateToBackendPayload
   export type TTemplatePublishFromBackendPayload = _TTemplatePublishFromBackendPayload
   export type TTemplatePublishToBackendPayload = _TTemplatePublishToBackendPayload
   export type TTemplatePublishVersionFragment = _TTemplatePublishVersionFragment
   export type TTemplateRevisionDeleteToBackendPayload = _TTemplateRevisionDeleteToBackendPayload
   export type TTemplateRevisionSaveToBackendPayload = _TTemplateRevisionSaveToBackendPayload
   export type TTemplateTreeNodeSaveItem = _TTemplateTreeNodeSaveItem
   export type TTemplateAmendablePayload = _TTemplateAmendablePayload
   export type TTemplateSaveToBackendPayload = _TTemplateSaveToBackendPayload
   export type TUserEmailConfirmationToBackendPayload = _TUserEmailConfirmationToBackendPayload
   export type TUserEmailResendToBackendPayload = _TUserEmailResendToBackendPayload
   export type TUserPasswordResetCompleteToBackendPayload = _TUserPasswordResetCompleteToBackendPayload
   export type TUserPasswordResetInitToBackendPayload = _TUserPasswordResetInitToBackendPayload
   export type TUserProfileFromBackendPayload = _TUserProfileFromBackendPayload
   export type TUserProfileTemplateFragment = _TUserProfileTemplateFragment
   export type TUserProfilePathwayFragment = _TUserProfilePathwayFragment
   export type TUserProfileTreeRevisionFragment = _TUserProfileTreeRevisionFragment
   export type TUserProfileToBackendPayload = _TUserProfileToBackendPayload
   export type TUserSignInFromBackendPayload = _TUserSignInFromBackendPayload
   export type TUserSignInToBackendPayload = _TUserSignInToBackendPayload
   export type TUserSignUpToBackendPayload = _TUserSignUpToBackendPayload
   export type TErrorFromBackendPayloadData = _TErrorFromBackendPayloadData
}

/* Payloads validation patterns */
export {default as ValidationPatterns} from './routes/validation'


/* Models */
export {default as AnyModel} from '@models/model'
export {UserModel, UserDummyModel} from '@models/user/model'
export {CardModel, CardDummyModel} from '@models/card/model'
export {CardNodeModel, CardNodeDummyModel} from '@models/card/model_node'
export {TemplateModel, TemplateDummyModel} from '@models/template/model'
export {TreeDummyModel} from '@models/tree/model'
export {TreeRevisionModel, TreeRevisionDummyModel} from '@models/tree/model_revision'
export {PathwayModel, PathwayDummyModel, PathwayPopulatedModel, PathwayPopulatedDummyModel, PathwayViewerModel} from '@models/pathway/model'
export {PathwayCardNoteModel, PathwayCardNoteDummyModel} from '@models/pathway/model_note'
export {PathwayMigrationModel, PathwayMigrationDummyModel} from '@models/pathway_migration/model'

export namespace TModels {
   export type BaseTemplateItem = _BaseTemplateItem
   export type TemplateItemVersion = _TemplateItemVersion
   export type TemplateItemInsert = _TemplateItemInsert
   export type TemplateItem = _TemplateItem
   export type TemplateItemUpdate = _TemplateItemUpdate
   export type BaseCardItem = _BaseCardItem
   export type CardItemInsert = _CardItemInsert
   export type CardItem = _CardItem
   export type CardItemUpdate = _CardItemUpdate
   export type CardNode = _CardNode
   export type BaseUserItem = _BaseUserItem
   export type UserItem = _UserItem
   export type UserItemInsert = _UserItemInsert
   export type UserItemUpdate = _UserItemUpdate
   export type BaseUserActivityItem = _BaseUserActivityItem
   export type UserActivityItem = _UserActivityItem
   export type UserActivityItemInsert = _UserActivityItemInsert
   export type TreeItem = _TreeItem
   export type TreeRevisionItem = _TreeRevisionItem
   export type TreeRevision<N, E> = _TreeRevision<N, E>
   export type TreeNode = _TreeNode
   export type TreeEdge = _TreeEdge
   export type BasePathwayItem = _BasePathwayItem
   export type PathwayItem = _PathwayItem
   export type PathwayItemInsert = _PathwayItemInsert
   export type PathwayItemSyncedUpdate = _PathwayItemSyncedUpdate
   export type PathwayPopulatedItem = _PathwayPopulatedItem
   export type PathwayViewerItem = _PathwayViewerItem
   export type PathwayViewerTemplateFragment = _PathwayViewerTemplateFragment
   export type PathwayViewerMentorFragment = _PathwayViewerMentorFragment
   export type PathwayViewerLearnerFragment = _PathwayViewerLearnerFragment
   export type BasePathwayMigrationItem = _BasePathwayMigrationItem
   export type PathwayMigrationItem = _PathwayMigrationItem
   export type PathwayMigrationItemInsert = _PathwayMigrationItemInsert
   export type PathwayMigrationListItem = _PathwayMigrationListItem
   export type PathwayCardNoteItem = _PathwayCardNoteItem
   export type PathwayCardNoteItemInsert = _PathwayCardNoteItemInsert
}
