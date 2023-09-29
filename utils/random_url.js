export function RandomURL () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const c_length = Math.floor(Math.random() * (8 - 6 + 1)) + 6;
    let result = '';
  
    for (let i = 0; i < c_length; i++) {
        const irandom = Math.floor(Math.random() * characters.length);
        result += characters.charAt(irandom);
    }
  
    return result;
}
  