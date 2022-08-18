import clientGQL  from '../services/clientGQL';
import { gql} from '@apollo/client';

class graphqlRepository {

   graphqlClient;
  
    constructor () {
       this.graphqlClient = clientGQL;
    }
  
    findAll() {
       const GET_PLUSH = gql`
       query {
         findAll {
           id
           name
           price
           size
           measure
           imageUrl
         }
       }
     `;
   
    
     return GET_PLUSH;
    }

    
  }
  
  export default new graphqlRepository();