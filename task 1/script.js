var array=[1,2,3,4,5,6,7,8,9];
    (function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          } 
     }
   })(array);

   const a = function(array){
      for(var i = 0 ; i< array.length ; i++){
            if(array[i]%2!=0){
               console.log(array[i]);
            } 
       }
      };
   a(array); 
  
   const arr = (array)=>{
      for(var i = 0 ; i< array.length ; i++){
            if(array[i]%2!=0){
               console.log(array[i]);
            } 
       }
      };
   arr(array); 
 