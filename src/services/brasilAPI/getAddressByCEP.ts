export default async function getAddressByCEP(cep:string) {
    try{
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
        const data = await response.json();
        return {
            status: "success",
            data: data
        };
    }catch(error){
        return {
            status: "error",
            data: []
        };
    }
}