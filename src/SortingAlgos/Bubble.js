import React, { useEffect ,useState,useTransition} from 'react'

import styled from 'styled-components'

import {animate, motion} from 'framer-motion'


  function Bubble({index,  i,setindex,sort, Array,setArray,setanimatedPairs, animatedPairs }) {

    console.log(index, sort);

 useEffect(() => {



   if(index<animatedPairs.length&&sort===1){
  

     setTimeout(() => {

          Array[animatedPairs[index].i] =

          Array[animatedPairs[index].i] +

          

          Array[animatedPairs[index].j] -

          (Array[animatedPairs[index].j] = Array[animatedPairs[index].i]);

          if(index<animatedPairs.length)

setindex(index+1);

      },1000+index);
    }


    }, [sort,index,i]);


    return (
      <div>
        <h3>BubbleSort</h3>

        <Body>
          <MinCont className="cont">
            {
              sort === 0 ? (
              Array.map((data,idx)=>(


              <motion.div key={data*Math.random()*100} layout>{data}</motion.div>
              ))
            ) :
             (
              Array.map((item, idx) => (
                <motion.div key={item} >
                  {item}
                </motion.div>
              ))
            )}
          </MinCont>
        </Body>
      </div>
    );
  }

export default Bubble
let Body=styled.div`

min-height:100vh;


padding:20px;

display:flex;

justify-content:center;

align-items:center;

`
let MinCont=styled.div`
display:flex;
width:100vw;

justify-content: space-evenly;

div{

margin:4px;
background:red;
padding:5px;
font-size:20px;
border-radius:4px;
border:5px solid black;

}
`
