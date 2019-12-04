function profit(array){
    let a = 0;
    let b = 0;
    let i = 0;
    let h = 1;
  
    while(i<array.length){
      for (let j = h; j<array.length;j++){
        if(array[i]<array[j]){
          b = array[j]-array[i]
          if(b>a){
            a=b
          }
        }
      }
      i+=1;
      h+=1;
    }
    if(a!=0) {
    return a
    } else {
    return '<Tidak dapat membeli>'
    }
  }
  
  console.log(profit([5,6,15,3,10,22,15]))
  console.log(profit([10,15,8,7,14]))
  console.log(profit([100,90,80,75,65]))