import React,{useState} from 'react'
import styled from 'styled-components'
import DisplayQueue from './operations/DisplayQueue'
function Queue() {
let [value,setvalue]=useState('');

  return (
    <div>
      <Head>
        <Flex>
          <input className="input" type="text" />
          <button
            onClick={() => {
              let data = document.getElementsByClassName("input")[0].value;

              setvalue(data);
               document.getElementsByClassName('input')[0].value=''
            }}
          >
            Enqueue
          </button>
        </Flex>
        <Flex>
          <button>Dequeue</button>
        </Flex>
      </Head>

      <DisplayQueue value={value} />
    </div>
  );
}

export default Queue
let Head=styled.div`
display:flex;
height:60px;
width:100vw;
background:green;
justify-content :space-around ;
align-items:center;

`
let Flex = styled.div`
  button {
    margin:5px;
    font-size: 20px;
    padding: 10px;
  }
  input {
    font-size: 20px;

    height: 30px;
    text-align: center;
  }
`;