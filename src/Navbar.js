import React from 'react'
import {Badge, Card,IconButton} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'

import {comm }from './lib/Commerce'
import { useEffect } from 'react'

const Navbar = () => {

    let  func=async()=>{
let {data}=await comm.products.list()
console.log(data)
    }
    useEffect(()=>{

        func()
    },[])

console.log(comm)

  return (
 <Card style={{ marginBottom:'2rem' ,display:'flex', alignItems:'center',justifyContent:'space-between'}}>
    Hello
    <IconButton area-label="show cart items" color='inherit'>
<Badge badgeContent={27} color='secondary'>

    <ShoppingCart/>
</Badge>
    </IconButton>
 </Card>
  )
}

export default Navbar