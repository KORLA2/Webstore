import React,{useState} from 'react'

import  Queue  from "./DataStructures/Queue";

import  Stack from "./DataStructures/Stack";
import BinarySearchTree from "./DataStructures/BinarySearchTree";
import Main from './Main'
import Head from './Head'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
let [arr,setarr]=useState([]);
console.log(arr)
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="Stack"
            element={
              <>
                <Head arr={arr} ds={"stack"} setarr={setarr} />{" "}
                <Stack arr={arr} />
              </>
            }
          />
          <Route
            path="Queue"
            element={
              <>
                <Head arr={arr} ds={"queue"} setarr={setarr} />

                <Queue arr={arr} />
              </>
            }
          />
          <Route
            path="BinarySearchTree"
            element={
              <>
                <BinarySearchTree arr={arr} />
              </>
            }
          />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

