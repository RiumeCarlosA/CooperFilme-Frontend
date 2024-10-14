import axios from './_axios';

const PREFIX = '/clients'

export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  deletado: boolean;
  ativado: boolean;
}

export type RegisterClientRequest = {
  name: string;
  email: string;
  phone: string;
};

export class ClientEndpoint {
  async registerClient(client: RegisterClientRequest) {
    return await axios.post(`${PREFIX}/register`, client);
  }
}
