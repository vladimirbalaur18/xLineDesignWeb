
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model PropertyStoryChapter
 * 
 */
export type PropertyStoryChapter = $Result.DefaultSelection<Prisma.$PropertyStoryChapterPayload>
/**
 * Model PropertySection
 * 
 */
export type PropertySection = $Result.DefaultSelection<Prisma.$PropertySectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PropertyCategory: {
  interiorDesign: 'interiorDesign',
  architecture: 'architecture',
  landscapeDesign: 'landscapeDesign'
};

export type PropertyCategory = (typeof PropertyCategory)[keyof typeof PropertyCategory]

}

export type PropertyCategory = $Enums.PropertyCategory

export const PropertyCategory: typeof $Enums.PropertyCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Properties
 * const properties = await prisma.property.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Properties
   * const properties = await prisma.property.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyStoryChapter`: Exposes CRUD operations for the **PropertyStoryChapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyStoryChapters
    * const propertyStoryChapters = await prisma.propertyStoryChapter.findMany()
    * ```
    */
  get propertyStoryChapter(): Prisma.PropertyStoryChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertySection`: Exposes CRUD operations for the **PropertySection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertySections
    * const propertySections = await prisma.propertySection.findMany()
    * ```
    */
  get propertySection(): Prisma.PropertySectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    PropertyStoryChapter: 'PropertyStoryChapter',
    PropertySection: 'PropertySection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "property" | "propertyImage" | "propertyStoryChapter" | "propertySection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      PropertyStoryChapter: {
        payload: Prisma.$PropertyStoryChapterPayload<ExtArgs>
        fields: Prisma.PropertyStoryChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyStoryChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyStoryChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>
          }
          findFirst: {
            args: Prisma.PropertyStoryChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyStoryChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>
          }
          findMany: {
            args: Prisma.PropertyStoryChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>[]
          }
          create: {
            args: Prisma.PropertyStoryChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>
          }
          createMany: {
            args: Prisma.PropertyStoryChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyStoryChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>[]
          }
          delete: {
            args: Prisma.PropertyStoryChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>
          }
          update: {
            args: Prisma.PropertyStoryChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>
          }
          deleteMany: {
            args: Prisma.PropertyStoryChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyStoryChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyStoryChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>[]
          }
          upsert: {
            args: Prisma.PropertyStoryChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyStoryChapterPayload>
          }
          aggregate: {
            args: Prisma.PropertyStoryChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyStoryChapter>
          }
          groupBy: {
            args: Prisma.PropertyStoryChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyStoryChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyStoryChapterCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyStoryChapterCountAggregateOutputType> | number
          }
        }
      }
      PropertySection: {
        payload: Prisma.$PropertySectionPayload<ExtArgs>
        fields: Prisma.PropertySectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertySectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertySectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>
          }
          findFirst: {
            args: Prisma.PropertySectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertySectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>
          }
          findMany: {
            args: Prisma.PropertySectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>[]
          }
          create: {
            args: Prisma.PropertySectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>
          }
          createMany: {
            args: Prisma.PropertySectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertySectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>[]
          }
          delete: {
            args: Prisma.PropertySectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>
          }
          update: {
            args: Prisma.PropertySectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>
          }
          deleteMany: {
            args: Prisma.PropertySectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertySectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertySectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>[]
          }
          upsert: {
            args: Prisma.PropertySectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertySectionPayload>
          }
          aggregate: {
            args: Prisma.PropertySectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertySection>
          }
          groupBy: {
            args: Prisma.PropertySectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertySectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertySectionCountArgs<ExtArgs>
            result: $Utils.Optional<PropertySectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    property?: PropertyOmit
    propertyImage?: PropertyImageOmit
    propertyStoryChapter?: PropertyStoryChapterOmit
    propertySection?: PropertySectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    heroImages: number
    galleryImages: number
    storyChapters: number
    sections: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heroImages?: boolean | PropertyCountOutputTypeCountHeroImagesArgs
    galleryImages?: boolean | PropertyCountOutputTypeCountGalleryImagesArgs
    storyChapters?: boolean | PropertyCountOutputTypeCountStoryChaptersArgs
    sections?: boolean | PropertyCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountHeroImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountStoryChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyStoryChapterWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertySectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    yearBuilt: number | null
  }

  export type PropertySumAggregateOutputType = {
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    yearBuilt: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    fullDescription: string | null
    address: string | null
    price: string | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    yearBuilt: number | null
    category: $Enums.PropertyCategory | null
    location: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    fullDescription: string | null
    address: string | null
    price: string | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    yearBuilt: number | null
    category: $Enums.PropertyCategory | null
    location: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    fullDescription: number
    address: number
    price: number
    bedrooms: number
    bathrooms: number
    area: number
    yearBuilt: number
    features: number
    category: number
    location: number
    image: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    area?: true
    yearBuilt?: true
  }

  export type PropertySumAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    area?: true
    yearBuilt?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    fullDescription?: true
    address?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    yearBuilt?: true
    category?: true
    location?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    fullDescription?: true
    address?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    yearBuilt?: true
    category?: true
    location?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    fullDescription?: true
    address?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    yearBuilt?: true
    features?: true
    category?: true
    location?: true
    image?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    slug: string
    title: string
    description: string | null
    fullDescription: string | null
    address: string | null
    price: string | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    yearBuilt: number | null
    features: string[]
    category: $Enums.PropertyCategory
    location: string | null
    image: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    fullDescription?: boolean
    address?: boolean
    price?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    yearBuilt?: boolean
    features?: boolean
    category?: boolean
    location?: boolean
    image?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    heroImages?: boolean | Property$heroImagesArgs<ExtArgs>
    galleryImages?: boolean | Property$galleryImagesArgs<ExtArgs>
    storyChapters?: boolean | Property$storyChaptersArgs<ExtArgs>
    sections?: boolean | Property$sectionsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    fullDescription?: boolean
    address?: boolean
    price?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    yearBuilt?: boolean
    features?: boolean
    category?: boolean
    location?: boolean
    image?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    fullDescription?: boolean
    address?: boolean
    price?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    yearBuilt?: boolean
    features?: boolean
    category?: boolean
    location?: boolean
    image?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    fullDescription?: boolean
    address?: boolean
    price?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    yearBuilt?: boolean
    features?: boolean
    category?: boolean
    location?: boolean
    image?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "description" | "fullDescription" | "address" | "price" | "bedrooms" | "bathrooms" | "area" | "yearBuilt" | "features" | "category" | "location" | "image" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heroImages?: boolean | Property$heroImagesArgs<ExtArgs>
    galleryImages?: boolean | Property$galleryImagesArgs<ExtArgs>
    storyChapters?: boolean | Property$storyChaptersArgs<ExtArgs>
    sections?: boolean | Property$sectionsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      heroImages: Prisma.$PropertyImagePayload<ExtArgs>[]
      galleryImages: Prisma.$PropertyImagePayload<ExtArgs>[]
      storyChapters: Prisma.$PropertyStoryChapterPayload<ExtArgs>[]
      sections: Prisma.$PropertySectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      description: string | null
      fullDescription: string | null
      address: string | null
      price: string | null
      bedrooms: number | null
      bathrooms: number | null
      area: number | null
      yearBuilt: number | null
      features: string[]
      category: $Enums.PropertyCategory
      location: string | null
      image: string
      tags: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    heroImages<T extends Property$heroImagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$heroImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    galleryImages<T extends Property$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storyChapters<T extends Property$storyChaptersArgs<ExtArgs> = {}>(args?: Subset<T, Property$storyChaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sections<T extends Property$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Property$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly slug: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly fullDescription: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'String'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Int'>
    readonly area: FieldRef<"Property", 'Float'>
    readonly yearBuilt: FieldRef<"Property", 'Int'>
    readonly features: FieldRef<"Property", 'String[]'>
    readonly category: FieldRef<"Property", 'PropertyCategory'>
    readonly location: FieldRef<"Property", 'String'>
    readonly image: FieldRef<"Property", 'String'>
    readonly tags: FieldRef<"Property", 'String[]'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.heroImages
   */
  export type Property$heroImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property.galleryImages
   */
  export type Property$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property.storyChapters
   */
  export type Property$storyChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    where?: PropertyStoryChapterWhereInput
    orderBy?: PropertyStoryChapterOrderByWithRelationInput | PropertyStoryChapterOrderByWithRelationInput[]
    cursor?: PropertyStoryChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyStoryChapterScalarFieldEnum | PropertyStoryChapterScalarFieldEnum[]
  }

  /**
   * Property.sections
   */
  export type Property$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    where?: PropertySectionWhereInput
    orderBy?: PropertySectionOrderByWithRelationInput | PropertySectionOrderByWithRelationInput[]
    cursor?: PropertySectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertySectionScalarFieldEnum | PropertySectionScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    description: string | null
    heroPropertyId: string | null
    galleryPropertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    description: string | null
    heroPropertyId: string | null
    galleryPropertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    url: number
    description: number
    heroPropertyId: number
    galleryPropertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyImageMinAggregateInputType = {
    id?: true
    url?: true
    description?: true
    heroPropertyId?: true
    galleryPropertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    url?: true
    description?: true
    heroPropertyId?: true
    galleryPropertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    url?: true
    description?: true
    heroPropertyId?: true
    galleryPropertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: string
    url: string
    description: string | null
    heroPropertyId: string | null
    galleryPropertyId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyImageCountAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    heroPropertyId?: boolean
    galleryPropertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    heroProperty?: boolean | PropertyImage$heroPropertyArgs<ExtArgs>
    galleryProperty?: boolean | PropertyImage$galleryPropertyArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    heroPropertyId?: boolean
    galleryPropertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    heroProperty?: boolean | PropertyImage$heroPropertyArgs<ExtArgs>
    galleryProperty?: boolean | PropertyImage$galleryPropertyArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    heroPropertyId?: boolean
    galleryPropertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    heroProperty?: boolean | PropertyImage$heroPropertyArgs<ExtArgs>
    galleryProperty?: boolean | PropertyImage$galleryPropertyArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectScalar = {
    id?: boolean
    url?: boolean
    description?: boolean
    heroPropertyId?: boolean
    galleryPropertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "description" | "heroPropertyId" | "galleryPropertyId" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyImage"]>
  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heroProperty?: boolean | PropertyImage$heroPropertyArgs<ExtArgs>
    galleryProperty?: boolean | PropertyImage$galleryPropertyArgs<ExtArgs>
  }
  export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heroProperty?: boolean | PropertyImage$heroPropertyArgs<ExtArgs>
    galleryProperty?: boolean | PropertyImage$galleryPropertyArgs<ExtArgs>
  }
  export type PropertyImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heroProperty?: boolean | PropertyImage$heroPropertyArgs<ExtArgs>
    galleryProperty?: boolean | PropertyImage$galleryPropertyArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      heroProperty: Prisma.$PropertyPayload<ExtArgs> | null
      galleryProperty: Prisma.$PropertyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      description: string | null
      heroPropertyId: string | null
      galleryPropertyId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImageCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages and returns the data updated in the database.
     * @param {PropertyImageUpdateManyAndReturnArgs} args - Arguments to update many PropertyImages.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    heroProperty<T extends PropertyImage$heroPropertyArgs<ExtArgs> = {}>(args?: Subset<T, PropertyImage$heroPropertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    galleryProperty<T extends PropertyImage$galleryPropertyArgs<ExtArgs> = {}>(args?: Subset<T, PropertyImage$galleryPropertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyImage model
   */
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'String'>
    readonly url: FieldRef<"PropertyImage", 'String'>
    readonly description: FieldRef<"PropertyImage", 'String'>
    readonly heroPropertyId: FieldRef<"PropertyImage", 'String'>
    readonly galleryPropertyId: FieldRef<"PropertyImage", 'String'>
    readonly createdAt: FieldRef<"PropertyImage", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage createManyAndReturn
   */
  export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
  }

  /**
   * PropertyImage updateManyAndReturn
   */
  export type PropertyImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to delete.
     */
    limit?: number
  }

  /**
   * PropertyImage.heroProperty
   */
  export type PropertyImage$heroPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * PropertyImage.galleryProperty
   */
  export type PropertyImage$galleryPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model PropertyStoryChapter
   */

  export type AggregatePropertyStoryChapter = {
    _count: PropertyStoryChapterCountAggregateOutputType | null
    _avg: PropertyStoryChapterAvgAggregateOutputType | null
    _sum: PropertyStoryChapterSumAggregateOutputType | null
    _min: PropertyStoryChapterMinAggregateOutputType | null
    _max: PropertyStoryChapterMaxAggregateOutputType | null
  }

  export type PropertyStoryChapterAvgAggregateOutputType = {
    duration: number | null
  }

  export type PropertyStoryChapterSumAggregateOutputType = {
    duration: number | null
  }

  export type PropertyStoryChapterMinAggregateOutputType = {
    id: string | null
    title: string | null
    narrative: string | null
    image: string | null
    duration: number | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyStoryChapterMaxAggregateOutputType = {
    id: string | null
    title: string | null
    narrative: string | null
    image: string | null
    duration: number | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyStoryChapterCountAggregateOutputType = {
    id: number
    title: number
    narrative: number
    image: number
    duration: number
    propertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyStoryChapterAvgAggregateInputType = {
    duration?: true
  }

  export type PropertyStoryChapterSumAggregateInputType = {
    duration?: true
  }

  export type PropertyStoryChapterMinAggregateInputType = {
    id?: true
    title?: true
    narrative?: true
    image?: true
    duration?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyStoryChapterMaxAggregateInputType = {
    id?: true
    title?: true
    narrative?: true
    image?: true
    duration?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyStoryChapterCountAggregateInputType = {
    id?: true
    title?: true
    narrative?: true
    image?: true
    duration?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyStoryChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyStoryChapter to aggregate.
     */
    where?: PropertyStoryChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyStoryChapters to fetch.
     */
    orderBy?: PropertyStoryChapterOrderByWithRelationInput | PropertyStoryChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyStoryChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyStoryChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyStoryChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyStoryChapters
    **/
    _count?: true | PropertyStoryChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyStoryChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyStoryChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyStoryChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyStoryChapterMaxAggregateInputType
  }

  export type GetPropertyStoryChapterAggregateType<T extends PropertyStoryChapterAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyStoryChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyStoryChapter[P]>
      : GetScalarType<T[P], AggregatePropertyStoryChapter[P]>
  }




  export type PropertyStoryChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyStoryChapterWhereInput
    orderBy?: PropertyStoryChapterOrderByWithAggregationInput | PropertyStoryChapterOrderByWithAggregationInput[]
    by: PropertyStoryChapterScalarFieldEnum[] | PropertyStoryChapterScalarFieldEnum
    having?: PropertyStoryChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyStoryChapterCountAggregateInputType | true
    _avg?: PropertyStoryChapterAvgAggregateInputType
    _sum?: PropertyStoryChapterSumAggregateInputType
    _min?: PropertyStoryChapterMinAggregateInputType
    _max?: PropertyStoryChapterMaxAggregateInputType
  }

  export type PropertyStoryChapterGroupByOutputType = {
    id: string
    title: string
    narrative: string
    image: string
    duration: number
    propertyId: string
    createdAt: Date
    updatedAt: Date
    _count: PropertyStoryChapterCountAggregateOutputType | null
    _avg: PropertyStoryChapterAvgAggregateOutputType | null
    _sum: PropertyStoryChapterSumAggregateOutputType | null
    _min: PropertyStoryChapterMinAggregateOutputType | null
    _max: PropertyStoryChapterMaxAggregateOutputType | null
  }

  type GetPropertyStoryChapterGroupByPayload<T extends PropertyStoryChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyStoryChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyStoryChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyStoryChapterGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyStoryChapterGroupByOutputType[P]>
        }
      >
    >


  export type PropertyStoryChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    narrative?: boolean
    image?: boolean
    duration?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyStoryChapter"]>

  export type PropertyStoryChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    narrative?: boolean
    image?: boolean
    duration?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyStoryChapter"]>

  export type PropertyStoryChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    narrative?: boolean
    image?: boolean
    duration?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyStoryChapter"]>

  export type PropertyStoryChapterSelectScalar = {
    id?: boolean
    title?: boolean
    narrative?: boolean
    image?: boolean
    duration?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyStoryChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "narrative" | "image" | "duration" | "propertyId" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyStoryChapter"]>
  export type PropertyStoryChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyStoryChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyStoryChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyStoryChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyStoryChapter"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      narrative: string
      image: string
      duration: number
      propertyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyStoryChapter"]>
    composites: {}
  }

  type PropertyStoryChapterGetPayload<S extends boolean | null | undefined | PropertyStoryChapterDefaultArgs> = $Result.GetResult<Prisma.$PropertyStoryChapterPayload, S>

  type PropertyStoryChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyStoryChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyStoryChapterCountAggregateInputType | true
    }

  export interface PropertyStoryChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyStoryChapter'], meta: { name: 'PropertyStoryChapter' } }
    /**
     * Find zero or one PropertyStoryChapter that matches the filter.
     * @param {PropertyStoryChapterFindUniqueArgs} args - Arguments to find a PropertyStoryChapter
     * @example
     * // Get one PropertyStoryChapter
     * const propertyStoryChapter = await prisma.propertyStoryChapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyStoryChapterFindUniqueArgs>(args: SelectSubset<T, PropertyStoryChapterFindUniqueArgs<ExtArgs>>): Prisma__PropertyStoryChapterClient<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyStoryChapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyStoryChapterFindUniqueOrThrowArgs} args - Arguments to find a PropertyStoryChapter
     * @example
     * // Get one PropertyStoryChapter
     * const propertyStoryChapter = await prisma.propertyStoryChapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyStoryChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyStoryChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyStoryChapterClient<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyStoryChapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyStoryChapterFindFirstArgs} args - Arguments to find a PropertyStoryChapter
     * @example
     * // Get one PropertyStoryChapter
     * const propertyStoryChapter = await prisma.propertyStoryChapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyStoryChapterFindFirstArgs>(args?: SelectSubset<T, PropertyStoryChapterFindFirstArgs<ExtArgs>>): Prisma__PropertyStoryChapterClient<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyStoryChapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyStoryChapterFindFirstOrThrowArgs} args - Arguments to find a PropertyStoryChapter
     * @example
     * // Get one PropertyStoryChapter
     * const propertyStoryChapter = await prisma.propertyStoryChapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyStoryChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyStoryChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyStoryChapterClient<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyStoryChapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyStoryChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyStoryChapters
     * const propertyStoryChapters = await prisma.propertyStoryChapter.findMany()
     * 
     * // Get first 10 PropertyStoryChapters
     * const propertyStoryChapters = await prisma.propertyStoryChapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyStoryChapterWithIdOnly = await prisma.propertyStoryChapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyStoryChapterFindManyArgs>(args?: SelectSubset<T, PropertyStoryChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyStoryChapter.
     * @param {PropertyStoryChapterCreateArgs} args - Arguments to create a PropertyStoryChapter.
     * @example
     * // Create one PropertyStoryChapter
     * const PropertyStoryChapter = await prisma.propertyStoryChapter.create({
     *   data: {
     *     // ... data to create a PropertyStoryChapter
     *   }
     * })
     * 
     */
    create<T extends PropertyStoryChapterCreateArgs>(args: SelectSubset<T, PropertyStoryChapterCreateArgs<ExtArgs>>): Prisma__PropertyStoryChapterClient<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyStoryChapters.
     * @param {PropertyStoryChapterCreateManyArgs} args - Arguments to create many PropertyStoryChapters.
     * @example
     * // Create many PropertyStoryChapters
     * const propertyStoryChapter = await prisma.propertyStoryChapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyStoryChapterCreateManyArgs>(args?: SelectSubset<T, PropertyStoryChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyStoryChapters and returns the data saved in the database.
     * @param {PropertyStoryChapterCreateManyAndReturnArgs} args - Arguments to create many PropertyStoryChapters.
     * @example
     * // Create many PropertyStoryChapters
     * const propertyStoryChapter = await prisma.propertyStoryChapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyStoryChapters and only return the `id`
     * const propertyStoryChapterWithIdOnly = await prisma.propertyStoryChapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyStoryChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyStoryChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyStoryChapter.
     * @param {PropertyStoryChapterDeleteArgs} args - Arguments to delete one PropertyStoryChapter.
     * @example
     * // Delete one PropertyStoryChapter
     * const PropertyStoryChapter = await prisma.propertyStoryChapter.delete({
     *   where: {
     *     // ... filter to delete one PropertyStoryChapter
     *   }
     * })
     * 
     */
    delete<T extends PropertyStoryChapterDeleteArgs>(args: SelectSubset<T, PropertyStoryChapterDeleteArgs<ExtArgs>>): Prisma__PropertyStoryChapterClient<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyStoryChapter.
     * @param {PropertyStoryChapterUpdateArgs} args - Arguments to update one PropertyStoryChapter.
     * @example
     * // Update one PropertyStoryChapter
     * const propertyStoryChapter = await prisma.propertyStoryChapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyStoryChapterUpdateArgs>(args: SelectSubset<T, PropertyStoryChapterUpdateArgs<ExtArgs>>): Prisma__PropertyStoryChapterClient<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyStoryChapters.
     * @param {PropertyStoryChapterDeleteManyArgs} args - Arguments to filter PropertyStoryChapters to delete.
     * @example
     * // Delete a few PropertyStoryChapters
     * const { count } = await prisma.propertyStoryChapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyStoryChapterDeleteManyArgs>(args?: SelectSubset<T, PropertyStoryChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyStoryChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyStoryChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyStoryChapters
     * const propertyStoryChapter = await prisma.propertyStoryChapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyStoryChapterUpdateManyArgs>(args: SelectSubset<T, PropertyStoryChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyStoryChapters and returns the data updated in the database.
     * @param {PropertyStoryChapterUpdateManyAndReturnArgs} args - Arguments to update many PropertyStoryChapters.
     * @example
     * // Update many PropertyStoryChapters
     * const propertyStoryChapter = await prisma.propertyStoryChapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyStoryChapters and only return the `id`
     * const propertyStoryChapterWithIdOnly = await prisma.propertyStoryChapter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyStoryChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyStoryChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyStoryChapter.
     * @param {PropertyStoryChapterUpsertArgs} args - Arguments to update or create a PropertyStoryChapter.
     * @example
     * // Update or create a PropertyStoryChapter
     * const propertyStoryChapter = await prisma.propertyStoryChapter.upsert({
     *   create: {
     *     // ... data to create a PropertyStoryChapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyStoryChapter we want to update
     *   }
     * })
     */
    upsert<T extends PropertyStoryChapterUpsertArgs>(args: SelectSubset<T, PropertyStoryChapterUpsertArgs<ExtArgs>>): Prisma__PropertyStoryChapterClient<$Result.GetResult<Prisma.$PropertyStoryChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyStoryChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyStoryChapterCountArgs} args - Arguments to filter PropertyStoryChapters to count.
     * @example
     * // Count the number of PropertyStoryChapters
     * const count = await prisma.propertyStoryChapter.count({
     *   where: {
     *     // ... the filter for the PropertyStoryChapters we want to count
     *   }
     * })
    **/
    count<T extends PropertyStoryChapterCountArgs>(
      args?: Subset<T, PropertyStoryChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyStoryChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyStoryChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyStoryChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyStoryChapterAggregateArgs>(args: Subset<T, PropertyStoryChapterAggregateArgs>): Prisma.PrismaPromise<GetPropertyStoryChapterAggregateType<T>>

    /**
     * Group by PropertyStoryChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyStoryChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyStoryChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyStoryChapterGroupByArgs['orderBy'] }
        : { orderBy?: PropertyStoryChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyStoryChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyStoryChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyStoryChapter model
   */
  readonly fields: PropertyStoryChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyStoryChapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyStoryChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyStoryChapter model
   */
  interface PropertyStoryChapterFieldRefs {
    readonly id: FieldRef<"PropertyStoryChapter", 'String'>
    readonly title: FieldRef<"PropertyStoryChapter", 'String'>
    readonly narrative: FieldRef<"PropertyStoryChapter", 'String'>
    readonly image: FieldRef<"PropertyStoryChapter", 'String'>
    readonly duration: FieldRef<"PropertyStoryChapter", 'Int'>
    readonly propertyId: FieldRef<"PropertyStoryChapter", 'String'>
    readonly createdAt: FieldRef<"PropertyStoryChapter", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyStoryChapter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyStoryChapter findUnique
   */
  export type PropertyStoryChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * Filter, which PropertyStoryChapter to fetch.
     */
    where: PropertyStoryChapterWhereUniqueInput
  }

  /**
   * PropertyStoryChapter findUniqueOrThrow
   */
  export type PropertyStoryChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * Filter, which PropertyStoryChapter to fetch.
     */
    where: PropertyStoryChapterWhereUniqueInput
  }

  /**
   * PropertyStoryChapter findFirst
   */
  export type PropertyStoryChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * Filter, which PropertyStoryChapter to fetch.
     */
    where?: PropertyStoryChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyStoryChapters to fetch.
     */
    orderBy?: PropertyStoryChapterOrderByWithRelationInput | PropertyStoryChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyStoryChapters.
     */
    cursor?: PropertyStoryChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyStoryChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyStoryChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyStoryChapters.
     */
    distinct?: PropertyStoryChapterScalarFieldEnum | PropertyStoryChapterScalarFieldEnum[]
  }

  /**
   * PropertyStoryChapter findFirstOrThrow
   */
  export type PropertyStoryChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * Filter, which PropertyStoryChapter to fetch.
     */
    where?: PropertyStoryChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyStoryChapters to fetch.
     */
    orderBy?: PropertyStoryChapterOrderByWithRelationInput | PropertyStoryChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyStoryChapters.
     */
    cursor?: PropertyStoryChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyStoryChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyStoryChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyStoryChapters.
     */
    distinct?: PropertyStoryChapterScalarFieldEnum | PropertyStoryChapterScalarFieldEnum[]
  }

  /**
   * PropertyStoryChapter findMany
   */
  export type PropertyStoryChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * Filter, which PropertyStoryChapters to fetch.
     */
    where?: PropertyStoryChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyStoryChapters to fetch.
     */
    orderBy?: PropertyStoryChapterOrderByWithRelationInput | PropertyStoryChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyStoryChapters.
     */
    cursor?: PropertyStoryChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyStoryChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyStoryChapters.
     */
    skip?: number
    distinct?: PropertyStoryChapterScalarFieldEnum | PropertyStoryChapterScalarFieldEnum[]
  }

  /**
   * PropertyStoryChapter create
   */
  export type PropertyStoryChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyStoryChapter.
     */
    data: XOR<PropertyStoryChapterCreateInput, PropertyStoryChapterUncheckedCreateInput>
  }

  /**
   * PropertyStoryChapter createMany
   */
  export type PropertyStoryChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyStoryChapters.
     */
    data: PropertyStoryChapterCreateManyInput | PropertyStoryChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyStoryChapter createManyAndReturn
   */
  export type PropertyStoryChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyStoryChapters.
     */
    data: PropertyStoryChapterCreateManyInput | PropertyStoryChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyStoryChapter update
   */
  export type PropertyStoryChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyStoryChapter.
     */
    data: XOR<PropertyStoryChapterUpdateInput, PropertyStoryChapterUncheckedUpdateInput>
    /**
     * Choose, which PropertyStoryChapter to update.
     */
    where: PropertyStoryChapterWhereUniqueInput
  }

  /**
   * PropertyStoryChapter updateMany
   */
  export type PropertyStoryChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyStoryChapters.
     */
    data: XOR<PropertyStoryChapterUpdateManyMutationInput, PropertyStoryChapterUncheckedUpdateManyInput>
    /**
     * Filter which PropertyStoryChapters to update
     */
    where?: PropertyStoryChapterWhereInput
    /**
     * Limit how many PropertyStoryChapters to update.
     */
    limit?: number
  }

  /**
   * PropertyStoryChapter updateManyAndReturn
   */
  export type PropertyStoryChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * The data used to update PropertyStoryChapters.
     */
    data: XOR<PropertyStoryChapterUpdateManyMutationInput, PropertyStoryChapterUncheckedUpdateManyInput>
    /**
     * Filter which PropertyStoryChapters to update
     */
    where?: PropertyStoryChapterWhereInput
    /**
     * Limit how many PropertyStoryChapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyStoryChapter upsert
   */
  export type PropertyStoryChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyStoryChapter to update in case it exists.
     */
    where: PropertyStoryChapterWhereUniqueInput
    /**
     * In case the PropertyStoryChapter found by the `where` argument doesn't exist, create a new PropertyStoryChapter with this data.
     */
    create: XOR<PropertyStoryChapterCreateInput, PropertyStoryChapterUncheckedCreateInput>
    /**
     * In case the PropertyStoryChapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyStoryChapterUpdateInput, PropertyStoryChapterUncheckedUpdateInput>
  }

  /**
   * PropertyStoryChapter delete
   */
  export type PropertyStoryChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
    /**
     * Filter which PropertyStoryChapter to delete.
     */
    where: PropertyStoryChapterWhereUniqueInput
  }

  /**
   * PropertyStoryChapter deleteMany
   */
  export type PropertyStoryChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyStoryChapters to delete
     */
    where?: PropertyStoryChapterWhereInput
    /**
     * Limit how many PropertyStoryChapters to delete.
     */
    limit?: number
  }

  /**
   * PropertyStoryChapter without action
   */
  export type PropertyStoryChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyStoryChapter
     */
    select?: PropertyStoryChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyStoryChapter
     */
    omit?: PropertyStoryChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyStoryChapterInclude<ExtArgs> | null
  }


  /**
   * Model PropertySection
   */

  export type AggregatePropertySection = {
    _count: PropertySectionCountAggregateOutputType | null
    _min: PropertySectionMinAggregateOutputType | null
    _max: PropertySectionMaxAggregateOutputType | null
  }

  export type PropertySectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertySectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertySectionCountAggregateOutputType = {
    id: number
    title: number
    content: number
    images: number
    propertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertySectionMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertySectionMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertySectionCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    images?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertySectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertySection to aggregate.
     */
    where?: PropertySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertySections to fetch.
     */
    orderBy?: PropertySectionOrderByWithRelationInput | PropertySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertySections
    **/
    _count?: true | PropertySectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertySectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertySectionMaxAggregateInputType
  }

  export type GetPropertySectionAggregateType<T extends PropertySectionAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertySection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertySection[P]>
      : GetScalarType<T[P], AggregatePropertySection[P]>
  }




  export type PropertySectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertySectionWhereInput
    orderBy?: PropertySectionOrderByWithAggregationInput | PropertySectionOrderByWithAggregationInput[]
    by: PropertySectionScalarFieldEnum[] | PropertySectionScalarFieldEnum
    having?: PropertySectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertySectionCountAggregateInputType | true
    _min?: PropertySectionMinAggregateInputType
    _max?: PropertySectionMaxAggregateInputType
  }

  export type PropertySectionGroupByOutputType = {
    id: string
    title: string | null
    content: string | null
    images: string[]
    propertyId: string
    createdAt: Date
    updatedAt: Date
    _count: PropertySectionCountAggregateOutputType | null
    _min: PropertySectionMinAggregateOutputType | null
    _max: PropertySectionMaxAggregateOutputType | null
  }

  type GetPropertySectionGroupByPayload<T extends PropertySectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertySectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertySectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertySectionGroupByOutputType[P]>
            : GetScalarType<T[P], PropertySectionGroupByOutputType[P]>
        }
      >
    >


  export type PropertySectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    images?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertySection"]>

  export type PropertySectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    images?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertySection"]>

  export type PropertySectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    images?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertySection"]>

  export type PropertySectionSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    images?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertySectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "images" | "propertyId" | "createdAt" | "updatedAt", ExtArgs["result"]["propertySection"]>
  export type PropertySectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertySectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertySectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertySectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertySection"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      content: string | null
      images: string[]
      propertyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertySection"]>
    composites: {}
  }

  type PropertySectionGetPayload<S extends boolean | null | undefined | PropertySectionDefaultArgs> = $Result.GetResult<Prisma.$PropertySectionPayload, S>

  type PropertySectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertySectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertySectionCountAggregateInputType | true
    }

  export interface PropertySectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertySection'], meta: { name: 'PropertySection' } }
    /**
     * Find zero or one PropertySection that matches the filter.
     * @param {PropertySectionFindUniqueArgs} args - Arguments to find a PropertySection
     * @example
     * // Get one PropertySection
     * const propertySection = await prisma.propertySection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertySectionFindUniqueArgs>(args: SelectSubset<T, PropertySectionFindUniqueArgs<ExtArgs>>): Prisma__PropertySectionClient<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertySection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertySectionFindUniqueOrThrowArgs} args - Arguments to find a PropertySection
     * @example
     * // Get one PropertySection
     * const propertySection = await prisma.propertySection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertySectionFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertySectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertySectionClient<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertySection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySectionFindFirstArgs} args - Arguments to find a PropertySection
     * @example
     * // Get one PropertySection
     * const propertySection = await prisma.propertySection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertySectionFindFirstArgs>(args?: SelectSubset<T, PropertySectionFindFirstArgs<ExtArgs>>): Prisma__PropertySectionClient<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertySection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySectionFindFirstOrThrowArgs} args - Arguments to find a PropertySection
     * @example
     * // Get one PropertySection
     * const propertySection = await prisma.propertySection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertySectionFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertySectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertySectionClient<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertySections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertySections
     * const propertySections = await prisma.propertySection.findMany()
     * 
     * // Get first 10 PropertySections
     * const propertySections = await prisma.propertySection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertySectionWithIdOnly = await prisma.propertySection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertySectionFindManyArgs>(args?: SelectSubset<T, PropertySectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertySection.
     * @param {PropertySectionCreateArgs} args - Arguments to create a PropertySection.
     * @example
     * // Create one PropertySection
     * const PropertySection = await prisma.propertySection.create({
     *   data: {
     *     // ... data to create a PropertySection
     *   }
     * })
     * 
     */
    create<T extends PropertySectionCreateArgs>(args: SelectSubset<T, PropertySectionCreateArgs<ExtArgs>>): Prisma__PropertySectionClient<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertySections.
     * @param {PropertySectionCreateManyArgs} args - Arguments to create many PropertySections.
     * @example
     * // Create many PropertySections
     * const propertySection = await prisma.propertySection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertySectionCreateManyArgs>(args?: SelectSubset<T, PropertySectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertySections and returns the data saved in the database.
     * @param {PropertySectionCreateManyAndReturnArgs} args - Arguments to create many PropertySections.
     * @example
     * // Create many PropertySections
     * const propertySection = await prisma.propertySection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertySections and only return the `id`
     * const propertySectionWithIdOnly = await prisma.propertySection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertySectionCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertySectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertySection.
     * @param {PropertySectionDeleteArgs} args - Arguments to delete one PropertySection.
     * @example
     * // Delete one PropertySection
     * const PropertySection = await prisma.propertySection.delete({
     *   where: {
     *     // ... filter to delete one PropertySection
     *   }
     * })
     * 
     */
    delete<T extends PropertySectionDeleteArgs>(args: SelectSubset<T, PropertySectionDeleteArgs<ExtArgs>>): Prisma__PropertySectionClient<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertySection.
     * @param {PropertySectionUpdateArgs} args - Arguments to update one PropertySection.
     * @example
     * // Update one PropertySection
     * const propertySection = await prisma.propertySection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertySectionUpdateArgs>(args: SelectSubset<T, PropertySectionUpdateArgs<ExtArgs>>): Prisma__PropertySectionClient<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertySections.
     * @param {PropertySectionDeleteManyArgs} args - Arguments to filter PropertySections to delete.
     * @example
     * // Delete a few PropertySections
     * const { count } = await prisma.propertySection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertySectionDeleteManyArgs>(args?: SelectSubset<T, PropertySectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertySections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertySections
     * const propertySection = await prisma.propertySection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertySectionUpdateManyArgs>(args: SelectSubset<T, PropertySectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertySections and returns the data updated in the database.
     * @param {PropertySectionUpdateManyAndReturnArgs} args - Arguments to update many PropertySections.
     * @example
     * // Update many PropertySections
     * const propertySection = await prisma.propertySection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertySections and only return the `id`
     * const propertySectionWithIdOnly = await prisma.propertySection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertySectionUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertySectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertySection.
     * @param {PropertySectionUpsertArgs} args - Arguments to update or create a PropertySection.
     * @example
     * // Update or create a PropertySection
     * const propertySection = await prisma.propertySection.upsert({
     *   create: {
     *     // ... data to create a PropertySection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertySection we want to update
     *   }
     * })
     */
    upsert<T extends PropertySectionUpsertArgs>(args: SelectSubset<T, PropertySectionUpsertArgs<ExtArgs>>): Prisma__PropertySectionClient<$Result.GetResult<Prisma.$PropertySectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertySections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySectionCountArgs} args - Arguments to filter PropertySections to count.
     * @example
     * // Count the number of PropertySections
     * const count = await prisma.propertySection.count({
     *   where: {
     *     // ... the filter for the PropertySections we want to count
     *   }
     * })
    **/
    count<T extends PropertySectionCountArgs>(
      args?: Subset<T, PropertySectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertySectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertySection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertySectionAggregateArgs>(args: Subset<T, PropertySectionAggregateArgs>): Prisma.PrismaPromise<GetPropertySectionAggregateType<T>>

    /**
     * Group by PropertySection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertySectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertySectionGroupByArgs['orderBy'] }
        : { orderBy?: PropertySectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertySectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertySectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertySection model
   */
  readonly fields: PropertySectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertySection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertySectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertySection model
   */
  interface PropertySectionFieldRefs {
    readonly id: FieldRef<"PropertySection", 'String'>
    readonly title: FieldRef<"PropertySection", 'String'>
    readonly content: FieldRef<"PropertySection", 'String'>
    readonly images: FieldRef<"PropertySection", 'String[]'>
    readonly propertyId: FieldRef<"PropertySection", 'String'>
    readonly createdAt: FieldRef<"PropertySection", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertySection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertySection findUnique
   */
  export type PropertySectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * Filter, which PropertySection to fetch.
     */
    where: PropertySectionWhereUniqueInput
  }

  /**
   * PropertySection findUniqueOrThrow
   */
  export type PropertySectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * Filter, which PropertySection to fetch.
     */
    where: PropertySectionWhereUniqueInput
  }

  /**
   * PropertySection findFirst
   */
  export type PropertySectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * Filter, which PropertySection to fetch.
     */
    where?: PropertySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertySections to fetch.
     */
    orderBy?: PropertySectionOrderByWithRelationInput | PropertySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertySections.
     */
    cursor?: PropertySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertySections.
     */
    distinct?: PropertySectionScalarFieldEnum | PropertySectionScalarFieldEnum[]
  }

  /**
   * PropertySection findFirstOrThrow
   */
  export type PropertySectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * Filter, which PropertySection to fetch.
     */
    where?: PropertySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertySections to fetch.
     */
    orderBy?: PropertySectionOrderByWithRelationInput | PropertySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertySections.
     */
    cursor?: PropertySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertySections.
     */
    distinct?: PropertySectionScalarFieldEnum | PropertySectionScalarFieldEnum[]
  }

  /**
   * PropertySection findMany
   */
  export type PropertySectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * Filter, which PropertySections to fetch.
     */
    where?: PropertySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertySections to fetch.
     */
    orderBy?: PropertySectionOrderByWithRelationInput | PropertySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertySections.
     */
    cursor?: PropertySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertySections.
     */
    skip?: number
    distinct?: PropertySectionScalarFieldEnum | PropertySectionScalarFieldEnum[]
  }

  /**
   * PropertySection create
   */
  export type PropertySectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertySection.
     */
    data: XOR<PropertySectionCreateInput, PropertySectionUncheckedCreateInput>
  }

  /**
   * PropertySection createMany
   */
  export type PropertySectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertySections.
     */
    data: PropertySectionCreateManyInput | PropertySectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertySection createManyAndReturn
   */
  export type PropertySectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * The data used to create many PropertySections.
     */
    data: PropertySectionCreateManyInput | PropertySectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertySection update
   */
  export type PropertySectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertySection.
     */
    data: XOR<PropertySectionUpdateInput, PropertySectionUncheckedUpdateInput>
    /**
     * Choose, which PropertySection to update.
     */
    where: PropertySectionWhereUniqueInput
  }

  /**
   * PropertySection updateMany
   */
  export type PropertySectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertySections.
     */
    data: XOR<PropertySectionUpdateManyMutationInput, PropertySectionUncheckedUpdateManyInput>
    /**
     * Filter which PropertySections to update
     */
    where?: PropertySectionWhereInput
    /**
     * Limit how many PropertySections to update.
     */
    limit?: number
  }

  /**
   * PropertySection updateManyAndReturn
   */
  export type PropertySectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * The data used to update PropertySections.
     */
    data: XOR<PropertySectionUpdateManyMutationInput, PropertySectionUncheckedUpdateManyInput>
    /**
     * Filter which PropertySections to update
     */
    where?: PropertySectionWhereInput
    /**
     * Limit how many PropertySections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertySection upsert
   */
  export type PropertySectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertySection to update in case it exists.
     */
    where: PropertySectionWhereUniqueInput
    /**
     * In case the PropertySection found by the `where` argument doesn't exist, create a new PropertySection with this data.
     */
    create: XOR<PropertySectionCreateInput, PropertySectionUncheckedCreateInput>
    /**
     * In case the PropertySection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertySectionUpdateInput, PropertySectionUncheckedUpdateInput>
  }

  /**
   * PropertySection delete
   */
  export type PropertySectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
    /**
     * Filter which PropertySection to delete.
     */
    where: PropertySectionWhereUniqueInput
  }

  /**
   * PropertySection deleteMany
   */
  export type PropertySectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertySections to delete
     */
    where?: PropertySectionWhereInput
    /**
     * Limit how many PropertySections to delete.
     */
    limit?: number
  }

  /**
   * PropertySection without action
   */
  export type PropertySectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySection
     */
    select?: PropertySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertySection
     */
    omit?: PropertySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertySectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    fullDescription: 'fullDescription',
    address: 'address',
    price: 'price',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    area: 'area',
    yearBuilt: 'yearBuilt',
    features: 'features',
    category: 'category',
    location: 'location',
    image: 'image',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    description: 'description',
    heroPropertyId: 'heroPropertyId',
    galleryPropertyId: 'galleryPropertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const PropertyStoryChapterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    narrative: 'narrative',
    image: 'image',
    duration: 'duration',
    propertyId: 'propertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyStoryChapterScalarFieldEnum = (typeof PropertyStoryChapterScalarFieldEnum)[keyof typeof PropertyStoryChapterScalarFieldEnum]


  export const PropertySectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    images: 'images',
    propertyId: 'propertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertySectionScalarFieldEnum = (typeof PropertySectionScalarFieldEnum)[keyof typeof PropertySectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PropertyCategory'
   */
  export type EnumPropertyCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyCategory'>
    


  /**
   * Reference to a field of type 'PropertyCategory[]'
   */
  export type ListEnumPropertyCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyCategory[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    slug?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    fullDescription?: StringNullableFilter<"Property"> | string | null
    address?: StringNullableFilter<"Property"> | string | null
    price?: StringNullableFilter<"Property"> | string | null
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: IntNullableFilter<"Property"> | number | null
    area?: FloatNullableFilter<"Property"> | number | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    features?: StringNullableListFilter<"Property">
    category?: EnumPropertyCategoryFilter<"Property"> | $Enums.PropertyCategory
    location?: StringNullableFilter<"Property"> | string | null
    image?: StringFilter<"Property"> | string
    tags?: StringNullableListFilter<"Property">
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    heroImages?: PropertyImageListRelationFilter
    galleryImages?: PropertyImageListRelationFilter
    storyChapters?: PropertyStoryChapterListRelationFilter
    sections?: PropertySectionListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fullDescription?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    features?: SortOrder
    category?: SortOrder
    location?: SortOrderInput | SortOrder
    image?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    heroImages?: PropertyImageOrderByRelationAggregateInput
    galleryImages?: PropertyImageOrderByRelationAggregateInput
    storyChapters?: PropertyStoryChapterOrderByRelationAggregateInput
    sections?: PropertySectionOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    fullDescription?: StringNullableFilter<"Property"> | string | null
    address?: StringNullableFilter<"Property"> | string | null
    price?: StringNullableFilter<"Property"> | string | null
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: IntNullableFilter<"Property"> | number | null
    area?: FloatNullableFilter<"Property"> | number | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    features?: StringNullableListFilter<"Property">
    category?: EnumPropertyCategoryFilter<"Property"> | $Enums.PropertyCategory
    location?: StringNullableFilter<"Property"> | string | null
    image?: StringFilter<"Property"> | string
    tags?: StringNullableListFilter<"Property">
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    heroImages?: PropertyImageListRelationFilter
    galleryImages?: PropertyImageListRelationFilter
    storyChapters?: PropertyStoryChapterListRelationFilter
    sections?: PropertySectionListRelationFilter
  }, "id" | "slug">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fullDescription?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    features?: SortOrder
    category?: SortOrder
    location?: SortOrderInput | SortOrder
    image?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    slug?: StringWithAggregatesFilter<"Property"> | string
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    fullDescription?: StringNullableWithAggregatesFilter<"Property"> | string | null
    address?: StringNullableWithAggregatesFilter<"Property"> | string | null
    price?: StringNullableWithAggregatesFilter<"Property"> | string | null
    bedrooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    bathrooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    area?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    yearBuilt?: IntNullableWithAggregatesFilter<"Property"> | number | null
    features?: StringNullableListFilter<"Property">
    category?: EnumPropertyCategoryWithAggregatesFilter<"Property"> | $Enums.PropertyCategory
    location?: StringNullableWithAggregatesFilter<"Property"> | string | null
    image?: StringWithAggregatesFilter<"Property"> | string
    tags?: StringNullableListFilter<"Property">
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: StringFilter<"PropertyImage"> | string
    url?: StringFilter<"PropertyImage"> | string
    description?: StringNullableFilter<"PropertyImage"> | string | null
    heroPropertyId?: StringNullableFilter<"PropertyImage"> | string | null
    galleryPropertyId?: StringNullableFilter<"PropertyImage"> | string | null
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
    heroProperty?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
    galleryProperty?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    heroPropertyId?: SortOrderInput | SortOrder
    galleryPropertyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    heroProperty?: PropertyOrderByWithRelationInput
    galleryProperty?: PropertyOrderByWithRelationInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    url?: StringFilter<"PropertyImage"> | string
    description?: StringNullableFilter<"PropertyImage"> | string | null
    heroPropertyId?: StringNullableFilter<"PropertyImage"> | string | null
    galleryPropertyId?: StringNullableFilter<"PropertyImage"> | string | null
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
    heroProperty?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
    galleryProperty?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    heroPropertyId?: SortOrderInput | SortOrder
    galleryPropertyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyImage"> | string
    url?: StringWithAggregatesFilter<"PropertyImage"> | string
    description?: StringNullableWithAggregatesFilter<"PropertyImage"> | string | null
    heroPropertyId?: StringNullableWithAggregatesFilter<"PropertyImage"> | string | null
    galleryPropertyId?: StringNullableWithAggregatesFilter<"PropertyImage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
  }

  export type PropertyStoryChapterWhereInput = {
    AND?: PropertyStoryChapterWhereInput | PropertyStoryChapterWhereInput[]
    OR?: PropertyStoryChapterWhereInput[]
    NOT?: PropertyStoryChapterWhereInput | PropertyStoryChapterWhereInput[]
    id?: StringFilter<"PropertyStoryChapter"> | string
    title?: StringFilter<"PropertyStoryChapter"> | string
    narrative?: StringFilter<"PropertyStoryChapter"> | string
    image?: StringFilter<"PropertyStoryChapter"> | string
    duration?: IntFilter<"PropertyStoryChapter"> | number
    propertyId?: StringFilter<"PropertyStoryChapter"> | string
    createdAt?: DateTimeFilter<"PropertyStoryChapter"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyStoryChapter"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyStoryChapterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    image?: SortOrder
    duration?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyStoryChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyStoryChapterWhereInput | PropertyStoryChapterWhereInput[]
    OR?: PropertyStoryChapterWhereInput[]
    NOT?: PropertyStoryChapterWhereInput | PropertyStoryChapterWhereInput[]
    title?: StringFilter<"PropertyStoryChapter"> | string
    narrative?: StringFilter<"PropertyStoryChapter"> | string
    image?: StringFilter<"PropertyStoryChapter"> | string
    duration?: IntFilter<"PropertyStoryChapter"> | number
    propertyId?: StringFilter<"PropertyStoryChapter"> | string
    createdAt?: DateTimeFilter<"PropertyStoryChapter"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyStoryChapter"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyStoryChapterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    image?: SortOrder
    duration?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyStoryChapterCountOrderByAggregateInput
    _avg?: PropertyStoryChapterAvgOrderByAggregateInput
    _max?: PropertyStoryChapterMaxOrderByAggregateInput
    _min?: PropertyStoryChapterMinOrderByAggregateInput
    _sum?: PropertyStoryChapterSumOrderByAggregateInput
  }

  export type PropertyStoryChapterScalarWhereWithAggregatesInput = {
    AND?: PropertyStoryChapterScalarWhereWithAggregatesInput | PropertyStoryChapterScalarWhereWithAggregatesInput[]
    OR?: PropertyStoryChapterScalarWhereWithAggregatesInput[]
    NOT?: PropertyStoryChapterScalarWhereWithAggregatesInput | PropertyStoryChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyStoryChapter"> | string
    title?: StringWithAggregatesFilter<"PropertyStoryChapter"> | string
    narrative?: StringWithAggregatesFilter<"PropertyStoryChapter"> | string
    image?: StringWithAggregatesFilter<"PropertyStoryChapter"> | string
    duration?: IntWithAggregatesFilter<"PropertyStoryChapter"> | number
    propertyId?: StringWithAggregatesFilter<"PropertyStoryChapter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyStoryChapter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyStoryChapter"> | Date | string
  }

  export type PropertySectionWhereInput = {
    AND?: PropertySectionWhereInput | PropertySectionWhereInput[]
    OR?: PropertySectionWhereInput[]
    NOT?: PropertySectionWhereInput | PropertySectionWhereInput[]
    id?: StringFilter<"PropertySection"> | string
    title?: StringNullableFilter<"PropertySection"> | string | null
    content?: StringNullableFilter<"PropertySection"> | string | null
    images?: StringNullableListFilter<"PropertySection">
    propertyId?: StringFilter<"PropertySection"> | string
    createdAt?: DateTimeFilter<"PropertySection"> | Date | string
    updatedAt?: DateTimeFilter<"PropertySection"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertySectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    images?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertySectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertySectionWhereInput | PropertySectionWhereInput[]
    OR?: PropertySectionWhereInput[]
    NOT?: PropertySectionWhereInput | PropertySectionWhereInput[]
    title?: StringNullableFilter<"PropertySection"> | string | null
    content?: StringNullableFilter<"PropertySection"> | string | null
    images?: StringNullableListFilter<"PropertySection">
    propertyId?: StringFilter<"PropertySection"> | string
    createdAt?: DateTimeFilter<"PropertySection"> | Date | string
    updatedAt?: DateTimeFilter<"PropertySection"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertySectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    images?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertySectionCountOrderByAggregateInput
    _max?: PropertySectionMaxOrderByAggregateInput
    _min?: PropertySectionMinOrderByAggregateInput
  }

  export type PropertySectionScalarWhereWithAggregatesInput = {
    AND?: PropertySectionScalarWhereWithAggregatesInput | PropertySectionScalarWhereWithAggregatesInput[]
    OR?: PropertySectionScalarWhereWithAggregatesInput[]
    NOT?: PropertySectionScalarWhereWithAggregatesInput | PropertySectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertySection"> | string
    title?: StringNullableWithAggregatesFilter<"PropertySection"> | string | null
    content?: StringNullableWithAggregatesFilter<"PropertySection"> | string | null
    images?: StringNullableListFilter<"PropertySection">
    propertyId?: StringWithAggregatesFilter<"PropertySection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertySection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertySection"> | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    heroImages?: PropertyImageCreateNestedManyWithoutHeroPropertyInput
    galleryImages?: PropertyImageCreateNestedManyWithoutGalleryPropertyInput
    storyChapters?: PropertyStoryChapterCreateNestedManyWithoutPropertyInput
    sections?: PropertySectionCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    heroImages?: PropertyImageUncheckedCreateNestedManyWithoutHeroPropertyInput
    galleryImages?: PropertyImageUncheckedCreateNestedManyWithoutGalleryPropertyInput
    storyChapters?: PropertyStoryChapterUncheckedCreateNestedManyWithoutPropertyInput
    sections?: PropertySectionUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroImages?: PropertyImageUpdateManyWithoutHeroPropertyNestedInput
    galleryImages?: PropertyImageUpdateManyWithoutGalleryPropertyNestedInput
    storyChapters?: PropertyStoryChapterUpdateManyWithoutPropertyNestedInput
    sections?: PropertySectionUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroImages?: PropertyImageUncheckedUpdateManyWithoutHeroPropertyNestedInput
    galleryImages?: PropertyImageUncheckedUpdateManyWithoutGalleryPropertyNestedInput
    storyChapters?: PropertyStoryChapterUncheckedUpdateManyWithoutPropertyNestedInput
    sections?: PropertySectionUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateInput = {
    id?: string
    url: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    heroProperty?: PropertyCreateNestedOneWithoutHeroImagesInput
    galleryProperty?: PropertyCreateNestedOneWithoutGalleryImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: string
    url: string
    description?: string | null
    heroPropertyId?: string | null
    galleryPropertyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroProperty?: PropertyUpdateOneWithoutHeroImagesNestedInput
    galleryProperty?: PropertyUpdateOneWithoutGalleryImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroPropertyId?: NullableStringFieldUpdateOperationsInput | string | null
    galleryPropertyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyInput = {
    id?: string
    url: string
    description?: string | null
    heroPropertyId?: string | null
    galleryPropertyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroPropertyId?: NullableStringFieldUpdateOperationsInput | string | null
    galleryPropertyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyStoryChapterCreateInput = {
    id?: string
    title: string
    narrative: string
    image: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutStoryChaptersInput
  }

  export type PropertyStoryChapterUncheckedCreateInput = {
    id?: string
    title: string
    narrative: string
    image: string
    duration: number
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyStoryChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutStoryChaptersNestedInput
  }

  export type PropertyStoryChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyStoryChapterCreateManyInput = {
    id?: string
    title: string
    narrative: string
    image: string
    duration: number
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyStoryChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyStoryChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertySectionCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    images?: PropertySectionCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutSectionsInput
  }

  export type PropertySectionUncheckedCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    images?: PropertySectionCreateimagesInput | string[]
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertySectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PropertySectionUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type PropertySectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PropertySectionUpdateimagesInput | string[]
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertySectionCreateManyInput = {
    id?: string
    title?: string | null
    content?: string | null
    images?: PropertySectionCreateimagesInput | string[]
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertySectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PropertySectionUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertySectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PropertySectionUpdateimagesInput | string[]
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPropertyCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyCategory | EnumPropertyCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyCategory[] | ListEnumPropertyCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyCategory[] | ListEnumPropertyCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyCategoryFilter<$PrismaModel> | $Enums.PropertyCategory
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type PropertyStoryChapterListRelationFilter = {
    every?: PropertyStoryChapterWhereInput
    some?: PropertyStoryChapterWhereInput
    none?: PropertyStoryChapterWhereInput
  }

  export type PropertySectionListRelationFilter = {
    every?: PropertySectionWhereInput
    some?: PropertySectionWhereInput
    none?: PropertySectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyStoryChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertySectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fullDescription?: SortOrder
    address?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    yearBuilt?: SortOrder
    features?: SortOrder
    category?: SortOrder
    location?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    yearBuilt?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fullDescription?: SortOrder
    address?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    yearBuilt?: SortOrder
    category?: SortOrder
    location?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fullDescription?: SortOrder
    address?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    yearBuilt?: SortOrder
    category?: SortOrder
    location?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    yearBuilt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumPropertyCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyCategory | EnumPropertyCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyCategory[] | ListEnumPropertyCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyCategory[] | ListEnumPropertyCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PropertyCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyCategoryFilter<$PrismaModel>
    _max?: NestedEnumPropertyCategoryFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PropertyNullableScalarRelationFilter = {
    is?: PropertyWhereInput | null
    isNot?: PropertyWhereInput | null
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    heroPropertyId?: SortOrder
    galleryPropertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    heroPropertyId?: SortOrder
    galleryPropertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    heroPropertyId?: SortOrder
    galleryPropertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyStoryChapterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    image?: SortOrder
    duration?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyStoryChapterAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type PropertyStoryChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    image?: SortOrder
    duration?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyStoryChapterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    image?: SortOrder
    duration?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyStoryChapterSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PropertySectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    images?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCreatefeaturesInput = {
    set: string[]
  }

  export type PropertyCreatetagsInput = {
    set: string[]
  }

  export type PropertyImageCreateNestedManyWithoutHeroPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutHeroPropertyInput, PropertyImageUncheckedCreateWithoutHeroPropertyInput> | PropertyImageCreateWithoutHeroPropertyInput[] | PropertyImageUncheckedCreateWithoutHeroPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutHeroPropertyInput | PropertyImageCreateOrConnectWithoutHeroPropertyInput[]
    createMany?: PropertyImageCreateManyHeroPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyImageCreateNestedManyWithoutGalleryPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutGalleryPropertyInput, PropertyImageUncheckedCreateWithoutGalleryPropertyInput> | PropertyImageCreateWithoutGalleryPropertyInput[] | PropertyImageUncheckedCreateWithoutGalleryPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutGalleryPropertyInput | PropertyImageCreateOrConnectWithoutGalleryPropertyInput[]
    createMany?: PropertyImageCreateManyGalleryPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyStoryChapterCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyStoryChapterCreateWithoutPropertyInput, PropertyStoryChapterUncheckedCreateWithoutPropertyInput> | PropertyStoryChapterCreateWithoutPropertyInput[] | PropertyStoryChapterUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyStoryChapterCreateOrConnectWithoutPropertyInput | PropertyStoryChapterCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyStoryChapterCreateManyPropertyInputEnvelope
    connect?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
  }

  export type PropertySectionCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertySectionCreateWithoutPropertyInput, PropertySectionUncheckedCreateWithoutPropertyInput> | PropertySectionCreateWithoutPropertyInput[] | PropertySectionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertySectionCreateOrConnectWithoutPropertyInput | PropertySectionCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertySectionCreateManyPropertyInputEnvelope
    connect?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutHeroPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutHeroPropertyInput, PropertyImageUncheckedCreateWithoutHeroPropertyInput> | PropertyImageCreateWithoutHeroPropertyInput[] | PropertyImageUncheckedCreateWithoutHeroPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutHeroPropertyInput | PropertyImageCreateOrConnectWithoutHeroPropertyInput[]
    createMany?: PropertyImageCreateManyHeroPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutGalleryPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutGalleryPropertyInput, PropertyImageUncheckedCreateWithoutGalleryPropertyInput> | PropertyImageCreateWithoutGalleryPropertyInput[] | PropertyImageUncheckedCreateWithoutGalleryPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutGalleryPropertyInput | PropertyImageCreateOrConnectWithoutGalleryPropertyInput[]
    createMany?: PropertyImageCreateManyGalleryPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyStoryChapterUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyStoryChapterCreateWithoutPropertyInput, PropertyStoryChapterUncheckedCreateWithoutPropertyInput> | PropertyStoryChapterCreateWithoutPropertyInput[] | PropertyStoryChapterUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyStoryChapterCreateOrConnectWithoutPropertyInput | PropertyStoryChapterCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyStoryChapterCreateManyPropertyInputEnvelope
    connect?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
  }

  export type PropertySectionUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertySectionCreateWithoutPropertyInput, PropertySectionUncheckedCreateWithoutPropertyInput> | PropertySectionCreateWithoutPropertyInput[] | PropertySectionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertySectionCreateOrConnectWithoutPropertyInput | PropertySectionCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertySectionCreateManyPropertyInputEnvelope
    connect?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPropertyCategoryFieldUpdateOperationsInput = {
    set?: $Enums.PropertyCategory
  }

  export type PropertyUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyImageUpdateManyWithoutHeroPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutHeroPropertyInput, PropertyImageUncheckedCreateWithoutHeroPropertyInput> | PropertyImageCreateWithoutHeroPropertyInput[] | PropertyImageUncheckedCreateWithoutHeroPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutHeroPropertyInput | PropertyImageCreateOrConnectWithoutHeroPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutHeroPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutHeroPropertyInput[]
    createMany?: PropertyImageCreateManyHeroPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutHeroPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutHeroPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutHeroPropertyInput | PropertyImageUpdateManyWithWhereWithoutHeroPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyImageUpdateManyWithoutGalleryPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutGalleryPropertyInput, PropertyImageUncheckedCreateWithoutGalleryPropertyInput> | PropertyImageCreateWithoutGalleryPropertyInput[] | PropertyImageUncheckedCreateWithoutGalleryPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutGalleryPropertyInput | PropertyImageCreateOrConnectWithoutGalleryPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutGalleryPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutGalleryPropertyInput[]
    createMany?: PropertyImageCreateManyGalleryPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutGalleryPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutGalleryPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutGalleryPropertyInput | PropertyImageUpdateManyWithWhereWithoutGalleryPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyStoryChapterUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyStoryChapterCreateWithoutPropertyInput, PropertyStoryChapterUncheckedCreateWithoutPropertyInput> | PropertyStoryChapterCreateWithoutPropertyInput[] | PropertyStoryChapterUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyStoryChapterCreateOrConnectWithoutPropertyInput | PropertyStoryChapterCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyStoryChapterUpsertWithWhereUniqueWithoutPropertyInput | PropertyStoryChapterUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyStoryChapterCreateManyPropertyInputEnvelope
    set?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
    disconnect?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
    delete?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
    connect?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
    update?: PropertyStoryChapterUpdateWithWhereUniqueWithoutPropertyInput | PropertyStoryChapterUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyStoryChapterUpdateManyWithWhereWithoutPropertyInput | PropertyStoryChapterUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyStoryChapterScalarWhereInput | PropertyStoryChapterScalarWhereInput[]
  }

  export type PropertySectionUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertySectionCreateWithoutPropertyInput, PropertySectionUncheckedCreateWithoutPropertyInput> | PropertySectionCreateWithoutPropertyInput[] | PropertySectionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertySectionCreateOrConnectWithoutPropertyInput | PropertySectionCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertySectionUpsertWithWhereUniqueWithoutPropertyInput | PropertySectionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertySectionCreateManyPropertyInputEnvelope
    set?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
    disconnect?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
    delete?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
    connect?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
    update?: PropertySectionUpdateWithWhereUniqueWithoutPropertyInput | PropertySectionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertySectionUpdateManyWithWhereWithoutPropertyInput | PropertySectionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertySectionScalarWhereInput | PropertySectionScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutHeroPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutHeroPropertyInput, PropertyImageUncheckedCreateWithoutHeroPropertyInput> | PropertyImageCreateWithoutHeroPropertyInput[] | PropertyImageUncheckedCreateWithoutHeroPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutHeroPropertyInput | PropertyImageCreateOrConnectWithoutHeroPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutHeroPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutHeroPropertyInput[]
    createMany?: PropertyImageCreateManyHeroPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutHeroPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutHeroPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutHeroPropertyInput | PropertyImageUpdateManyWithWhereWithoutHeroPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutGalleryPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutGalleryPropertyInput, PropertyImageUncheckedCreateWithoutGalleryPropertyInput> | PropertyImageCreateWithoutGalleryPropertyInput[] | PropertyImageUncheckedCreateWithoutGalleryPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutGalleryPropertyInput | PropertyImageCreateOrConnectWithoutGalleryPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutGalleryPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutGalleryPropertyInput[]
    createMany?: PropertyImageCreateManyGalleryPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutGalleryPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutGalleryPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutGalleryPropertyInput | PropertyImageUpdateManyWithWhereWithoutGalleryPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyStoryChapterUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyStoryChapterCreateWithoutPropertyInput, PropertyStoryChapterUncheckedCreateWithoutPropertyInput> | PropertyStoryChapterCreateWithoutPropertyInput[] | PropertyStoryChapterUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyStoryChapterCreateOrConnectWithoutPropertyInput | PropertyStoryChapterCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyStoryChapterUpsertWithWhereUniqueWithoutPropertyInput | PropertyStoryChapterUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyStoryChapterCreateManyPropertyInputEnvelope
    set?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
    disconnect?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
    delete?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
    connect?: PropertyStoryChapterWhereUniqueInput | PropertyStoryChapterWhereUniqueInput[]
    update?: PropertyStoryChapterUpdateWithWhereUniqueWithoutPropertyInput | PropertyStoryChapterUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyStoryChapterUpdateManyWithWhereWithoutPropertyInput | PropertyStoryChapterUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyStoryChapterScalarWhereInput | PropertyStoryChapterScalarWhereInput[]
  }

  export type PropertySectionUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertySectionCreateWithoutPropertyInput, PropertySectionUncheckedCreateWithoutPropertyInput> | PropertySectionCreateWithoutPropertyInput[] | PropertySectionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertySectionCreateOrConnectWithoutPropertyInput | PropertySectionCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertySectionUpsertWithWhereUniqueWithoutPropertyInput | PropertySectionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertySectionCreateManyPropertyInputEnvelope
    set?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
    disconnect?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
    delete?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
    connect?: PropertySectionWhereUniqueInput | PropertySectionWhereUniqueInput[]
    update?: PropertySectionUpdateWithWhereUniqueWithoutPropertyInput | PropertySectionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertySectionUpdateManyWithWhereWithoutPropertyInput | PropertySectionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertySectionScalarWhereInput | PropertySectionScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutHeroImagesInput = {
    create?: XOR<PropertyCreateWithoutHeroImagesInput, PropertyUncheckedCreateWithoutHeroImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutHeroImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutGalleryImagesInput = {
    create?: XOR<PropertyCreateWithoutGalleryImagesInput, PropertyUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutGalleryImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneWithoutHeroImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutHeroImagesInput, PropertyUncheckedCreateWithoutHeroImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutHeroImagesInput
    upsert?: PropertyUpsertWithoutHeroImagesInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutHeroImagesInput, PropertyUpdateWithoutHeroImagesInput>, PropertyUncheckedUpdateWithoutHeroImagesInput>
  }

  export type PropertyUpdateOneWithoutGalleryImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutGalleryImagesInput, PropertyUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutGalleryImagesInput
    upsert?: PropertyUpsertWithoutGalleryImagesInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutGalleryImagesInput, PropertyUpdateWithoutGalleryImagesInput>, PropertyUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type PropertyCreateNestedOneWithoutStoryChaptersInput = {
    create?: XOR<PropertyCreateWithoutStoryChaptersInput, PropertyUncheckedCreateWithoutStoryChaptersInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutStoryChaptersInput
    connect?: PropertyWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateOneRequiredWithoutStoryChaptersNestedInput = {
    create?: XOR<PropertyCreateWithoutStoryChaptersInput, PropertyUncheckedCreateWithoutStoryChaptersInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutStoryChaptersInput
    upsert?: PropertyUpsertWithoutStoryChaptersInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutStoryChaptersInput, PropertyUpdateWithoutStoryChaptersInput>, PropertyUncheckedUpdateWithoutStoryChaptersInput>
  }

  export type PropertySectionCreateimagesInput = {
    set: string[]
  }

  export type PropertyCreateNestedOneWithoutSectionsInput = {
    create?: XOR<PropertyCreateWithoutSectionsInput, PropertyUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSectionsInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertySectionUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PropertyUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<PropertyCreateWithoutSectionsInput, PropertyUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSectionsInput
    upsert?: PropertyUpsertWithoutSectionsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutSectionsInput, PropertyUpdateWithoutSectionsInput>, PropertyUncheckedUpdateWithoutSectionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPropertyCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyCategory | EnumPropertyCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyCategory[] | ListEnumPropertyCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyCategory[] | ListEnumPropertyCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyCategoryFilter<$PrismaModel> | $Enums.PropertyCategory
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumPropertyCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyCategory | EnumPropertyCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyCategory[] | ListEnumPropertyCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyCategory[] | ListEnumPropertyCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PropertyCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyCategoryFilter<$PrismaModel>
    _max?: NestedEnumPropertyCategoryFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PropertyImageCreateWithoutHeroPropertyInput = {
    id?: string
    url: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryProperty?: PropertyCreateNestedOneWithoutGalleryImagesInput
  }

  export type PropertyImageUncheckedCreateWithoutHeroPropertyInput = {
    id?: string
    url: string
    description?: string | null
    galleryPropertyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageCreateOrConnectWithoutHeroPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutHeroPropertyInput, PropertyImageUncheckedCreateWithoutHeroPropertyInput>
  }

  export type PropertyImageCreateManyHeroPropertyInputEnvelope = {
    data: PropertyImageCreateManyHeroPropertyInput | PropertyImageCreateManyHeroPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyImageCreateWithoutGalleryPropertyInput = {
    id?: string
    url: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    heroProperty?: PropertyCreateNestedOneWithoutHeroImagesInput
  }

  export type PropertyImageUncheckedCreateWithoutGalleryPropertyInput = {
    id?: string
    url: string
    description?: string | null
    heroPropertyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageCreateOrConnectWithoutGalleryPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutGalleryPropertyInput, PropertyImageUncheckedCreateWithoutGalleryPropertyInput>
  }

  export type PropertyImageCreateManyGalleryPropertyInputEnvelope = {
    data: PropertyImageCreateManyGalleryPropertyInput | PropertyImageCreateManyGalleryPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyStoryChapterCreateWithoutPropertyInput = {
    id?: string
    title: string
    narrative: string
    image: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyStoryChapterUncheckedCreateWithoutPropertyInput = {
    id?: string
    title: string
    narrative: string
    image: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyStoryChapterCreateOrConnectWithoutPropertyInput = {
    where: PropertyStoryChapterWhereUniqueInput
    create: XOR<PropertyStoryChapterCreateWithoutPropertyInput, PropertyStoryChapterUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyStoryChapterCreateManyPropertyInputEnvelope = {
    data: PropertyStoryChapterCreateManyPropertyInput | PropertyStoryChapterCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertySectionCreateWithoutPropertyInput = {
    id?: string
    title?: string | null
    content?: string | null
    images?: PropertySectionCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertySectionUncheckedCreateWithoutPropertyInput = {
    id?: string
    title?: string | null
    content?: string | null
    images?: PropertySectionCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertySectionCreateOrConnectWithoutPropertyInput = {
    where: PropertySectionWhereUniqueInput
    create: XOR<PropertySectionCreateWithoutPropertyInput, PropertySectionUncheckedCreateWithoutPropertyInput>
  }

  export type PropertySectionCreateManyPropertyInputEnvelope = {
    data: PropertySectionCreateManyPropertyInput | PropertySectionCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutHeroPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutHeroPropertyInput, PropertyImageUncheckedUpdateWithoutHeroPropertyInput>
    create: XOR<PropertyImageCreateWithoutHeroPropertyInput, PropertyImageUncheckedCreateWithoutHeroPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutHeroPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutHeroPropertyInput, PropertyImageUncheckedUpdateWithoutHeroPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutHeroPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutHeroPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: StringFilter<"PropertyImage"> | string
    url?: StringFilter<"PropertyImage"> | string
    description?: StringNullableFilter<"PropertyImage"> | string | null
    heroPropertyId?: StringNullableFilter<"PropertyImage"> | string | null
    galleryPropertyId?: StringNullableFilter<"PropertyImage"> | string | null
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutGalleryPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutGalleryPropertyInput, PropertyImageUncheckedUpdateWithoutGalleryPropertyInput>
    create: XOR<PropertyImageCreateWithoutGalleryPropertyInput, PropertyImageUncheckedCreateWithoutGalleryPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutGalleryPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutGalleryPropertyInput, PropertyImageUncheckedUpdateWithoutGalleryPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutGalleryPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutGalleryPropertyInput>
  }

  export type PropertyStoryChapterUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyStoryChapterWhereUniqueInput
    update: XOR<PropertyStoryChapterUpdateWithoutPropertyInput, PropertyStoryChapterUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyStoryChapterCreateWithoutPropertyInput, PropertyStoryChapterUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyStoryChapterUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyStoryChapterWhereUniqueInput
    data: XOR<PropertyStoryChapterUpdateWithoutPropertyInput, PropertyStoryChapterUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyStoryChapterUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyStoryChapterScalarWhereInput
    data: XOR<PropertyStoryChapterUpdateManyMutationInput, PropertyStoryChapterUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyStoryChapterScalarWhereInput = {
    AND?: PropertyStoryChapterScalarWhereInput | PropertyStoryChapterScalarWhereInput[]
    OR?: PropertyStoryChapterScalarWhereInput[]
    NOT?: PropertyStoryChapterScalarWhereInput | PropertyStoryChapterScalarWhereInput[]
    id?: StringFilter<"PropertyStoryChapter"> | string
    title?: StringFilter<"PropertyStoryChapter"> | string
    narrative?: StringFilter<"PropertyStoryChapter"> | string
    image?: StringFilter<"PropertyStoryChapter"> | string
    duration?: IntFilter<"PropertyStoryChapter"> | number
    propertyId?: StringFilter<"PropertyStoryChapter"> | string
    createdAt?: DateTimeFilter<"PropertyStoryChapter"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyStoryChapter"> | Date | string
  }

  export type PropertySectionUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertySectionWhereUniqueInput
    update: XOR<PropertySectionUpdateWithoutPropertyInput, PropertySectionUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertySectionCreateWithoutPropertyInput, PropertySectionUncheckedCreateWithoutPropertyInput>
  }

  export type PropertySectionUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertySectionWhereUniqueInput
    data: XOR<PropertySectionUpdateWithoutPropertyInput, PropertySectionUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertySectionUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertySectionScalarWhereInput
    data: XOR<PropertySectionUpdateManyMutationInput, PropertySectionUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertySectionScalarWhereInput = {
    AND?: PropertySectionScalarWhereInput | PropertySectionScalarWhereInput[]
    OR?: PropertySectionScalarWhereInput[]
    NOT?: PropertySectionScalarWhereInput | PropertySectionScalarWhereInput[]
    id?: StringFilter<"PropertySection"> | string
    title?: StringNullableFilter<"PropertySection"> | string | null
    content?: StringNullableFilter<"PropertySection"> | string | null
    images?: StringNullableListFilter<"PropertySection">
    propertyId?: StringFilter<"PropertySection"> | string
    createdAt?: DateTimeFilter<"PropertySection"> | Date | string
    updatedAt?: DateTimeFilter<"PropertySection"> | Date | string
  }

  export type PropertyCreateWithoutHeroImagesInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: PropertyImageCreateNestedManyWithoutGalleryPropertyInput
    storyChapters?: PropertyStoryChapterCreateNestedManyWithoutPropertyInput
    sections?: PropertySectionCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutHeroImagesInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: PropertyImageUncheckedCreateNestedManyWithoutGalleryPropertyInput
    storyChapters?: PropertyStoryChapterUncheckedCreateNestedManyWithoutPropertyInput
    sections?: PropertySectionUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutHeroImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutHeroImagesInput, PropertyUncheckedCreateWithoutHeroImagesInput>
  }

  export type PropertyCreateWithoutGalleryImagesInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    heroImages?: PropertyImageCreateNestedManyWithoutHeroPropertyInput
    storyChapters?: PropertyStoryChapterCreateNestedManyWithoutPropertyInput
    sections?: PropertySectionCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutGalleryImagesInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    heroImages?: PropertyImageUncheckedCreateNestedManyWithoutHeroPropertyInput
    storyChapters?: PropertyStoryChapterUncheckedCreateNestedManyWithoutPropertyInput
    sections?: PropertySectionUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutGalleryImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutGalleryImagesInput, PropertyUncheckedCreateWithoutGalleryImagesInput>
  }

  export type PropertyUpsertWithoutHeroImagesInput = {
    update: XOR<PropertyUpdateWithoutHeroImagesInput, PropertyUncheckedUpdateWithoutHeroImagesInput>
    create: XOR<PropertyCreateWithoutHeroImagesInput, PropertyUncheckedCreateWithoutHeroImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutHeroImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutHeroImagesInput, PropertyUncheckedUpdateWithoutHeroImagesInput>
  }

  export type PropertyUpdateWithoutHeroImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: PropertyImageUpdateManyWithoutGalleryPropertyNestedInput
    storyChapters?: PropertyStoryChapterUpdateManyWithoutPropertyNestedInput
    sections?: PropertySectionUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutHeroImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: PropertyImageUncheckedUpdateManyWithoutGalleryPropertyNestedInput
    storyChapters?: PropertyStoryChapterUncheckedUpdateManyWithoutPropertyNestedInput
    sections?: PropertySectionUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUpsertWithoutGalleryImagesInput = {
    update: XOR<PropertyUpdateWithoutGalleryImagesInput, PropertyUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<PropertyCreateWithoutGalleryImagesInput, PropertyUncheckedCreateWithoutGalleryImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutGalleryImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutGalleryImagesInput, PropertyUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type PropertyUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroImages?: PropertyImageUpdateManyWithoutHeroPropertyNestedInput
    storyChapters?: PropertyStoryChapterUpdateManyWithoutPropertyNestedInput
    sections?: PropertySectionUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroImages?: PropertyImageUncheckedUpdateManyWithoutHeroPropertyNestedInput
    storyChapters?: PropertyStoryChapterUncheckedUpdateManyWithoutPropertyNestedInput
    sections?: PropertySectionUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutStoryChaptersInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    heroImages?: PropertyImageCreateNestedManyWithoutHeroPropertyInput
    galleryImages?: PropertyImageCreateNestedManyWithoutGalleryPropertyInput
    sections?: PropertySectionCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutStoryChaptersInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    heroImages?: PropertyImageUncheckedCreateNestedManyWithoutHeroPropertyInput
    galleryImages?: PropertyImageUncheckedCreateNestedManyWithoutGalleryPropertyInput
    sections?: PropertySectionUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutStoryChaptersInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutStoryChaptersInput, PropertyUncheckedCreateWithoutStoryChaptersInput>
  }

  export type PropertyUpsertWithoutStoryChaptersInput = {
    update: XOR<PropertyUpdateWithoutStoryChaptersInput, PropertyUncheckedUpdateWithoutStoryChaptersInput>
    create: XOR<PropertyCreateWithoutStoryChaptersInput, PropertyUncheckedCreateWithoutStoryChaptersInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutStoryChaptersInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutStoryChaptersInput, PropertyUncheckedUpdateWithoutStoryChaptersInput>
  }

  export type PropertyUpdateWithoutStoryChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroImages?: PropertyImageUpdateManyWithoutHeroPropertyNestedInput
    galleryImages?: PropertyImageUpdateManyWithoutGalleryPropertyNestedInput
    sections?: PropertySectionUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutStoryChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroImages?: PropertyImageUncheckedUpdateManyWithoutHeroPropertyNestedInput
    galleryImages?: PropertyImageUncheckedUpdateManyWithoutGalleryPropertyNestedInput
    sections?: PropertySectionUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutSectionsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    heroImages?: PropertyImageCreateNestedManyWithoutHeroPropertyInput
    galleryImages?: PropertyImageCreateNestedManyWithoutGalleryPropertyInput
    storyChapters?: PropertyStoryChapterCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutSectionsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    fullDescription?: string | null
    address?: string | null
    price?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    area?: number | null
    yearBuilt?: number | null
    features?: PropertyCreatefeaturesInput | string[]
    category: $Enums.PropertyCategory
    location?: string | null
    image: string
    tags?: PropertyCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    heroImages?: PropertyImageUncheckedCreateNestedManyWithoutHeroPropertyInput
    galleryImages?: PropertyImageUncheckedCreateNestedManyWithoutGalleryPropertyInput
    storyChapters?: PropertyStoryChapterUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutSectionsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutSectionsInput, PropertyUncheckedCreateWithoutSectionsInput>
  }

  export type PropertyUpsertWithoutSectionsInput = {
    update: XOR<PropertyUpdateWithoutSectionsInput, PropertyUncheckedUpdateWithoutSectionsInput>
    create: XOR<PropertyCreateWithoutSectionsInput, PropertyUncheckedCreateWithoutSectionsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutSectionsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutSectionsInput, PropertyUncheckedUpdateWithoutSectionsInput>
  }

  export type PropertyUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroImages?: PropertyImageUpdateManyWithoutHeroPropertyNestedInput
    galleryImages?: PropertyImageUpdateManyWithoutGalleryPropertyNestedInput
    storyChapters?: PropertyStoryChapterUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    features?: PropertyUpdatefeaturesInput | string[]
    category?: EnumPropertyCategoryFieldUpdateOperationsInput | $Enums.PropertyCategory
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    tags?: PropertyUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroImages?: PropertyImageUncheckedUpdateManyWithoutHeroPropertyNestedInput
    galleryImages?: PropertyImageUncheckedUpdateManyWithoutGalleryPropertyNestedInput
    storyChapters?: PropertyStoryChapterUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyImageCreateManyHeroPropertyInput = {
    id?: string
    url: string
    description?: string | null
    galleryPropertyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageCreateManyGalleryPropertyInput = {
    id?: string
    url: string
    description?: string | null
    heroPropertyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyStoryChapterCreateManyPropertyInput = {
    id?: string
    title: string
    narrative: string
    image: string
    duration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertySectionCreateManyPropertyInput = {
    id?: string
    title?: string | null
    content?: string | null
    images?: PropertySectionCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateWithoutHeroPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryProperty?: PropertyUpdateOneWithoutGalleryImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateWithoutHeroPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    galleryPropertyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutHeroPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    galleryPropertyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUpdateWithoutGalleryPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroProperty?: PropertyUpdateOneWithoutHeroImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateWithoutGalleryPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroPropertyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutGalleryPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroPropertyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyStoryChapterUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyStoryChapterUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyStoryChapterUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertySectionUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PropertySectionUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertySectionUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PropertySectionUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertySectionUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PropertySectionUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}