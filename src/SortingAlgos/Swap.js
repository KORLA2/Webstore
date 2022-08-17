import React ,{useEffect}from 'react'

const Merge = ({setanimatePairs,color,animatedPairs,Array,index,setArray,setindex,setcolor,isset}) => {

  useEffect(()=>{

    console.log(animatedPairs)
    
    if(index<animatedPairs.length){


setTimeout(()=>{

setcolor(animatedPairs[index]);
isset(1);
   let arr = Array.slice();
let x = arr[animatedPairs[index][0]];
arr[animatedPairs[index][0]] = arr[animatedPairs[index][1]];
arr[animatedPairs[index][1]] = x;

setArray(arr);
if(index<animatedPairs.length)
setindex(index + 1);

},1000)}

setTimeout(()=>{

  isset(0);
},1000)



},[index,animatedPairs])




  return (
    <div>
      
      
    </div>
  )
}

export default Merge
