import React from 'react'


export const Bubblepairs = (Array) => {
    let animated=[];

Array=Array.slice();
  for(let i=0;i<Array.length;++i){
for(let j=i+1;j<Array.length;++j)
if(Array[i]>Array[j]){
    
    animated.push({i,j});
Array[i] = Array[j]+Array[i]-(Array[j]=Array[i]);
}
  }
  console.log(animated)
  return animated;
}

