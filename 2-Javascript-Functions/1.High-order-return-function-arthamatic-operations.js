function arthamaticopeartions(operations){
    if(operations === '+'){
        return function(a,b){
            return a+b;
        }
    }else if(operations === '-'){
        return function(a,b){
            return a-b;
        }
    }else if(operations === '*'){
        return function(a,b){
            return a*b;
        }
    }else if(operations === '/'){
        return function(a,b){
            return a/b;
        }
    }else if(operations === '%'){
        return function(a,b){
            return a%b;
        }
    }else return function(a,b){
        return 0;
    }
};

const addfunction = arthamaticopeartions('+');
const multiplyfunction = arthamaticopeartions('*');
const subractfunction = arthamaticopeartions('-');
const divisionfunction = arthamaticopeartions('/');
const modulefunction = arthamaticopeartions('%');

const result1 = addfunction(85,960);//1045
const result2 = multiplyfunction(852,963);//820476
const result3 = subractfunction(852,963);//-111
const result4 = divisionfunction(852,963);//0.8847352024922118
const result5 = modulefunction(852,963);//852

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);


