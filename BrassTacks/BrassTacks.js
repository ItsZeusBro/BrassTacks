export class BrassTacks{
    constructor(levels, limit){
        this.tree={}
        this.limit=limit
        this.binaryStrings=[]
        this.decimalStrings=[]
        this.levels=levels
        this.init()
    }
    init(){
        this.BinaryStrings('1', this.levels)
        this.BinaryStringTree(this.tree)
        this.decimalStrings = this.decimalStrings.sort(function(a, b) {
            return a - b;
        })
    }
    BinaryStringTree(binaryStringTree){
        for(var i = 0; i<this.binaryStrings.length; i++){
            var tree=binaryStringTree
            var string = this.binaryStrings[i]
            for(var j=0; j<string.length; j++){
                var char = string[j]
                if(!tree[char]){
                    tree[char]={}
                }
                tree=tree[char]
            }
        }
    }

    BinaryStringWalk(binaryStrings){
        var treeNode = this.tree
        for(var i = 0; i<binaryStrings.length; i++){
            if(treeNode[binaryStrings[i]]){
                treeNode=treeNode[binaryStrings[i]]
            }else{
                return false
            }
        }
        return true
    }

    BinaryStrings(binaryString, levels){
        if(levels==0){
            return
        }else{
            if(this.isBinaryBaseString(binaryString.slice()+'0')){
                this.binaryStrings.push(binaryString.slice()+'0')
                this.decimalStrings.push(parseInt(binaryString.slice()+'0', 2))
                this.BinaryStrings(binaryString.slice()+'0',  levels-1)
            }
            if(this.isBinaryBaseString(binaryString.slice()+'1')){
                this.binaryStrings.push(binaryString.slice()+'1')
                this.decimalStrings.push(parseInt(binaryString.slice()+'1', 2))
                this.BinaryStrings(binaryString.slice()+'1',  levels-1)
            }
        }
    }

    isBinaryBaseString(binaryString){
        if(!this.isRecursive(binaryString)){
            if(!this.isOverLimit(binaryString)){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    isOverLimit(binaryString){
        //look in reverse order until char changes and keep isOverLimit counter
        var char=binaryString[binaryString.length-1]
        var c=0;
        for(var i = binaryString.length-1; i>=0; i--){
            if(char!=binaryString[i]){
                break
            }
            if(char==binaryString[i]){
                c++;
            }
        }
        if(c>this.limit){
            return true
        }else{
            return false
        }
    }

    isRecursive(string){
        var subStr1=string[0]
        var subStr2=""
        if(string[0]==string[1]){
            return true
        }
        for(var i = 1; i<string.length; i++){
            subStr1+=string[i]
            if(subStr1[i]!=subStr1[i-1]){
                //this means the context changed, but subStr1 is not done
                for(var j = i+1; j<string.length; j++){
                    subStr1+=string[j]
                    if(subStr1[j]!=subStr1[j-1]){
                        subStr2+=subStr1[subStr1.length-1]
                        subStr1 = subStr1.slice(0, -1)
                        //now we fill substr2
                        for(var k=j+1; k<string.length; k++){
                            subStr2+=string[k]
                            if(subStr1===subStr2){
                                return true
                            }
                        }
                        return false
                    }
                }
                return false
            }
        }
        return false
    }
    PermWoRep(str, length, permutations){
        if(str.length==1){
            return str
        }
        else if(str.length==length){
            for(var i = 0; i<this.factorialize(length); i++){
                str = this.PermWoRep(str.slice(0, str.length-1)).concat(str.slice(str.length-1))
                permutations.push(str)
            }
            return permutations
        }else{
            return this.rotate(this.PermWoRep(str.slice(0, str.length-1)).concat(str.slice(str.length-1)))
        }

    }

    factorialize(n){
        var factorial = 1
        for(var i = 0; n>i; n--){
            factorial*=n
        }
        return factorial
    }
    rotate(str){
        str = str.slice()
        if(str.length==1){
            return str
        }
        var char = str.shift();
        str.push(char)
        return str
    }
    PallindromeSet(alphabet){
        for(var i = 0; i<alphabet.length; i++){

        }
    }
    CompoundPallindromeSet(alphabet){

    }
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
    primPattAbstract(array){
        var abs=[]
        array = array.sort(function(a, b) {
            return a - b;
        })
        var j=0;
        for(var i=1; i<array.length; i++){
            abs.push(array[i]-array[j])
            j++
        }
        return abs
    }
}

var bt = new BrassTacks(0, 0)
var permutations=[]
//console.log(bt.rotate(['a', 'b', 'c', 'd']))
bt.PermWoRep(['a', 'b', 'c', 'd'], 4,  permutations)
console.log(permutations)

//console.log(bt.factorialize(5))