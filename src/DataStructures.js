import React from 'react'
import styled , {keyframes}  from 'styled-components'
import Stack from "./ds/stack";
import{ shake} from 'react-animations'
import Queue from './ds/Queue'
import Garph from './ds/Graph'
import Tree from './ds/Tree';
import List from "./ds/List";
import {Link} from 'react-router-dom'
function DataStructures() {
  return (
    <div>
      <Head>
        <Pulse>
          <Link to="stack">Stack</Link>
        </Pulse>
        <Pulse>
          <Link to="Queue">Queue</Link>
        </Pulse>
        <Pulse>
          <Link to="Tree">Tree</Link>
        </Pulse>
        <Pulse>
          <Link to="Graph">Graph</Link>
        </Pulse>
        <Pulse>
          <Link to="List">LinkedList</Link>
        </Pulse>
      </Head>
    </div>
  );
}

export default DataStructures;
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
  }
`;
let Pulse = styled.div`
  animation: 2s ${keyframes`${shake}`} infinite;
`;