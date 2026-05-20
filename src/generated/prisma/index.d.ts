
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model User_83
 * 
 */
export type User_83 = $Result.DefaultSelection<Prisma.$User_83Payload>
/**
 * Model Grocery
 * 
 */
export type Grocery = $Result.DefaultSelection<Prisma.$GroceryPayload>
/**
 * Model Category_83
 * 
 */
export type Category_83 = $Result.DefaultSelection<Prisma.$Category_83Payload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Shop_83
 * 
 */
export type Shop_83 = $Result.DefaultSelection<Prisma.$Shop_83Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_83`: Exposes CRUD operations for the **User_83** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_83s
    * const user_83s = await prisma.user_83.findMany()
    * ```
    */
  get user_83(): Prisma.User_83Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grocery`: Exposes CRUD operations for the **Grocery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groceries
    * const groceries = await prisma.grocery.findMany()
    * ```
    */
  get grocery(): Prisma.GroceryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category_83`: Exposes CRUD operations for the **Category_83** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Category_83s
    * const category_83s = await prisma.category_83.findMany()
    * ```
    */
  get category_83(): Prisma.Category_83Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop_83`: Exposes CRUD operations for the **Shop_83** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shop_83s
    * const shop_83s = await prisma.shop_83.findMany()
    * ```
    */
  get shop_83(): Prisma.Shop_83Delegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    User_83: 'User_83',
    Grocery: 'Grocery',
    Category_83: 'Category_83',
    Blog: 'Blog',
    Shop_83: 'Shop_83'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "user_83" | "grocery" | "category_83" | "blog" | "shop_83"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      User_83: {
        payload: Prisma.$User_83Payload<ExtArgs>
        fields: Prisma.User_83FieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_83FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_83FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>
          }
          findFirst: {
            args: Prisma.User_83FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_83FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>
          }
          findMany: {
            args: Prisma.User_83FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>[]
          }
          create: {
            args: Prisma.User_83CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>
          }
          createMany: {
            args: Prisma.User_83CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_83CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>[]
          }
          delete: {
            args: Prisma.User_83DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>
          }
          update: {
            args: Prisma.User_83UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>
          }
          deleteMany: {
            args: Prisma.User_83DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_83UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_83UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>[]
          }
          upsert: {
            args: Prisma.User_83UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_83Payload>
          }
          aggregate: {
            args: Prisma.User_83AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_83>
          }
          groupBy: {
            args: Prisma.User_83GroupByArgs<ExtArgs>
            result: $Utils.Optional<User_83GroupByOutputType>[]
          }
          count: {
            args: Prisma.User_83CountArgs<ExtArgs>
            result: $Utils.Optional<User_83CountAggregateOutputType> | number
          }
        }
      }
      Grocery: {
        payload: Prisma.$GroceryPayload<ExtArgs>
        fields: Prisma.GroceryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroceryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroceryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          findFirst: {
            args: Prisma.GroceryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroceryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          findMany: {
            args: Prisma.GroceryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>[]
          }
          create: {
            args: Prisma.GroceryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          createMany: {
            args: Prisma.GroceryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroceryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>[]
          }
          delete: {
            args: Prisma.GroceryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          update: {
            args: Prisma.GroceryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          deleteMany: {
            args: Prisma.GroceryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroceryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroceryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>[]
          }
          upsert: {
            args: Prisma.GroceryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          aggregate: {
            args: Prisma.GroceryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrocery>
          }
          groupBy: {
            args: Prisma.GroceryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroceryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroceryCountArgs<ExtArgs>
            result: $Utils.Optional<GroceryCountAggregateOutputType> | number
          }
        }
      }
      Category_83: {
        payload: Prisma.$Category_83Payload<ExtArgs>
        fields: Prisma.Category_83FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Category_83FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Category_83FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>
          }
          findFirst: {
            args: Prisma.Category_83FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Category_83FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>
          }
          findMany: {
            args: Prisma.Category_83FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>[]
          }
          create: {
            args: Prisma.Category_83CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>
          }
          createMany: {
            args: Prisma.Category_83CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Category_83CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>[]
          }
          delete: {
            args: Prisma.Category_83DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>
          }
          update: {
            args: Prisma.Category_83UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>
          }
          deleteMany: {
            args: Prisma.Category_83DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Category_83UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Category_83UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>[]
          }
          upsert: {
            args: Prisma.Category_83UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_83Payload>
          }
          aggregate: {
            args: Prisma.Category_83AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory_83>
          }
          groupBy: {
            args: Prisma.Category_83GroupByArgs<ExtArgs>
            result: $Utils.Optional<Category_83GroupByOutputType>[]
          }
          count: {
            args: Prisma.Category_83CountArgs<ExtArgs>
            result: $Utils.Optional<Category_83CountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Shop_83: {
        payload: Prisma.$Shop_83Payload<ExtArgs>
        fields: Prisma.Shop_83FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Shop_83FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Shop_83FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>
          }
          findFirst: {
            args: Prisma.Shop_83FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Shop_83FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>
          }
          findMany: {
            args: Prisma.Shop_83FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>[]
          }
          create: {
            args: Prisma.Shop_83CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>
          }
          createMany: {
            args: Prisma.Shop_83CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Shop_83CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>[]
          }
          delete: {
            args: Prisma.Shop_83DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>
          }
          update: {
            args: Prisma.Shop_83UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>
          }
          deleteMany: {
            args: Prisma.Shop_83DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Shop_83UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Shop_83UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>[]
          }
          upsert: {
            args: Prisma.Shop_83UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_83Payload>
          }
          aggregate: {
            args: Prisma.Shop_83AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop_83>
          }
          groupBy: {
            args: Prisma.Shop_83GroupByArgs<ExtArgs>
            result: $Utils.Optional<Shop_83GroupByOutputType>[]
          }
          count: {
            args: Prisma.Shop_83CountArgs<ExtArgs>
            result: $Utils.Optional<Shop_83CountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    user_83?: User_83Omit
    grocery?: GroceryOmit
    category_83?: Category_83Omit
    blog?: BlogOmit
    shop_83?: Shop_83Omit
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model User_83
   */

  export type AggregateUser_83 = {
    _count: User_83CountAggregateOutputType | null
    _avg: User_83AvgAggregateOutputType | null
    _sum: User_83SumAggregateOutputType | null
    _min: User_83MinAggregateOutputType | null
    _max: User_83MaxAggregateOutputType | null
  }

  export type User_83AvgAggregateOutputType = {
    id: number | null
  }

  export type User_83SumAggregateOutputType = {
    id: number | null
  }

  export type User_83MinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type User_83MaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type User_83CountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type User_83AvgAggregateInputType = {
    id?: true
  }

  export type User_83SumAggregateInputType = {
    id?: true
  }

  export type User_83MinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type User_83MaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type User_83CountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type User_83AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_83 to aggregate.
     */
    where?: User_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_83s to fetch.
     */
    orderBy?: User_83OrderByWithRelationInput | User_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_83s
    **/
    _count?: true | User_83CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_83AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_83SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_83MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_83MaxAggregateInputType
  }

  export type GetUser_83AggregateType<T extends User_83AggregateArgs> = {
        [P in keyof T & keyof AggregateUser_83]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_83[P]>
      : GetScalarType<T[P], AggregateUser_83[P]>
  }




  export type User_83GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_83WhereInput
    orderBy?: User_83OrderByWithAggregationInput | User_83OrderByWithAggregationInput[]
    by: User_83ScalarFieldEnum[] | User_83ScalarFieldEnum
    having?: User_83ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_83CountAggregateInputType | true
    _avg?: User_83AvgAggregateInputType
    _sum?: User_83SumAggregateInputType
    _min?: User_83MinAggregateInputType
    _max?: User_83MaxAggregateInputType
  }

  export type User_83GroupByOutputType = {
    id: number
    name: string | null
    email: string
    _count: User_83CountAggregateOutputType | null
    _avg: User_83AvgAggregateOutputType | null
    _sum: User_83SumAggregateOutputType | null
    _min: User_83MinAggregateOutputType | null
    _max: User_83MaxAggregateOutputType | null
  }

  type GetUser_83GroupByPayload<T extends User_83GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_83GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_83GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_83GroupByOutputType[P]>
            : GetScalarType<T[P], User_83GroupByOutputType[P]>
        }
      >
    >


  export type User_83Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user_83"]>

  export type User_83SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user_83"]>

  export type User_83SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user_83"]>

  export type User_83SelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type User_83Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user_83"]>

  export type $User_83Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_83"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
    }, ExtArgs["result"]["user_83"]>
    composites: {}
  }

  type User_83GetPayload<S extends boolean | null | undefined | User_83DefaultArgs> = $Result.GetResult<Prisma.$User_83Payload, S>

  type User_83CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_83FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_83CountAggregateInputType | true
    }

  export interface User_83Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_83'], meta: { name: 'User_83' } }
    /**
     * Find zero or one User_83 that matches the filter.
     * @param {User_83FindUniqueArgs} args - Arguments to find a User_83
     * @example
     * // Get one User_83
     * const user_83 = await prisma.user_83.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_83FindUniqueArgs>(args: SelectSubset<T, User_83FindUniqueArgs<ExtArgs>>): Prisma__User_83Client<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_83 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_83FindUniqueOrThrowArgs} args - Arguments to find a User_83
     * @example
     * // Get one User_83
     * const user_83 = await prisma.user_83.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_83FindUniqueOrThrowArgs>(args: SelectSubset<T, User_83FindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_83Client<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_83 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_83FindFirstArgs} args - Arguments to find a User_83
     * @example
     * // Get one User_83
     * const user_83 = await prisma.user_83.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_83FindFirstArgs>(args?: SelectSubset<T, User_83FindFirstArgs<ExtArgs>>): Prisma__User_83Client<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_83 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_83FindFirstOrThrowArgs} args - Arguments to find a User_83
     * @example
     * // Get one User_83
     * const user_83 = await prisma.user_83.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_83FindFirstOrThrowArgs>(args?: SelectSubset<T, User_83FindFirstOrThrowArgs<ExtArgs>>): Prisma__User_83Client<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_83s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_83FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_83s
     * const user_83s = await prisma.user_83.findMany()
     * 
     * // Get first 10 User_83s
     * const user_83s = await prisma.user_83.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_83WithIdOnly = await prisma.user_83.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_83FindManyArgs>(args?: SelectSubset<T, User_83FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_83.
     * @param {User_83CreateArgs} args - Arguments to create a User_83.
     * @example
     * // Create one User_83
     * const User_83 = await prisma.user_83.create({
     *   data: {
     *     // ... data to create a User_83
     *   }
     * })
     * 
     */
    create<T extends User_83CreateArgs>(args: SelectSubset<T, User_83CreateArgs<ExtArgs>>): Prisma__User_83Client<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_83s.
     * @param {User_83CreateManyArgs} args - Arguments to create many User_83s.
     * @example
     * // Create many User_83s
     * const user_83 = await prisma.user_83.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_83CreateManyArgs>(args?: SelectSubset<T, User_83CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_83s and returns the data saved in the database.
     * @param {User_83CreateManyAndReturnArgs} args - Arguments to create many User_83s.
     * @example
     * // Create many User_83s
     * const user_83 = await prisma.user_83.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_83s and only return the `id`
     * const user_83WithIdOnly = await prisma.user_83.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_83CreateManyAndReturnArgs>(args?: SelectSubset<T, User_83CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_83.
     * @param {User_83DeleteArgs} args - Arguments to delete one User_83.
     * @example
     * // Delete one User_83
     * const User_83 = await prisma.user_83.delete({
     *   where: {
     *     // ... filter to delete one User_83
     *   }
     * })
     * 
     */
    delete<T extends User_83DeleteArgs>(args: SelectSubset<T, User_83DeleteArgs<ExtArgs>>): Prisma__User_83Client<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_83.
     * @param {User_83UpdateArgs} args - Arguments to update one User_83.
     * @example
     * // Update one User_83
     * const user_83 = await prisma.user_83.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_83UpdateArgs>(args: SelectSubset<T, User_83UpdateArgs<ExtArgs>>): Prisma__User_83Client<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_83s.
     * @param {User_83DeleteManyArgs} args - Arguments to filter User_83s to delete.
     * @example
     * // Delete a few User_83s
     * const { count } = await prisma.user_83.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_83DeleteManyArgs>(args?: SelectSubset<T, User_83DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_83s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_83UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_83s
     * const user_83 = await prisma.user_83.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_83UpdateManyArgs>(args: SelectSubset<T, User_83UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_83s and returns the data updated in the database.
     * @param {User_83UpdateManyAndReturnArgs} args - Arguments to update many User_83s.
     * @example
     * // Update many User_83s
     * const user_83 = await prisma.user_83.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_83s and only return the `id`
     * const user_83WithIdOnly = await prisma.user_83.updateManyAndReturn({
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
    updateManyAndReturn<T extends User_83UpdateManyAndReturnArgs>(args: SelectSubset<T, User_83UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_83.
     * @param {User_83UpsertArgs} args - Arguments to update or create a User_83.
     * @example
     * // Update or create a User_83
     * const user_83 = await prisma.user_83.upsert({
     *   create: {
     *     // ... data to create a User_83
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_83 we want to update
     *   }
     * })
     */
    upsert<T extends User_83UpsertArgs>(args: SelectSubset<T, User_83UpsertArgs<ExtArgs>>): Prisma__User_83Client<$Result.GetResult<Prisma.$User_83Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_83s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_83CountArgs} args - Arguments to filter User_83s to count.
     * @example
     * // Count the number of User_83s
     * const count = await prisma.user_83.count({
     *   where: {
     *     // ... the filter for the User_83s we want to count
     *   }
     * })
    **/
    count<T extends User_83CountArgs>(
      args?: Subset<T, User_83CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_83CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_83.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_83AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_83AggregateArgs>(args: Subset<T, User_83AggregateArgs>): Prisma.PrismaPromise<GetUser_83AggregateType<T>>

    /**
     * Group by User_83.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_83GroupByArgs} args - Group by arguments.
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
      T extends User_83GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_83GroupByArgs['orderBy'] }
        : { orderBy?: User_83GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_83GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_83GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_83 model
   */
  readonly fields: User_83FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_83.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_83Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User_83 model
   */
  interface User_83FieldRefs {
    readonly id: FieldRef<"User_83", 'Int'>
    readonly name: FieldRef<"User_83", 'String'>
    readonly email: FieldRef<"User_83", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User_83 findUnique
   */
  export type User_83FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * Filter, which User_83 to fetch.
     */
    where: User_83WhereUniqueInput
  }

  /**
   * User_83 findUniqueOrThrow
   */
  export type User_83FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * Filter, which User_83 to fetch.
     */
    where: User_83WhereUniqueInput
  }

  /**
   * User_83 findFirst
   */
  export type User_83FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * Filter, which User_83 to fetch.
     */
    where?: User_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_83s to fetch.
     */
    orderBy?: User_83OrderByWithRelationInput | User_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_83s.
     */
    cursor?: User_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_83s.
     */
    distinct?: User_83ScalarFieldEnum | User_83ScalarFieldEnum[]
  }

  /**
   * User_83 findFirstOrThrow
   */
  export type User_83FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * Filter, which User_83 to fetch.
     */
    where?: User_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_83s to fetch.
     */
    orderBy?: User_83OrderByWithRelationInput | User_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_83s.
     */
    cursor?: User_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_83s.
     */
    distinct?: User_83ScalarFieldEnum | User_83ScalarFieldEnum[]
  }

  /**
   * User_83 findMany
   */
  export type User_83FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * Filter, which User_83s to fetch.
     */
    where?: User_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_83s to fetch.
     */
    orderBy?: User_83OrderByWithRelationInput | User_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_83s.
     */
    cursor?: User_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_83s.
     */
    distinct?: User_83ScalarFieldEnum | User_83ScalarFieldEnum[]
  }

  /**
   * User_83 create
   */
  export type User_83CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * The data needed to create a User_83.
     */
    data: XOR<User_83CreateInput, User_83UncheckedCreateInput>
  }

  /**
   * User_83 createMany
   */
  export type User_83CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_83s.
     */
    data: User_83CreateManyInput | User_83CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_83 createManyAndReturn
   */
  export type User_83CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * The data used to create many User_83s.
     */
    data: User_83CreateManyInput | User_83CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_83 update
   */
  export type User_83UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * The data needed to update a User_83.
     */
    data: XOR<User_83UpdateInput, User_83UncheckedUpdateInput>
    /**
     * Choose, which User_83 to update.
     */
    where: User_83WhereUniqueInput
  }

  /**
   * User_83 updateMany
   */
  export type User_83UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_83s.
     */
    data: XOR<User_83UpdateManyMutationInput, User_83UncheckedUpdateManyInput>
    /**
     * Filter which User_83s to update
     */
    where?: User_83WhereInput
    /**
     * Limit how many User_83s to update.
     */
    limit?: number
  }

  /**
   * User_83 updateManyAndReturn
   */
  export type User_83UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * The data used to update User_83s.
     */
    data: XOR<User_83UpdateManyMutationInput, User_83UncheckedUpdateManyInput>
    /**
     * Filter which User_83s to update
     */
    where?: User_83WhereInput
    /**
     * Limit how many User_83s to update.
     */
    limit?: number
  }

  /**
   * User_83 upsert
   */
  export type User_83UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * The filter to search for the User_83 to update in case it exists.
     */
    where: User_83WhereUniqueInput
    /**
     * In case the User_83 found by the `where` argument doesn't exist, create a new User_83 with this data.
     */
    create: XOR<User_83CreateInput, User_83UncheckedCreateInput>
    /**
     * In case the User_83 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_83UpdateInput, User_83UncheckedUpdateInput>
  }

  /**
   * User_83 delete
   */
  export type User_83DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
    /**
     * Filter which User_83 to delete.
     */
    where: User_83WhereUniqueInput
  }

  /**
   * User_83 deleteMany
   */
  export type User_83DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_83s to delete
     */
    where?: User_83WhereInput
    /**
     * Limit how many User_83s to delete.
     */
    limit?: number
  }

  /**
   * User_83 without action
   */
  export type User_83DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_83
     */
    select?: User_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the User_83
     */
    omit?: User_83Omit<ExtArgs> | null
  }


  /**
   * Model Grocery
   */

  export type AggregateGrocery = {
    _count: GroceryCountAggregateOutputType | null
    _min: GroceryMinAggregateOutputType | null
    _max: GroceryMaxAggregateOutputType | null
  }

  export type GroceryMinAggregateOutputType = {
    id: string | null
    name: string | null
    completed: boolean | null
  }

  export type GroceryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    completed: boolean | null
  }

  export type GroceryCountAggregateOutputType = {
    id: number
    name: number
    completed: number
    _all: number
  }


  export type GroceryMinAggregateInputType = {
    id?: true
    name?: true
    completed?: true
  }

  export type GroceryMaxAggregateInputType = {
    id?: true
    name?: true
    completed?: true
  }

  export type GroceryCountAggregateInputType = {
    id?: true
    name?: true
    completed?: true
    _all?: true
  }

  export type GroceryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grocery to aggregate.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groceries
    **/
    _count?: true | GroceryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroceryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroceryMaxAggregateInputType
  }

  export type GetGroceryAggregateType<T extends GroceryAggregateArgs> = {
        [P in keyof T & keyof AggregateGrocery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrocery[P]>
      : GetScalarType<T[P], AggregateGrocery[P]>
  }




  export type GroceryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryWhereInput
    orderBy?: GroceryOrderByWithAggregationInput | GroceryOrderByWithAggregationInput[]
    by: GroceryScalarFieldEnum[] | GroceryScalarFieldEnum
    having?: GroceryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroceryCountAggregateInputType | true
    _min?: GroceryMinAggregateInputType
    _max?: GroceryMaxAggregateInputType
  }

  export type GroceryGroupByOutputType = {
    id: string
    name: string
    completed: boolean
    _count: GroceryCountAggregateOutputType | null
    _min: GroceryMinAggregateOutputType | null
    _max: GroceryMaxAggregateOutputType | null
  }

  type GetGroceryGroupByPayload<T extends GroceryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroceryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroceryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroceryGroupByOutputType[P]>
            : GetScalarType<T[P], GroceryGroupByOutputType[P]>
        }
      >
    >


  export type GrocerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    completed?: boolean
  }, ExtArgs["result"]["grocery"]>

  export type GrocerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    completed?: boolean
  }, ExtArgs["result"]["grocery"]>

  export type GrocerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    completed?: boolean
  }, ExtArgs["result"]["grocery"]>

  export type GrocerySelectScalar = {
    id?: boolean
    name?: boolean
    completed?: boolean
  }

  export type GroceryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "completed", ExtArgs["result"]["grocery"]>

  export type $GroceryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grocery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      completed: boolean
    }, ExtArgs["result"]["grocery"]>
    composites: {}
  }

  type GroceryGetPayload<S extends boolean | null | undefined | GroceryDefaultArgs> = $Result.GetResult<Prisma.$GroceryPayload, S>

  type GroceryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroceryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroceryCountAggregateInputType | true
    }

  export interface GroceryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grocery'], meta: { name: 'Grocery' } }
    /**
     * Find zero or one Grocery that matches the filter.
     * @param {GroceryFindUniqueArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroceryFindUniqueArgs>(args: SelectSubset<T, GroceryFindUniqueArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grocery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroceryFindUniqueOrThrowArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroceryFindUniqueOrThrowArgs>(args: SelectSubset<T, GroceryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grocery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindFirstArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroceryFindFirstArgs>(args?: SelectSubset<T, GroceryFindFirstArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grocery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindFirstOrThrowArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroceryFindFirstOrThrowArgs>(args?: SelectSubset<T, GroceryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groceries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groceries
     * const groceries = await prisma.grocery.findMany()
     * 
     * // Get first 10 Groceries
     * const groceries = await prisma.grocery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groceryWithIdOnly = await prisma.grocery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroceryFindManyArgs>(args?: SelectSubset<T, GroceryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grocery.
     * @param {GroceryCreateArgs} args - Arguments to create a Grocery.
     * @example
     * // Create one Grocery
     * const Grocery = await prisma.grocery.create({
     *   data: {
     *     // ... data to create a Grocery
     *   }
     * })
     * 
     */
    create<T extends GroceryCreateArgs>(args: SelectSubset<T, GroceryCreateArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groceries.
     * @param {GroceryCreateManyArgs} args - Arguments to create many Groceries.
     * @example
     * // Create many Groceries
     * const grocery = await prisma.grocery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroceryCreateManyArgs>(args?: SelectSubset<T, GroceryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groceries and returns the data saved in the database.
     * @param {GroceryCreateManyAndReturnArgs} args - Arguments to create many Groceries.
     * @example
     * // Create many Groceries
     * const grocery = await prisma.grocery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groceries and only return the `id`
     * const groceryWithIdOnly = await prisma.grocery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroceryCreateManyAndReturnArgs>(args?: SelectSubset<T, GroceryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grocery.
     * @param {GroceryDeleteArgs} args - Arguments to delete one Grocery.
     * @example
     * // Delete one Grocery
     * const Grocery = await prisma.grocery.delete({
     *   where: {
     *     // ... filter to delete one Grocery
     *   }
     * })
     * 
     */
    delete<T extends GroceryDeleteArgs>(args: SelectSubset<T, GroceryDeleteArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grocery.
     * @param {GroceryUpdateArgs} args - Arguments to update one Grocery.
     * @example
     * // Update one Grocery
     * const grocery = await prisma.grocery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroceryUpdateArgs>(args: SelectSubset<T, GroceryUpdateArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groceries.
     * @param {GroceryDeleteManyArgs} args - Arguments to filter Groceries to delete.
     * @example
     * // Delete a few Groceries
     * const { count } = await prisma.grocery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroceryDeleteManyArgs>(args?: SelectSubset<T, GroceryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groceries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groceries
     * const grocery = await prisma.grocery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroceryUpdateManyArgs>(args: SelectSubset<T, GroceryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groceries and returns the data updated in the database.
     * @param {GroceryUpdateManyAndReturnArgs} args - Arguments to update many Groceries.
     * @example
     * // Update many Groceries
     * const grocery = await prisma.grocery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groceries and only return the `id`
     * const groceryWithIdOnly = await prisma.grocery.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroceryUpdateManyAndReturnArgs>(args: SelectSubset<T, GroceryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grocery.
     * @param {GroceryUpsertArgs} args - Arguments to update or create a Grocery.
     * @example
     * // Update or create a Grocery
     * const grocery = await prisma.grocery.upsert({
     *   create: {
     *     // ... data to create a Grocery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grocery we want to update
     *   }
     * })
     */
    upsert<T extends GroceryUpsertArgs>(args: SelectSubset<T, GroceryUpsertArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groceries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCountArgs} args - Arguments to filter Groceries to count.
     * @example
     * // Count the number of Groceries
     * const count = await prisma.grocery.count({
     *   where: {
     *     // ... the filter for the Groceries we want to count
     *   }
     * })
    **/
    count<T extends GroceryCountArgs>(
      args?: Subset<T, GroceryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroceryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grocery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroceryAggregateArgs>(args: Subset<T, GroceryAggregateArgs>): Prisma.PrismaPromise<GetGroceryAggregateType<T>>

    /**
     * Group by Grocery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryGroupByArgs} args - Group by arguments.
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
      T extends GroceryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroceryGroupByArgs['orderBy'] }
        : { orderBy?: GroceryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroceryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroceryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grocery model
   */
  readonly fields: GroceryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grocery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroceryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Grocery model
   */
  interface GroceryFieldRefs {
    readonly id: FieldRef<"Grocery", 'String'>
    readonly name: FieldRef<"Grocery", 'String'>
    readonly completed: FieldRef<"Grocery", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Grocery findUnique
   */
  export type GroceryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery findUniqueOrThrow
   */
  export type GroceryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery findFirst
   */
  export type GroceryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groceries.
     */
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery findFirstOrThrow
   */
  export type GroceryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groceries.
     */
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery findMany
   */
  export type GroceryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Groceries to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groceries.
     */
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery create
   */
  export type GroceryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The data needed to create a Grocery.
     */
    data: XOR<GroceryCreateInput, GroceryUncheckedCreateInput>
  }

  /**
   * Grocery createMany
   */
  export type GroceryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groceries.
     */
    data: GroceryCreateManyInput | GroceryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grocery createManyAndReturn
   */
  export type GroceryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The data used to create many Groceries.
     */
    data: GroceryCreateManyInput | GroceryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grocery update
   */
  export type GroceryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The data needed to update a Grocery.
     */
    data: XOR<GroceryUpdateInput, GroceryUncheckedUpdateInput>
    /**
     * Choose, which Grocery to update.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery updateMany
   */
  export type GroceryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groceries.
     */
    data: XOR<GroceryUpdateManyMutationInput, GroceryUncheckedUpdateManyInput>
    /**
     * Filter which Groceries to update
     */
    where?: GroceryWhereInput
    /**
     * Limit how many Groceries to update.
     */
    limit?: number
  }

  /**
   * Grocery updateManyAndReturn
   */
  export type GroceryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The data used to update Groceries.
     */
    data: XOR<GroceryUpdateManyMutationInput, GroceryUncheckedUpdateManyInput>
    /**
     * Filter which Groceries to update
     */
    where?: GroceryWhereInput
    /**
     * Limit how many Groceries to update.
     */
    limit?: number
  }

  /**
   * Grocery upsert
   */
  export type GroceryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The filter to search for the Grocery to update in case it exists.
     */
    where: GroceryWhereUniqueInput
    /**
     * In case the Grocery found by the `where` argument doesn't exist, create a new Grocery with this data.
     */
    create: XOR<GroceryCreateInput, GroceryUncheckedCreateInput>
    /**
     * In case the Grocery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroceryUpdateInput, GroceryUncheckedUpdateInput>
  }

  /**
   * Grocery delete
   */
  export type GroceryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter which Grocery to delete.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery deleteMany
   */
  export type GroceryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groceries to delete
     */
    where?: GroceryWhereInput
    /**
     * Limit how many Groceries to delete.
     */
    limit?: number
  }

  /**
   * Grocery without action
   */
  export type GroceryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
  }


  /**
   * Model Category_83
   */

  export type AggregateCategory_83 = {
    _count: Category_83CountAggregateOutputType | null
    _avg: Category_83AvgAggregateOutputType | null
    _sum: Category_83SumAggregateOutputType | null
    _min: Category_83MinAggregateOutputType | null
    _max: Category_83MaxAggregateOutputType | null
  }

  export type Category_83AvgAggregateOutputType = {
    cid: number | null
  }

  export type Category_83SumAggregateOutputType = {
    cid: number | null
  }

  export type Category_83MinAggregateOutputType = {
    cid: number | null
    cname: string | null
    size: string | null
    image_url: string | null
  }

  export type Category_83MaxAggregateOutputType = {
    cid: number | null
    cname: string | null
    size: string | null
    image_url: string | null
  }

  export type Category_83CountAggregateOutputType = {
    cid: number
    cname: number
    size: number
    image_url: number
    _all: number
  }


  export type Category_83AvgAggregateInputType = {
    cid?: true
  }

  export type Category_83SumAggregateInputType = {
    cid?: true
  }

  export type Category_83MinAggregateInputType = {
    cid?: true
    cname?: true
    size?: true
    image_url?: true
  }

  export type Category_83MaxAggregateInputType = {
    cid?: true
    cname?: true
    size?: true
    image_url?: true
  }

  export type Category_83CountAggregateInputType = {
    cid?: true
    cname?: true
    size?: true
    image_url?: true
    _all?: true
  }

  export type Category_83AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_83 to aggregate.
     */
    where?: Category_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_83s to fetch.
     */
    orderBy?: Category_83OrderByWithRelationInput | Category_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Category_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Category_83s
    **/
    _count?: true | Category_83CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Category_83AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Category_83SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Category_83MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Category_83MaxAggregateInputType
  }

  export type GetCategory_83AggregateType<T extends Category_83AggregateArgs> = {
        [P in keyof T & keyof AggregateCategory_83]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory_83[P]>
      : GetScalarType<T[P], AggregateCategory_83[P]>
  }




  export type Category_83GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_83WhereInput
    orderBy?: Category_83OrderByWithAggregationInput | Category_83OrderByWithAggregationInput[]
    by: Category_83ScalarFieldEnum[] | Category_83ScalarFieldEnum
    having?: Category_83ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Category_83CountAggregateInputType | true
    _avg?: Category_83AvgAggregateInputType
    _sum?: Category_83SumAggregateInputType
    _min?: Category_83MinAggregateInputType
    _max?: Category_83MaxAggregateInputType
  }

  export type Category_83GroupByOutputType = {
    cid: number
    cname: string
    size: string | null
    image_url: string | null
    _count: Category_83CountAggregateOutputType | null
    _avg: Category_83AvgAggregateOutputType | null
    _sum: Category_83SumAggregateOutputType | null
    _min: Category_83MinAggregateOutputType | null
    _max: Category_83MaxAggregateOutputType | null
  }

  type GetCategory_83GroupByPayload<T extends Category_83GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Category_83GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Category_83GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Category_83GroupByOutputType[P]>
            : GetScalarType<T[P], Category_83GroupByOutputType[P]>
        }
      >
    >


  export type Category_83Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    cname?: boolean
    size?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["category_83"]>

  export type Category_83SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    cname?: boolean
    size?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["category_83"]>

  export type Category_83SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    cname?: boolean
    size?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["category_83"]>

  export type Category_83SelectScalar = {
    cid?: boolean
    cname?: boolean
    size?: boolean
    image_url?: boolean
  }

  export type Category_83Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cid" | "cname" | "size" | "image_url", ExtArgs["result"]["category_83"]>

  export type $Category_83Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category_83"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      cid: number
      cname: string
      size: string | null
      image_url: string | null
    }, ExtArgs["result"]["category_83"]>
    composites: {}
  }

  type Category_83GetPayload<S extends boolean | null | undefined | Category_83DefaultArgs> = $Result.GetResult<Prisma.$Category_83Payload, S>

  type Category_83CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Category_83FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Category_83CountAggregateInputType | true
    }

  export interface Category_83Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category_83'], meta: { name: 'Category_83' } }
    /**
     * Find zero or one Category_83 that matches the filter.
     * @param {Category_83FindUniqueArgs} args - Arguments to find a Category_83
     * @example
     * // Get one Category_83
     * const category_83 = await prisma.category_83.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Category_83FindUniqueArgs>(args: SelectSubset<T, Category_83FindUniqueArgs<ExtArgs>>): Prisma__Category_83Client<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category_83 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Category_83FindUniqueOrThrowArgs} args - Arguments to find a Category_83
     * @example
     * // Get one Category_83
     * const category_83 = await prisma.category_83.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Category_83FindUniqueOrThrowArgs>(args: SelectSubset<T, Category_83FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Category_83Client<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_83 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_83FindFirstArgs} args - Arguments to find a Category_83
     * @example
     * // Get one Category_83
     * const category_83 = await prisma.category_83.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Category_83FindFirstArgs>(args?: SelectSubset<T, Category_83FindFirstArgs<ExtArgs>>): Prisma__Category_83Client<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_83 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_83FindFirstOrThrowArgs} args - Arguments to find a Category_83
     * @example
     * // Get one Category_83
     * const category_83 = await prisma.category_83.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Category_83FindFirstOrThrowArgs>(args?: SelectSubset<T, Category_83FindFirstOrThrowArgs<ExtArgs>>): Prisma__Category_83Client<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Category_83s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_83FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Category_83s
     * const category_83s = await prisma.category_83.findMany()
     * 
     * // Get first 10 Category_83s
     * const category_83s = await prisma.category_83.findMany({ take: 10 })
     * 
     * // Only select the `cid`
     * const category_83WithCidOnly = await prisma.category_83.findMany({ select: { cid: true } })
     * 
     */
    findMany<T extends Category_83FindManyArgs>(args?: SelectSubset<T, Category_83FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category_83.
     * @param {Category_83CreateArgs} args - Arguments to create a Category_83.
     * @example
     * // Create one Category_83
     * const Category_83 = await prisma.category_83.create({
     *   data: {
     *     // ... data to create a Category_83
     *   }
     * })
     * 
     */
    create<T extends Category_83CreateArgs>(args: SelectSubset<T, Category_83CreateArgs<ExtArgs>>): Prisma__Category_83Client<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Category_83s.
     * @param {Category_83CreateManyArgs} args - Arguments to create many Category_83s.
     * @example
     * // Create many Category_83s
     * const category_83 = await prisma.category_83.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Category_83CreateManyArgs>(args?: SelectSubset<T, Category_83CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Category_83s and returns the data saved in the database.
     * @param {Category_83CreateManyAndReturnArgs} args - Arguments to create many Category_83s.
     * @example
     * // Create many Category_83s
     * const category_83 = await prisma.category_83.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Category_83s and only return the `cid`
     * const category_83WithCidOnly = await prisma.category_83.createManyAndReturn({
     *   select: { cid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Category_83CreateManyAndReturnArgs>(args?: SelectSubset<T, Category_83CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category_83.
     * @param {Category_83DeleteArgs} args - Arguments to delete one Category_83.
     * @example
     * // Delete one Category_83
     * const Category_83 = await prisma.category_83.delete({
     *   where: {
     *     // ... filter to delete one Category_83
     *   }
     * })
     * 
     */
    delete<T extends Category_83DeleteArgs>(args: SelectSubset<T, Category_83DeleteArgs<ExtArgs>>): Prisma__Category_83Client<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category_83.
     * @param {Category_83UpdateArgs} args - Arguments to update one Category_83.
     * @example
     * // Update one Category_83
     * const category_83 = await prisma.category_83.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Category_83UpdateArgs>(args: SelectSubset<T, Category_83UpdateArgs<ExtArgs>>): Prisma__Category_83Client<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Category_83s.
     * @param {Category_83DeleteManyArgs} args - Arguments to filter Category_83s to delete.
     * @example
     * // Delete a few Category_83s
     * const { count } = await prisma.category_83.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Category_83DeleteManyArgs>(args?: SelectSubset<T, Category_83DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_83s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_83UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Category_83s
     * const category_83 = await prisma.category_83.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Category_83UpdateManyArgs>(args: SelectSubset<T, Category_83UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_83s and returns the data updated in the database.
     * @param {Category_83UpdateManyAndReturnArgs} args - Arguments to update many Category_83s.
     * @example
     * // Update many Category_83s
     * const category_83 = await prisma.category_83.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Category_83s and only return the `cid`
     * const category_83WithCidOnly = await prisma.category_83.updateManyAndReturn({
     *   select: { cid: true },
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
    updateManyAndReturn<T extends Category_83UpdateManyAndReturnArgs>(args: SelectSubset<T, Category_83UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category_83.
     * @param {Category_83UpsertArgs} args - Arguments to update or create a Category_83.
     * @example
     * // Update or create a Category_83
     * const category_83 = await prisma.category_83.upsert({
     *   create: {
     *     // ... data to create a Category_83
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category_83 we want to update
     *   }
     * })
     */
    upsert<T extends Category_83UpsertArgs>(args: SelectSubset<T, Category_83UpsertArgs<ExtArgs>>): Prisma__Category_83Client<$Result.GetResult<Prisma.$Category_83Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Category_83s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_83CountArgs} args - Arguments to filter Category_83s to count.
     * @example
     * // Count the number of Category_83s
     * const count = await prisma.category_83.count({
     *   where: {
     *     // ... the filter for the Category_83s we want to count
     *   }
     * })
    **/
    count<T extends Category_83CountArgs>(
      args?: Subset<T, Category_83CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Category_83CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category_83.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_83AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Category_83AggregateArgs>(args: Subset<T, Category_83AggregateArgs>): Prisma.PrismaPromise<GetCategory_83AggregateType<T>>

    /**
     * Group by Category_83.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_83GroupByArgs} args - Group by arguments.
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
      T extends Category_83GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Category_83GroupByArgs['orderBy'] }
        : { orderBy?: Category_83GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Category_83GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategory_83GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category_83 model
   */
  readonly fields: Category_83FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category_83.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Category_83Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Category_83 model
   */
  interface Category_83FieldRefs {
    readonly cid: FieldRef<"Category_83", 'Int'>
    readonly cname: FieldRef<"Category_83", 'String'>
    readonly size: FieldRef<"Category_83", 'String'>
    readonly image_url: FieldRef<"Category_83", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category_83 findUnique
   */
  export type Category_83FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * Filter, which Category_83 to fetch.
     */
    where: Category_83WhereUniqueInput
  }

  /**
   * Category_83 findUniqueOrThrow
   */
  export type Category_83FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * Filter, which Category_83 to fetch.
     */
    where: Category_83WhereUniqueInput
  }

  /**
   * Category_83 findFirst
   */
  export type Category_83FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * Filter, which Category_83 to fetch.
     */
    where?: Category_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_83s to fetch.
     */
    orderBy?: Category_83OrderByWithRelationInput | Category_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_83s.
     */
    cursor?: Category_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_83s.
     */
    distinct?: Category_83ScalarFieldEnum | Category_83ScalarFieldEnum[]
  }

  /**
   * Category_83 findFirstOrThrow
   */
  export type Category_83FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * Filter, which Category_83 to fetch.
     */
    where?: Category_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_83s to fetch.
     */
    orderBy?: Category_83OrderByWithRelationInput | Category_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_83s.
     */
    cursor?: Category_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_83s.
     */
    distinct?: Category_83ScalarFieldEnum | Category_83ScalarFieldEnum[]
  }

  /**
   * Category_83 findMany
   */
  export type Category_83FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * Filter, which Category_83s to fetch.
     */
    where?: Category_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_83s to fetch.
     */
    orderBy?: Category_83OrderByWithRelationInput | Category_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Category_83s.
     */
    cursor?: Category_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_83s.
     */
    distinct?: Category_83ScalarFieldEnum | Category_83ScalarFieldEnum[]
  }

  /**
   * Category_83 create
   */
  export type Category_83CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * The data needed to create a Category_83.
     */
    data: XOR<Category_83CreateInput, Category_83UncheckedCreateInput>
  }

  /**
   * Category_83 createMany
   */
  export type Category_83CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Category_83s.
     */
    data: Category_83CreateManyInput | Category_83CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category_83 createManyAndReturn
   */
  export type Category_83CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * The data used to create many Category_83s.
     */
    data: Category_83CreateManyInput | Category_83CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category_83 update
   */
  export type Category_83UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * The data needed to update a Category_83.
     */
    data: XOR<Category_83UpdateInput, Category_83UncheckedUpdateInput>
    /**
     * Choose, which Category_83 to update.
     */
    where: Category_83WhereUniqueInput
  }

  /**
   * Category_83 updateMany
   */
  export type Category_83UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Category_83s.
     */
    data: XOR<Category_83UpdateManyMutationInput, Category_83UncheckedUpdateManyInput>
    /**
     * Filter which Category_83s to update
     */
    where?: Category_83WhereInput
    /**
     * Limit how many Category_83s to update.
     */
    limit?: number
  }

  /**
   * Category_83 updateManyAndReturn
   */
  export type Category_83UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * The data used to update Category_83s.
     */
    data: XOR<Category_83UpdateManyMutationInput, Category_83UncheckedUpdateManyInput>
    /**
     * Filter which Category_83s to update
     */
    where?: Category_83WhereInput
    /**
     * Limit how many Category_83s to update.
     */
    limit?: number
  }

  /**
   * Category_83 upsert
   */
  export type Category_83UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * The filter to search for the Category_83 to update in case it exists.
     */
    where: Category_83WhereUniqueInput
    /**
     * In case the Category_83 found by the `where` argument doesn't exist, create a new Category_83 with this data.
     */
    create: XOR<Category_83CreateInput, Category_83UncheckedCreateInput>
    /**
     * In case the Category_83 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Category_83UpdateInput, Category_83UncheckedUpdateInput>
  }

  /**
   * Category_83 delete
   */
  export type Category_83DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
    /**
     * Filter which Category_83 to delete.
     */
    where: Category_83WhereUniqueInput
  }

  /**
   * Category_83 deleteMany
   */
  export type Category_83DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_83s to delete
     */
    where?: Category_83WhereInput
    /**
     * Limit how many Category_83s to delete.
     */
    limit?: number
  }

  /**
   * Category_83 without action
   */
  export type Category_83DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_83
     */
    select?: Category_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_83
     */
    omit?: Category_83Omit<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    descrip: string | null
    category: string | null
    img: string | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    descrip: string | null
    category: string | null
    img: string | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    descrip: number
    category: number
    img: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    descrip?: true
    category?: true
    img?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    descrip?: true
    category?: true
    img?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    descrip?: true
    category?: true
    img?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    descrip: string
    category: string
    img: string
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descrip?: boolean
    category?: boolean
    img?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descrip?: boolean
    category?: boolean
    img?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descrip?: boolean
    category?: boolean
    img?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    descrip?: boolean
    category?: boolean
    img?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "descrip" | "category" | "img", ExtArgs["result"]["blog"]>

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      descrip: string
      category: string
      img: string
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly descrip: FieldRef<"Blog", 'String'>
    readonly category: FieldRef<"Blog", 'String'>
    readonly img: FieldRef<"Blog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
  }


  /**
   * Model Shop_83
   */

  export type AggregateShop_83 = {
    _count: Shop_83CountAggregateOutputType | null
    _avg: Shop_83AvgAggregateOutputType | null
    _sum: Shop_83SumAggregateOutputType | null
    _min: Shop_83MinAggregateOutputType | null
    _max: Shop_83MaxAggregateOutputType | null
  }

  export type Shop_83AvgAggregateOutputType = {
    pid: number | null
    cat_id: number | null
    price: number | null
  }

  export type Shop_83SumAggregateOutputType = {
    pid: number | null
    cat_id: number | null
    price: number | null
  }

  export type Shop_83MinAggregateOutputType = {
    pid: number | null
    pname: string | null
    cat_id: number | null
    price: number | null
    img_url: string | null
    remote_img_url: string | null
  }

  export type Shop_83MaxAggregateOutputType = {
    pid: number | null
    pname: string | null
    cat_id: number | null
    price: number | null
    img_url: string | null
    remote_img_url: string | null
  }

  export type Shop_83CountAggregateOutputType = {
    pid: number
    pname: number
    cat_id: number
    price: number
    img_url: number
    remote_img_url: number
    _all: number
  }


  export type Shop_83AvgAggregateInputType = {
    pid?: true
    cat_id?: true
    price?: true
  }

  export type Shop_83SumAggregateInputType = {
    pid?: true
    cat_id?: true
    price?: true
  }

  export type Shop_83MinAggregateInputType = {
    pid?: true
    pname?: true
    cat_id?: true
    price?: true
    img_url?: true
    remote_img_url?: true
  }

  export type Shop_83MaxAggregateInputType = {
    pid?: true
    pname?: true
    cat_id?: true
    price?: true
    img_url?: true
    remote_img_url?: true
  }

  export type Shop_83CountAggregateInputType = {
    pid?: true
    pname?: true
    cat_id?: true
    price?: true
    img_url?: true
    remote_img_url?: true
    _all?: true
  }

  export type Shop_83AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop_83 to aggregate.
     */
    where?: Shop_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shop_83s to fetch.
     */
    orderBy?: Shop_83OrderByWithRelationInput | Shop_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Shop_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shop_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shop_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shop_83s
    **/
    _count?: true | Shop_83CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shop_83AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shop_83SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shop_83MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shop_83MaxAggregateInputType
  }

  export type GetShop_83AggregateType<T extends Shop_83AggregateArgs> = {
        [P in keyof T & keyof AggregateShop_83]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop_83[P]>
      : GetScalarType<T[P], AggregateShop_83[P]>
  }




  export type Shop_83GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shop_83WhereInput
    orderBy?: Shop_83OrderByWithAggregationInput | Shop_83OrderByWithAggregationInput[]
    by: Shop_83ScalarFieldEnum[] | Shop_83ScalarFieldEnum
    having?: Shop_83ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shop_83CountAggregateInputType | true
    _avg?: Shop_83AvgAggregateInputType
    _sum?: Shop_83SumAggregateInputType
    _min?: Shop_83MinAggregateInputType
    _max?: Shop_83MaxAggregateInputType
  }

  export type Shop_83GroupByOutputType = {
    pid: number
    pname: string | null
    cat_id: number | null
    price: number | null
    img_url: string | null
    remote_img_url: string | null
    _count: Shop_83CountAggregateOutputType | null
    _avg: Shop_83AvgAggregateOutputType | null
    _sum: Shop_83SumAggregateOutputType | null
    _min: Shop_83MinAggregateOutputType | null
    _max: Shop_83MaxAggregateOutputType | null
  }

  type GetShop_83GroupByPayload<T extends Shop_83GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shop_83GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shop_83GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shop_83GroupByOutputType[P]>
            : GetScalarType<T[P], Shop_83GroupByOutputType[P]>
        }
      >
    >


  export type Shop_83Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    pname?: boolean
    cat_id?: boolean
    price?: boolean
    img_url?: boolean
    remote_img_url?: boolean
  }, ExtArgs["result"]["shop_83"]>

  export type Shop_83SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    pname?: boolean
    cat_id?: boolean
    price?: boolean
    img_url?: boolean
    remote_img_url?: boolean
  }, ExtArgs["result"]["shop_83"]>

  export type Shop_83SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    pname?: boolean
    cat_id?: boolean
    price?: boolean
    img_url?: boolean
    remote_img_url?: boolean
  }, ExtArgs["result"]["shop_83"]>

  export type Shop_83SelectScalar = {
    pid?: boolean
    pname?: boolean
    cat_id?: boolean
    price?: boolean
    img_url?: boolean
    remote_img_url?: boolean
  }

  export type Shop_83Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pid" | "pname" | "cat_id" | "price" | "img_url" | "remote_img_url", ExtArgs["result"]["shop_83"]>

  export type $Shop_83Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop_83"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pid: number
      pname: string | null
      cat_id: number | null
      price: number | null
      img_url: string | null
      remote_img_url: string | null
    }, ExtArgs["result"]["shop_83"]>
    composites: {}
  }

  type Shop_83GetPayload<S extends boolean | null | undefined | Shop_83DefaultArgs> = $Result.GetResult<Prisma.$Shop_83Payload, S>

  type Shop_83CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Shop_83FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shop_83CountAggregateInputType | true
    }

  export interface Shop_83Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop_83'], meta: { name: 'Shop_83' } }
    /**
     * Find zero or one Shop_83 that matches the filter.
     * @param {Shop_83FindUniqueArgs} args - Arguments to find a Shop_83
     * @example
     * // Get one Shop_83
     * const shop_83 = await prisma.shop_83.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Shop_83FindUniqueArgs>(args: SelectSubset<T, Shop_83FindUniqueArgs<ExtArgs>>): Prisma__Shop_83Client<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop_83 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Shop_83FindUniqueOrThrowArgs} args - Arguments to find a Shop_83
     * @example
     * // Get one Shop_83
     * const shop_83 = await prisma.shop_83.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Shop_83FindUniqueOrThrowArgs>(args: SelectSubset<T, Shop_83FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Shop_83Client<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop_83 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_83FindFirstArgs} args - Arguments to find a Shop_83
     * @example
     * // Get one Shop_83
     * const shop_83 = await prisma.shop_83.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Shop_83FindFirstArgs>(args?: SelectSubset<T, Shop_83FindFirstArgs<ExtArgs>>): Prisma__Shop_83Client<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop_83 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_83FindFirstOrThrowArgs} args - Arguments to find a Shop_83
     * @example
     * // Get one Shop_83
     * const shop_83 = await prisma.shop_83.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Shop_83FindFirstOrThrowArgs>(args?: SelectSubset<T, Shop_83FindFirstOrThrowArgs<ExtArgs>>): Prisma__Shop_83Client<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shop_83s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_83FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shop_83s
     * const shop_83s = await prisma.shop_83.findMany()
     * 
     * // Get first 10 Shop_83s
     * const shop_83s = await prisma.shop_83.findMany({ take: 10 })
     * 
     * // Only select the `pid`
     * const shop_83WithPidOnly = await prisma.shop_83.findMany({ select: { pid: true } })
     * 
     */
    findMany<T extends Shop_83FindManyArgs>(args?: SelectSubset<T, Shop_83FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop_83.
     * @param {Shop_83CreateArgs} args - Arguments to create a Shop_83.
     * @example
     * // Create one Shop_83
     * const Shop_83 = await prisma.shop_83.create({
     *   data: {
     *     // ... data to create a Shop_83
     *   }
     * })
     * 
     */
    create<T extends Shop_83CreateArgs>(args: SelectSubset<T, Shop_83CreateArgs<ExtArgs>>): Prisma__Shop_83Client<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shop_83s.
     * @param {Shop_83CreateManyArgs} args - Arguments to create many Shop_83s.
     * @example
     * // Create many Shop_83s
     * const shop_83 = await prisma.shop_83.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Shop_83CreateManyArgs>(args?: SelectSubset<T, Shop_83CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shop_83s and returns the data saved in the database.
     * @param {Shop_83CreateManyAndReturnArgs} args - Arguments to create many Shop_83s.
     * @example
     * // Create many Shop_83s
     * const shop_83 = await prisma.shop_83.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shop_83s and only return the `pid`
     * const shop_83WithPidOnly = await prisma.shop_83.createManyAndReturn({
     *   select: { pid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Shop_83CreateManyAndReturnArgs>(args?: SelectSubset<T, Shop_83CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop_83.
     * @param {Shop_83DeleteArgs} args - Arguments to delete one Shop_83.
     * @example
     * // Delete one Shop_83
     * const Shop_83 = await prisma.shop_83.delete({
     *   where: {
     *     // ... filter to delete one Shop_83
     *   }
     * })
     * 
     */
    delete<T extends Shop_83DeleteArgs>(args: SelectSubset<T, Shop_83DeleteArgs<ExtArgs>>): Prisma__Shop_83Client<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop_83.
     * @param {Shop_83UpdateArgs} args - Arguments to update one Shop_83.
     * @example
     * // Update one Shop_83
     * const shop_83 = await prisma.shop_83.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Shop_83UpdateArgs>(args: SelectSubset<T, Shop_83UpdateArgs<ExtArgs>>): Prisma__Shop_83Client<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shop_83s.
     * @param {Shop_83DeleteManyArgs} args - Arguments to filter Shop_83s to delete.
     * @example
     * // Delete a few Shop_83s
     * const { count } = await prisma.shop_83.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Shop_83DeleteManyArgs>(args?: SelectSubset<T, Shop_83DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shop_83s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_83UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shop_83s
     * const shop_83 = await prisma.shop_83.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Shop_83UpdateManyArgs>(args: SelectSubset<T, Shop_83UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shop_83s and returns the data updated in the database.
     * @param {Shop_83UpdateManyAndReturnArgs} args - Arguments to update many Shop_83s.
     * @example
     * // Update many Shop_83s
     * const shop_83 = await prisma.shop_83.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shop_83s and only return the `pid`
     * const shop_83WithPidOnly = await prisma.shop_83.updateManyAndReturn({
     *   select: { pid: true },
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
    updateManyAndReturn<T extends Shop_83UpdateManyAndReturnArgs>(args: SelectSubset<T, Shop_83UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop_83.
     * @param {Shop_83UpsertArgs} args - Arguments to update or create a Shop_83.
     * @example
     * // Update or create a Shop_83
     * const shop_83 = await prisma.shop_83.upsert({
     *   create: {
     *     // ... data to create a Shop_83
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop_83 we want to update
     *   }
     * })
     */
    upsert<T extends Shop_83UpsertArgs>(args: SelectSubset<T, Shop_83UpsertArgs<ExtArgs>>): Prisma__Shop_83Client<$Result.GetResult<Prisma.$Shop_83Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shop_83s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_83CountArgs} args - Arguments to filter Shop_83s to count.
     * @example
     * // Count the number of Shop_83s
     * const count = await prisma.shop_83.count({
     *   where: {
     *     // ... the filter for the Shop_83s we want to count
     *   }
     * })
    **/
    count<T extends Shop_83CountArgs>(
      args?: Subset<T, Shop_83CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shop_83CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop_83.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_83AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Shop_83AggregateArgs>(args: Subset<T, Shop_83AggregateArgs>): Prisma.PrismaPromise<GetShop_83AggregateType<T>>

    /**
     * Group by Shop_83.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_83GroupByArgs} args - Group by arguments.
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
      T extends Shop_83GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Shop_83GroupByArgs['orderBy'] }
        : { orderBy?: Shop_83GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Shop_83GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShop_83GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop_83 model
   */
  readonly fields: Shop_83FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop_83.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Shop_83Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Shop_83 model
   */
  interface Shop_83FieldRefs {
    readonly pid: FieldRef<"Shop_83", 'Int'>
    readonly pname: FieldRef<"Shop_83", 'String'>
    readonly cat_id: FieldRef<"Shop_83", 'Int'>
    readonly price: FieldRef<"Shop_83", 'Float'>
    readonly img_url: FieldRef<"Shop_83", 'String'>
    readonly remote_img_url: FieldRef<"Shop_83", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shop_83 findUnique
   */
  export type Shop_83FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * Filter, which Shop_83 to fetch.
     */
    where: Shop_83WhereUniqueInput
  }

  /**
   * Shop_83 findUniqueOrThrow
   */
  export type Shop_83FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * Filter, which Shop_83 to fetch.
     */
    where: Shop_83WhereUniqueInput
  }

  /**
   * Shop_83 findFirst
   */
  export type Shop_83FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * Filter, which Shop_83 to fetch.
     */
    where?: Shop_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shop_83s to fetch.
     */
    orderBy?: Shop_83OrderByWithRelationInput | Shop_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shop_83s.
     */
    cursor?: Shop_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shop_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shop_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shop_83s.
     */
    distinct?: Shop_83ScalarFieldEnum | Shop_83ScalarFieldEnum[]
  }

  /**
   * Shop_83 findFirstOrThrow
   */
  export type Shop_83FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * Filter, which Shop_83 to fetch.
     */
    where?: Shop_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shop_83s to fetch.
     */
    orderBy?: Shop_83OrderByWithRelationInput | Shop_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shop_83s.
     */
    cursor?: Shop_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shop_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shop_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shop_83s.
     */
    distinct?: Shop_83ScalarFieldEnum | Shop_83ScalarFieldEnum[]
  }

  /**
   * Shop_83 findMany
   */
  export type Shop_83FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * Filter, which Shop_83s to fetch.
     */
    where?: Shop_83WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shop_83s to fetch.
     */
    orderBy?: Shop_83OrderByWithRelationInput | Shop_83OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shop_83s.
     */
    cursor?: Shop_83WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shop_83s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shop_83s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shop_83s.
     */
    distinct?: Shop_83ScalarFieldEnum | Shop_83ScalarFieldEnum[]
  }

  /**
   * Shop_83 create
   */
  export type Shop_83CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * The data needed to create a Shop_83.
     */
    data?: XOR<Shop_83CreateInput, Shop_83UncheckedCreateInput>
  }

  /**
   * Shop_83 createMany
   */
  export type Shop_83CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shop_83s.
     */
    data: Shop_83CreateManyInput | Shop_83CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop_83 createManyAndReturn
   */
  export type Shop_83CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * The data used to create many Shop_83s.
     */
    data: Shop_83CreateManyInput | Shop_83CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop_83 update
   */
  export type Shop_83UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * The data needed to update a Shop_83.
     */
    data: XOR<Shop_83UpdateInput, Shop_83UncheckedUpdateInput>
    /**
     * Choose, which Shop_83 to update.
     */
    where: Shop_83WhereUniqueInput
  }

  /**
   * Shop_83 updateMany
   */
  export type Shop_83UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shop_83s.
     */
    data: XOR<Shop_83UpdateManyMutationInput, Shop_83UncheckedUpdateManyInput>
    /**
     * Filter which Shop_83s to update
     */
    where?: Shop_83WhereInput
    /**
     * Limit how many Shop_83s to update.
     */
    limit?: number
  }

  /**
   * Shop_83 updateManyAndReturn
   */
  export type Shop_83UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * The data used to update Shop_83s.
     */
    data: XOR<Shop_83UpdateManyMutationInput, Shop_83UncheckedUpdateManyInput>
    /**
     * Filter which Shop_83s to update
     */
    where?: Shop_83WhereInput
    /**
     * Limit how many Shop_83s to update.
     */
    limit?: number
  }

  /**
   * Shop_83 upsert
   */
  export type Shop_83UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * The filter to search for the Shop_83 to update in case it exists.
     */
    where: Shop_83WhereUniqueInput
    /**
     * In case the Shop_83 found by the `where` argument doesn't exist, create a new Shop_83 with this data.
     */
    create: XOR<Shop_83CreateInput, Shop_83UncheckedCreateInput>
    /**
     * In case the Shop_83 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Shop_83UpdateInput, Shop_83UncheckedUpdateInput>
  }

  /**
   * Shop_83 delete
   */
  export type Shop_83DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
    /**
     * Filter which Shop_83 to delete.
     */
    where: Shop_83WhereUniqueInput
  }

  /**
   * Shop_83 deleteMany
   */
  export type Shop_83DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop_83s to delete
     */
    where?: Shop_83WhereInput
    /**
     * Limit how many Shop_83s to delete.
     */
    limit?: number
  }

  /**
   * Shop_83 without action
   */
  export type Shop_83DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_83
     */
    select?: Shop_83Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_83
     */
    omit?: Shop_83Omit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_83ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type User_83ScalarFieldEnum = (typeof User_83ScalarFieldEnum)[keyof typeof User_83ScalarFieldEnum]


  export const GroceryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    completed: 'completed'
  };

  export type GroceryScalarFieldEnum = (typeof GroceryScalarFieldEnum)[keyof typeof GroceryScalarFieldEnum]


  export const Category_83ScalarFieldEnum: {
    cid: 'cid',
    cname: 'cname',
    size: 'size',
    image_url: 'image_url'
  };

  export type Category_83ScalarFieldEnum = (typeof Category_83ScalarFieldEnum)[keyof typeof Category_83ScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descrip: 'descrip',
    category: 'category',
    img: 'img'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const Shop_83ScalarFieldEnum: {
    pid: 'pid',
    pname: 'pname',
    cat_id: 'cat_id',
    price: 'price',
    img_url: 'img_url',
    remote_img_url: 'remote_img_url'
  };

  export type Shop_83ScalarFieldEnum = (typeof Shop_83ScalarFieldEnum)[keyof typeof Shop_83ScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type User_83WhereInput = {
    AND?: User_83WhereInput | User_83WhereInput[]
    OR?: User_83WhereInput[]
    NOT?: User_83WhereInput | User_83WhereInput[]
    id?: IntFilter<"User_83"> | number
    name?: StringNullableFilter<"User_83"> | string | null
    email?: StringFilter<"User_83"> | string
  }

  export type User_83OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
  }

  export type User_83WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: User_83WhereInput | User_83WhereInput[]
    OR?: User_83WhereInput[]
    NOT?: User_83WhereInput | User_83WhereInput[]
    name?: StringNullableFilter<"User_83"> | string | null
  }, "id" | "email">

  export type User_83OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: User_83CountOrderByAggregateInput
    _avg?: User_83AvgOrderByAggregateInput
    _max?: User_83MaxOrderByAggregateInput
    _min?: User_83MinOrderByAggregateInput
    _sum?: User_83SumOrderByAggregateInput
  }

  export type User_83ScalarWhereWithAggregatesInput = {
    AND?: User_83ScalarWhereWithAggregatesInput | User_83ScalarWhereWithAggregatesInput[]
    OR?: User_83ScalarWhereWithAggregatesInput[]
    NOT?: User_83ScalarWhereWithAggregatesInput | User_83ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User_83"> | number
    name?: StringNullableWithAggregatesFilter<"User_83"> | string | null
    email?: StringWithAggregatesFilter<"User_83"> | string
  }

  export type GroceryWhereInput = {
    AND?: GroceryWhereInput | GroceryWhereInput[]
    OR?: GroceryWhereInput[]
    NOT?: GroceryWhereInput | GroceryWhereInput[]
    id?: StringFilter<"Grocery"> | string
    name?: StringFilter<"Grocery"> | string
    completed?: BoolFilter<"Grocery"> | boolean
  }

  export type GroceryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
  }

  export type GroceryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroceryWhereInput | GroceryWhereInput[]
    OR?: GroceryWhereInput[]
    NOT?: GroceryWhereInput | GroceryWhereInput[]
    name?: StringFilter<"Grocery"> | string
    completed?: BoolFilter<"Grocery"> | boolean
  }, "id">

  export type GroceryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
    _count?: GroceryCountOrderByAggregateInput
    _max?: GroceryMaxOrderByAggregateInput
    _min?: GroceryMinOrderByAggregateInput
  }

  export type GroceryScalarWhereWithAggregatesInput = {
    AND?: GroceryScalarWhereWithAggregatesInput | GroceryScalarWhereWithAggregatesInput[]
    OR?: GroceryScalarWhereWithAggregatesInput[]
    NOT?: GroceryScalarWhereWithAggregatesInput | GroceryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grocery"> | string
    name?: StringWithAggregatesFilter<"Grocery"> | string
    completed?: BoolWithAggregatesFilter<"Grocery"> | boolean
  }

  export type Category_83WhereInput = {
    AND?: Category_83WhereInput | Category_83WhereInput[]
    OR?: Category_83WhereInput[]
    NOT?: Category_83WhereInput | Category_83WhereInput[]
    cid?: IntFilter<"Category_83"> | number
    cname?: StringFilter<"Category_83"> | string
    size?: StringNullableFilter<"Category_83"> | string | null
    image_url?: StringNullableFilter<"Category_83"> | string | null
  }

  export type Category_83OrderByWithRelationInput = {
    cid?: SortOrder
    cname?: SortOrder
    size?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
  }

  export type Category_83WhereUniqueInput = Prisma.AtLeast<{
    cid?: number
    AND?: Category_83WhereInput | Category_83WhereInput[]
    OR?: Category_83WhereInput[]
    NOT?: Category_83WhereInput | Category_83WhereInput[]
    cname?: StringFilter<"Category_83"> | string
    size?: StringNullableFilter<"Category_83"> | string | null
    image_url?: StringNullableFilter<"Category_83"> | string | null
  }, "cid">

  export type Category_83OrderByWithAggregationInput = {
    cid?: SortOrder
    cname?: SortOrder
    size?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: Category_83CountOrderByAggregateInput
    _avg?: Category_83AvgOrderByAggregateInput
    _max?: Category_83MaxOrderByAggregateInput
    _min?: Category_83MinOrderByAggregateInput
    _sum?: Category_83SumOrderByAggregateInput
  }

  export type Category_83ScalarWhereWithAggregatesInput = {
    AND?: Category_83ScalarWhereWithAggregatesInput | Category_83ScalarWhereWithAggregatesInput[]
    OR?: Category_83ScalarWhereWithAggregatesInput[]
    NOT?: Category_83ScalarWhereWithAggregatesInput | Category_83ScalarWhereWithAggregatesInput[]
    cid?: IntWithAggregatesFilter<"Category_83"> | number
    cname?: StringWithAggregatesFilter<"Category_83"> | string
    size?: StringNullableWithAggregatesFilter<"Category_83"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Category_83"> | string | null
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    descrip?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    img?: StringFilter<"Blog"> | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descrip?: SortOrder
    category?: SortOrder
    img?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    descrip?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    img?: StringFilter<"Blog"> | string
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descrip?: SortOrder
    category?: SortOrder
    img?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    descrip?: StringWithAggregatesFilter<"Blog"> | string
    category?: StringWithAggregatesFilter<"Blog"> | string
    img?: StringWithAggregatesFilter<"Blog"> | string
  }

  export type Shop_83WhereInput = {
    AND?: Shop_83WhereInput | Shop_83WhereInput[]
    OR?: Shop_83WhereInput[]
    NOT?: Shop_83WhereInput | Shop_83WhereInput[]
    pid?: IntFilter<"Shop_83"> | number
    pname?: StringNullableFilter<"Shop_83"> | string | null
    cat_id?: IntNullableFilter<"Shop_83"> | number | null
    price?: FloatNullableFilter<"Shop_83"> | number | null
    img_url?: StringNullableFilter<"Shop_83"> | string | null
    remote_img_url?: StringNullableFilter<"Shop_83"> | string | null
  }

  export type Shop_83OrderByWithRelationInput = {
    pid?: SortOrder
    pname?: SortOrderInput | SortOrder
    cat_id?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    remote_img_url?: SortOrderInput | SortOrder
  }

  export type Shop_83WhereUniqueInput = Prisma.AtLeast<{
    pid?: number
    AND?: Shop_83WhereInput | Shop_83WhereInput[]
    OR?: Shop_83WhereInput[]
    NOT?: Shop_83WhereInput | Shop_83WhereInput[]
    pname?: StringNullableFilter<"Shop_83"> | string | null
    cat_id?: IntNullableFilter<"Shop_83"> | number | null
    price?: FloatNullableFilter<"Shop_83"> | number | null
    img_url?: StringNullableFilter<"Shop_83"> | string | null
    remote_img_url?: StringNullableFilter<"Shop_83"> | string | null
  }, "pid">

  export type Shop_83OrderByWithAggregationInput = {
    pid?: SortOrder
    pname?: SortOrderInput | SortOrder
    cat_id?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    remote_img_url?: SortOrderInput | SortOrder
    _count?: Shop_83CountOrderByAggregateInput
    _avg?: Shop_83AvgOrderByAggregateInput
    _max?: Shop_83MaxOrderByAggregateInput
    _min?: Shop_83MinOrderByAggregateInput
    _sum?: Shop_83SumOrderByAggregateInput
  }

  export type Shop_83ScalarWhereWithAggregatesInput = {
    AND?: Shop_83ScalarWhereWithAggregatesInput | Shop_83ScalarWhereWithAggregatesInput[]
    OR?: Shop_83ScalarWhereWithAggregatesInput[]
    NOT?: Shop_83ScalarWhereWithAggregatesInput | Shop_83ScalarWhereWithAggregatesInput[]
    pid?: IntWithAggregatesFilter<"Shop_83"> | number
    pname?: StringNullableWithAggregatesFilter<"Shop_83"> | string | null
    cat_id?: IntNullableWithAggregatesFilter<"Shop_83"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Shop_83"> | number | null
    img_url?: StringNullableWithAggregatesFilter<"Shop_83"> | string | null
    remote_img_url?: StringNullableWithAggregatesFilter<"Shop_83"> | string | null
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type User_83CreateInput = {
    name?: string | null
    email: string
  }

  export type User_83UncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
  }

  export type User_83UpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type User_83UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type User_83CreateManyInput = {
    id?: number
    name?: string | null
    email: string
  }

  export type User_83UpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type User_83UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type GroceryCreateInput = {
    id?: string
    name: string
    completed?: boolean
  }

  export type GroceryUncheckedCreateInput = {
    id?: string
    name: string
    completed?: boolean
  }

  export type GroceryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroceryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroceryCreateManyInput = {
    id?: string
    name: string
    completed?: boolean
  }

  export type GroceryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroceryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Category_83CreateInput = {
    cname: string
    size?: string | null
    image_url?: string | null
  }

  export type Category_83UncheckedCreateInput = {
    cid?: number
    cname: string
    size?: string | null
    image_url?: string | null
  }

  export type Category_83UpdateInput = {
    cname?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Category_83UncheckedUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Category_83CreateManyInput = {
    cid?: number
    cname: string
    size?: string | null
    image_url?: string | null
  }

  export type Category_83UpdateManyMutationInput = {
    cname?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Category_83UncheckedUpdateManyInput = {
    cid?: IntFieldUpdateOperationsInput | number
    cname?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    descrip: string
    category: string
    img: string
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    descrip: string
    category: string
    img: string
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descrip?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descrip?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    descrip: string
    category: string
    img: string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descrip?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descrip?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type Shop_83CreateInput = {
    pname?: string | null
    cat_id?: number | null
    price?: number | null
    img_url?: string | null
    remote_img_url?: string | null
  }

  export type Shop_83UncheckedCreateInput = {
    pid?: number
    pname?: string | null
    cat_id?: number | null
    price?: number | null
    img_url?: string | null
    remote_img_url?: string | null
  }

  export type Shop_83UpdateInput = {
    pname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Shop_83UncheckedUpdateInput = {
    pid?: IntFieldUpdateOperationsInput | number
    pname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Shop_83CreateManyInput = {
    pid?: number
    pname?: string | null
    cat_id?: number | null
    price?: number | null
    img_url?: string | null
    remote_img_url?: string | null
  }

  export type Shop_83UpdateManyMutationInput = {
    pname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Shop_83UncheckedUpdateManyInput = {
    pid?: IntFieldUpdateOperationsInput | number
    pname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img_url?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type User_83CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type User_83AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type User_83MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type User_83MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type User_83SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GroceryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
  }

  export type GroceryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
  }

  export type GroceryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Category_83CountOrderByAggregateInput = {
    cid?: SortOrder
    cname?: SortOrder
    size?: SortOrder
    image_url?: SortOrder
  }

  export type Category_83AvgOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type Category_83MaxOrderByAggregateInput = {
    cid?: SortOrder
    cname?: SortOrder
    size?: SortOrder
    image_url?: SortOrder
  }

  export type Category_83MinOrderByAggregateInput = {
    cid?: SortOrder
    cname?: SortOrder
    size?: SortOrder
    image_url?: SortOrder
  }

  export type Category_83SumOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descrip?: SortOrder
    category?: SortOrder
    img?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descrip?: SortOrder
    category?: SortOrder
    img?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descrip?: SortOrder
    category?: SortOrder
    img?: SortOrder
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

  export type Shop_83CountOrderByAggregateInput = {
    pid?: SortOrder
    pname?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
    img_url?: SortOrder
    remote_img_url?: SortOrder
  }

  export type Shop_83AvgOrderByAggregateInput = {
    pid?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
  }

  export type Shop_83MaxOrderByAggregateInput = {
    pid?: SortOrder
    pname?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
    img_url?: SortOrder
    remote_img_url?: SortOrder
  }

  export type Shop_83MinOrderByAggregateInput = {
    pid?: SortOrder
    pname?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
    img_url?: SortOrder
    remote_img_url?: SortOrder
  }

  export type Shop_83SumOrderByAggregateInput = {
    pid?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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