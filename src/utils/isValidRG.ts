export default function isValidRG(rg: string | undefined) {
    if (!rg) return false;
  
    rg = rg.replace(/[^\d]+/g, '');
  
    if (rg.length !== 9) return false;
  
    for (let i = 0; i < 9; i++) {
      if (isNaN(parseInt(rg.charAt(i)))) {
        return false;
      }
    }
  
    return true;
  }
  