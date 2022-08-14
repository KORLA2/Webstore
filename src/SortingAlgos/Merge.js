import React ,{useEffect}from 'react'
import {MergePairs} from './Sort'


const Merge = ({setanimatePairs,animatedPairs,Array,index,setArray,setindex}) => {

useEffect(()=>{

setanimatePairs(MergePairs(Array,0,Array.length-1))

},[])


  useEffect(()=>{

    console.log(animatedPairs)
    
    if(animatedPairs){
setTimeout(()=>{
  console.log(Array)
let arr = Array.slice();
let x = arr[animatedPairs[index][0]];
arr[animatedPairs[index][0]] = arr[animatedPairs[index][1]];
arr[animatedPairs[index][1]] = x;
console.log(arr)
setArray(arr);
if(index<animatedPairs.length-1)
setindex(index + 1);

},1000)}
},[index,animatedPairs])

  return (
    <div>
      
    </div>
  )
}

export default Merge
