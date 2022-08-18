import { api } from "../services/api";

class AxiosRepository {
  axiosClient;

  constructor() {
    this.axiosClient = api;
  }

  async findAll() {
   return this.axiosClient.get("/products");
  }
}

export default new AxiosRepository();
