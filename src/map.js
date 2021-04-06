
const map=(arr,func) =>{
    if(func=="cube")
    {
        for(var i=0;i<arr.length;i++){
            arr[i]=arr[i]*arr[i]*arr[i];
        }
        return arr;
    }
    else if(func=="identity")
    {
        return arr;
    }
    

}
module.exports=map;