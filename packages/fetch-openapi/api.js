export default createApi;
function createApi(options) {
  const basePath = '/v2';
  const endpoint = options.endpoint || 'https://petstore.swagger.io';
  const cors = !!options.cors;
  const mode = cors ? 'cors' : 'basic';
  const securityHandlers = options.securityHandlers || {};
  const handleSecurity = (security, headers, params, operationId) => {
    for (let i = 0, ilen = security.length; i < ilen; i++) {
      let scheme = security[i];
      let schemeParts = Object.keys(scheme);
      for (let j = 0, jlen = schemeParts.length; j < jlen; j++) {
        let schemePart = schemeParts[j];
        let fulfilsSecurityRequirements = securityHandlers[schemePart](
            headers, params, schemePart);
        if (fulfilsSecurityRequirements) {
          return;
        }

      }
    }
    throw new Error('No security scheme was fulfilled by the provided securityHandlers for operation ' + operationId);
  };
  const ensureRequiredSecurityHandlersExist = () => {
    let requiredSecurityHandlers = ['api_key','petstore_auth'];
    for (let i = 0, ilen = requiredSecurityHandlers.length; i < ilen; i++) {
      let requiredSecurityHandler = requiredSecurityHandlers[i];
      if (typeof securityHandlers[requiredSecurityHandler] !== 'function') {
        throw new Error('Expected to see a security handler for scheme "' +
            requiredSecurityHandler + '" in options.securityHandlers');
      }
    }
  };
  ensureRequiredSecurityHandlersExist();
  const buildQuery = (obj) => {
    return Object.keys(obj)
      .filter(key => typeof obj[key] !== 'undefined')
      .map((key) => {
        const value = obj[key];
        if (value === undefined) {
          return '';
        }
        if (value === null) {
          return key;
        }
        if (Array.isArray(value)) {
          if (value.length) {
            return key + '=' + value.map(encodeURIComponent).join('&' + key + '=');
          } else {
            return '';
          }
        } else {
          return key + '=' + encodeURIComponent(value);
        }
      }).join('&');
    };
  return {
    uploadFile(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/x-www-form-urlencoded',

      };
      handleSecurity([{"petstore_auth":["write:pets","read:pets"]}]
          , headers, params, 'uploadFile');
      return fetch(endpoint + basePath + '/pet/' + params['petId'] + '/uploadImage'
        , {
          method: 'POST',
          headers,
          mode,
          body: buildQuery({
            'additionalMetadata': params['additionalMetadata'],
            'file': params['file'],
          }),

        });
    },
    addPet(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/json',

      };
      handleSecurity([{"petstore_auth":["write:pets","read:pets"]}]
          , headers, params, 'addPet');
      return fetch(endpoint + basePath + '/pet'
        , {
          method: 'POST',
          headers,
          mode,
          body: JSON.stringify(params['body']),

        });
    },
    updatePet(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/json',

      };
      handleSecurity([{"petstore_auth":["write:pets","read:pets"]}]
          , headers, params, 'updatePet');
      return fetch(endpoint + basePath + '/pet'
        , {
          method: 'PUT',
          headers,
          mode,
          body: JSON.stringify(params['body']),

        });
    },
    findPetsByStatus(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      handleSecurity([{"petstore_auth":["write:pets","read:pets"]}]
          , headers, params, 'findPetsByStatus');
      return fetch(endpoint + basePath + '/pet/findByStatus' + '?' + buildQuery({
          'status': params['status'],
        })

        , {
          method: 'GET',
          headers,
          mode,
        });
    },
    findPetsByTags(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      handleSecurity([{"petstore_auth":["write:pets","read:pets"]}]
          , headers, params, 'findPetsByTags');
      return fetch(endpoint + basePath + '/pet/findByTags' + '?' + buildQuery({
          'tags': params['tags'],
        })

        , {
          method: 'GET',
          headers,
          mode,
        });
    },
    getPetById(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      handleSecurity([{"api_key":[]}]
          , headers, params, 'getPetById');
      return fetch(endpoint + basePath + '/pet/' + params['petId'] + ''
        , {
          method: 'GET',
          headers,
          mode,
        });
    },
    updatePetWithForm(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/x-www-form-urlencoded',

      };
      handleSecurity([{"petstore_auth":["write:pets","read:pets"]}]
          , headers, params, 'updatePetWithForm');
      return fetch(endpoint + basePath + '/pet/' + params['petId'] + ''
        , {
          method: 'POST',
          headers,
          mode,
          body: buildQuery({
            'name': params['name'],
            'status': params['status'],
          }),

        });
    },
    deletePet(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'api_key': params['api_key'],

      };
      handleSecurity([{"petstore_auth":["write:pets","read:pets"]}]
          , headers, params, 'deletePet');
      return fetch(endpoint + basePath + '/pet/' + params['petId'] + ''
        , {
          method: 'DELETE',
          headers,
          mode,
        });
    },
    getInventory(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      handleSecurity([{"api_key":[]}]
          , headers, params, 'getInventory');
      return fetch(endpoint + basePath + '/store/inventory'
        , {
          method: 'GET',
          headers,
          mode,
        });
    },
    placeOrder(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/json',

      };
      return fetch(endpoint + basePath + '/store/order'
        , {
          method: 'POST',
          headers,
          mode,
          body: JSON.stringify(params['body']),

        });
    },
    getOrderById(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      return fetch(endpoint + basePath + '/store/order/' + params['orderId'] + ''
        , {
          method: 'GET',
          headers,
          mode,
        });
    },
    deleteOrder(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      return fetch(endpoint + basePath + '/store/order/' + params['orderId'] + ''
        , {
          method: 'DELETE',
          headers,
          mode,
        });
    },
    createUsersWithListInput(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/json',

      };
      return fetch(endpoint + basePath + '/user/createWithList'
        , {
          method: 'POST',
          headers,
          mode,
          body: JSON.stringify(params['body']),

        });
    },
    getUserByName(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      return fetch(endpoint + basePath + '/user/' + params['username'] + ''
        , {
          method: 'GET',
          headers,
          mode,
        });
    },
    updateUser(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/json',

      };
      return fetch(endpoint + basePath + '/user/' + params['username'] + ''
        , {
          method: 'PUT',
          headers,
          mode,
          body: JSON.stringify(params['body']),

        });
    },
    deleteUser(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      return fetch(endpoint + basePath + '/user/' + params['username'] + ''
        , {
          method: 'DELETE',
          headers,
          mode,
        });
    },
    loginUser(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      return fetch(endpoint + basePath + '/user/login' + '?' + buildQuery({
          'username': params['username'],
          'password': params['password'],
        })

        , {
          method: 'GET',
          headers,
          mode,
        });
    },
    logoutUser(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {

      };
      return fetch(endpoint + basePath + '/user/logout'
        , {
          method: 'GET',
          headers,
          mode,
        });
    },
    createUsersWithArrayInput(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/json',

      };
      return fetch(endpoint + basePath + '/user/createWithArray'
        , {
          method: 'POST',
          headers,
          mode,
          body: JSON.stringify(params['body']),

        });
    },
    createUser(parameters) {
      const params = typeof parameters === 'undefined' ? {} : parameters;
      let headers = {
        'content-type': 'application/json',

      };
      return fetch(endpoint + basePath + '/user'
        , {
          method: 'POST',
          headers,
          mode,
          body: JSON.stringify(params['body']),

        });
    },

  };
}
