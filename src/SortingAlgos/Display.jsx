import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
 let Display = ({Array,setcolor,isset}) => {
  
  return (
    <Container>
      {Array.map((e, idx) => (
      
   
          <motion.div key={e} layout  style={ isset&&(idx===setcolor[1]||idx===setcolor[0])&&{background:'pink'}} >
            {e}
          </motion.div>
  



      ))}
    </Container>
  );
}
export default Display;
let Container = styled.div`
  position: absolute;
  bottom: 10em;
  display: flex;
  justify-content: space-between;
  border: 2px solid red;
  display: flex;
  width: 100vw;

  justify-content: space-evenly;

  div {
    margin: 4px;
    background: red;
    padding: 5px;
    font-size: 20px;
    border-radius: 4px;
    border: 5px solid black;
  }
`;