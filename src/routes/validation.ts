import * as Joi from 'joi'

const validationPatterns = {
   objectId: Joi.string()
      .min(24)
      .max(36)
      .regex(/[0-9a-f]+/i),
   username: Joi.string()
      .min(3)
      .max(26)
      .regex(/[0-9a-z-]+/i),
   username_alias: [
      Joi.string()
         .min(3)
         .max(26)
         .regex(/[0-9a-z-]+/i),
      Joi.string()
         .email({tlds: {allow: false}})
   ],
   name: Joi.string()
      .min(2)
      .max(48)
      .regex(/^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/),
   email: Joi.string()
      .email({tlds: {allow: false}}),
   nickname: Joi.string()
      .min(2)
      .max(32)
      .regex(/[a-z0-9-]/),
   cognitoConfirmationCode: Joi.string()
      .length(6),
   password: Joi.string()
      .min(2)
      .max(36),
   phone: Joi.string()
      .regex(/^\+[1-9]\d{1,14}$/),
   revision: Joi.string()
      .min(7)
      .max(9)
}

export default validationPatterns
