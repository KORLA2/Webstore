import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
function DisplayStack({push,pushs,pop,val}) {
 let [Emp, setEmp] = useState(0);
 let [top, settop] = useState('');

useEffect(()=>{

    if(push&&pushs){
  setEmp(0)
        settop(pushs);
  let element =document.createElement('div');

  element.innerText=pushs ;

element.id=val;

  document.querySelector('.container').appendChild(element);

    }

 else if(pop){
  
     let sel= document.querySelector(".container")
    
   if(sel.lastChild!=null)
    {
    sel.removeChild(sel.lastChild)
settop(sel.lastChild!=null?sel.lastChild.innerText:'');

}
    else setEmp(1);

    }

},[val]) 


    return (
      <Out>
        <h4>Stack</h4>

        {Emp === 0 ? "" : <h5>Stack Empty</h5>}
<h5>Top :{top}</h5>
        <Body>
          <Container className="container"></Container>
        </Body>
      </Out>
    );
}

export default DisplayStack
let Body=styled.div`
/* display:flex; */
/* height:100vh;
width:100vw; */
margin-right:30px;

`
let Out=styled.div`
h4,h5{
    text-align:center;
    font-size:25px;

}
`
let Container=styled.div`
height:50px;
padding:10px;
margin:30px;
border:2px solid green;
border-right:none;
display:flex;
div{
    height:50px;
padding:4px;
    background:pink;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-right:5px;
}
`