function path(loop, url_links = '') {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let url_link = url_links
    if(loop != 0){
        url_link += alphabet[Math.floor(Math.random() * alphabet.length)];
        return path(loop-1, url_link) 
    }else{
        return url_link
    }
}

module.exports = path