import React from 'react'
import styled ,{keyframes}from 'styled-components'
import {Link } from  'react-router-dom';
import {pulse} from 'react-animations'
function Algorithms() {
  return (
    <Head>
    <Pulse>
          <Link to="sorting">Sorting</Link>
        </Pulse>
        <Pulse>
          <Link to="Queue">Graph</Link>
        </Pulse>

        
      </Head>
  )
}

export default Algorithms
let Head = styled.div`
  height: 60px;
  width: 100vw;
  background: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
  
    font-size: 20px;
    background:pink;
    border-radius:4px;
    padding:4px;
  }`
  let Pulse = styled.div`
    animation: 2s ${keyframes`${pulse}`} infinite;
  `;