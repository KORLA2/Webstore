import React,{useEffect} from 'react'
import styled ,{keyframes}from 'styled-components'
import {headShake} from 'react-animations'
function DisplayQueue({value,idx}) {

  return (


<Body>

 
<Container>
<h5>  Queue</h5>
<Que className='container'>

</Que>
</Container>
  
</Body>
  )
}

export default DisplayQueue
let Body=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;

`
let Container = styled.div`
h5{
    animation:2s ${keyframes`${headShake}`} infinite;
}
`;
let Que = styled.div`
  height: 50px;
  padding: 10px;
  border: 2px solid green;
  border-right:none;
  border-left:none;
`;