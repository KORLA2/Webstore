import React ,{useState} from "react";
import { BrowserRouter as Router,Routes,Route ,Link} from "react-router-dom";
import styled ,{keyframes}from "styled-components";
import Stack from "./ds/stack";
import {bounce, rubberBand,tada} from 'react-animations'
import Queue from './ds/Queue'
import Graph from './ds/Graph'
import Heading from './SortingAlgos/Heading.js'
import Tree from './ds/Tree';
import List from "./ds/List";
import Sorting from './Sorting'
import Bubble from './SortingAlgos/Bubble'
import Selection from "./SortingAlgos/Selection";
import   Algorithms  from "./Algorithms.js";
import {Bubblepairs} from './SortingAlgos/Sort'
import DataStructures from "./DataStructures.js";
import { useEffect } from "react";
function App() {
let [data,setdata] =useState('');
let [animatedPairs,setanimatedPairs]=useState([])
let [i, seti] = useState(0);
let [sort,setsort]=useState(0);
let [Array,setArray]=useState([])
let [index,setindex]=useState(0);
useEffect(()=>{
if(data)
{
  setArray([...Array,data])
  setdata('')}

},[i])


useEffect(()=>{

  if(sort){
    setanimatedPairs(Bubblepairs(Array))
  }

},[sort])


return (

    <div>
    
      <Router> 
        <Routes>
          <Route path="/datastructures" element={<DataStructures />}/>
          <Route path="/datastructures/stack" element={<Stack />} />
          <Route path="/datastructures/Queue" element={<Queue />} />
          <Route path="/datastructures/Tree" element={<Tree />} />
          <Route path="/datastructures/Graph" element={<Graph />} />
          <Route path="/datastructures/List" element={<List />} />
            <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/algorithms/sorting" element={<Sorting />}></Route>

          <Route
            path="/algorithms/sorting/Bubble"
            element={
              <div>
      
                <Heading setdata={setdata} seti={seti} i={i} setsort={setsort} sort={sort} /> 
                 
                   <Bubble index={index} i={i} setindex={setindex} sort={sort} Array={Array} setArray={setArray} setanimatedPairs={setanimatedPairs} animatedPairs={animatedPairs} />

              </div>

            }
          />
          <Route
            path="/algorithms/sorting/Selection"
            element={
              <div>
            
                <Heading /> <Selection />
              </div>
            }
          />

          <Route
            path="*"
            element={
              <Head>
                <Link to="datastructures">
                  <Bounce>DataStructures</Bounce>
                </Link>
                <Link to="algorithms">
                  <Tada>Algorithms</Tada>
                </Link>
              </Head>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
let Head = styled.div`
  height: 60px;
  width: 100vw;
  background: green;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
    margin: 60px;
    font-size: 26px;
  }
`;
let Bounce=styled.div`
animation:2s ${keyframes`${rubberBand}`} infinite;
`
let Tada=styled.div`
animation:2s ${keyframes`${tada}`} infinite;

`