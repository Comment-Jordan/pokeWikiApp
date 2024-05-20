
export function get(url){
    fetch(url)    
    .then(data=>console.log(data))
    .then(res=> {return res})
}