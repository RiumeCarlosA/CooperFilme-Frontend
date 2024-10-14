import axios from './_axios';

const PREFIX = '/script';

export type Script = {
  id: number,
  script: string,
  title: string
}

export class ScriptEndpoint {
  async uploadScript(file: File, email: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);

    try {
      return await axios.post(`${PREFIX}/upload-script`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        window.location.href = '/register-client';
      } else {
        throw error;
      }
    }
  }

}
