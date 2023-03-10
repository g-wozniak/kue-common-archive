/**
 * common_ResponseSlugs
 * @description This is a cross-system property. Response abbreviations to be coherent with locale (en-GB) in the webapp.
 */
export enum common_ResponseSlugs {
   UserProfileError = 'UserProfileError',
   UserRouteAccessErrorAsUnauthorized = 'UserRouteAccessErrorAsUnauthorized',
   UserSignUpErrorAsUsernameForbidden = 'UserSignUpErrorAsUsernameForbidden',
   UserSignUpErrorAsUsernameExists = 'UserSignUpErrorAsUsernameExists',
   UserSignUpErrorAsPolicyNotMet = 'UserSignUpErrorAsPolicyNotMet',
   UserSignUpError = 'UserSignUpError',
   UserSignInError = 'UserSignInError',
   UserSignInErrorAsInactive = 'UserSignInErrorAsInactive',
   UserSignInErrorAsUserNotConfirmed = 'UserSignInErrorAsUserNotConfirmed',
   UserEmailResendErrorAsTooManyAttempts = 'UserEmailResendErrorAsTooManyAttempts',
   UserEmailResendError = 'UserEmailResendError',
   UserEmailConfirmationError = 'UserEmailConfirmationError',
   UserEmailConfirmationErrorAsCodeInvalid = 'UserEmailConfirmationErrorAsCodeInvalid',
   UserEmailConfirmationErrorAsUserAlreadyConfirmed = 'UserEmailConfirmationErrorAsUserAlreadyConfirmed',
   UserPasswordResetError = 'UserPasswordResetError',
   UserPasswordResetErrorAsNoEmailPhoneConfirmed = 'UserPasswordResetErrorAsNoEmailPhoneConfirmed',
   UserPasswordResetErrorAsUserNotFound = 'UserPasswordResetErrorAsUserNotFound',
   UserPasswordResetErrorAsInvalidCode = 'UserPasswordResetErrorAsInvalidCode',
   UserPasswordResetErrorAsTooManyAttempts = 'UserPasswordResetErrorAsTooManyAttempts',
   TemplateSaveErrorAsSlugAlreadyExists = 'TemplateSaveErrorAsSlugAlreadyExists',
   TemplateSaveError = 'TemplateSaveError',
   TemplateSaveErrorAsTemplateDoesNotExist = 'TemplateSaveErrorAsTemplateDoesNotExist',
   TemplateRevisionSaveError = 'TemplateRevisionSaveError',
   TemplateRevisionSaveErrorAsNewTemplateNotCreated = 'TemplateRevisionSaveErrorAsNewTemplateNotCreated',
   TemplateRevisionDeleteError = 'TemplateRevisionDeleteError',
   TemplateRevisionDeleteErrorAsPublished = 'TemplateRevisionDeleteErrorAsPublished',
   TemplatePublishError = 'TemplatePublishError',
   TemplateError = 'TemplateError',
   PathwayError = 'PathwayError',
   PathwayErrorNotFound = 'PathwayErrorNotFound',
   PathwayExploreError = 'PathwayExploreError',
   PathwayResetError = 'PathwayResetError',
   PathwaySyncError = 'PathwaySyncError',
   PathwaySyncErrorAsTemplateNotPublished = 'PathwaySyncErrorAsTemplateNotPublished',
   PathwaySyncRollbackError = 'PathwaySyncRollbackError',
   PathwaySaveNodesError = 'PathwaySaveNodesError',
   RequestValidationError = 'RequestValidationError',
   ResourceAccessDenied = 'ResourceAccessDenied',
   ResourceNotFound = 'ResourceNotFound',
   ServerError = 'ServerError',
   ServerSuccess = 'ServerSuccess',

   UserEmailResendSuccess = 'UserEmailResendSuccess',
   UserPasswordResetSuccessAsCodeSent = 'UserPasswordResetSuccessAsCodeSent',
   UserPasswordResetSuccess = 'UserPasswordResetSuccess',

}