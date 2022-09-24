import React ,{useState}from 'react'
import { InputLabel,TextField,Select,MenuItem,Button,Grid,Typography } from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form'
import usestyles from './styles'
import Control from './Controller'
import {Link} from 'react-router-dom'
import {commerce} from './Commerce'
import { useEffect } from 'react'
const Address = ({id}) => {
  let classes=usestyles()
  let [Countries,setCountries]=useState([])
  let [Country,setCountry]=useState('')
  let [States,setStates]=useState([])
  let [State,setState]=useState('')
  let methods=useForm();
let [Options, setOptions] = useState([]);
let [Option, setOption] = useState('');

console.log(Country);


 useEffect(()=>{

  let fetchcountries=async (id)=>{

  let {countries}=await commerce.services.localeListShippingCountries(id)

  setCountries(Object.entries(countries).map(([code, name]) => ({
  id: code,
  name: name,
})));

  setCountry(Object.keys(Countries)[0]);
}

fetchcountries(id.id);
},[])

useEffect(()=>{

let fetchsubdiv=async (country)=>{

  let { subdivisions } = await commerce.services.localeListSubdivisions(country);
setStates(

  Object.entries(subdivisions).map(([code, name]) => ({
    id: code,
    name: name,
  
  }))
)

setState(Object.keys(States)[0]);
}
if(Country)
fetchsubdiv(Country);

},[Country])
useEffect(()=>{

let fetchoptions=async (id,country,region=null)=>{
  console.log(country,region,id)
let options=await commerce.checkout.getShippingOptions(id,{country,region});

setOptions(options.map((So)=>(
{

  id:So.id,
  name:`${So.description}-(${So.price.formatted_with_symbol})`

}
)
));
setOption(options[0].id);



}

  if(State)fetchoptions(id,Country,State);
},[State])

    return (
      <div className={classes.column}>
        <Typography variant="h5" className={classes.typo}>
          Fill Shipping Details
        </Typography>

        <FormProvider {...methods} >
          <form
            onSubmit={methods.handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Grid container spacing={3}>
              <Control name="Firstname" label="Firstname" />
              <Control name="Lastname" label="Lastname" />
              <Control name="Email" label="Email" />
              <Control name="Address" label="Address" />
              <Control name="PotalCode" label="Pincode" />
              <Grid item xs={12} sm={6}>
                <InputLabel>Select Country</InputLabel>
                <Select
                  value={Country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {Countries.map((e) => (
                    <MenuItem value={e.id} key={e.id}>
                      {e.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Select State</InputLabel>
                <Select
                  value={State}
                  onChange={(e) => setState(e.target.value)}
                >
                  {States.map((e) => (
                    <MenuItem value={e.id} key={e.id}>
                      {e.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select
                  value={Option}
                  onChange={(e) => setState(e.target.value)}
                >
                  {Options.map((e) => (
                    <MenuItem value={e.id} key={e.id}>
                      {e.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <br></br>
            <div className={classes.btngrp}>
              <Button component={Link} to='/MyCart' variant="contained" size="small" color="secondary">
              Back to cart
              </Button>
              <Button type='submit' variant="contained" size="small" color="primary">
                Proceed to pay
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    );
}

export default Address
export let Payment=()=>{
return (

    <div>

        Payment
    </div>
)

}
export let Confirm =()=>{



}