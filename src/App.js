import React,{useEffect,useState} from 'react'
import Products from './Products'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import {styled ,Grid,Paper,Box,Card,CardActionArea,CardMedia,CardActions,Typography,Button,CardContent} from '@material-ui/core'
import Navbar from './Navbar'
import usestyles from './styles'
import { commerce } from "./Commerce";
import Cart from './Cart'
import Payments from './Payments'
const App = () => {

let [data, setdata] = useState([]);

let [carts,setcart]=useState({});

let products = async () => {
  let { data } = await commerce.products.list();

  setdata(data);
};
let handlecart= async ()=>{

    setcart(await commerce.cart.retrieve());
}
let addcart=async(prid,qty)=>{

let item=await commerce.cart.add(prid,qty);
setcart(item)
}
let updatecart=async (prid,qty)=>{

let cart=await commerce.cart.update(prid,qty)
setcart(cart);
console.log(cart)

}
let removecart=async (prid)=>{

let res=await commerce.cart.remove(prid);
setcart(res)
}
useEffect(() => {

    products();

  handlecart();

}, []);


console.log(carts,data)

  return (
    <div>
      <Router>
        <Navbar total={carts.total_items} />
        <Routes>
          <Route
            path="/MyCart"
            element={
              <Cart
                cart={carts}
                removecart={removecart}
                updatecart={updatecart}
              />
            }
          />
          <Route path="/payment" 

element={

  <Payments Cart={carts}/>
}
 />

          <Route
            path="/"
            element={
              <>
                <Grid container justify="center" spacing={4}>
                  {data.map((e, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                      <Products product={e} addcart={addcart} />
                    </Grid>
                  ))}
                </Grid>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App



