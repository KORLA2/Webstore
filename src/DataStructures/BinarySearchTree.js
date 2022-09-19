import  {React,useState,useEffect} from 'react'
import './Tree.css'
import {Button,TextField} from '@material-ui/core'
import styled from 'styled-components'
import  {drawBinaryTree,setTheme} from 'binary-tree-visualizer'
import BinarySearchTreeNode from './DrawBst'
import { useRef } from 'react'



let  BinarySearchTree=()=>{

setTheme({
radius:25,
strokeColor:'black',

  colorArray:[{
borderColor:'black',
bgColor:'green'
  }]
})

let [Element,setElement]=useState('');
let [DelElement, setDelElement] = useState("");
let [root,setroot]=useState('')

useEffect(()=>{
  if(root)
drawBinaryTree(root, can.current);


},[root])

let can=useRef(null)
  return (
    <Container>
      <Head>
        <TextField
          id="outlined-search"
          label="Insertion"
          type="search"
          value={Element}
          onChange={(e) => {
            setElement(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            if (root === "") setroot(new BinarySearchTreeNode(Element));
            else root.insert(Element);

            setElement("");

            if (root) drawBinaryTree(root, can.current);
          }}
        >
          Insert
        </Button>

        <TextField
          id="outlined-search"
          label="Deletion"
          type="search"
          value={DelElement}
          onChange={(e) => {
            setDelElement(e.target.value);
          }}
        />
        <Button onClick={() => {


          
        }}>Delete</Button>
      </Head>
      <canvas
        ref={can}
        style={{
          height: "100vh",
          width: "100vw",

          background: "red",
        }}
      ></canvas>
    </Container>
  );

}
export default BinarySearchTree
let Container=styled.div`

height:100vh;
width:100vw;
position:relative;

`
let Head=styled.div`

display:flex;
justify-content:space-around;
align-items:center;

`
