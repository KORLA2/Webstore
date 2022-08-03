import React ,{useState,useEffect} from 'react'
import styled from 'styled-components'
import DisplayStack from './operations/DisplayStack';
function Stack() {
let [invalue,setinvalue]=useState();
let [ispush, setispush] = useState(0);
let [ispop,setispop] = useState();
let [val,setval]=useState(0);
  return (
    <div>
      <Head>
        <Flex>
          <Insert className="input" onClick={() => {}}></Insert>

          <button
            onClick={() => {

              let data = document.getElementsByClassName("input")[0].value;

              document.getElementsByClassName("input")[0].value='';
              setinvalue(data);
setispop(0)
              setispush(1);
setval(val+1);
            
            }}
          >
            Push
          </button>
        </Flex>
        <button onClick={()=>{

setispop(1);
setispush(0)
  
setval(val-1);
        }}>Pop</button>
      </Head>

      <DisplayStack push={ispush} pushs={invalue} pop={ispop} val={val}/>
    </div>
  );
}

export default Stack
let Head = styled.div`
  height: 60px;
  width: 100%;
  background: green;
  display: flex;
  /* padding-right: 30px; */
  justify-content: space-around;
  align-items: center;

  `
  let Flex = styled.div`
    display: flex;
margin:10px;
    justify-content: space-between;
    align-items: center;
  `;
  let Insert=styled.input`
  height:20px;
  border:none;
  font-size:20px;
  text-align:center;
  `