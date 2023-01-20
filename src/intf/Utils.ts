
/**
 * RecursivePartial
 * @description Allows for optional parameters of an interface/type recursively
 */
export type RecursivePartial<T> = {
   [P in keyof T]?: RecursivePartial<T[P]>
}

/**
 * TupleToObject
 * @description Allows to convert tuple returned by other generic types (i.e. Parameters<>) to object. Used primarily to determine payloads without duplicating types
 */
export type TupleToObject<T extends readonly any[],
   M extends Record<Exclude<keyof T, keyof any[]>, PropertyKey>> =
   { [K in Exclude<keyof T, keyof any[]> as M[K]]: T[K] };

/**
 * Modify
 * @description Allows interface modification (property override)
 * @example X {y: string} => Modify<X, {y: number}>
 */
export type Modify<T, R> = Omit<T, keyof R> & R;