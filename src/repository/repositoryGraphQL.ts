import { api } from '../services/api'

class Repository {

    private axiosClient;
  
    constructor () {
       this.axiosClient = api; // this.axiosClient tem que receber o api que é exportado no api.js que inicializa o axios
    }
  
    async findAll() {
       return this.axiosClient.get('/products');
    }
  }
  
  export default new Repository();