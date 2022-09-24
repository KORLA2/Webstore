import React,{useState,useEffect} from 'react'
import {Paper,Card,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button, CardContent} from '@material-ui/core'
import useStyles from './styles.js'
import { commerce } from './Commerce.js'
import Address ,{Payment,Confirm}from './Form'
const Payments = ({Cart}) => {
let steps=['Shipping Address','Complete Payment']
let [active,setactive]=useState(0);
let [id,setid]=useState(null);
useEffect(()=>{
console.log(Cart)
let fetchtoken=async ()=>{

  let id=await commerce.checkout.generateToken(Cart.id,{type:'cart'})
  
  console.log(id)

setid(id);

}
fetchtoken();
},[Cart])

let Form=()=>active===0?id&&<Address  id={id}/>:<Payment/>


   let classes=useStyles();

return (
    
   
      <Card className={classes.column}>
      <CardContent>

        <Typography variant='h5' className={classes.typo}>Payment Section </Typography>

        <Stepper  active={active} >
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>

{ active===2?<Confirm/>:<Form/> }
      </CardContent>
      </Card>
    
  );
}

export default Payments
