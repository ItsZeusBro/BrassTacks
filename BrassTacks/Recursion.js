//There are only so many recursive patterns to choose from
//There are only so many different primitive object patterns to choose from (to construct or destructure)
//Most problems involve an iterator on the length of some structure
//Some involve a permutative approach
//as opposed to coming with custom solutions in an arbitrary way, we can limit the number of ways in which
//you can generate the solution, and use a general set of tools to do it the same way every time

class Recursion{

    constructor(transformation){

    }

    transform(transformation){
        return transform
    }

    from(object){
        //returns a destructured object as an object tree
        //so no matter what the object is, we should know how to destructure it using brass tacks analysis
    }

    to(){

    }

    iterSliceRotate(set){
        var array=[]
        for(var i=0; i<set.length; i++){
            array.push(this.iterSlice(set))
            set = this.rotate(set)
        }
        return array
    }
    iterSlice(set, i=0, j=1, array=[]){
        if(j==set.length+1){
            return
        }else{
            //base case
            var slice = set.slice(i, j)
            if(Array.isArray(slice)){
                slice = slice.join("")
            }
            if(slice.length && !(array.includes(slice))){
                array.push(slice)
            }
            slice = this.rotate(slice)
            this.iterSlice(set, i, j+1, array)
        }
        return array
    }

    //performs iterSlice on 
    iterSlices(set, i=0, j=1, array=[]){
        if(j==set.length+1){
            return
        }else if (i==0){
            var slice = set.slice(i, j)
            if(Array.isArray(slice)){
                slice = slice.join("")
            }
            if(slice.length && !(array.includes(slice))){
                array.push(slice)
            }
            while(i<set.length){
                this.iterSlices(set, i, j+1, array)
                i++;
            }
        }else{
            var slice = set.slice(i, j)
            if(Array.isArray(slice)){
                slice=slice.join("")
            }
            if(slice.length && !(array.includes(slice))){
                array.push(slice)
            }
            this.iterSlices(set, i, j+1, array)
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
            if(Array.isArray(str)){
                var char = str.shift();
                str.push(char)

            }else{
                var char = str[0]
                str = str.slice(1)+char
            }
        }
        return str
    }
}