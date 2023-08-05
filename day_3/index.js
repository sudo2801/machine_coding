function deepFreeze (obj){
    for(let key in obj){
      const val = obj[key];
      if(typeof val === "object"){
        deepFreeze(val);
      }
    }
    
    return Object.freeze(obj);
  }
  
  const obj = {
    a: 10,
    b: {
      c: 20
    }
  };
  
  deepFreeze(obj);
  
  obj.a = 20;
  
  console.log(obj);