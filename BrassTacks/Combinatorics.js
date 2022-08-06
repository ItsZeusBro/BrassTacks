class Combinatorics{
    constructor(){

    }

    combinations(){
        
        
    }

    iterSlice(set, i=0, j=1, array=[]){
        if(j==set.length){
            return
        }else if (i==0){
            var slice = set.slice(i, j)
            if(Array.isArray(slice)){
                slice.join("")
            }
            if(slice.length && !(array.includes(slice))){
                array.push(slice)
            }
            while(i<set.length){
                this.iterSlice(set, i, j+1, array)
                i++;
            }
        }else{
            var slice = set.slice(i, j)
            if(Array.isArray(slice)){
                slice.join("")
            }
            if(slice.length && !(array.includes(slice))){
                array.push(slice)
            }
            this.iterSlice(set, i, j+1, array)
        }
        return array
    }
    

    swap(a, i, j){
        if((i>a.length-1) || (j>a.length-1)){
            return a.slice()
        }
        var b = a.slice()
        const tmp = b[i]
        b[i] = b[j]
        b[j] = tmp
        return b
    }

    isOdd(num) { return num % 2;}

    factorialize(n){
        var factorial = 1
        for(var i = 0; n>i; n--){
            factorial*=n
        }
        return factorial
    }

    rotate(str, n=1){
        for(var i = 0; i<n; i++){
            str = str.slice()
            if(str.length==1){
                return str
            }
            var char = str.shift();
            str.push(char)
        }
        return str
    }

}

var combinatorics = new Combinatorics()

console.log(combinatorics.iterSlice('abcde'))