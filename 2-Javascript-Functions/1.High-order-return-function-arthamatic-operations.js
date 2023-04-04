function arithmeticOpeartions(operation){
    if(operation === '+'){
        return function(a,b){
            return a+b;
        }
    }else if(operation === '-'){
        return function(a,b){
            return a-b;
        }
    }else if(operation === '*'){
        return function(a,b){
            return a*b;
        }
    }else if(operation === '/'){
        return function(a,b){
            return a/b;
        }
    }else if(operation === '%'){
        return function(a,b){
            return a%b;
        }
    }else return function(a,b){
        return 0;
    }
};

const addfunction = arithmeticOpeartions('+');
const multiplyfunction = arithmeticOpeartions('*');
const subractfunction = arithmeticOpeartions('-');
const divisionfunction = arithmeticOpeartions('/');
const modulefunction = arithmeticOpeartions('%');

const result1 = addfunctionarithmeticOpeartions(85,960);//1045
const result2 = multiplyfunction(852,963);//820476
const result3 = subractfunction(852,963);//-111
const result4 = divisionfunction(852,963);//0.8847352024922118
const result5 = modulefunction(852,963);//852

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);


