function dupli(arrayN){
    const ns = new Set();
    for(let i=0;i<arrayN.length;i++){
        ns.add(arrayN[i]);
    }
    
    return arrayN.length!=ns.size;
}

console.log('hi first');
console.log('hi second');


const arrayN = [1,2,3,2];
console.log(dupli(arrayN));
