import React,{useState}from 'react'
import styled from 'styled-components'
import {TextField,Button} from '@material-ui/core'

const Head = ({setarr,arr,ds}) => {
  let  [Element,setElement]=useState('');
  return (
    <AppBar>
      <TextField
        id="outlined-search"
        label="Enter Element"
        type="search"
        value={Element}
        onChange={(e) => {
          setElement(e.target.value);
        }}
      />
      <Button
        style={{ border: "2px solid black" }}
        onClick={() => {



        setarr([...arr,Element])
        
          setElement("");

      
        

        }}
      >
        Push
      </Button>
      <Button
        style={{ border: "2px solid black" }}
        onClick={() => {
ds==='stack'?setarr(arr.slice(0,-1)):setarr(arr.slice(1))

        }}
      >
 Pop
      </Button>
    </AppBar>
  );
}

export default Head
let AppBar=styled.div`
padding:2px;
display:flex;
justify-content:space-around;
align-items:center;

`
