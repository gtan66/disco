import axios from 'axios';

export default class API {
  constructor(host) {
    this.host = host;
    this.client = axios;
  }

  get(path, params) {
    return this.baseRequest('get', path, params);
  }

  post(path, params) {
    return this.baseRequest('post', path, params);
  }

  put(path, params) {
    return this.baseRequest('put', path, params);
  }

  baseRequest(method, path, params={}) {
    let url = this.host + path,
        options = { url: url, method: method };

    if (method === 'get') {
      options.params = params;
    } else {
      if (Object.keys(params).length > 0) {
        options.data = params;
      }
    }

    return this.client(options);
  }
}

