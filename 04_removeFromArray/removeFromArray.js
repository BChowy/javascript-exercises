const removeFromArray = function(list, ...restArgs) {

let result = [];
for (let i=0 ; i<= list.length-1 ; i++){
   if(!restArgs.includes(list[i])){
        result.push(list[i]);
    }
}
return result;
};

// Do not edit below this line
module.exports = removeFromArray;
