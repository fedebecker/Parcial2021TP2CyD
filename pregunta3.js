// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    if(nums.length<3){
        return undefined;
    }else{
        function comparar(a,b){return b-a;}
        nums.sort(comparar);
        var count = 3;
        var resultado;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i]!=nums[i+1]){
                count--;
                if(count===0){
                    resultado = nums[i];
                    i=nums.length;
                }
            }
        }
        return resultado;
    }   


}

// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);