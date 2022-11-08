import { api } from "../services/api";

class AxiosRepository {

  axiosClient;

  constructor() {
    this.axiosClient = api;
  }

  async findAll() {
   return this.axiosClient.get("/products")
  }

  async signIn ({email, password}) {
    return this.axiosClient.post('/auth',{ email, password })
  }
  
  async signUp ({name, email, password}) {
    return this.axiosClient.post('/auth/signUp', {name, email, password})
  }

}

export default new AxiosRepository();
