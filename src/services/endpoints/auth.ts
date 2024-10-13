import axios from './_axios'

const PREFIX = '/auth'

export type User = {
    id: string;
    name: string;
    email: string;
    roles: {
        roleId: string;
        roleName: string;
    }[]
}

export type AuthLogin = {
    email: string;
    password: string;
}

export type LoginResponse = {
    data: {
        user: User;
        token: string;
    }
}

export class AuthEndpoint {
    async login(data: AuthLogin): Promise<LoginResponse> {
        return await axios.post(`${PREFIX}/login`, data)
    }

}