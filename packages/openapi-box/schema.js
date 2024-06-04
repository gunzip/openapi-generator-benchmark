/* eslint-disable */
// This document was generated automatically by openapi-box

/**
 * @typedef {import('@sinclair/typebox').TSchema} TSchema
 */

/**
 * @template {TSchema} T
 * @typedef {import('@sinclair/typebox').Static<T>} Static
 */

/**
 * @typedef {{
 *  [Path in keyof typeof schema]: {
 *    [Method in keyof typeof schema[Path]]: {
 *      [Prop in keyof typeof schema[Path][Method]]: typeof schema[Path][Method][Prop] extends TSchema ?
 *        Static<typeof schema[Path][Method][Prop]> :
 *        undefined
 *    }
 *  }
 * }} SchemaType
 */

/**
 * @typedef {{
 *  [ComponentType in keyof typeof _components]: {
 *    [ComponentName in keyof typeof _components[ComponentType]]: typeof _components[ComponentType][ComponentName] extends TSchema ?
 *      Static<typeof _components[ComponentType][ComponentName]> :
 *      undefined
 *  }
 * }} ComponentType
 */

/** @typedef {Json[]} JsonArray */
/** @typedef {{ [key: string | number]: Json }} JsonRecord */
/** @typedef {string} JsonString */
/** @typedef {number} JsonNumber */
/** @typedef {boolean} JsonBoolean */
/** @typedef {null} JsonNull */
/** @typedef {JsonArray | JsonRecord | JsonString | JsonNumber | JsonBoolean | JsonNull} Json */

import { Type as T } from '@sinclair/typebox'

/**
 * @param {JsonArray | JsonRecord} [options]
 * @returns {ReturnType<typeof T.Unsafe<Json>>}
 */
const Json = (options) => T.Unsafe(T.Any(options))

