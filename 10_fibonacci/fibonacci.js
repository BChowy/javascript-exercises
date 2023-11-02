const fibonacci = function(fib) {
    if(fib < 0 ) return 'OOPS';
    if(fib==0) return 0;
    if(fib==1 || fib==2) return 1;

    let firstFib=1;
    let secFib=1;
    let result;
    for(let i=3; i<=fib ;i++){
        result=firstFib+secFib;
        firstFib=secFib;
        secFib=result;
    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
