import axios from "axios";


const api = axios.create({
    baseURL: 'https://9qz2iwilyc.execute-api.sa-east-1.amazonaws.com/dev',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api    


