import axios from "axios";


function Api() {
    const url = `https://9qz2iwilyc.execute-api.sa-east-1.amazonaws.com/dev/products`;
    return (
        axios
            .get(url)
            .then ( response => response.data )
            .catch(error => console.log(error))
    )
}

export default Api    