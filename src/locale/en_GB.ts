import {common_ResponseSlugs} from '@properties/response_slugs'
import {common_Difficulties} from '@properties/difficulties'
import {common_Translations} from '@properties/translations'

import {Locale} from '@intf/Locale'

const translation: Locale = {
   properties: {
      difficulties: {
         [common_Difficulties.None]: 'trivial',
         [common_Difficulties.VeryEasy]: 'very easy',
         [common_Difficulties.Easy]: 'easy',
         [common_Difficulties.Moderate]: 'moderate',
         [common_Difficulties.Hard]: 'challenging',
         [common_Difficulties.VeryHard]: 'difficult',
         [common_Difficulties.MindBlowing]: 'extreme'
      },
      time: {
         unknown: 'unknown',
         minute: 'minute',
         minutes: 'minutes',
         hours: 'hours'
      },
      cost: {
         free: 'free'
      },
      translations: {
         [common_Translations.english]: 'english'
      }
   },
   messages: {
      [common_ResponseSlugs.UserProfileError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.UserRouteAccessErrorAsUnauthorized]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.UserSignUpError]: {
         h: 'Registration failed',
         b: 'We were unable to complete the registration process. We are working on error resolution. Try again later.',
         i: 'user'
      },
      [common_ResponseSlugs.UserSignUpErrorAsUsernameExists]: {
         h: 'Username already exists',
         b: 'The user name provided already exists. Try again with a different username.',
         i: 'user'
      },
      [common_ResponseSlugs.UserSignUpErrorAsUsernameForbidden]: {
         h: 'Username forbidden',
         b: 'Try again with a different username because the one you used is forbidden or restricted.',
         i: 'user'
      },
      [common_ResponseSlugs.UserSignUpErrorAsPolicyNotMet]: {
         h: 'Invalid password',
         b: 'Password does not meet the policy requirements',
         i: 'user'
      },
      [common_ResponseSlugs.UserSignInErrorAsUserNotConfirmed]: {
         h: 'Unable to authenticate',
         b: 'User e-mail address is not confirmed',
         i: 'x'
      },
      [common_ResponseSlugs.UserSignInError]: {
         h: 'Unable to authenticate',
         b: 'Something happened on the way',
         i: 'x'
      },
      [common_ResponseSlugs.UserSignInErrorAsInactive]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.UserEmailResendError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.UserEmailResendErrorAsTooManyAttempts]: {
         h: 'Cannot re-send the e-mail',
         b: 'Too many attempts of resending e-mail have been made recently for this username. Try again later.',
         i: 'at'
      },
      [common_ResponseSlugs.UserEmailConfirmationError]: {
         h: 'E-mail confirmation error',
         b: 'We could not confirm your email address. Try again later or contact our support.',
         i: 'at'
      },
      [common_ResponseSlugs.UserEmailConfirmationErrorAsCodeInvalid]: {
         h: 'Invalid confirmation code',
         b: 'The confirmation code provided is invalid. Check it and try again.',
         i: 'at'
      },
      [common_ResponseSlugs.UserEmailConfirmationErrorAsUserAlreadyConfirmed]: {
         h: 'E-mail address is already confirmed',
         b: 'User is confirmed. You can sign in. Improve?',
         i: 'at'
      },
      [common_ResponseSlugs.UserPasswordResetError]: {
         h: 'Password reset failed',
         b: 'We are unable to reset your password right now. Try again later.',
         i: 'x'
      },
      [common_ResponseSlugs.UserPasswordResetErrorAsNoEmailPhoneConfirmed]: {
         h: 'Password reset failed',
         b: 'Your account does not have an e-mail address nor phone confirmed. Start the registration process again',
         i: 'x'
      },
      [common_ResponseSlugs.UserPasswordResetErrorAsUserNotFound]: {
         h: 'User not found',
         b: 'User with the given username has not been found. Check the spelling and try again',
         i: 'x'
      },
      [common_ResponseSlugs.UserPasswordResetErrorAsInvalidCode]: {
         h: 'Invalid code',
         b: 'The code provided is invalid. Try again with the valid code',
         i: 'x'
      },
      [common_ResponseSlugs.UserPasswordResetErrorAsTooManyAttempts]: {
         h: 'Too many attempts',
         b: 'Wait for some time or start the process again',
         i: 'x'
      },
      [common_ResponseSlugs.TemplateSaveErrorAsSlugAlreadyExists]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.TemplateSaveError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.TemplateSaveErrorAsTemplateDoesNotExist]: {
         h: 'TemplateSaveErrorAsTemplateDoesNotExist',
         b: 'This is temporary error message ',
         i: 'x'
      },
      [common_ResponseSlugs.TemplateRevisionSaveError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.TemplateRevisionDeleteError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.TemplateRevisionDeleteErrorAsPublished]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.TemplateRevisionSaveErrorAsNewTemplateNotCreated]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.TemplatePublishError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.TemplateError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.PathwayError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.PathwayErrorNotFound]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.PathwayExploreError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.PathwayResetError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.PathwaySyncError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.PathwaySyncErrorAsTemplateNotPublished]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.PathwaySyncRollbackError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.PathwaySaveNodesError]: {
         h: 'Error',
         b: 'This is temporary error message',
         i: 'x'
      },
      [common_ResponseSlugs.ResourceAccessDenied]: {
         h: 'Error',
         b: 'Server returned an error. We are investigating the matter. Try again soon.',
         i: 'x'
      },
      [common_ResponseSlugs.RequestValidationError]: {
         h: 'There are errors in your fields',
         b: 'Correct them and try again',
         i: 'x'
      },
      [common_ResponseSlugs.ResourceAccessDenied]: {
         h: 'Error',
         b: 'Server returned an error. We are investigating the matter. Try again soon.',
         i: 'x'
      },
      [common_ResponseSlugs.ResourceNotFound]: {
         h: 'Error',
         b: 'Server returned an error. We are investigating the matter. Try again soon.',
         i: 'x'
      },
      [common_ResponseSlugs.ServerError]: {
         h: 'Error',
         b: 'This is temporary server error',
         i: 'thumbs down'
      },
      [common_ResponseSlugs.UserEmailResendSuccess]: {
         h: 'Email sent',
         b: 'The confirmation e-mail has been resent',
         i: 'thumbs up'
      },
      [common_ResponseSlugs.UserPasswordResetSuccessAsCodeSent]: {
         h: 'Success',
         b: 'Confirmation code sent to your e-mail',
         i: 'thumbs up'
      },
      [common_ResponseSlugs.UserPasswordResetSuccess]: {
         h: 'Success',
         b: 'Your password has been changed',
         i: 'key'
      },
      [common_ResponseSlugs.ServerSuccess]: {
         h: 'Success',
         b: 'The operation has been completed',
         i: 'thumbs up'
      }
   }
}

export default translation
