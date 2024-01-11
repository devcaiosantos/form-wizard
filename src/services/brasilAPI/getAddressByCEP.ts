import axios from 'axios';

export default async function getAddressByCEP(cep: string) {
    return await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then((response) => {
        return {
            status: "success",
            data: response.data,
        };
    })
    .catch ((error) => {
        return {
            status: "error",
            message: error,
            data: [],
        };
    });
}