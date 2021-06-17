const name = 
{
    "names": ["Carlos", "Henry", "Daniel", "Ellis", "Jordan", "Ross", "Jenna", "Antoine"]
}

class GiftExchange{
    static async display(){
        return name
    }
    
    static async pairs(names){
        let used = {};
        let pair = [];
        for(var i =0;i<names.length;i++){
            let curr = [];
            if(used.hasOwnProperty(`${i}`)){
                continue;
            }
            used[`${i}`] = 'here';
            curr.push(names[i]);
            while(true){
                let rand = Math.floor(Math.random() * names.length)
                if(rand != i & (!used.hasOwnProperty(`${i}`))){
                    curr.push(rand);
                    used[`${rand}`] = 'here';
                    break;
                }
            pair.push(curr);
            }         
        }
        return pair;
    }

    static async traditional(names){
        const giving = "is giving a gift to";
        let ret = []
        const last = names[0]
        let i = 0;
        let first = names[i];
        let second = names[i+1];
        let str =''
        while(true){
            if((i +1) == names.length-1){
                str = first + giving + last;
                ret.push(str);
                break;
            }
            str = first + giving + second;
            ret.push(str);
            i++;
            first = second;
            second = names[i+1];
        }
        return ret;
    }

}

module.exports = GiftExchange;