import React from 'react'
import styled from 'styled-components'

function Heading({setdata,seti,i,setsort,sort}) {

  
  return (
<Head>

<input type="text" />

<button onClick={(e)=>{

let data=document.getElementsByTagName('input')[0];
setdata(Number(data.value))
data.value=""
seti(i+1);

}}>
Insert</button>
<button onClick={()=>{
setsort(1)

}}>
  Sort
</button>

</Head>

  )
}

export default Heading
let Head = styled.div`
  height: 60px;
  width: 100vw;
  background: green;
  display: flex;
  position:absolute;
  top:0px;
  padding: 10px;
  justify-content: space-evenly;
  align-items: center;

  input {
    border: none;
    outline-width: 0px;
    text-align: center;
    font-size: 20px;
    padding: 10px;
  }
  button {
    font-size: 20px;
    padding: 10px;
  }
`;