import React from 'react'
import styled ,{keyframes}from 'styled-components'
import {pulse} from 'react-animations'
import {Link} from 'react-router-dom'
function Sorting() {
  return (
    <Head>
      <Pulse>
        <Link to="Bubble">Bubble Sort</Link>
      </Pulse>
      <Pulse>
        <Link to="Selection">Selection Sort</Link>
      </Pulse>
      <Pulse>
        <Link to="Insertion">Insertion Sort</Link>
      </Pulse>
      <Pulse>
        <Link to="Quick">Quick Sort</Link>
      </Pulse>
      <Pulse>
        <Link to="Merge">Merge Sort</Link>
      </Pulse>
      <Pulse>
        <Link to="Heap">Heap Sort</Link>
      </Pulse>
    </Head>
  );
}

export default Sorting
let Head = styled.div`
  height: 60px;
  width: 100vw;
  background: green;
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
    /* margin: 60px; */
    font-size: 20px;

  }
`;
let Pulse = styled.div`
  animation: 2s ${keyframes`${pulse}`} infinite;
`;