const cache = {}
cache['4ac902b95de7c4f2db49d2b82a766f4f'] = T.Integer({
  format: 'int64',
  'x-in': 'path'
})
cache['a805dfe93e027acc61998f854e302150'] = {
  petId: cache['4ac902b95de7c4f2db49d2b82a766f4f']
}
cache['65b09a92c7461ab7b905d23a9f6afc7d'] = {
  code: T.Optional(T.Integer({ format: 'int32' })),
  type: T.Optional(T.String()),
  message: T.Optional(T.String())
}
cache['dedddbdfcb6e6b35b5d8c8f723126a02'] = [
  T.Literal('available'),
  T.Literal('pending'),
  T.Literal('sold')
]
cache['ed798cf6730f0ecefb5eafb95a6c83b0'] = T.Union(
  cache['dedddbdfcb6e6b35b5d8c8f723126a02'],
  { default: 'available' }
)
cache['ad497ce5dcd044d25ed469630ddb68c9'] = T.Array(
  cache['ed798cf6730f0ecefb5eafb95a6c83b0'],
  { 'x-in': 'query' }
)
cache['7f1abff45d635e605f2deb1d0a3b87e6'] = {
  status: cache['ad497ce5dcd044d25ed469630ddb68c9']
}
cache['ac689a476fde030abd0445907b7a0c29'] = {
  id: T.Optional(T.Integer({ format: 'int64' })),
  name: T.Optional(T.String())
}
cache['dc7773ee8b07e8c58de221f2366108b1'] = T.String()
cache['04a2ab6dcbd5ca0b5847009b2134a2a0'] = T.Object(
  cache['ac689a476fde030abd0445907b7a0c29']
)
cache['a47a233cc89d428f72a95a81cfa67e5f'] = {
  id: T.Optional(T.Integer({ format: 'int64' })),
  category: T.Optional(T.Object(cache['ac689a476fde030abd0445907b7a0c29'])),
  name: T.String(),
  photoUrls: T.Array(cache['dc7773ee8b07e8c58de221f2366108b1']),
  tags: T.Optional(T.Array(cache['04a2ab6dcbd5ca0b5847009b2134a2a0'])),
  status: T.Optional(T.Union(cache['dedddbdfcb6e6b35b5d8c8f723126a02']))
}
cache['f8f0586992fc7cd2b68f423a3d9f04dc'] = T.Object(
  cache['a47a233cc89d428f72a95a81cfa67e5f']
)
cache['2809284b6e54d0d34017715ffe5636bd'] = T.String()
cache['2607e7596e43c203de90796d90450c71'] = T.Array(
  cache['2809284b6e54d0d34017715ffe5636bd'],
  { 'x-in': 'query' }
)
cache['0584086879feec62ca3b8202f88f403c'] = {
  tags: cache['2607e7596e43c203de90796d90450c71']
}
cache['6ec5ffe130ffdd903fbcae7669c38175'] = T.Integer({
  format: 'int64',
  'x-in': 'path'
})
cache['ff9f1eb9cf5b76a3f440647164844ae8'] = {
  petId: cache['6ec5ffe130ffdd903fbcae7669c38175']
}
cache['2e8ef31cb2a8be0772b74daaca5ae5a9'] = T.Integer({
  format: 'int64',
  'x-in': 'path'
})
cache['a4a2a4e419fcb4ea578feeebacf4f5e0'] = {
  petId: cache['2e8ef31cb2a8be0772b74daaca5ae5a9']
}
cache['aaf1aafe4d9e4d05b3822f9e0a4a6171'] = T.Optional(
  T.String({ 'x-in': 'header' })
)
cache['6e72e3c6c00d35668b98c4bc5d7dab74'] = {
  api_key: cache['aaf1aafe4d9e4d05b3822f9e0a4a6171']
}
cache['e35c9940387df33844bb62f0e6d50edd'] = T.Integer({
  format: 'int64',
  'x-in': 'path'
})
cache['df4830b24f69faf6e4051fd8cd9fe7a7'] = {
  petId: cache['e35c9940387df33844bb62f0e6d50edd']
}
cache['3080ebb680442a030c0d63030cea2dce'] = [
  T.Literal('placed'),
  T.Literal('approved'),
  T.Literal('delivered')
]
cache['6979c6af0cbd28cc4a43cae8f5b16fb5'] = {
  id: T.Optional(T.Integer({ format: 'int64' })),
  petId: T.Optional(T.Integer({ format: 'int64' })),
  quantity: T.Optional(T.Integer({ format: 'int32' })),
  shipDate: T.Optional(T.String({ format: 'date-time' })),
  status: T.Optional(T.Union(cache['3080ebb680442a030c0d63030cea2dce'])),
  complete: T.Optional(T.Boolean())
}
cache['b2ec0f27f53a81ed9dd5ef33642f282e'] = T.Integer({
  format: 'int64',
  'x-in': 'path'
})
cache['c16dd6b972bf0b78a92cc799a5fff563'] = {
  orderId: cache['b2ec0f27f53a81ed9dd5ef33642f282e']
}
cache['99a22d87c853170f5ad70e281e85eea7'] = T.Integer({
  format: 'int64',
  'x-in': 'path'
})
cache['32f4329a9ff1abfd10730141f973e49f'] = {
  orderId: cache['99a22d87c853170f5ad70e281e85eea7']
}
cache['48b6b54ce5559f2fc6d8e752071e4d46'] = T.String({ 'x-in': 'path' })
cache['e23fe558350bbbe83bc3c98e651840ac'] = {
  username: cache['48b6b54ce5559f2fc6d8e752071e4d46']
}
cache['fe34a4b9e3677adac7e03976da82f711'] = {
  id: T.Optional(T.Integer({ format: 'int64' })),
  username: T.Optional(T.String()),
  firstName: T.Optional(T.String()),
  lastName: T.Optional(T.String()),
  email: T.Optional(T.String()),
  password: T.Optional(T.String()),
  phone: T.Optional(T.String()),
  userStatus: T.Optional(T.Integer({ format: 'int32' }))
}
cache['ac6081c2a02e42e256d39824d3aaa2ad'] = T.String({ 'x-in': 'path' })
cache['1aeceb992e9e2c70c68ba384e592a0a1'] = {
  username: cache['ac6081c2a02e42e256d39824d3aaa2ad']
}
cache['6f69af2c19ef3a0e7b89ed265bbb2478'] = T.String({ 'x-in': 'path' })
cache['c7630cc51a592dbc7a70bf14bb7fae61'] = {
  username: cache['6f69af2c19ef3a0e7b89ed265bbb2478']
}
cache['bb3aaaaa7e3fe81424a709b7e1e4864b'] = T.String({ 'x-in': 'query' })
cache['71a880006e190c4ac3015ac8cad412be'] = T.String({ 'x-in': 'query' })
cache['07ef362939c760e1ff23bbd2f50a6945'] = {
  username: cache['bb3aaaaa7e3fe81424a709b7e1e4864b'],
  password: cache['71a880006e190c4ac3015ac8cad412be']
}

