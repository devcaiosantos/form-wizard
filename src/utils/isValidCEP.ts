export default  function isValidCEP (cep:string | undefined){
    if(!cep) return false;
    const regex = /^([\d]{8}|[\d]{5}-[\d]{3})$/;
    return typeof cep === 'string' && regex.test(cep);
}