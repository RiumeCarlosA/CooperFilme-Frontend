import axios, { removeBearerToken, setBearerToken } from './endpoints/_axios';
import { AuthEndpoint } from './endpoints/auth';
import { ScriptEndpoint } from './endpoints/script';
import { ClientEndpoint } from './endpoints/client';

const api = {
  auth: new AuthEndpoint(),
  script: new ScriptEndpoint(),
  client: new ClientEndpoint(),
  setBearerToken,
  removeBearerToken,
};

export type Api = typeof api;

export default api;
export { axios };
