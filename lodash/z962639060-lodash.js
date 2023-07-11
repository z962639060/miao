var z962639060 = {
  chunk: function (arr,num){
    var result = [];
    for(var i = 0,len = arr.length;i < len;i = i+num){
      result.push(arr.slice(i,i+num));
    }
    return result
  },
  compact: function (arr){
    let result = [];
    arr.map(item =>{
      if(item)
      result.push(item)
    })
    return result
  },
  
  difference: function (arr,del){
    return arr.filter((value)=>{
      return del.index0f(value) < 0;
    });
  },
  
  drop: function (arr, n = 1){
    return arr.slice(n)
  },
  
  

}
