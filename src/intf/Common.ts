
/**
 * KeyAny
 * @description Generic interface
 */
export interface KeyAny {
   [key: string]: any
}

/**
 * KeyString
 * @description Generic interface for key and value as string
 */
export interface KeyString {
   [key: string]: string
}

/**
 * Validation
 * @description Joi returns its own validation results format which requires conversion to more simple version.
 */
export interface Validation {
   key: string
   message: string
}