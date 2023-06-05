//chunk
chunk(['a','b','c','d'],2);
//=>[['a','b'],['c','d']]
chunk(['a','b','c','d'],3);
//=>[['a','b','c'],['d']]
chunk(['a','b','c','d'],2);
//=>[['a','b'],['c','d']]
chunk(['a','b','c','d'],3);
//=>[['a','b','c'],['d']]
function chunk(arr,num){
  var result = [];
  for(var i = 0,len= arr.length;i<len;i = i+num){
    result.push(arr.slice(i,i+num));
  }
    return result
}

//