const schema = {
  '/pet/{petId}/uploadImage': {
    POST: {
      args: T.Object({
        params: T.Object(cache['a805dfe93e027acc61998f854e302150'])
      }),
      data: T.Object(cache['65b09a92c7461ab7b905d23a9f6afc7d'], {
        'x-status-code': '200'
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/pet': {
    POST: {
      args: T.Void(),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([T.Any({ 'x-status-code': '405' })])
    },
    PUT: {
      args: T.Void(),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([
        T.Any({ 'x-status-code': '400' }),
        T.Any({ 'x-status-code': '404' }),
        T.Any({ 'x-status-code': '405' })
      ])
    }
  },
  '/pet/findByStatus': {
    GET: {
      args: T.Object({
        query: T.Object(cache['7f1abff45d635e605f2deb1d0a3b87e6'])
      }),
      data: T.Array(cache['f8f0586992fc7cd2b68f423a3d9f04dc'], {
        'x-status-code': '200'
      }),
      error: T.Union([T.Any({ 'x-status-code': '400' })])
    }
  },
  '/pet/findByTags': {
    GET: {
      args: T.Object({
        query: T.Object(cache['0584086879feec62ca3b8202f88f403c'])
      }),
      data: T.Array(cache['f8f0586992fc7cd2b68f423a3d9f04dc'], {
        'x-status-code': '200'
      }),
      error: T.Union([T.Any({ 'x-status-code': '400' })])
    }
  },
  '/pet/{petId}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['ff9f1eb9cf5b76a3f440647164844ae8'])
      }),
      data: T.Object(cache['a47a233cc89d428f72a95a81cfa67e5f'], {
        'x-status-code': '200'
      }),
      error: T.Union([
        T.Any({ 'x-status-code': '400' }),
        T.Any({ 'x-status-code': '404' })
      ])
    },
    POST: {
      args: T.Object({
        params: T.Object(cache['a4a2a4e419fcb4ea578feeebacf4f5e0'])
      }),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([T.Any({ 'x-status-code': '405' })])
    },
    DELETE: {
      args: T.Object({
        headers: T.Optional(
          T.Object(cache['6e72e3c6c00d35668b98c4bc5d7dab74'])
        ),
        params: T.Object(cache['df4830b24f69faf6e4051fd8cd9fe7a7'])
      }),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([
        T.Any({ 'x-status-code': '400' }),
        T.Any({ 'x-status-code': '404' })
      ])
    }
  },
  '/store/inventory': {
    GET: {
      args: T.Void(),
      data: Json({
        'x-status-code': '200',
        additionalProperties: { type: 'integer', format: 'int32' }
      }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/store/order': {
    POST: {
      args: T.Void(),
      data: T.Object(cache['6979c6af0cbd28cc4a43cae8f5b16fb5'], {
        'x-status-code': '200'
      }),
      error: T.Union([T.Any({ 'x-status-code': '400' })])
    }
  },
  '/store/order/{orderId}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['c16dd6b972bf0b78a92cc799a5fff563'])
      }),
      data: T.Object(cache['6979c6af0cbd28cc4a43cae8f5b16fb5'], {
        'x-status-code': '200'
      }),
      error: T.Union([
        T.Any({ 'x-status-code': '400' }),
        T.Any({ 'x-status-code': '404' })
      ])
    },
    DELETE: {
      args: T.Object({
        params: T.Object(cache['32f4329a9ff1abfd10730141f973e49f'])
      }),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([
        T.Any({ 'x-status-code': '400' }),
        T.Any({ 'x-status-code': '404' })
      ])
    }
  },
  '/user/createWithList': {
    POST: {
      args: T.Void(),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/user/{username}': {
    GET: {
      args: T.Object({
        params: T.Object(cache['e23fe558350bbbe83bc3c98e651840ac'])
      }),
      data: T.Object(cache['fe34a4b9e3677adac7e03976da82f711'], {
        'x-status-code': '200'
      }),
      error: T.Union([
        T.Any({ 'x-status-code': '400' }),
        T.Any({ 'x-status-code': '404' })
      ])
    },
    PUT: {
      args: T.Object({
        params: T.Object(cache['1aeceb992e9e2c70c68ba384e592a0a1'])
      }),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([
        T.Any({ 'x-status-code': '400' }),
        T.Any({ 'x-status-code': '404' })
      ])
    },
    DELETE: {
      args: T.Object({
        params: T.Object(cache['c7630cc51a592dbc7a70bf14bb7fae61'])
      }),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([
        T.Any({ 'x-status-code': '400' }),
        T.Any({ 'x-status-code': '404' })
      ])
    }
  },
  '/user/login': {
    GET: {
      args: T.Object({
        query: T.Object(cache['07ef362939c760e1ff23bbd2f50a6945'])
      }),
      data: T.String({ 'x-status-code': '200' }),
      error: T.Union([T.Any({ 'x-status-code': '400' })])
    }
  },
  '/user/logout': {
    GET: {
      args: T.Void(),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/user/createWithArray': {
    POST: {
      args: T.Void(),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  },
  '/user': {
    POST: {
      args: T.Void(),
      data: T.Any({ 'x-status-code': 'default' }),
      error: T.Union([T.Any({ 'x-status-code': 'default' })])
    }
  }
}

const _components = {}

export { schema, _components as components }
